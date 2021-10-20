import express, { Request, Response, NextFunction, } from 'express';

export class TestController{
  private _path:string = '';
  readonly router = express.Router();
  constructor(){
    this._initializeRoutes();
  }

  private _initializeRoutes(){
    this.router.get(`${this._path}/a`, this._sendA)
    this.router.get(`${this._path}/b`, this._sendB)
  }

  private _sendA = async(req:Request, res:Response, next:NextFunction) => {
    res.json({message: 'aaaaa'})
  }

  private _sendB = async(req:Request, res:Response, next:NextFunction) => {
    res.json({message: 'bbbbb'})
  }
}