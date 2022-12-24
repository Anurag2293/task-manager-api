import express from 'express';
import jwt from 'jsonwebtoken';
import connectDB from './db/mongoose.js';
import userRouter from './routers/user.js';
import taskRouter from './routers/task.js';

connectDB();

const app = express();
const port = process.env.PORT || 3000;

// MIDDLEWARE
app.use((req, res, next) => {
    console.log(req.method, req.path);

    next();
})

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log('Process is running on port', port);
});

const myFunction = async () => {
    const token = jwt.sign({ _id : 'abc123' }, 'thisismynewtoken');
    console.log(token);

    const data = jwt.verify(token, 'thisismynewtoken', { expiresIn : '7 days' });
    console.log(data);
}

// myFunction();