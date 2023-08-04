import { Injectable } from "@nestjs/common";
import { UserModel } from "../model/user.model";
import { UserDTO } from "../dto/user.dto";

@Injectable()
export class UserRepository {
    async create(userDTO: UserDTO) : Promise<UserModel> {
        try {
            let model = await UserModel.create(userDTO);
            return model;
        } catch(e) {
            console.log(e);
            throw new Error(e);
        }
    }

    async findById(id: number) : Promise<UserModel> {
        try {
            let model = await UserModel.findByPk(id);
            return model;
        } catch(e) {
            throw new Error(e);
        }
    }

    async findAll() : Promise<UserModel[]> {
        try {
            let modelArr : UserModel[] = await UserModel.findAll();
            return modelArr;
        } catch(e) {
            throw new Error(e);
        }
    }

    async updatePassword(id: number, newPassword: string) : Promise<UserModel> {
        try {
            let model = await this.findById(id);
            model.password = newPassword;
            let updatedModel = await model.save();
            return updatedModel;
        } catch(e) {
            throw new Error(e);
        }
    }

    async checkIfAdmin(id: number) : Promise<boolean> {
        try{
            let user = await this.findById(id);
            if (user) {
                let isAdmin = user.isAdmin;
                return isAdmin;
            } else {
                console.log("User Doesn't exists !!");
            }
        }
        catch(e) {
            throw new Error(e);
        }
    }

    async deleteUser(id: number): Promise<void> {
        try{
            let user = await this.findById(id);
            if(user) {
                user.destroy();
                console.log("User Deleted Successfully");
            } else {
                throw new Error("User Doesn't Exist");
            }
        } catch(e) {
            throw new Error(e);
        }
    }
}