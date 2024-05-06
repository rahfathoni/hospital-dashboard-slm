import express from 'express';
import HospitalController from '../controllers/hospitalController';

const router = express.Router();

router.get('/', HospitalController.readHospitalList);

export default router;