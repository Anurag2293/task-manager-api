import express from 'express';
import jwt from 'jsonwebtoken';
import connectDB from './db/mongoose.js';
import userRouter from './routers/user.js';
import taskRouter from './routers/task.js';

connectDB();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log('Process is running on port', port);
});