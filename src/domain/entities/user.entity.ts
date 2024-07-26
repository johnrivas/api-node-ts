type UserRole = 'ADMIN' | 'USER';

export class UserEntity {
    constructor(
        public id: number,
        public name: string,
        public email: string,
        public login: string,
        public password: string,
        public active: boolean,
        public roles: UserRole[],
        public created_at?: Date,
        public updated_at?: Date
    ){}

    static fromObject(obj: { [ key: string ]: any }): UserEntity {
        const { id, user_id, name, email, login, password, active, roles, created_at, updated_at } = obj;
        if (!id && !user_id) throw new Error('User id is required');
        return new UserEntity(
            id || user_id,
            name,
            email,
            login,
            password,
            active,
            roles,
            created_at,
            updated_at
        );
    }
}