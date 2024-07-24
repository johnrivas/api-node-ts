import { Router } from 'express';

import { AuthController } from './controller';

export class AuthRoutes {

    static get routes(): Router {
        const router = Router();

        const authController = new AuthController();

        router.get('/users/:id', authController.getUserById);
        router.post('/users', authController.createUser);
        router.put('/users/:id', authController.updateUser);
        router.delete('/users/:id', authController.deleteUser);

        return router;
    }
}