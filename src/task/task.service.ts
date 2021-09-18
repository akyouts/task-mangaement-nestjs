import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from 'src/task.models/task.model';
import { v4 as uuid} from 'uuid';

@Injectable()
export class TaskService {
    private task: Task[] = [];
    getTask():Task[]{
        return this.task;
    }

    createTask(title:string,description:string):Task{
        const newTask:Task ={
            id:uuid(),
            title,
            description,
            status: TaskStatus.OPEN
        }
        this.task.push(newTask);
        return newTask;
    }
}
