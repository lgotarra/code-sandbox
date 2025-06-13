import express from 'express';
import authRoutes from './routes/auth.routes';

const app = express();

app.use(express.json());

// Routes
app.use('/login', authRoutes);

export default app;
