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

import multer from 'multer';

const upload = multer({
    dest : 'images',
    limits : {
        fileSize : 100000,
    },
    fileFilter (req, file, cb) {
        if (!file.originalname.match(/\.(doc|docx)$/)) {
            return cb(new Error('Please upload a Word Document'));
        }

        cb(undefined, true);

        // if (!file.originalname.endsWith('.pdf')) {
        //     return cb(new Error('Please upload a PDF'));
        // }
        // cb(new Error('File must be a PDF'));
        // cb(undefined, true);
        // cb(undefined, false);
    }
});

app.post('/upload', upload.single('upload'), (req, res) => {
    res.send()
});

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log('Process is running on port', port);
});