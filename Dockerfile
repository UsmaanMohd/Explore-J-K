# FROM node:20-alpine

# COPY ./server .

# RUN npm install

# CMD ["node", "server.js"]


# ---------- STEP 1: Build Frontend ----------
FROM node:20-alpine AS client-build

WORKDIR /app/client

# Install frontend deps
COPY client/package*.json ./
RUN npm install

# Copy frontend code & build
COPY client/ .
RUN npm run build


# ---------- STEP 2: Setup Backend ----------
FROM node:20-alpine

WORKDIR /app

# Install backend deps
COPY server/package*.json ./server/
RUN cd server && npm install

# Copy backend code
COPY server/ ./server/

# Copy frontend build into backend
COPY --from=client-build /app/client/dist ./server/public

# Set working directory to backend
WORKDIR /app/server

# Expose backend port
EXPOSE 5000

# Start server (production)
CMD ["node", "server.js"]