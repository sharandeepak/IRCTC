import { Inject } from "@nestjs/common";
import { Model } from "sequelize";
import { Database } from "sqlite3";
import { SEQUELIZE } from "src/core/constants";

export class BaseRepository<D, M extends Model> {
    database: any
    constructor(database){
        this.database = database
    };

    async create(dto: D): Promise<M> {
        try {
            let model = await this.database.M.create(dto);
            return model;
        } catch(e) {
            console.log(e);
            throw new Error(e.toString());
        }
    }

    async findById(id: number): Promise<M> {
        try {
            let model = await this.database.M.findByPk(id);
            return model;
        } catch(e) {
            throw new Error(e.toString());
        }
    }

    async findAll(): Promise<M[]> {
        try {
            let modelArr : M[] = await this.database.M.findAll();
            return modelArr;
        } catch(e) {
            throw new Error(e.toString());
        }
    }

    //Gotta write update in respective repository
    async update(id: number, dto: D): Promise<any> {
        try {
            // let model: M = await this.findById(dto.id);
            // if(model) {
            //     model.mobile = dto.mobile;
            //     model.fullName = dto.fullName;
            //     model.isAdmin = dto.isAdmin;
            //     model.password = dto.password;
            //     let updatedModel = await model.save();
            //     return updatedModel;
            // } else {
            //     throw new Error('User Not Found');
            // }
            // return model;
            await this.database.M.update({
                dto
            },{
               where: {
                id: id
               }
            })
        } catch(e) {
            throw new Error(e.toString());
        }
    }

    async delete(id: number): Promise<void> {
        try{
            let user = await this.findById(id);
            if(user) {
                user.destroy();
                console.log("User Deleted Successfully");
            } else {
                throw new Error("User Doesn't Exist");
            }
        } catch(e) {
            throw new Error(e.toString());
        }
    }
}