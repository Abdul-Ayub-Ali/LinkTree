import app from './src/app.js';
import connectDB from './src/config/db.js';
import { env } from './src/config/env.js';

connectDB()
  .then(() => {
    app.listen(env.PORT, () => {
      console.log(` Server running in ${env.NODE_ENV} mode on port ${env.PORT}`);
    });
  })
  .catch((err) => {
    console.error(" MongoDB connection core failed!!! ", err);
    process.exit(1);
  });