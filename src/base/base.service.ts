import { BaseRepositoryInterface } from "./base.repository.interface";

export abstract class BaseService <D, S, M, R extends BaseRepositoryInterface<D, M>> {
    constructor(private repository: R){} 
    async create(dto: D): Promise<S> {
        try {
            let model: M = await this.repository.create(dto);
            let schema: S = this.convertModelToSchema(model);
            return schema;
        } catch(e) {
            throw new Error(e.toString());
        } 
    }

    async findById(id: number): Promise<S> {
        try {
            let model : M = await this.repository.findById(id);
            let schema : S = this.convertModelToSchema(model);
            return schema;
        } catch(e) {
            throw new Error(e.toString());
        }
    }

    async findAll(): Promise<S[]> {
        try {
            let modelArr: M[] = await this.repository.findAll();
            let schemaArr: S[] = modelArr.map((model)=>this.convertModelToSchema(model));
            return schemaArr;
        } catch (e) {
            throw new Error(e.toString());
        }
    }

    async update(id: number, dto: D): Promise<S> {
        try {
            let model : M = await this.repository.update(id, dto);
            let schema : S = this.convertModelToSchema(model);
            return schema;
        } catch (e) {
            throw new Error(e.toString());
        }
    }

    async partialUpdate(id: number, dto: D): Promise<S> {
        try {
            let model : M = await this.repository.partialUpdate(id, dto);
            let schema : S = this.convertModelToSchema(model);
            return schema;
        } catch (e) {
            throw new Error(e.toString());
        }
    }
    
    async delete(id: number): Promise<void> {
        try {
            await this.repository.delete(id);
        } catch(e) {
            throw new Error(e.toString());
        }
    }
    
    abstract convertModelToSchema(model: M): S;
}