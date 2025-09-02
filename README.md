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

## 2. Install dependencies
```bash
pip install -r requirements.txt
```

## 3. Run Required Terminals

### Run the frontend

Open a terminal in the following directory:
D:\jaseci\jac\jac-web>

> **Note:** The drive letter (`D:`) may be different on your machine; the rest of the path is the same.

Start the development server:

```bash
npm run dev
```
> **Note:** All details are shown in this YouTube video: [Watch the tutorial](https://youtu.be/YOUR_VIDEO_ID)

### Run the backend

Open a terminal in the following directory:
D:\jaseci\jac\server>

> **Note:** The drive letter (`D:`) may be different on your machine; the rest of the path is the same.

Start the development server:

```bash
 uvicorn main:app --reload --port 8000
```
### Start the local server (hosts our fine-tuned RPG model)
Open a terminal in the following directory:
D:\jaseci>

> **Note:** The drive letter (`D:`) may be different on your machine; the rest of the path is the same.

Start the development server:

```bash
 uvicorn Server:app --reload --port 9000
```

## Start the merge server (automatically hosts models after fine-tuning completes)

Open a terminal in the following directory:
D:\jaseci\jac-mtllm\mtllm>

> **Note:** The drive letter (`D:`) may be different on your machine; the rest of the path is the same.

Start the development server:

```bash
 uvicorn merge_server:app --host 127.0.0.1 --port 8010
```
## Run the background finetuning file

Open a terminal in the following directory:
 D:\jaseci>

> **Note:** The drive letter (`D:`) may be different on your machine; the rest of the path is the same.

Start the development server:

```bash
  python Incremental_FineTuning.py 
```

