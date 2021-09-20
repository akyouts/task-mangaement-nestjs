import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { title } from 'process';
import { Task, TaskStatus } from 'src/task.models/task.model';

import { TaskService } from './task.service';
import { CreateTaskDto } from './TaskDTOs/create-task.dto';

@Controller('task')
export class TaskController {
    constructor(private taskservice: TaskService){}

    @Get()
    getdata():Task[]{
        return this.taskservice.getTask();
    }

    @Post()
    createTask(@Body() createtaskdto: CreateTaskDto):Task{
            return this.taskservice.createTask(createtaskdto);

    }

    @Get('/:id')
    gettaskbyid(@Param('id') id:string){
        return this.taskservice.gettaskbyid(id);

    }

    @Delete('/:id')
    deletetaskbyid(@Param('id') id:string){
        return this.taskservice.deletetask(id)
    }

    @Patch('/:id/status')
    updatestatus(@Param('id') id:string,@Body('status') status : TaskStatus  ){
        return this.taskservice.updatetask(id,status);
    }
}
