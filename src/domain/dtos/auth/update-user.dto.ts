import { BcryptAdapter } from '../../../config/bcrypt.adapter';

export class UpdateUserDto {
    
    constructor(
        public name?: string,
        public email?: string,
        public login?: string,
        public password?: string,
        public active?: boolean,
        public roles?: string[],
    ){}

    get values() {
        const returnObj: {[key: string]: any} = {};
    
        if ( this.name ) returnObj.name = this.name;
        if ( this.email ) returnObj.email = this.email;
        if ( this.login ) returnObj.login = this.login;
        if ( this.password ) returnObj.password = this.password;
        if ( this.active ) returnObj.active = this.active;
        if ( this.roles ) returnObj.roles = this.roles;
    
        return returnObj;
    }

    static create(object: { [key:string]:any } ): UpdateUserDto {
        let { name, email, login, password, active, roles } = object;
        if (password) {
            password = BcryptAdapter.hash(password);
        }
        
        return new UpdateUserDto(name, email, login, password, active, roles);
    }
}