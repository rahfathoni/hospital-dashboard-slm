import { Request, Response, NextFunction } from 'express';
import { Vendor as VendorTypes, VendorCreateRequest, VendorCreateResponse } from '../types/vendorType';
import { Vendor } from '../models/index';

export default class VendorController {
  static readVendorList(req: Request, res: Response, next: NextFunction): void {
    let options = {
      order: [['id', 'ASC']]
    };
    Vendor.findAll(options)
      .then((data: VendorTypes[]) => {
        res.status(200).json({
          status: 'success',
          result: data
        })
      })
      .catch((err: any) => {
        return next(err);
      })
  }

  static searchVendorByHospitalId(req: Request, res: Response, next: NextFunction): void {
    let { hospitalId }: { hospitalId?: string } = req.params;
    let options = {
      where: {
        hospitalId: Number(hospitalId)
      }
    };
    Vendor.findAll(options)
      .then((data: VendorTypes[]) => {
        res.status(200).json({
          status: 'success',
          result: data
        })
      })
      .catch((err: any) => {
        return next(err);
      })
  }

  static createVendor(req: Request, res: Response, next: NextFunction): void {
    let { 
      name,
      hospitalId,
      address
    }: VendorCreateRequest = req.body;
    let input = {
      name,
      hospitalId: Number(hospitalId),
      address
    }
    Vendor.create(input)
      .then((data: VendorCreateResponse) => {
        return res.status(201).json({
          status: 'success',
          result: data
        })
      })
      .catch((err: any) => {
        return next(err);
      })
  }
} 