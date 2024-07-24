import express from 'express';
import { envs } from '../config/env.plugin';

export class Server {
    private app = express();
    async start(){
        //Middlewares
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));

        this.app.listen(envs.PORT, () => {
            console.log(`Server is running on port ${envs.PORT}`);
        });
    }
}