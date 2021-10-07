import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './aurth.model/user.model';
import { UserRepository } from './aurth.model/user.repository';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  
  imports:[
    PassportModule.register({defaultStrategy: 'jwt'}),
    JwtModule.register({
          secret:'topscercet',
          signOptions:{
            expiresIn:3600
          }
    }),
    TypeOrmModule.forFeature(
    [UserRepository]
  )],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
