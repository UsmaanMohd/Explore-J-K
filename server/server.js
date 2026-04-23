import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import placeRoutes from './routes/placeRoutes.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();

const app = express();

app.use(express.static('public'));

app.use(cors());
app.use(express.json());

// DB connect
connectDB();

// Routes
app.use('/api/places', placeRoutes);
app.use('/api/auth', authRoutes);


app.get('/', (req, res) => {
    res.send('Explore JK API is LIVE 🚀');
});

// Health check
app.get('/api/health', (req, res) =>
    res.status(200).json({
        status: 'success',
        message: 'API responds perfectly'
    })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Explore JK Server seamlessly executing on port ${PORT}`);
});