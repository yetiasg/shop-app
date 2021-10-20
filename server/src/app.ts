import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import config from './config/config';


export class App{
  public app: express.Application;
  constructor(controllers:any, public port:number){
    this.app = express();
    this._initializeMiddlewares();
    this._initializeControllers(controllers)
  }

  private _initializeMiddlewares = () => {
    this.app.use(morgan('dev'));
    this.app.use(cors({
      allowedHeaders: ['Content-Type', 'Authorization']
    }));
    this.app.use(express.urlencoded({extended: true}));
    this.app.use(express.json());
  }

  private _initializeControllers = (controllers: any) => {
    controllers.forEach((controller:any) => {
      this.app.use('/', controller.router)
    })
  }

  public listen = () => {
    this.app.listen(this.port, () => {
      console.log(`Listening on port: ${this.port}`);
    })
  }
}