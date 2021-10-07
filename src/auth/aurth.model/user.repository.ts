import { EntityRepository, Repository } from "typeorm";
import { User } from "./user.model";
import { Userdto } from "./user.dto";
import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import * as bcrypt from 'bcrypt';

@EntityRepository(User)
export class UserRepository extends Repository<User>{

    async createUser(userdto:Userdto):Promise<void>{
        const {username,password} = userdto;
        
        const existingUserbyEmail = await this.findOne({
            username
        })

        if(existingUserbyEmail) {
            throw  new ConflictException('username already exist');
        }
        const hashPassword :string = await bcrypt.hash(password,10);
        console.log(hashPassword);
        
        const user = this.create({username,password:hashPassword});
        

        await this.save(user);


        // try{

        // }catch(error){
        //        if(error.code === '23505'){
        //             throw  new ConflictException('username already exist');
        //        }else{
        //             throw new InternalServerErrorException();
        //        }

        // }
    }


}