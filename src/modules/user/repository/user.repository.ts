import { Inject, Injectable } from "@nestjs/common";
import { UserModel } from "../model/user.model";
import { UserDTO } from "../dto/user.dto";
import { UserNotFoundError } from "src/custom_error/custom_error";
import { BaseRepositoryInterface } from "src/base/base.repository.interface";
import { SEQUELIZE } from "src/core/constants";
import { BaseRepository } from "src/base/base.repository";


@Injectable()
export class UserRepository extends BaseRepository<UserDTO, UserModel> {
    constructor(@Inject(SEQUELIZE) database) {
        super(database)
    }

    // async create(userDTO: UserDTO): Promise<UserModel> {
    //     try {
    //         let model = await this.database.UserModel.create(userDTO);
    //         return model;
    //     } catch(e) {
    //         console.log(e);
    //         throw new Error(e.toString());
    //     }
    // }

    // async findById(id: number): Promise<UserModel> {
    //     try {
    //         let model = await this.database.UserModel.findByPk(id);
    //         return model;
    //     } catch(e) {
    //         throw new Error(e.toString());
    //     }
    // }

    // async findAll(): Promise<UserModel[]> {
    //     try {
    //         let modelArr : UserModel[] = await this.database.UserModel.findAll();
    //         return modelArr;
    //     } catch(e) {
    //         throw new Error(e.toString());
    //     }
    // }

    // async partialUpdate(id: number, dto: Partial<UserDTO>): Promise<any> {
    //     try {
    //         // let model: UserModel = await this.findById(dto.id);
    //         // if(model) {
    //         //     model.mobile = dto.mobile;
    //         //     model.fullName = dto.fullName;
    //         //     model.isAdmin = dto.isAdmin;
    //         //     model.password = dto.password;
    //         //     let updatedModel = await model.save();
    //         //     return updatedModel;
    //         // } else {
    //         //     throw new Error('User Not Found');
    //         // }
    //         // return model;
    //         await this.database.UserModel.update(
    //             dto,
    //             {
    //                 where: {
    //                     id: id
    //                 }
    //             }
    //         );
    //     } catch(e) {
    //         throw new Error(e.toString());
    //     }
    // }

    // async update(id: number, dto: UserDTO): Promise<any> {
    //     try {
    //         // let model: UserModel = await this.findById(dto.id);
    //         // if(model) {
    //         //     model.mobile = dto.mobile;
    //         //     model.fullName = dto.fullName;
    //         //     model.isAdmin = dto.isAdmin;
    //         //     model.password = dto.password;
    //         //     let updatedModel = await model.save();
    //         //     return updatedModel;
    //         // } else {
    //         //     throw new Error('User Not Found');
    //         // }
    //         // return model;
    //         await this.database.UserModel.update(
    //             dto,
    //             {
    //                 where: {
    //                     id: id
    //                 }
    //             }
    //         );
    //     } catch(e) {
    //         throw new Error(e.toString());
    //     }
    // }

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

    // async delete(id: number): Promise<void> {
    //     try{
    //         let user = await this.findById(id);
    //         if(user) {
    //             user.destroy();
    //             console.log("User Deleted Successfully");
    //         } else {
    //             throw new Error("User Doesn't Exist");
    //         }
    //     } catch(e) {
    //         throw new Error(e.toString());
    //     }
    // }
}