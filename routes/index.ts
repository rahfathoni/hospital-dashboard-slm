import express from 'express';
import hospitalRouter from './hospitalRouter';
import vendorRouter from './vendorRouter';
import userRouter from './userRouter';

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        message: "API Hospital Dashboard working"
    });
});

router.use('/hospitals', hospitalRouter);
router.use('/vendors', vendorRouter);
router.use('/users', userRouter)

export default router;
