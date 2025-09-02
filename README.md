# Auto-Adaptive-Fine-tuning-for-Jac-MTLLM-using-RPG-Game-Generation (JARVIS)

Auto-adaptive fine-tuning MTLLM for RPG level generation — learns from large models and fine-tunes TinyLLaMA for fast, local, cost-efficient deployment.

<img width="1919" height="901" alt="Screenshot 2025-09-03 012635" src="https://github.com/user-attachments/assets/4078a9f2-c9f4-4d63-bf6d-9db9b1e981f2" />


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

## 2. Create a Virtual Environment
It is recommended to use a Python virtual environment to manage dependencies:

```bash
conda create -n myenv python=3.12.7
  ```
Activate the conda environment :

```bash
conda activate myenv
  ```

## 3. Install dependencies
```bash
pip install -r requirements.txt
```

## 4. Run Required Terminals

### Run the frontend

Open a terminal in the following directory:
D:\jaseci\jac\jac-web>

> **Note:** The drive letter (`D:`) may be different on your machine; the rest of the path is the same.

Start the development server:

```bash
conda activate myenv
npm run dev
```
> **Note:** All details are shown in this YouTube video: [Watch the tutorial](https://youtu.be/YOUR_VIDEO_ID)

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

## Update local paths

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




## 5.Change the hardcoded paths
please update all directories with your pc directories
plugin file
line 472 : _TARGET_RPG_FILE = r"D:\Jaseci\jac\examples\rpg_game\jac_impl\jac_impl_6\main.jac"
line 68 :  _DEFAULT_SWITCH_WHITELIST = r"D:\Jaseci\jac\examples\rpg_game\jac_impl\jac_impl_6\main.jac"

server file
line 14 : MODEL_PATH = r"D:\Jac\TinyLlama-1.1B-Chat-v1.0"
this is the path of fine tuned RPG model.after you download please update with this directory.you can choose whatever model by refering this link.most recommended one is model 7.
link for models - https://huggingface.co/Hirudika2002/JARVIS-Models/tree/main/LoRA-Trained

merger server file

line 17 :MODEL_DIR = Path(os.environ.get("MODEL_DIR", r"D:\Jaseci\merged_models\jac_impl_6__123cd215\merged")).resolve()

Incremental_FineTuning file 

line 57 : INITIAL_BASE_MODEL = os.environ.get("INITIAL_BASE_MODEL", r"D:\Jac\TinyLlama-1.1B-Chat-v1.0")
this is the path of fine tuned Base.after you download please update with this directory.
link for models - https://huggingface.co/Hirudika2002/JARVIS-Models/tree/main/Base-Model/TinyLlama-1.1B-Chat-v1.0

line 59  : WORK_ROOT   = Path(os.environ.get("WORK_ROOT",   r"D:\Jaseci\finetune_runs")).resolve()

line 138 : _RPG_RUN_WHITELIST = r"D:\Jaseci\jac\examples\rpg_game\jac_impl\jac_impl_6\main.jac"

in here excluding Initial base model and fine tuned RPG model(in server file) paths,
for other paths, 
> **Note:** The drive letter (`D:`) may be different on your machine; the rest of the path is the same.
