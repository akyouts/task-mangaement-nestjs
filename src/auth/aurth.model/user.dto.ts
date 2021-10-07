import { IsString, Matches, MaxLength, MIN, MinLength } from "class-validator"

export class Userdto {

@MaxLength(20)
@MinLength(4)
@IsString()
username : string

@IsString()
@MinLength(8, { message:'password must be greater then 8 character' })
@MaxLength(30,{ message:'password must be less then 30 character' })
@Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
{
    message:'password must contain lowerCase UpperCase and a Special Character'
})
password : string

}