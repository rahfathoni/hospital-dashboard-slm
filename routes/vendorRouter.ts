import express from 'express';
import VendorController from '../controllers/vendorController';

const router = express.Router();

router.get('/', VendorController.readVendorList);
router.get('/:hospitalId', VendorController.searchVendorByHospitalId);
router.post('/', VendorController.createVendor);

export default router;