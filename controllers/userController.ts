import { Request, Response, NextFunction } from 'express';
import { User as UserType, UserLoginRequest } from '../types/userType';
import { User } from '../models/index';

export default class UserController {
  static loginUser(req: Request, res: Response, next: NextFunction): void {
    let { 
      username,
      password
    }: UserLoginRequest = req.body;
    let options = {
      where: {
        username,
        password
      }
    }
    User.findOne(options)
      .then((data: UserType) => {
        if(!data) {
          return next({
            name: 'BadRequest',
            errors: [{
              message: 'Invalid username/password'
            }]
          })
        }
        res.status(201).json({
          status: 'success',
          results: {
            message: `Welcome ${data.username}`,
            username: data.username
          }
        })
      })
      .catch((err: any) => {
        return next(err);
      })
  }
}