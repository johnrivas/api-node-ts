import { Router } from 'express';

import { AuthController } from './controller';
import { AuthService } from '../services/auth.services';

export class AuthRoutes {

    static get routes(): Router {
        const router = Router();
        
        const authCService = new AuthService();
        const authController = new AuthController(authCService);

        router.get('/users/:id', authController.getUserById);
        router.post('/users', authController.createUser);
        router.put('/users/:id', authController.updateUser);
        router.delete('/users/:id', authController.deleteUser);

        return router;
    }
}