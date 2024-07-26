import { Request, Response } from 'express';

import { AuthService } from '../services/auth.services';
import { CreateUserDto, UpdateUserDto } from '../../domain';

export class AuthController {
    constructor(
        private authService: AuthService
    ){}

    public getUserById = async (req: Request, res: Response) => {
        const { id } = req.params;
        try{
            const user = await this.authService.getUserById(id);

            const { password, ...userWithoutPassword } = user;
            res.status(200).json(userWithoutPassword);
        }catch(err){
            res.status(500).json({message: err});
        }
    }

    public createUser = async (req: Request, res: Response) => {
        try{
            const createUserDto = CreateUserDto.create(req.body);
            const newUser = await this.authService.createUser(createUserDto);

            const { password, ...userWithoutPassword } = newUser;
            res.status(200).json(userWithoutPassword);     
        }catch(err){
            res.status(500).json({message: err});
        }
    }

    public updateUser = async (req: Request, res: Response) => {
        const { id } = req.params;
        try{
            const updateUserDto = UpdateUserDto.create(req.body);
            const updatedUser = await this.authService.updateUser(id, updateUserDto);
            const { password, ...userWithoutPassword } = updatedUser;
            res.status(200).json(userWithoutPassword);        
        }catch(err){
            res.status(500).json({message: err});
        }
    }

    public deleteUser = async (req: Request, res: Response) => {
        const { id } = req.params;
        try{
            const deletedUser = await this.authService.deleteUser(id);
            const { password, ...userWithoutPassword } = deletedUser;
            res.status(200).json(userWithoutPassword);           
        }catch(err){
            res.status(500).json({message: err});
        }
    }
}