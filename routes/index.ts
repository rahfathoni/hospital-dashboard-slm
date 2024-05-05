import express from 'express';
import hospitalRouter from './hospitalRouter';

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        message: "API Hospital Dashboard working"
    });
});

router.use('/hospitals', hospitalRouter);

export default router;
