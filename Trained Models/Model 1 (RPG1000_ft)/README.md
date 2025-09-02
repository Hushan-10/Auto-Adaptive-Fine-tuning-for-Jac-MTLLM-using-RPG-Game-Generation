# RPG Level Generator — Fine‑Tuned Model (1000‑row dataset)

**Model type:** autoregressive text model fine‑tuned to emit compact JSON/ASCII tile maps for early‑game RPG levels.  
**Task:** procedural level generation (Level 1–3 focus).

---

## 🔗 Quick Links (replace with your Hugging Face URLs)

- **Model:** [Hugging Face model page](<https://huggingface.co/Hirudika2002/JARVIS-Models/tree/main/LoRA-Trained/Model-1(1000_Rows)>)

> Tip: keep these at the very top of the README so users can jump straight to the model, demo, and data.

---

## TL;DR

- Trained on **1,000 rows** to generate **RPG‑style maps**.  
- **Good** at **Level 1–2**; **occasionally** reaches **Level 3**.  
- **Stops early** fairly often; **rarely** reaches Level 4+.  
- Map structures are **playable but simple**.  
- Stability is **better** than tiny‑data runs, but still shows **early termination** and **repetition**.

---

## 🎯 Performance Summary

| Capability | What you can expect |
|---|---|
| Level coverage | Strong on L1–L2, sometimes L3, seldom deeper |
| Structure quality | Average; layouts are simple and functional |
| Diversity | Limited; some repetitive motifs |
| Stability | Improved vs. very small datasets; still ends early at times |
| Progression depth | Usually stops after Level 2 |

---

## 🔎 Observations

- Structures are **not substantially improved** vs. smaller training sets — overall design remains **average**.  
- Levels are **playable but minimal**, with **low puzzle/maze complexity**.  
- **Generation stability** improves over extremely small datasets, but **abrupt endings** still occur.

---

## ⚠️ Known Limitations

- **Average structure quality**, lacking creativity and detail.  
- **Fails to reach deeper levels** (4+).  
- Some outputs feel **repetitive** or **incomplete (early stop)**.

---

## 🚀 Recommended Next Steps

1. **Scale the dataset** to **2,000+ rows** to boost diversity and progression depth.  
2. **Sampling/decoding tweaks** to reduce early termination:
   - Increase `min_new_tokens` (or `min_length`) for longer trajectories.
   - Use `top_p` ≈ **0.9–0.95**, `temperature` ≈ **0.8–1.0**.
   - Add `repetition_penalty` ≈ **1.1–1.2** and/or `no_repeat_ngram_size` = **3–4**.
   - Define explicit **stop sequences** (e.g., `"\n\nEND"`) and an `eos_token` only at schema boundary.
3. **Longer training schedule** (more epochs / steps with early‑stop by validation perplexity).  
4. Regularization & techniques to **avoid collapse**: dropout, weight decay, label smoothing, or **LoRA + longer finetune**.  
5. **Curriculum/data augmentation**: mirrored/rotated maps, noise injection on enemy/obstacle counts, templated prompts for level depth.  
6. **Constraint‑aware generation**: validate coordinates on the fly; optionally use **guided decoding** to ensure grids are valid.

---

## 🧪 Quickstart

Below is a minimal Python snippet for generation. Replace placeholders with your HF IDs and adjust decoding knobs as suggested.

```python
from transformers import AutoTokenizer, AutoModelForCausalLM

MODEL_ID = "<PASTE_MODEL_ID>"  # e.g., username/rpg-level-generator-1000
tok = AutoTokenizer.from_pretrained(MODEL_ID, trust_remote_code=True)
model = AutoModelForCausalLM.from_pretrained(MODEL_ID, torch_dtype="auto", device_map="auto")

prompt = (
    "Generate an early-game RPG level as compact JSON.\n"
    "Target difficulty: 1–2. Width: 15, Height: 10. Include walls, small_obstacles, enemies, player_pos.\n"
    "Return only valid JSON with integer coordinates. End with \n\nEND."
)

inputs = tok(prompt, return_tensors="pt").to(model.device)
gen = model.generate(
    **inputs,
    max_new_tokens=320,
    min_new_tokens=128,                # helps avoid early termination
    do_sample=True,
    top_p=0.92,
    temperature=0.9,
    repetition_penalty=1.12,
    no_repeat_ngram_size=3,
    eos_token_id=tok.encode("\n\nEND")[-1],  # optional, if you defined END as EOS
)
print(tok.decode(gen[0], skip_special_tokens=True))
```

> **Tip:** For production, parse the JSON and run **coordinate bounds checks** before rendering the grid.

---

## 🧰 Data & Format

- **Dataset size:** 1,000 rows (training).  
- **Format:** JSON records representing levels and entities.  
- **Typical schema:**

```json
{
  "level": {
    "name": "1",
    "difficulty": 1,
    "time": 300,
    "width": 15,
    "height": 10
  },
  "walls": [
    {"start_pos": {"x": 0, "y": 0}, "end_pos": {"x": 0, "y": 9}}
  ],
  "small_obstacles": [{"x": 9, "y": 1}],
  "enemies": [{"x": 4, "y": 4}, {"x": 9, "y": 2}],
  "player_pos": {"x": 1, "y": 1}
}
```

> Keep **indices inside** `[0, width-1] × [0, height-1]`. Filtering invalid/duplicate coordinates at training time helps stability.

---

## 🏋️ Training Recipe (reference)

> Replace placeholders with your actual values; this is a *template* recipe.

- **Base model:** `<BASE_MODEL_NAME>` (e.g., a small causal LM).  
- **Finetune:** full or PEFT/LoRA.  
- **Batching:** effective batch size 64–128 with gradient accumulation.  
- **LR:** 1e-4 to 5e-5 (warmup 3–5%).  
- **Epochs/steps:** tune until validation perplexity plateaus.  
- **Tokenization:** JSON‑friendly; avoid truncation of closing braces.  
- **Special tokens:** consider `END` or `</level>` to mark completion.

**Example (Transformers/PEFT):**
```bash
accelerate launch finetune.py   --model_name_or_path <BASE_MODEL_NAME>   --train_file <HF_DATASET_TRAIN_SPLIT_OR_PATH>   --validation_file <HF_DATASET_VAL_SPLIT_OR_PATH>   --learning_rate 1e-4   --num_train_epochs 3   --per_device_train_batch_size 4   --gradient_accumulation_steps 16   --lr_scheduler_type cosine   --warmup_ratio 0.05   --logging_steps 50   --save_steps 500   --bf16 True   --use_lora True
```

---

## 🔍 Evaluation Ideas

- **Depth coverage:** fraction reaching L3+ under fixed decode settings.  
- **Completeness:** % of outputs that parse as valid JSON and pass grid validation.  
- **Diversity:** pairwise distance across entity placements / motif frequency.  
- **Playability heuristics:** connectedness, spawn‑safety, enemy spacing.  
- **Human review:** small rubric for structure, fun, and novelty.

---

## 🧩 Example Output (format illustration)

```json
{
  "level": {"name": "2", "difficulty": 2, "time": 300, "width": 15, "height": 10},
  "walls": [
    {"start_pos": {"x": 0, "y": 0}, "end_pos": {"x": 0, "y": 9}},
    {"start_pos": {"x": 14, "y": 0}, "end_pos": {"x": 14, "y": 9}},
    {"start_pos": {"x": 2, "y": 4}, "end_pos": {"x": 12, "y": 4}}
  ],
  "small_obstacles": [{"x": 6, "y": 3}, {"x": 8, "y": 6}],
  "enemies": [{"x": 4, "y": 5}, {"x": 10, "y": 7}],
  "player_pos": {"x": 1, "y": 1}
}
```

> This is a *format* example for documentation—your model may produce different layouts.

---

## 🧭 Versioning & Changelog

- **v0.1.0** — Initial 1k‑row finetune. Baseline decoding recs added.

---

## 📜 License & Citation

- **License:** <ADD LICENSE HERE>  
- **Citation:** If you use this model or dataset in academic work, please cite the model card and dataset page on Hugging Face (add your BibTeX here).

---

## 🙌 Acknowledgements

- Model & README: **DHS** ([@dhsmeasurements](mailto:dhsmeasurements@gmail.com))  
- Thanks to the open‑source Transformers/PEFT community.

