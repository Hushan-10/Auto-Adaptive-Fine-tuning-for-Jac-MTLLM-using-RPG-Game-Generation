import sys
from pathlib import Path
from typing import List

# ---------------- configuration ----------------
TARGETS = [
    1500, 1500, 1800, 1800, 2100, 2100,
    2700, 2700, 3300, 3300, 3750, 3750,
    4350, 4350, 4950, 4950, 5550, 5550,
]
assert len(TARGETS) == 18, "Must specify 18 targets."

# Chunk size for each sequence per round (two rounds)
CHUNKS = [t // 2 for t in TARGETS]  # e.g., 1500 -> 750, 1800 -> 900, ...

# ---------------- helpers ----------------
def read_by_sequences(in_path: Path) -> List[List[str]]:
    """
    Read the JSONL and bucket lines by 1-indexed modulo 18:
      bucket[0] -> seq 1 (1,19,37,...)
      ...
      bucket[17] -> seq 18 (18,36,54,...)
    """
    buckets: List[List[str]] = [[] for _ in range(18)]
    with in_path.open("r", encoding="utf-8") as f:
        for i, line in enumerate(f, start=1):
            idx = (i - 1) % 18  # 0..17
            buckets[idx].append(line.rstrip("\n"))
    return buckets

def pop_n(bucket: List[str], n: int) -> List[str]:
    """Pop up to n items from the front of a list (stable order)."""
    take = min(n, len(bucket))
    out = bucket[:take]
    del bucket[:take]
    return out

def main():
    in_file = Path(sys.argv[1]) if len(sys.argv) > 1 else Path("good_data.jsonl")
    out_file = Path(sys.argv[2]) if len(sys.argv) > 2 else Path("sliced_output.jsonl")

    if not in_file.exists():
        raise FileNotFoundError(f"Input not found: {in_file.resolve()}")

    buckets = read_by_sequences(in_file)
    totals_available = sum(len(b) for b in buckets)

    # Sanity: if you expect exactly 60,000 total lines, you can assert here (optional)
    # assert totals_available == 60000, f"Expected 60000 lines, found {totals_available}"

    # Prepare output
    out_file.parent.mkdir(parents=True, exist_ok=True)
    written = 0

    with out_file.open("w", encoding="utf-8") as fout:
        # Two rounds: write half of each sequence in round 1, the rest in round 2
        for round_idx in (1, 2):
            for seq_idx in range(18):  # 0..17 -> sequences 1..18
                need = CHUNKS[seq_idx] if round_idx == 1 else (TARGETS[seq_idx] - CHUNKS[seq_idx])
                chunk = pop_n(buckets[seq_idx], need)
                if len(chunk) < need:
                    # Warn to stderr if we cannot meet the request for this sequence
                    missing = need - len(chunk)
                    sys.stderr.write(
                        f"[warn] Sequence {seq_idx+1}: requested {need} in round {round_idx}, "
                        f"but only {len(chunk)} available (short by {missing}).\n"
                    )
                for rec in chunk:
                    fout.write(rec + "\n")
                written += len(chunk)

    # Final report (stderr)
    sys.stderr.write(
        f"[done] Wrote {written} lines to {out_file} (input had {totals_available}).\n"
    )
    leftovers = sum(len(b) for b in buckets)
    if leftovers:
        sys.stderr.write(f"[info] {leftovers} lines remain unused across sequences.\n")

if __name__ == "__main__":
    main()

