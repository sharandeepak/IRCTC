import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from "@nestjs/common";
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
        } catch(e) {
            console.error(e);                 
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

    @Put(":id")
    async update(@Param("id") id, @Body() dto: UserDTO): Promise<UserSchema> {
        try {
            let userSchema : UserSchema = await this.userService.update(id, dto);
            return userSchema;
        } catch(error) {
            console.error('An error occurred:', error);
        }
    }

    @Patch(":id")
    async partialUpdate(@Param("id") id, @Body() dto: UserDTO): Promise<UserSchema> {
        try {
            let userSchema : UserSchema = await this.userService.partialUpdate(id, dto);
            return userSchema;
        } catch(error) {
            console.error('An error occurred:', error);
        }
    }

    @Delete(":id")
    async deleteUser(@Param('id') id: number): Promise<void> {
        try {
            // await this.userService.delete(id);
        } catch(error) {
            console.error('An error occurred:', error);
        }
    }
}