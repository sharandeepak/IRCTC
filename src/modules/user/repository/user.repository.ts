import { Inject, Injectable } from "@nestjs/common";
import { UserModel } from "../model/user.model";
import { UserDTO } from "../dto/user.dto";
import { UserNotFoundError } from "src/custom_error/custom_error";
import { SEQUELIZE } from "src/core/constants";
import { BaseRepository } from "src/base/base.repository";
import { BaseRepositoryInterface } from "src/base/base.repository.interface";
import { Sequelize } from "sequelize";
import { UserSchema } from "../schema/user.schema";


@Injectable()
export class UserRepository extends BaseRepository<UserDTO, UserModel> {
    constructor(@Inject(SEQUELIZE) database) {
        super(database, 'UserModel');
    }

    async login(userName: string, pwd: string): Promise<number> {
        try {
            let isValidCredential: number = await this.database.UserModel.count(
                {
                    where: {
                        userName: userName,
                        password: pwd
                    }
                }
            );
            if(!isValidCredential) {
                throw new UserNotFoundError('Please Enter Valid Credentials');
            }
            return isValidCredential;
        } catch (error) {
            throw new UserNotFoundError('Please Enter Valid Credentials');
        }
    }

    async checkIfAdmin(id: number): Promise<boolean> {
        try {
            let user = await this.findById(id);
            if (user) {
                let isAdmin = user.isAdmin;
                return isAdmin;
            } else {
                throw new UserNotFoundError("User not found !!");
            }
        }
        catch(e) {
            throw new Error(e.toString());
        }
    }
    
}