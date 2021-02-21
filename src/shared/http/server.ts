import 'reflect-metadata';
import express, { NextFunction, Request, response, Response } from 'express';
import cors from 'cors';
import routes from './routes'
import AppError from '@shared/errors/AppError';
import '@shared/typeorm'; 

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use((err : Error,req : Request, res : Response, nex : NextFunction )=>{
  if(err instanceof AppError){
    return response.status(err.statusCode).json({
      status : 'error',
      message : err.message
    });
  }
  else{
    return response.status(500).json({
        status : 'error',
        message : 'Internal server error'
    });
  }
})

app.listen(3333,()=>{
  console.log('Server started on port 3333 \u{1F3C6}')
})
