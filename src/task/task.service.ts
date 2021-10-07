import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { throwError } from 'rxjs';
import { TaskStatus } from './task.models/task.status.enum';
import { TaskEntity } from './task.entity';
import { TaskRepository } from './task.repository';
import { CreateTaskDto } from './TaskDTOs/create-task.dto';

@Injectable()
export class TaskService {

    constructor(@InjectRepository(TaskRepository)
    private taskrepository:TaskRepository){}
     
    
    getTask():Promise<TaskEntity[]>{
        const data = this.taskrepository.find();
        console.log(data);
        return(data);
    }

    async gettaskbyid(id:string):Promise<TaskEntity>{
        
        const found =  await this.taskrepository.findOne(id);
        if(!found){
            throw new NotFoundException()
        }
        else{
            return found
        }
    }

    async createTask(createtaskdto:CreateTaskDto):Promise<TaskEntity>{
          const { title,description } = createtaskdto
          const createdtask = this.taskrepository.create({
            title,
            description,
            status:TaskStatus.OPEN
        })

        await this.taskrepository.save(createdtask);
        return createdtask;

        
    }

    async deletetask(id:string):Promise<void>{
       const result = await this.taskrepository.delete({ id:id });
       console.log(result)
       if(result.affected === 0 ){
            throw new NotFoundException("Element not found")
       }
        if(!result){
            throw new Error("ID DID NOY MATCHED");

        }
        
    }

    async updatetask(id:string, taskstatus:TaskStatus){
        const task = await this.gettaskbyid(id);
        task.status = taskstatus;
        await this.taskrepository.save(task)
        
        
    }
}
