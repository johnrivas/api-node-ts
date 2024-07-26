import { DataSource } from 'typeorm';

import { envs } from '../../config/env.plugin';
import { User } from './models';

export const postgres = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: envs.POSTGRES_PORT,
    username: envs.POSTGRES_USER,
    password: envs.POSTGRES_PASSWORD,
    database: envs.POSTGRES_DB,
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
});