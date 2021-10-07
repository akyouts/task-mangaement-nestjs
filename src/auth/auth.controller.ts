import { Body, Controller, Post } from '@nestjs/common';
import { User } from './aurth.model/user.model';
import { Userdto } from './aurth.model/user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authservice:AuthService ){}
    @Post('/signup')
  async signUp(@Body() userdto:Userdto ){
     return this.authservice.createUser(userdto);
    }

    @Post('/signin')
  async  signin(@Body() userdto:Userdto):Promise<{accessToken : string}>{
        console.log('this is running');
        
       return this.authservice.signIn(userdto);
    }
}
