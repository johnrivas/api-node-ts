import { Request, Response } from 'express';

export class AuthController {
    constructor(){}

    public getUserById = (req: Request, res: Response) => {
        try{
            res.status(200).json({message: 'getUserById'});           
        }catch(err){
            res.status(500).json({message: err});
        }
    }

    public createUser = (req: Request, res: Response) => {
        try{
            res.status(200).json({message: 'createUser'});           
        }catch(err){
            res.status(500).json({message: err});
        }
    }

    public updateUser = (req: Request, res: Response) => {
        try{
            res.status(200).json({message: 'updateUser'});           
        }catch(err){
            res.status(500).json({message: err});
        }
    }

    public deleteUser = (req: Request, res: Response) => {
        try{
            res.status(200).json({message: 'deleteUser'});           
        }catch(err){
            res.status(500).json({message: err});
        }
    }
}