import express from 'express';
import VendorController from '../controllers/vendorController';

const router = express.Router();

router.get('/', VendorController.readVendorList);

export default router;