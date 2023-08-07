import { Inject, Injectable } from "@nestjs/common";
import { UserModel } from "../model/user.model";
import { UserDTO } from "../dto/user.dto";
import { UserNotFoundError } from "src/custom_error/custom_error";
import { SEQUELIZE } from "src/core/constants";
import { BaseRepository } from "src/base/base.repository";


@Injectable()
export class UserRepository extends BaseRepository<UserDTO, UserModel> {
    constructor(@Inject(SEQUELIZE) database){
        super(database, 'UserModel');
    }

    async checkIfAdmin(id: number): Promise<boolean> {
        try{
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