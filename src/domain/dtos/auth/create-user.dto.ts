import { BcryptAdapter } from '../../../config/bcrypt.adapter';

export class CreateUserDto {
    
    constructor(
        public name: string,
        public email: string,
        public login: string,
        public password: string,
        public active?: boolean,
        public roles?: string[],
    ){}

    static create(object: { [key:string]:any } ): CreateUserDto {
        let { name, email, login, password, active, roles } = object;
        if (!name) throw new Error('Name is required');
        if (!email) throw new Error('Email is required');
        if (!login) throw new Error('Login is required');
        if (!password) throw new Error('Password is required');

        if(typeof active !== 'boolean'){
            active = true;
        }

        if(!roles){
            roles = ['USER'];
        }

        password = BcryptAdapter.hash(password);

        return new CreateUserDto(name, email, login, password, active, roles);
    }
}