import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import authRouter from '../api/routes/auth.route.js'
import cookieParser from 'cookie-parser';
import userRouter from './routes/user.route.js';
import listingRouter from './routes/listing.route.js'
import path from 'path'


dotenv.config({ path: './api/.env' });


   mongoose.connect(process.env.MONGO)
  .then(() => {
  console.log('Connected to MongoDB!');
})
.catch((err) => {
  console.log(err);
});

const _dirname = path.resolve()

const app = express();

app.use(express.json());

app.use(cookieParser())

app.listen(3000, () => {
    console.log('Server is running on port 3000!');
  });

  app.use('/api/auth', authRouter);
  app.use('/api/user', userRouter);
  app.use('/api/listing', listingRouter);

  app.use(express.static(path.join(_dirname,'client/dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
  })


  app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });
