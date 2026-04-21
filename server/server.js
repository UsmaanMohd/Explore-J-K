import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import placeRoutes from './routes/placeRoutes.js';
import authRoutes from './routes/authRoutes.js';

// Parses Environment configuration properly
dotenv.config();

const app = express();

app.use(express.static('public'));  // docker-friendly static file serving

// Standard backend safety definitions
app.use(cors());
app.use(express.json());

// Start standard database connection parameters smoothly
connectDB();

// Maps routes accordingly linking them dynamically
app.use('/api/places', placeRoutes);
app.use('/api/auth', authRoutes);

// Health check to ensure standard connection mapping works independently from DB 
app.get('/api/health', (req, res) => res.status(200).json({ status: 'success', message: 'API responds perfectly' }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`✅ Explore JK Server seamlessly executing on port ${PORT}`);
});
