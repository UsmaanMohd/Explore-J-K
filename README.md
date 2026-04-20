# 🏔️ Explore J&K - Premium Tourism App

A full-stack, comprehensive web application designed to showcase the beauty of Jammu & Kashmir through an interactive route planner, accurate dynamic budget tracking, and extensive visual gallery integration.

## ✨ Features
- **Interactive Leaflet Mapping Check:** Explore multiple destination routes perfectly optimized for tourism using live map capabilities.
- **Dynamic AI-style Budgeting:** Plan expenses seamlessly (Stay, Food, Travel) divided smartly based on user configurations.
- **Robust Searching Engine:** Seamless filtering functionality to search by region, season, or budget tier.
- **Seamless Full-Stack Architecture:** Incorporates robust controller-service backend structure and a scalable React frontend. 

## 🛠️ Tech Stack
- **Frontend**
  - React.js (Component-driven UI)
  - Vite (Build Tooling)
  - Tailwind CSS + Framer Motion (Animations & UI)
  - React-Leaflet (Map Generation Module)
  - Axios (Frontend Service Endpoint Caller)
- **Backend**
  - Node.js & Express (Scalable Routing API)
  - Mongoose / MongoDB (Secure Data Modeling)
  - dotenv (Environment Configuration Handling)

## 📂 Folder Structure

```text
Explore_JK/
├── client/                     # React Frontend Setup
│   ├── src/                    
│   │   ├── assets/             # Images & static assets
│   │   ├── components/         # Reusable UI Blocks (Navbar, Route Cards etc.)
│   │   ├── pages/              # Primary Route Views (Home, Places, PlaceDetails)
│   │   ├── services/           # Service Abstraction (api.js interacting w/ Axios)
│   │   ├── App.jsx             
│   │   ├── main.jsx            
│   │   └── index.css           
│   └── vite.config.js          
│
├── server/                     # Node.js Express Backend Setup
│   ├── config/                 
│   │   └── db.js               # Database & Environment Connectivity Module
│   ├── controllers/            
│   │   ├── authController.js   # API Endpoint Definitions (Auth) 
│   │   └── placeController.js  # API Endpoint Definitions (Places)
│   ├── models/                 
│   │   ├── User.js             # Mongoose Schema Definitions
│   │   ├── Place.js            
│   │   └── Activity.js         
│   ├── routes/                 
│   │   ├── authRoutes.js       # HTTP Mapping to Controllers
│   │   └── placeRoutes.js      
│   ├── services/               
│   │   ├── authService.js      # Core Business & Auth Computation Logic Layer
│   │   └── placeService.js     # Core Searching & Filtering Logic Layer
│   ├── utils/                  
│   │   └── mockData.js         # Graceful Database Mock Fallback mechanism
│   └── server.js               
│
└── README.md                   
```

## 🚀 Setup Instructions

1. **Install Dependencies** (Wait for installation to finish successfully)
   ```bash
   cd server && npm install
   cd ../client && npm install
   ```

2. **Backend Environment Setup**
   Ensure you create a `.env` file within the `/server` dictating:
   ```env
   PORT=5000
   MONGO_URI=your_mongodatabase_url
   ```
   *(Note: The server is gracefully built to continue executing safely relying on Mock JSON structure if `MONGO_URI` is missed.)*

3. **Start the Solution safely**
   
   Execute Backend API:
   ```bash
   cd server && npm start
   ```
   
   Execute Frontend Development Preview:
   ```bash
   cd client && npm run dev
   ```


   
Port	Running What
3000	React dev server (npm run dev)
5000	Backend server (npm run dev)
4000	Docker container (5000 mapped → 4000)