# Auto-Adaptive-Fine-tuning-for-Jac-MTLLM-using-RPG-Game-Generation (JARVIS)

Auto-adaptive fine-tuning MTLLM for RPG level generation — learns from large models and fine-tunes TinyLLaMA for fast, local, cost-efficient deployment.

<img width="1919" height="901" alt="Screenshot 2025-09-03 012635" src="https://github.com/user-attachments/assets/4078a9f2-c9f4-4d63-bf6d-9db9b1e981f2" />

> **Note:** All details are shown in this YouTube video: [You Tube Video](https://youtu.be/MVJ6U6Yi8Bk)


# Getting Started

## 1. Clone the repository

After cloning this repository, update your existing **Jaseci** repo with the edited files included here.

- This repo contains a **`jaseci/`** folder with all updated files and folders.
- Replace the corresponding files in your local Jaseci repo with these updated versions (overwrite when prompted).
- We also added frontend components, so the **`jaseci/`** folder now includes two additional directories:
  - **`jaseci/jac/jac-web/`**
  - **`jaseci/jac/server/`**
- The **`jaseci/`** folder in this repo mirrors the original Jaseci file structure. Copy the updated and new files into your Jaseci repo **using the same paths and structure** as provided here.

> **Tip:** Make a backup of your current Jaseci repo before overwriting files. 

## 2. Update local paths

Update the paths below to match your PC’s directories.

### Plugin file
- **Line 472**
```python
_TARGET_RPG_FILE = r"D:\Jaseci\jac\examples\rpg_game\jac_impl\jac_impl_6\main.jac"
```
- **Line 68**
```python
_DEFAULT_SWITCH_WHITELIST = r"D:\Jaseci\jac\examples\rpg_game\jac_impl\jac_impl_6\main.jac"
```  
### Server file
- **Line 14**
```python
MODEL_PATH = r"D:\Jac\TinyLlama-1.1B-Chat-v1.0"
``` 
This is the path to the fine-tuned RPG model. After you download a model, update this path to your local directory.
You can choose any model from this list (Model 7 is recommended):
**Fine Tuned Models for RPG:** [Hugging Face model page](< https://huggingface.co/Hirudika2002/JARVIS-Models/tree/main/LoRA-Trained>)

### Merge Server file
- **Line 17**
```python
MODEL_DIR = Path(os.environ.get("MODEL_DIR", r"D:\Jaseci\merged_models\jac_impl_6__123cd215\merged")).resolve()
```
### Incremental_FineTuning file 

- **Line 57**
```python
INITIAL_BASE_MODEL = os.environ.get("INITIAL_BASE_MODEL", r"D:\Jac\TinyLlama-1.1B-Chat-v1.0")
```
This is the path to the base model. After you download it, update the path to your local directory.
**Base Model:** [Hugging Face model page](<https://huggingface.co/Hirudika2002/JARVIS-Models/tree/main/Base-Model/TinyLlama-1.1B-Chat-v1.0>)

- **Line 59**
```python
WORK_ROOT   = Path(os.environ.get("WORK_ROOT", r"D:\Jaseci\finetune_runs")).resolve()
```

- **Line 138**
```python
_RPG_RUN_WHITELIST = r"D:\Jaseci\jac\examples\rpg_game\jac_impl\jac_impl_6\main.jac"
```
> **Note:** Except for the base model (INITIAL_BASE_MODEL) and the fine-tuned RPG model path (MODEL_PATH in the server file), most other paths should only vary by drive letter. The drive letter (D:) may be different on your machine; the rest of each path should remain the same.



## 3. Create a Virtual Environment
It is recommended to use a Python virtual environment to manage dependencies:

```bash
conda create -n myenv python=3.12.7
  ```
Activate the conda environment :

```bash
conda activate myenv
  ```

## 4. Install dependencies
```bash
pip install -r requirements.txt
```

## 5. Run Required Terminals

### Run the frontend

Open a terminal in the following directory:
D:\jaseci\jac\jac-web>

> **Note:** The drive letter (`D:`) may be different on your machine; the rest of the path is the same.

Start the development server:

```bash
conda activate myenv
npm run dev
```
> **Note:** All details are shown in this YouTube video: [Watch the Video](https://youtu.be/MVJ6U6Yi8Bk)

### Run the backend

Open a terminal in the following directory:
D:\jaseci\jac\server>

> **Note:** The drive letter (`D:`) may be different on your machine; the rest of the path is the same.

Start the development server:

```bash
 conda activate myenv
 uvicorn main:app --reload --port 8000
```
### Start the local server (hosts our fine-tuned RPG model)
Open a terminal in the following directory:
D:\jaseci>

> **Note:** The drive letter (`D:`) may be different on your machine; the rest of the path is the same.

Start the development server:

```bash
 conda activate myenv
 uvicorn Server:app --reload --port 9000
```

### Start the merge server (automatically hosts models after fine-tuning completes)

Open a terminal in the following directory:
D:\jaseci\jac-mtllm\mtllm>

> **Note:** The drive letter (`D:`) may be different on your machine; the rest of the path is the same.

Start the development server:

```bash
 conda activate myenv
 uvicorn merge_server:app --host 127.0.0.1 --port 8010
```
### Run the background finetuning file

Open a terminal in the following directory:
 D:\jaseci>

> **Note:** The drive letter (`D:`) may be different on your machine; the rest of the path is the same.

Start the development server:

```bash
  conda activate myenv
  python Incremental_FineTuning.py 
```


**All models, datasets, and demo videos are available on Hugging Face.**
[Hugging Face](https://huggingface.co/Hirudika2002/JARVIS-Models/tree/main).


<img width="1898" height="884" alt="Screenshot 2025-09-03 081238" src="https://github.com/user-attachments/assets/74ca08b0-cf87-4f4a-bfb9-e79cd421aeaa" />




# System Overview



<img width="2360" height="2920" alt="Flowchart (3)" src="https://github.com/user-attachments/assets/7e18d4ad-e5b4-45af-8695-8c36cd5447e5" />


## Threshold Settings

Our system uses a **threshold** to decide when to fine-tune and when to publish (merge + host) a model.

### RPG mode (format-validated threshold)
- The system waits until the dataset reaches the configured size, then starts **fine-tuning**.
- After each run, it randomly samples **4** items from the training set, runs **inference**, and validates the outputs using the **pattern-validator** file (checks the required RPG output format/schema).
- If **all 4** samples pass validation, the model is **merged** and **hosted**.  
  If any sample fails, the model is **not merged**. The system waits for the next data chunk.
- When a new chunk arrives, the system retrains on the **combined** data (previous + new) and repeats the same validation.
- In RPG mode, the **threshold** effectively means: *the model consistently produces correctly formatted outputs on randomly selected inputs*.

### Other tasks
- For non-RPG tasks where format validation isn’t relevant(like summarization), the threshold is a **minimum number of data entries**.
- This value is user-configurable via **environment variables**. We recommend at least **500** examples for meaningful results.
- In the YouTube demo, we use **5** to keep the demonstration simple.


> **Note:** **Merge** = combine the fine-tuned adapters with the base model. **Host** = serve the merged model via the server.
<img width="1391" height="273" alt="Screenshot 2025-09-03 062145" src="https://github.com/user-attachments/assets/dfb535f0-14be-4d07-b25e-c45efd3d3d3d" />

## Map Validator Retry System

When the model generates an invalid map, the map validator automatically triggers a *retry loop*:

- Each retry uses the same input prompt but slightly adjusts generation parameters (temperature ↑, top-p ↑).
- If the new map is valid, the loop stops.
- If still invalid, it keeps retrying up to the max attempts.
- *If all retries fail, the validator gives up for that attempt and the system proceeds to generate the next map.*  
  That next map is produced without the previous attempt passing validation, so it may be either valid or invalid.

✅ Gives the model multiple chances to produce a *valid, playable* map while keeping the pipeline moving

![2e5f40c2-4f80-4721-acd4-2ac60e389976](https://github.com/user-attachments/assets/b186a494-693b-4fa1-86fa-e17c11d287d3)

## Fallback Function

When a **local model** (our fine-tuned RPG models or automatically fine-tuned models) returns an **invalidly formatted** output, the **pattern validator** triggers a fallback to **GPT-4o mini**.

- On fallback, the API base switches from the local endpoint (e.g., `https://127.0.0.1:8010/v1`) to `None`.
- The pipeline continues so results aren’t blocked by a single bad output.

### Conceptual flow
1. Generate with local model.
2. Validate the response against the required RPG schema/format.
3. If **invalid** → switch to **GPT-4o mini** and re-generate.
4. Log the fallback event and continue.

![5c21f3e8-06e6-4e56-97ce-dda46f4f1ba4](https://github.com/user-attachments/assets/1f534423-7143-45b4-9866-34b8e61ef200)



