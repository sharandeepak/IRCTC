import { Model } from "sequelize";

export class BaseRepository<D, M extends Model> {
    constructor(private readonly database, private readonly modelName) {
    }

    async create(dto: D): Promise<M> {
        try {
            let model = await this.database[this.modelName].create(dto);
            return model;
        } catch(e) {
            console.log(e);
            throw new Error(e.toString());
        }
    }

    async findById(id: number): Promise<M> {
        try {
            let model = await this.database[this.modelName].findByPk(id);
            return model;
        } catch(e) {
            throw new Error(e.toString());
        }
    }

    async findAll(): Promise<M[]> {
        try {
            let modelArr : M[] = await this.database[this.modelName].findAll();
            return modelArr;
        } catch(e) {
            throw new Error(e.toString());
        }
    }

    async update(id: number, dto: D): Promise<M> {
        try {
            const [affectedRows, [updatedModel]] = await this.database[this.modelName].update(
            dto,
            {
                where: {
                    id: id
                },
                returning: true}
            )
            return updatedModel;
        } catch(e) {
            throw new Error(e.toString());
        }
    }

    async partialUpdate(id: number, dto: D): Promise<M> {
        try {
            console.log(dto);
            const [affectedRows, [updatedModel]] = await this.database[this.modelName].update(
            dto,
            {
               where: {
                id: id
               },
               returning: true
            })
            return updatedModel;
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