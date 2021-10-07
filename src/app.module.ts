import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { TaskEntity } from './task/task.entity';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/aurth.model/user.model';

@Module({
  imports: [TaskModule, 
  TypeOrmModule.forRoot({
    type:'postgres',
    host:'localhost',
    port:5432,
    username:'postgres',
    password:'9554701559',
    database:'task_management',
    entities:[TaskEntity,User],
    synchronize:true
    

  }), AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
