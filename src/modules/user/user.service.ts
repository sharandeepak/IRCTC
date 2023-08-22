import { Injectable } from '@nestjs/common';
import { UserModel } from './model/user.model';
import { UserDTO } from './dto/user.dto';
import { UserRepository } from './repository/user.repository';
import { UserSchema } from './schema/user.schema';
import { plainToInstance } from 'class-transformer';
import { BaseService } from 'src/base/base.service';
import { CacheService } from 'src/core/cache/cache.service';
import { EventEmitterService } from 'src/core/event_emitter/event_emitter.service';

@Injectable()
export class UsersService extends BaseService<UserDTO, UserSchema, UserModel, UserRepository> {
    constructor(private userRepository: UserRepository, private cacheService: CacheService, private readonly eventEmitterService: EventEmitterService) {
        super(userRepository);
    };

    TIME_INTERVAL: number = 5;

    async isValidToLogin(userName: string): Promise<boolean> {
        try {
            const attemptCount: string = await this.cacheService.get(userName + '-login_attempt');
            if(!attemptCount) {
                await this.cacheService.setWithExpiry(userName + '-login_attempt', '5', this.TIME_INTERVAL);
            } else {
                const count = Number(attemptCount);
                if(count < 0) {
                    this.eventEmitterService.userBlocked(userName);
                    throw false;
                }
            }
            return true;
        } catch (error) {
            console.error('An error occurred:', error);
        }
    }

    async login(userName: string, pwd: string): Promise<number> {
        try {
            const isValid: boolean = await this.isValidToLogin(userName);
            if (isValid) {
                const isSuccess: number = await this.userRepository.login(userName, pwd);
                await this.cacheService.decr(userName+'-login_attempt');
                // console.error('showing attempt count');
                // console.error(
                //     await this.cacheService.get(userName + '-login_attempt')
                // );
                return isSuccess;
            } else {
                throw new Error(
                    'Max Login attempt reached try after ' + this.TIME_INTERVAL.toString() + 'Sec'
                );
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
