# 🎮 Auto-Adaptive RPG Generator (Jac + Web + FastAPI)

Welcome to **Auto-Adaptive RPG Generator**, a cutting-edge project that combines the **Jac programming language**, a **web interface**, and a **backend server** to explore **multi-task LLM fine-tuning through RPG game generation**.

This project is part of **Auto-Adaptive Fine-tuning for Jac MTLLM using RPG Game Generation** — where AI, procedural content generation, and interactive storytelling meet! 🚀


---

## ✨ Features

- **Jac Integration**
  - Leverages **Jac language programs** for RPG game mechanics, character handling, and procedural content generation.
  - Modular design for easy adaptation to new tasks.

- **Backend API (FastAPI)**
  - Endpoints to manage sessions and workflows (`/api/start`, `/api/shutdown`, etc.).
  - Handles communication between the Jac runtime and frontend.

- **Web UI (React + Vite)**
  - Interactive dashboard to run RPG generation tasks.
  - Visualizes generated content (maps, levels, characters).
  - Manage workflows, test models, and run experiments.

- **Adaptive Fine-Tuning**
  - Uses generated data from RPG tasks to fine-tune Jac MTLLM.
  - Experiment-ready setup for research and teaching.

- **Extensible & Open Source**
  - Add new Jac modules, customize UI, or extend APIs.
  - Built with clarity and modularity in mind.

---

## 🛠️ Getting Started


### 1. Clone the Repository

```bash
git clone https://github.com/Hushan-10/Auto-Adaptive-Fine-tuning-for-Jac-MTLLM-using-RPG-Game-Generation.git
cd Auto-Adaptive-Fine-tuning-for-Jac-MTLLM-using-RPG-Game-Generation

### 2. Setup Backend (FastAPI)

cd server
conda activate <your-environment>
pip install -r requirements.txt
uvicorn main:app --reload --port 8000

* API will be live at: http://localhost:8000

### 3. Setup Web UI

cd jac-web
npm install
npm run dev

* Web interface will run at: http://localhost:5173
---

## ▶️ Usage

### Launching the System

-1. Start the backend server (FastAPI).
-2. Open the web UI.
-3. Run RPG generation tasks, view results, and interact with Jac models.

### Example Endpoints

-POST /api/start → Starts a Jac RPG generation session.
-POST /api/shutdown → Terminates current session.
-GET /api/status → Check server and process health.

### Example Workflow
-Generate a dungeon map.

-Place characters, enemies, and items procedurally.

-Interact with generated RPG levels in the UI.

-Export data for fine-tuning experiments.
---

## 📁 Project Structure

```
jac-module/
├── server/              # FastAPI backend
│   ├── main.py          # API endpoints
│   └── requirements.txt # Python deps
├── jac-web/             # React-based frontend
│   ├── src/             # Components & views
│   └── package.json     # JS deps
|
│   
│   
└── README.md            # This file

```

---

## 📦 Requirements

- **Python**:  Version 3.8 or higher.
- **Node.js**: Version 18 or higher.
- **Conda / Virtualenv**: (recommended)
- **Jac Language**: Install via `pip install jac`.

---

## 🔧 Development Notes
- **Backend**: FastAPI
- **Frontend**: React (Vite + Tailwind)
- **Core Logic**:Jac language

---

## 🐛 Troubleshooting

**This project is designed not just for gaming fun, but also for AI research:**

Procedural content generation datasets.

Multi-task LLM training pipelines.

Adaptive fine-tuning with Jac MTLLM.

Visualization of learning progress.

---
## 🐛 Troubleshooting

- **Server not starting?** Check if uvicorn is installed: pip install uvicorn fastapi.
- **Web UI not loading?** Make sure Node.js v18+ is installed.Run `npm install` again inside jac-web/.
- **CORS errors?** Ensure both server (8000) and client (5173) are running.

For more help, open an issue on the GitHub repository.

---

## 📜 License

This project is licensed under the MIT License—free to use, modify, and distribute.

---

## 🙏 Acknowledgments

- **Jac Language**: For powering the core of this project. Learn more at jac-lang.com.
- **FastAPI**: For the modern, async-first API server — https://fastapi.tiangolo.com.
- **React Community**:For the flexible frontend framework — https://react.dev

---

## 🌟 Contribute

Want to help? Contributions are welcome!

- Add new RPG modules in Jac.
- Extend the frontend visualization.
- Improve fine-tuning pipelines.
- Report bugs or open feature requests.

Star the repository ⭐ to show your support!

---

## 📬 Contact

Have questions or ideas? Reach out via the GitHub Issues page or connect with the community on Jac Language's official channels.

🎲 Experiment, generate, and fine-tune — all through Jac-powered RPG worlds!
