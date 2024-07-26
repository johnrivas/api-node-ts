import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('users') //nombre de la tabla del BD
export class User {
    @PrimaryGeneratedColumn('uuid')
    user_id: string;

    @Column('text', {nullable: false})
    name: string;

    @Column('text', {nullable: false})
    email: string;

    @Column('text', {nullable: false})
    login: string;

    @Column('text', {nullable: false})
    password: string;

    @Column('boolean', {nullable: false, default: true})
    active: boolean;

    @Column('text', { nullable: false, array: true })
    roles: string[];

    @CreateDateColumn({ type: 'timestamp' }) 
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updated_at: Date;
}