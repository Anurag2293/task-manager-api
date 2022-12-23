import express from 'express';
import connectDB from './db/mongoose.js';
import User from './models/user.js';

connectDB();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/users', (req, res) => {
    console.log(req.body);
    res.send('testing!');
})

app.listen(port, () => {
    console.log('Process is running on port', port);
})