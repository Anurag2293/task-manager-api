import express from 'express';
import jwt from 'jsonwebtoken';
import multer from 'multer';
import sharp from 'sharp';

import User from '../models/user.js';
import auth from '../middleware/auth.js';
import { sendWelcomeEmail, sendCancellationEmail } from '../emails/account.js';

const router = new express.Router();

router.post('/users', async (req, res) => {
    const user = new User(req.body);

    try {
        await user.save();
        await sendWelcomeEmail(user.email, user.name);
        const token = await user.generateAuthToken();
        res.status(201).send({ user, token });
    } catch (e) {
        res.status(400).send(e);
    }
});

router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password);
        const token = await user.generateAuthToken();
        res.send({ user, token });
    } catch (e) {
        res.status(400).send();
    }
});

router.post('/users/logout', auth, async (req, res) => {
    try {
        const user = req.user;

        user.tokens = user.tokens.filter((token) => {
            return token.token !== req.token;
        });

        await user.save();

        res.send();
    } catch (e) {
        res.status(500).send();
    }
})

router.post('/users/logoutAll', auth, async (req, res) => {
    try {
        const user = req.user;

        user.tokens = [];

        await user.save();

        res.send('All accounts Logged Out');
    } catch (e) {
        res.status(500).send();
    }
})

router.get('/users/me', auth, async (req, res) => {
    res.send(req.user);
});

router.patch('/users/me', auth, async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'email', 'password', 'age'];
    const isValidOperation = updates.every((update) => {
        return allowedUpdates.includes(update);
    });

    if (!isValidOperation) {
        return res.status(400).send({ error : 'Invalid Updates!'});
    }

    try {
        const user = req.user;

        updates.forEach((update) => user[update] = req.body[update]);
        await user.save();
        
        res.send(user);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.delete('/users/me', auth, async (req, res) => {
    try {
        await req.user.remove();
        await sendDeleteEmail(req.user.email, req.user.name);
        res.send(req.user);
    } catch (e) {
        res.status(500).send();
    }
});

const upload = multer({
    limits : {
        fileSize : 1000000
    },
    fileFilter (req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            cb(new Error('Please upload an image (.jpg, .jpeg, .png)'));
        }

        cb(undefined, true);
    }
});

router.post('/users/me/avatar', auth, upload.single('avatar'), async (req, res) => {
    const buffer = await sharp(req.file.buffer).resize({ height : 250, width : 250}).png().toBuffer();
    req.user.avatar = buffer;

    await req.user.save();
    res.send();
}, (error, req, res, next) => {
    res.status(400).send({ error : error.message })
});

router.delete('/users/me/avatar', auth, async (req, res) => {
    if (!req.user.avatar) {
        res.status(400).send('No avatar to delete');
    }
    try {
        req.user.avatar = undefined;
        await req.user.save();
        res.send();
    } catch (e) {
        res.status(500).send();
    }
})

router.get('/users/:id/avatar', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user || !user.avatar) {
            throw new Error();
        }

        res.set('Content-Type', 'image/jpg');
        res.send(user.avatar);
    } catch (e) {
        res.status(404).send();
    }
})

export default router;