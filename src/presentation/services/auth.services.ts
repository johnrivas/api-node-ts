import { postgres } from '../../data/postgres/index';
import { User } from '../../data/postgres/models';
import { CreateUserDto, UpdateUserDto, UserEntity } from '../../domain';

export class AuthService {
    
    private userRepository = postgres.getRepository(User);

    public async getUserById(id: string): Promise<UserEntity> {
        const user = await this.userRepository.findOne({
            where: { user_id: id }
        });
        if (!user) throw 'User not found';
        return UserEntity.fromObject(user);
    }

    public async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
        const user = this.userRepository.create(createUserDto);
        await this.userRepository.save(user);
        return UserEntity.fromObject(user);
    }

    public async updateUser(id: string, updateUserDto: UpdateUserDto): Promise<UserEntity> {
        if (!id) throw 'User id is required';

        let user = await this.userRepository.findOne({
            where: { user_id: id }
        });

        if (!user) throw 'User not found';
                
        await this.userRepository.update(id, updateUserDto);

        user = await this.userRepository.findOne({
            where: { user_id: id }
        });
        
        return UserEntity.fromObject(user!);
    }

    public async deleteUser(id: string): Promise<UserEntity> {
        if (!id) throw 'User id is required';

        const user = await this.userRepository.findOne({
            where: { user_id: id }
        });
        if (!user) throw 'User not found';

        await this.userRepository.delete(id);

        return UserEntity.fromObject(user);
    }

}