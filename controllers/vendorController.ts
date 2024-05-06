import { Request, Response, NextFunction } from 'express';
import { Vendor as VendorTypes, VendorCreateRequest } from '../types/vendorType';
import { Hospital as HospitalTypes } from '../types/hospitalType'
import { Vendor, Hospital } from '../models/index';

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
    Hospital.findByPk(hospitalId, {
      include: Vendor
    })
      .then((hospital: HospitalTypes) => {
        if(!hospital) {
          return next({
            name: 'NotFound',
            errors: [{
              message: `Hospital with ID ${hospital.id} not found`
            }]
          })
        }
        const vendors = hospital.Vendors;
        res.status(200).json({
          status: 'success',
          result: vendors
        })
      })
      .catch((err: any) => {
        return next(err);
      })
  }

  static createVendor(req: Request, res: Response, next: NextFunction): void {
    let { 
      name,
      relatedHospital, // string 1,2,3...
      address
    }: VendorCreateRequest = req.body;

    if (!relatedHospital) {
      return next({
        name: 'BadRequest',
        errors: 'relatedHospital must be filled'
      })
    }

    Vendor.create({ name, address })
      .then(async (newVendor: VendorTypes) => {
        const hospitalIds: number[] = relatedHospital.split(',').map((id: string) => parseInt(id.trim(), 10));

        await Promise.all(hospitalIds.map(async (hospitalId: number) => {
          Hospital.findByPk(hospitalId)
            .then(async (hospital: any) => {
              if (!hospital) {
                return next({
                  name: 'NotFound',
                  errors: [{
                    message: `Hospital with ID ${hospital.id} not found`
                  }]
                })
              }
              await hospital.addVendor(newVendor);
            })
            .catch((err: any) => {
              return next(err);
            })
        }));

        res.status(201).json({
          status: 'success',
          result: newVendor
        });
      })
      .catch((err: any) => {
        return next(err);
      })
  }
}