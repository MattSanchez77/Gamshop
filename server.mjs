// Imports
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import connectDB from './db/conn.mjs';
import userRoutes from './routes/userRoutes.mjs'
import globalErr from './middleware/globalErr.mjs';
// Setups
connectDB();
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

// Routes
app.use('/api/user', userRoutes);

// Err Middleware - only run when we have a server error
app.use(globalErr);

// listener
app.listen(PORT, () => {
  console.log(`Server running on Port: ${PORT}`);
});