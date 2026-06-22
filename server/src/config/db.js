import mongoose from 'mongoose';
import { env } from './env.js';
import { dotenvKeys } from '../constants/index.js';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`${env.MONGODB_URI}/${dotenvKeys.DB_NAME}`);
    console.log(` MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(` Database Connection Error: ${error.message}`);
    process.exit(1); 
  }
};

export default connectDB;