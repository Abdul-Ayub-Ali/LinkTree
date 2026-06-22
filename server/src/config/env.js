import { z } from 'zod';
import 'dotenv/config';
import { dotenvKeys } from '../constants/index.js';
const envSchema = z.object({
  PORT: z.string().transform((val) => parseInt(val, 10)).default(dotenvKeys.PORT),
  MONGODB_URI: z.string().url("MongoDB URI must be a valid URL"),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  FRONTEND_URL: z.string().url("Frontend URL must be a valid URL"),
  ACCESS_TOKEN_SECRET: z.string().min(10, "Access token secret must be atleast 10 chars long"),
  REFRESH_TOKEN_SECRET: z.string().min(10, "Refresh token secret must be atleast 10 chars long"),
});

const envParse = envSchema.safeParse(process.env);

if (!envParse.success) {
  console.error(" Invalid Environment Variables:");
  console.error(JSON.stringify(envParse.error.format(), null, 2));
  process.exit(1); 
}

export const env = envParse.data;