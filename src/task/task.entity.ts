import { TaskStatus } from "./task.models/task.status.enum"; 
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('task')
export class TaskEntity{


    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    title:string;

    @Column()
    description:string;

    @Column()
    status:TaskStatus;
}