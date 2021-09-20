import { Injectable, NotFoundException } from '@nestjs/common';
import { NotFoundError } from 'rxjs';
import { Task, TaskStatus } from 'src/task.models/task.model';
import { v4 as uuid} from 'uuid';
import { CreateTaskDto } from './TaskDTOs/create-task.dto';

@Injectable()
export class TaskService {
    private task: Task[] = [];
    getTask():Task[]{
        return this.task;
    }

    gettaskbyid(id:string):Task{
        
        const found =  this.task.find((task)=> task.id === id);
        if(!found){
            throw new NotFoundException()
        }
        else{
            return found
        }
    }

    createTask(createtaskdto:CreateTaskDto):Task{

        const {title, description} = createtaskdto
        const newTask:Task ={
            id:uuid(),
            title,
            description,
            status: TaskStatus.OPEN
        }
        this.task.push(newTask);
        return newTask;
    }

    deletetask(id:string):Task[]{
        this.task = this.task.filter((task)=>task.id!= id);
        return this.task
    }

    updatetask(id:string, taskstatus:TaskStatus){
        const task = this.gettaskbyid(id);
        return task.status = taskstatus;
    }
}
