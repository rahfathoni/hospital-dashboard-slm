import express from 'express';
// import hospitalRouter from './hospitaltRouter';

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        message: "API Hospital Dashboard working"
    });
});

// router.use('/hospitals', hospitalRouter);

export default router;
