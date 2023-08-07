import { Injectable } from '@nestjs/common';
import { UserModel } from './model/user.model';
import { UserDTO } from './dto/user.dto';
import { UserRepository } from './repository/user.repository';
import { UserSchema } from './schema/user.schema';
import { plainToInstance } from 'class-transformer';
import { BaseService } from 'src/base/base.service';

@Injectable()
export class UsersService extends BaseService<UserDTO, UserSchema, UserModel, UserRepository> {
    constructor(private userRepository: UserRepository) {
        super(userRepository);
    };
    
    async checkIfAdmin(id: number): Promise<boolean>  {
        try {
            let isAdmin : boolean = await this.userRepository.checkIfAdmin(id);
            return isAdmin;
        } catch(e) {
            throw new Error(e.toString());
        }
    }
    
    convertUserModelToSchema(userModel: UserModel): UserSchema {
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
