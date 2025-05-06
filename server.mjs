// Imports
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import globalError from './middleware/globalErr.mjs';
// Setups
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
// Routes

// Error Middleware
app.use(globalError);

// Listener
app.listen(PORT, ()=>{
    console.log(`Server running on Port: ${PORT}`);
})