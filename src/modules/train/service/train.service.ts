import { Injectable } from '@nestjs/common';
import { TrainModel } from '../model/train.model';
import { TrainSchema } from '../schema/train.schema';
import { TrainRepository } from '../repository/train.repository';
import { plainToInstance } from 'class-transformer';
import { TrainDTO } from '../dto/train.dto';

@Injectable()
export class TrainService {
    constructor(private trainRepository: TrainRepository){}

    async create(trainDTO: TrainDTO): Promise<TrainSchema> {
        try {
            let trainModel: TrainModel = await this.trainRepository.create(trainDTO);
            let trainSchema: TrainSchema = this.convertModelToSchema(trainModel);
            return trainSchema;
        } catch (error) {
            console.error('An error occurred:', error);
            throw new Error(error.toString());
        }
    }
    async findById(id: number): Promise<TrainSchema> {
        try {
            let trainModel: TrainModel = await this.trainRepository.findById(id);
            let trainSchema: TrainSchema = this.convertModelToSchema(trainModel);
            return trainSchema; 
        } catch (error) {
            console.error('An error occurred:', error);
            throw new Error(error.toString());
        }
    }


    async update(id: number, trainDTO: TrainDTO): Promise<TrainSchema> {
        try {
            let trainModel: TrainModel = await this.trainRepository.update(id, trainDTO);
            let trainSchema: TrainSchema = this.convertModelToSchema(trainModel);
            return trainSchema;
        } catch (error) {
            console.error('An error occured:', error);
            throw new Error(error.toString())
        }
    }

    async delete(id: number): Promise<void> {
        try {
            await this.trainRepository.delete(id);
        } catch (error) {
            console.error('An error occured:', error);
            throw new Error(error.toString())
        }
    }

    convertModelToSchema(trainModel: TrainModel): TrainSchema {
        let trainSchema : TrainSchema = plainToInstance(TrainSchema, trainModel.toJSON() as TrainSchema);
        return trainSchema;
    }
}
