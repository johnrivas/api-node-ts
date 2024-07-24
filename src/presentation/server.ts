import express, { Router } from 'express';

import { envs } from '../config/env.plugin';

interface Options{
    port: number;
    routes: Router;
}

export class Server {
    private app = express();
    private readonly port: number;
    private readonly routes: Router;

    constructor(options: Options){
        this.port = options.port;
        this.routes = options.routes;
    }

    async start(){
        //Middlewares
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));

        //Routes
        this.app.use('/api', this.routes);

        this.app.listen(envs.PORT, () => {
            console.log(`Server is running on port ${envs.PORT}`);
        });
    }
}