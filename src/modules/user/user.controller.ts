import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { UserDTO } from "./dto/user.dto";
import { UsersService } from "./user.service";
import { UserSchema } from "./schema/user.schema";

@Controller('user') 
export class UserController {
    constructor(private userService: UsersService) {}

    @Post()
    async create(@Body() userDto: UserDTO): Promise<UserSchema> {
        try {
            let userSchema : UserSchema = await this.userService.create(userDto);
            return userSchema;
        } catch(error) {
            console.error(error.message);                 
        }
    }

    @Get(':id')
    async findById(@Param('id') id: number): Promise<UserSchema> {
        try {
            let userSchema : UserSchema = await this.userService.findById(id);
            return userSchema;
        } catch(error) {
            console.error('An error occurred:', error);
        }
    }

    @Get()
    async findAll(): Promise<UserSchema[]> {
        try {
            let userSchema : UserSchema[] = await this.userService.findAll();
            return userSchema;
        } catch (error) {
            console.error('An error occurred:', error);
        }
    }

    @Patch("/changepwd")
    async updatePassword(@Query("id") id: number, @Query("pwd") pwd: string): Promise<UserSchema> {
        try {
            let userSchema : UserSchema = await this.userService.updatePassword(id, pwd);
            return userSchema;
        } catch(error) {
            console.error('An error occurred:', error);
        }
    }

    @Delete(":id")
    async deleteUser(@Param('id') id: number): Promise<void> {
        try {
            await this.userService.deleteUser(id);
        } catch(error) {
            console.error('An error occurred:', error);
        }
    }
}