## Dataset Map Validator — **Batch Mode** (`Map_validator_latest.py`)

Validate **large JSONL datasets** and produce a clean file that contains **only correct maps**.  
This validator reads `maps.jsonl`, checks maps in **fixed batches of 18 lines (one “set”)**, and writes only the **fully valid batches** to `noerror.jsonl`.

---

### **What it does**
- Reads `maps.jsonl` where **each line is one map JSON**.
- Processes the file in **batches of 18 lines**.
- If **any single map fails** in a batch, the **entire 18-line batch is discarded**.
- Writes only **error-free batches** to `noerror.jsonl` (preserving original order).

> [!IMPORTANT]
> Your dataset length should be a multiple of **18** to avoid a trailing partial batch.

---

### **How to run**

1. Open this folder in your IDE’s **integrated terminal**.
2. Run the validator:

  ```bash
  python validator2.py maps.jsonl
