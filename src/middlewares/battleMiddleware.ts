import { Request, Response, NextFunction } from "express";



export function errorHandler(error:any, req:Request, res:Response, next:NextFunction){
    console.log(error)
    if (error.response) {
        return res.sendStatus(error.response.status);
      }
    
      res.sendStatus(500); // internal server error
}