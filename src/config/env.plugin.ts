import 'dotenv/config';
import * as env from 'env-var';

export const envs = {
    PORT: env.get('PORT').required().asPortNumber(),
    
    POSTGRES_USER: env.get('POSTGRES_USER').required().asString(),
    POSTGRES_DB: env.get('POSTGRES_DB').required().asString(),
    POSTGRES_PORT: env.get('POSTGRES_PORT').required().asPortNumber(),
    POSTGRES_PASSWORD: env.get('POSTGRES_PASSWORD').required().asString(),
}