import express from 'express';
import UserController from '../controllers/userController';

const router = express.Router();

router.post('/login', UserController.loginUser);

export default router;