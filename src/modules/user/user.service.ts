import { Injectable, Query } from '@nestjs/common';
import { UserModel } from './model/user.model';
import { UserDTO } from './dto/user.dto';
import { UserRepository } from './repository/user.repository';
import { UserSchema } from './schema/user.schema';
import { plainToInstance } from 'class-transformer';
import { BaseService } from 'src/base/base.service';
import { InjectRedis, Redis } from '@nestjs-modules/ioredis';

@Injectable()
export class UsersService extends BaseService<UserDTO, UserSchema, UserModel, UserRepository> {
    constructor(private userRepository: UserRepository, @InjectRedis() private readonly redis: Redis) {
        super(userRepository);
    };

    TIME_INTERVAL: number = 15;

    async isValidToLogin(userName: string): Promise<boolean> {
        try {
            let loginCount: number = await this.redis.incr(userName+'-login_attempt');
            await this.redis.expire(userName + '-login_attempt', this.TIME_INTERVAL, "NX");
            if (loginCount > 5) {
                throw new Error("Max Login attempt reached try after "+ this.TIME_INTERVAL.toString() + "Sec");
            } return true;
        } catch (error) {
            console.error('An error occurred:', error);
        }
    }

    async login(userName: string, pwd: string): Promise<number> {
        try {
            const isValid: boolean = await this.isValidToLogin(userName);
            if (isValid) {
                const isSuccess = this.userRepository.login(userName, pwd);
                return isSuccess;
            }
        } catch (error) {
            throw new Error(error.toString());
        }
    }
    
    async checkIfAdmin(id: number): Promise<boolean>  {
        try {
            let isAdmin : boolean = await this.userRepository.checkIfAdmin(id);
            return isAdmin;
        } catch(e) {
            throw new Error(e.toString());
        }
    }
    
    convertModelToSchema(userModel: UserModel): UserSchema {
        let userSchema : UserSchema = plainToInstance(UserSchema, userModel.toJSON() as UserSchema);
        return userSchema;
    }

    // async create(user: UserDTO): Promise<UserSchema> {
        //     try {
            //         let userModel: UserModel = await this.userRepository.create(user);
            //         let userSchema: UserSchema= this.convertUserModelToSchema(userModel);
            //         return userSchema;
            //     } catch(e) {
    //         throw new Error(e.toString());
    //     } 
    // }

    // async findById(id: number): Promise<UserSchema>  {
    //     try {
    //         let userModel: UserModel = await this.userRepository.findById(id);
    //         let userSchema: UserSchema = this.convertUserModelToSchema(userModel);
    //         return userSchema;
    //     } catch(e) {
    //         throw new Error(e.toString());
    //     }
    // }

    // async findAll(): Promise<UserSchema[]> {
    //     try {
    //         let userModelArr: UserModel[] = await this.userRepository.findAll();
    //         let userSchemaArr = userModelArr.map((model)=>this.convertUserModelToSchema(model));
    //         return userSchemaArr;
    //     } catch (e) {
    //         throw new Error(e.toString());
    //     }
    // }

    // async update(dto: UserDTO): Promise<UserSchema>  {
    //     try {
    //         let userModel : UserModel = await this.userRepository.updatePassword(dto);
    //         let userSchema : UserSchema = this.convertUserModelToSchema(userModel);
    //         return userSchema;
    //     } catch (e) {
    //         throw new Error(e.toString());
    //     }
    // }
    
    // async delete(id: number): Promise<void> {
    //     try {
    //         await this.userRepository.deleteUser(id);
    //     } catch(e) {
    //         throw new Error(e.toString());
    //     }
    // }
    
}
