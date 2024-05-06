import { Request, Response, NextFunction } from 'express';
import { Hospital as HospitalTypes } from '../types/hospitalType';
import { Hospital } from '../models/index';

export default class HospitalController {
  static readHospitalList(req: Request, res: Response, next: NextFunction): void {
    let options = {
      order: [['name', 'ASC']]
    };
    Hospital.findAll(options)
      .then((data: HospitalTypes[]) => {
        res.status(200).json({
          status: 'success',
          result: data
        })
      })
      .catch((err: any) => {
        return next(err);
      })
  }
}