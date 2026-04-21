# Explore J&K — Tourism Guide Web App

A full-stack web application to explore tourist destinations in Jammu & Kashmir with maps, travel planning, and basic budget estimation.

---

## Features
*  Browse popular tourist destinations
*  Search & filter by region and category
*  Interactive maps using Leaflet
*  Budget estimation (stay, food, travel)
*  Detailed place information
*  User authentication
*  Works with MongoDB or mock data

---

##  Tech Stack

**Frontend**

* React.js (Vite)
* Tailwind CSS
* Framer Motion
* React-Leaflet

**Backend**

* Node.js
* Express.js
* MongoDB (Mongoose)

---

##  Project Structure

```text
client/   # Frontend  
server/   # Backend  
```

---

## Setup

```bash
cd server && npm install
cd ../client && npm install
```

Create `.env` in `/server`:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
```

Run:

```bash
cd server && npm start
cd client && npm run dev
```

---

## Docker

```bash
docker build -t explorejk .
docker run -p 4000:5000 explorejk
```

---

## Deployment

Deployed using Docker on AWS EC2 with CI/CD via GitHub Actions.

---
