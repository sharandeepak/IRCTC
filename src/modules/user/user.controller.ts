import { Controller, Get, Param, Query } from "@nestjs/common";
import { UserDTO } from "./dto/user.dto";
import { UsersService } from "./user.service";
import { UserSchema } from "./schema/user.schema";
import { BaseController } from "src/base/base.controller";

@Controller('user')
export class UserController extends BaseController<
    UserDTO,
    UserSchema,
    UsersService
> {
    constructor(private userService: UsersService) {
        super(userService);
    }

    @Get('/login')
    async login(@Query('user_name') userName: string, @Query('pwd') pwd: string) {
        try {
            let isSuccess: number = await this.userService.login(userName, pwd);
            return isSuccess;
        } catch (error) {
            throw new Error(error.toString());
        }
    }

    @Get('/checkifadmin/:id')
    async checkIfAdmin(@Param('id') id: number): Promise<boolean> {
        try {
            let isAdmin: boolean = await this.userService.checkIfAdmin(id);
            return isAdmin;
        } catch (error) {
            console.error('An error occurred:', error);
        }
    }

    // @Post()
    // async create(@Body() userDto: UserDTO): Promise<UserSchema> {
    //     try {
    //         let userSchema : UserSchema = await this.userService.create(userDto);
    //         return userSchema;
    //     } catch(e) {
    //         console.error(e);
    //     }
    // }

    // @Get(':id')
    // async findById(@Param('id') id: number): Promise<UserSchema> {
    //     try {
    //         let userSchema : UserSchema = await this.userService.findById(id);
    //         return userSchema;
    //     } catch(error) {
    //         console.error('An error occurred:', error);
    //     }
    // }

    // @Get()
    // async findAll(): Promise<UserSchema[]> {
    //     try {
    //         let userSchema : UserSchema[] = await this.userService.findAll();
    //         return userSchema;
    //     } catch (error) {
    //         console.error('An error occurred:', error);
    //     }
    // }

    // @Put(":id")
    // async update(@Param("id") id: number, @Body() dto: UserDTO): Promise<UserSchema> {
    //     try {
    //         let userSchema : UserSchema = await this.userService.update(id, dto);
    //         return userSchema;
    //     } catch(error) {
    //         console.error('An error occurred:', error);
    //     }
    // }

    // @Patch(":id")
    // async partialUpdate(@Param("id") id: number, @Body() dto: UserDTO): Promise<UserSchema> {
    //     try {
    //         let userSchema : UserSchema = await this.userService.partialUpdate(id, dto);
    //         return userSchema;
    //     } catch(error) {
    //         console.error('An error occurred:', error);
    //     }
    // }

    // @Delete(":id")
    // async deleteUser(@Param('id') id: number): Promise<void> {
    //     try {
    //         await this.userService.delete(id);
    //     } catch(error) {
    //         console.error('An error occurred:', error);
    //     }
    // }
}