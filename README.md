<<<<<<< HEAD
# KrishiVision
Intelligent Agricultural Platform
=======
# 🌾 KrishiVision

**KrishiVision is an AI-powered agriculture assistance prototype designed to help farmers make better decisions using intelligent analytics, automation, and agent-based pest monitoring.

This prototype demonstrates how modern technologies like **AI/ML, agent systems, automation workflows, and mobile applications** can be integrated to support farmers with crop insights, pest detection, yield prediction, and market intelligence.

---

# 🚀 Project Overview

Agriculture faces several challenges including crop diseases, unpredictable yields, pest outbreaks, limited market insights, and lack of accessible digital guidance for farmers.

**KrishiVision addresses these challenges by providing a unified platform with intelligent modules and an agent-based system called **PestGuard**.

The prototype integrates multiple AI services and automation workflows to simulate a scalable agricultural intelligence system.

---

# 🧠 Key Features

### 🌿 Crop Disease Diagnosis
Upload crop images and receive AI-powered disease detection and treatment recommendations.

### 🌱 Soil Health Analysis
Analyze soil conditions and receive suggestions for fertilizers and crop suitability.

### 📈 Yield Prediction
Predict crop yield using environmental data and AI models.

### 💰 Market Price Insights
Get real-time agricultural market price information to support better selling decisions.

### 🎙 Voice & Multilingual Guidance
Farmers can interact with the system using voice queries in multiple languages.

### 🏛 Government Scheme Assistance
Get recommendations on government schemes relevant to crops and farming activities.

### 🐛 PestGuard Intelligent Monitoring
A multi-agent pest monitoring system that detects potential pest outbreaks and recommends preventive actions.

---

# 🤖 PestGuard Multi-Agent System

PestGuard is designed as a **three-agent intelligent system**.

### 1️⃣ Monitoring Agent
Collects and monitors pest-related signals such as:
- crop images
- environmental data
- field reports

### 2️⃣ Decision Agent
Analyzes the monitored data and determines:
- pest threat levels
- outbreak probability
- recommended actions

### 3️⃣ Execution Agent
Executes automated responses such as:
- sending alerts
- recommending treatments
- triggering preventive actions

---

# 🏗 Prototype Architecture

The system prototype follows a modular architecture.

```
Flutter Mobile App
        │
        ▼
FastAPI Backend
        │
        ▼
AI / ML Intelligence Layero
        │
        ▼
PestGuard Agent System
        │
        ▼
n8n Automation Workflows
        │
        ▼
External Data Sources & Integrations
```

### Architecture Layers

**Mobile Layer**
- Flutter mobile application interface

**Backend Layer**
- FastAPI service handling APIs and orchestration

**AI Layer**
- Machine learning models for prediction and detection

**Agent Layer**
- PestGuard monitoring, decision, and execution agents

**Automation Layer**
- n8n workflows for automation and notifications

---

# 🧩 Prototype Modules

| Module | Description |
|------|------|
| Crop Diagnosis | AI-based crop disease identification |
| Soil Analysis | Soil condition evaluation |
| Yield Prediction | Crop production forecasting |
| Market Intelligence | Agricultural price insights |
| Voice Assistant | Voice-based farmer interaction |
| Scheme Guidance | Government scheme recommendations |
| PestGuard | Multi-agent pest outbreak monitoring |

---

# 🔗 API Endpoints (Prototype)

Example API routes implemented in the backend.

```
POST /api/v1/diagnose
POST /api/v1/soil/analyze
POST /api/v1/yield/predict
GET  /api/v1/market/prices
POST /api/v1/voice/query
POST /api/v1/schemes/recommend
POST /api/v1/pestguard/monitor
POST /api/v1/pestguard/decision
POST /api/v1/pestguard/execute
```

---

# 📂 Project Structure

```
krishidrishti-prototype
│
├── services
│   └── api
│       ├── app
│       │   ├── routers
│       │   ├── services
│       │   ├── schemas
│       │   └── main.py
│       └── requirements.txt
│
├── mobile
│   └── flutter_app
│
├── workflows
│   └── n8n
│
└── docs
```

---

# ⚙️ Setup Instructions

### 1️⃣ Clone the project

```bash
git clone <repository-url>
cd krishivision-prototype
```

### 2️⃣ Setup backend environment

```bash
cd services/api
python -m venv .venv
source .venv/bin/activate
```

### 3️⃣ Install dependencies

```bash
pip install -r requirements.txt
```

### 4️⃣ Run the API server

```bash
uvicorn app.main:app --reload
```

Server will start at:

```
http://127.0.0.1:8000
```

API documentation available at:

```
http://127.0.0.1:8000/docs
```

---

# 🔬 Prototype Workflow

1. User submits a request through the mobile application
2. Request is processed by the FastAPI backend
3. AI models analyze the input
4. PestGuard agents evaluate pest-related signals
5. Automation workflows may trigger alerts or recommendations
6. The system returns insights or actions to the user

---

# 🧪 Technologies Used

| Technology | Purpose |
|------|------|
| Flutter | Mobile application |
| FastAPI | Backend API framework |
| Python | AI & backend logic |
| n8n | Workflow automation |
| AI / ML Models | Prediction and detection |
| REST APIs | Service communication |

---

# 📌 Prototype Status

This project represents a **functional prototype and architectural skeleton** demonstrating the design and workflow of the KrishiVision system.

Future improvements may include:
- real-time agricultural data integration
- improved AI models
- IoT sensor integration
- advanced pest outbreak analytics
- production-scale deployment

---

# 👨‍💻 Author

Developed as part of an **agriculture technology innovation prototype**.

---

# 📜 License

This project is intended for **educational and prototype demonstration purposes**.
>>>>>>> 5e847fa (Deploy-ready KrishiVision)
