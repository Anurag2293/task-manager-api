import express from 'express';
import connectDB from './db/mongoose.js';
import User from './models/user.js';

connectDB();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/users', (req, res) => {
    const user = new User(req.body);

    user.save().then(() => {
        res.send(user);
    }).catch((error) => {
        res.status(400).send(error);
    })
})

app.listen(port, () => {
    console.log('Process is running on port', port);
})