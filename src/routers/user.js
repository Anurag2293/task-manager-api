import express from 'express';

const router = new express.Router();

router.get('/test', (req, res) => {
    res.send('From a new File');
})

export default router;