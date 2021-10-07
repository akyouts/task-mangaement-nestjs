import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('auth')
export class User extends BaseEntity{

    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column({unique:true})
    username:string

    @Column()
    password:string

}