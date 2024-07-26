import { compareSync, genSaltSync, hashSync } from 'bcryptjs';

export class BcryptAdapter {
    
    static hash(value: string) {
        return hashSync(value, genSaltSync());
    }
    
    static compare(value: string, hash: string) {
        return compareSync(value, hash);
    }
}