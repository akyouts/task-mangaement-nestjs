import { Body, Controller, Get, Post } from '@nestjs/common';
import { title } from 'process';
import { Task } from 'src/task.models/task.model';

import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
    constructor(private taskservice: TaskService){}

    @Get()
    getdata():Task[]{
        return this.taskservice.getTask();
    }

    @Post()
    createTask(@Body('title') title:string, @Body('description') description:string):Task{
            return this.taskservice.createTask(title,description);

    }
}
