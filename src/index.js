import express from 'express';
import jwt from 'jsonwebtoken';
import connectDB from './db/mongoose.js';
import userRouter from './routers/user.js';
import taskRouter from './routers/task.js';

import Task from './models/task.js';
import User from './models/user.js';

connectDB();

const app = express();
const port = process.env.PORT || 3000;

// MIDDLEWARE
// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled');
//     } else {
//         next();
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Site under Maintenance. Please try again later');
// })

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log('Process is running on port', port);
});

const main = async () => {
    // const task = await Task.findById('63a7351b2ead30e07cd0d17a');
    // await task.populate('owner');
    // console.log(task.owner);

    const user = await User.findById('63a73336fb460dcec60c2d54');
    await user.populate('tasks');
    console.log(user.tasks);
}

// main();