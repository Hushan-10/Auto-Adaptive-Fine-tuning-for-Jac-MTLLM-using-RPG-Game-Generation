# 🧩 Jac Module

This folder contains the **Jac-specific components** for the project **Auto-Adaptive Fine-tuning for Jac MTLLM using RPG Game Generation**.  
It is the core part that integrates **Jac language programs**, the **web UI**, and the **backend server**.

---


## 🚀 Usage

### 1. Start the backend server
Navigate to the server folder and run:

cd server
conda activate <your environment>
pip install -r requirements.txt
uvicorn main:app --reload --port 8000       

This will launch the API endpoints (e.g., /api/shutdown, /api/start, etc.).

### 1. Run the web interface
Navigate to jac-web/ and install dependencies:

cd jac-web
npm install
npm run dev

This launches the Jac Web UI, allowing you to interact with RPG game generation, test models, and manage workflows visually.

🔧 Features

API Server (server/)

Implements endpoints (example: /api/shutdown in main.py)

Manages sessions, process lifecycle, and communication with Jac programs

Jac Web (jac-web/)

Frontend for users to run RPG generation tasks

Provides visualization & interaction with generated content

🧪 Development Notes

All server logic is written in Python (FastAPI).

Web interface is powered by JavaScript/React.

