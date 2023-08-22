import { Body, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";

export class BaseController<DTO, SCHEMA, SERVICE extends BaseServiceInterface<DTO, SCHEMA>>{
    constructor(private service: SERVICE){}

    @Post()
    async create(@Body() dto: DTO): Promise<SCHEMA> {
        try {
            let schema: SCHEMA = await this.service.create(dto);
            return schema;
        } catch (error) {
            console.error('An error occurred:', error);
            throw new Error(error.toString());
        }
    }

    @Get(":id")
    async findById(@Param("id") id: number): Promise<SCHEMA> {
        try {
            let schema: SCHEMA = await this.service.findById(id);
            return schema;
        } catch (error) {
            console.error('An error occurred:', error);
            throw new Error(error.toString());
        }
    }

    @Get()
    async findAll(): Promise<SCHEMA[]> {
        try {
            let schema : SCHEMA[] = await this.service.findAll();
            return schema;
        } catch (error) {
            console.error('An error occurred:', error);
            throw new Error(error.toString());
        }
    }

    @Put(":id")
    async update(@Param("id") id, @Body() dto: DTO): Promise<SCHEMA> {
        try {
            let schema: SCHEMA = await this.service.update(id, dto);
            return schema;
        } catch (error) {
            console.error('An error occurred:', error);
            throw new Error(error.toString());
        }
    }

    @Patch(":id")
    async partialUpdate(@Param("id") id: number, @Body() dto: DTO): Promise<SCHEMA> {
        try {
            let schema : SCHEMA = await this.service.partialUpdate(id, dto);
            return schema;
        } catch(error) {
            console.error('An error occurred:', error);
            throw new Error(error.toString());
        }
    }


    @Delete(":id")
    async delete(@Param("id") id: number): Promise<void> {
        try {
            await this.service.delete(id);
        } catch (error) {
            console.error('An error occurred:', error);
            throw new Error(error.toString());
        }
    }
}