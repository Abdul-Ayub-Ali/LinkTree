import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { env } from './config/env.js';
import { HTTP_STATUS } from './constants/index.js';

const app = express();

app.use(cors({
  origin: env.FRONTEND_URL,
  credentials: true 
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.get('/health', (req, res) => {
  res.status(HTTP_STATUS.OK).json({ status: "OK", message: "Server is fully operational!" });
});


app.use((err, req, res, next) => {
  const statusCode = err.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR;
  const message = err.message || "Internal Server Error";
  
  res.status(statusCode).json({
    success: false,
    message,
    errors: err.errors || []
  });
});

export default app;