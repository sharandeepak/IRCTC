import { Injectable } from '@nestjs/common';
import { UserModel } from './model/user.model';
import { UserDTO } from './dto/user.dto';
import { UserRepository } from './repository/user.repository';
import { UserSchema } from './schema/user.schema';
import { plainToInstance } from 'class-transformer';
import { log } from 'console';
import { throwError } from 'rxjs';

@Injectable()
export class UsersService {
    constructor(private userRepository: UserRepository){};
    
    async create(user: UserDTO): Promise<UserSchema> {
        try {
            let userModel: UserModel = await this.userRepository.create(user);
            let userSchema: UserSchema= this.convertUserModelToSchema(userModel);
            return userSchema;
        } catch(e) {
            throw new Error(e);
        } 
    }

    async findById(id: number): Promise<UserSchema>  {
        try {
            let userModel : UserModel = await this.userRepository.findById(id);
            let userSchema : UserSchema = this.convertUserModelToSchema(userModel);
            return userSchema;
        } catch(e) {
            throw new Error(e);
        }
    }

    async findAll(): Promise<UserSchema[]> {
        try {
            let userModelArr: UserModel[] = await this.userRepository.findAll();
            let userSchemaArr = userModelArr.map((model)=>this.convertUserModelToSchema(model));
            return userSchemaArr;
        } catch (e) {
            throw new Error(e);
        }
    }

    async updatePassword(id: number, password: string): Promise<UserSchema>  {
        try {
            let userModel : UserModel = await this.userRepository.updatePassword(id, password);
            let userSchema : UserSchema = this.convertUserModelToSchema(userModel);
            return userSchema;
        } catch (e) {
            throw new Error(e);
        }
    }
    
    async checkIfAdmin(id: number): Promise<boolean>  {
        try {
            let isAdmin : boolean = await this.userRepository.checkIfAdmin(id);
            return isAdmin;
        } catch(e) {
            throw new Error(e);
        }
    }

    async deleteUser(id: number): Promise<void> {
        try {
            await this.userRepository.deleteUser(id);
        } catch(e) {
            throw new Error(e);
        }
    }

    convertUserModelToSchema(userModel: UserModel) {
        let userSchema : UserSchema = plainToInstance(UserSchema, userModel.toJSON() as UserSchema);
        return userSchema;
    }
}
