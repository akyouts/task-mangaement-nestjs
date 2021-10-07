import { BadRequestException, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './aurth.model/user.model';
import { UserRepository } from './aurth.model/user.repository';
import { Userdto } from './aurth.model/user.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { jwtPayload } from './jwt-interface.payload';

@Injectable()
export class AuthService {
    constructor(@InjectRepository(UserRepository)
    private user:UserRepository, 
    private jwtService:JwtService)
    
    {}
     
    async createUser(userdto:Userdto):Promise<void>{
      return  this.user.createUser(userdto);
    }
    
    async signIn(userdto:Userdto):Promise<{ accessToken: string }>{
        const { username , password } = userdto;
        const user = await this.user.findOne({ username:username })
        const result = await bcrypt.compare(password,user.password)
        
        
        if(result){
            const payload:jwtPayload = { username }
            const accessToken = await  this.jwtService.sign(payload)
            return { accessToken };
        }
        else{
            throw new BadRequestException(' PLeae check the loging details ');
        }
    }

}

