import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { TrainSchema } from "../schema/train.schema";
import { TrainService } from "../service/train.service";
import { TrainDTO } from "../dto/train.dto";

@Controller('train')
export class TrainController {
    constructor(private trainService: TrainService){}

    @Post()
    async createTrain(@Body() trainDTO: TrainDTO): Promise<TrainSchema> {
        let trainSchema: TrainSchema = await this.trainService.create(trainDTO);
        return trainSchema;
    }

    @Get(":id")
    async findById(@Param("id") id: number): Promise<TrainSchema> {
        let trainSchema: TrainSchema = await this.trainService.findById(id);
        return trainSchema;
    }

    @Put(":id")
    async updateTrain(@Param("id") id, @Body() trainDTO: TrainDTO): Promise<TrainSchema> {
        let trainSchema: TrainSchema = await this.trainService.update(id, trainDTO);
        return trainSchema;
    }

    @Delete(":id")
    async deleteTrain(@Param("id") id: number): Promise<void> {
        await this.trainService.delete(id);
    }

}