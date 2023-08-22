import { Injectable } from '@nestjs/common';
import { TrainModel } from '../model/train.model';
import { TrainSchema } from '../schema/train.schema';
import { TrainRepository } from '../repository/train.repository';
import { plainToInstance } from 'class-transformer';
import { TrainDTO } from '../dto/train.dto';
import { BaseService } from 'src/base/base.service';
import { SearchService } from 'src/core/elasticsearch/search/search.service';
import Indices from '@elastic/elasticsearch/lib/api/api/indices';

@Injectable()
export class TrainService implements BaseServiceInterface<TrainDTO, TrainSchema> {
    constructor(
        private trainRepository: TrainRepository,
        private readonly searchService: SearchService
    ) {}

    indexName: string = 'train';

    async create(dto: TrainDTO): Promise<TrainSchema> {
        try {
            let model: TrainModel = await this.trainRepository.create(dto);
            let schema: TrainSchema = this.convertModelToSchema(model);
            const trainDetails = await this.searchService.create(this.indexName,schema.id.toString(), schema);
            console.log(trainDetails);
            return schema;
        } catch (e) {
            throw new Error(e.toString());
        }
    }

    async findById(id: number): Promise<TrainSchema> {
        try {
            let model: TrainModel = await this.trainRepository.findById(id);
            let schema: TrainSchema = this.convertModelToSchema(model);
            const trainDetails = await this.searchService.get(this.indexName, id.toString());
            console.log(trainDetails);
            console.log("----");
            const receivedTrains = await this.searchByName("che");
            return schema;
        } catch (e) {
            throw new Error(e.toString());
        }
    }

    async findAll(): Promise<TrainSchema[]> {
        try {
            let modelArr: TrainModel[] = await this.trainRepository.findAll();
            let schemaArr: TrainSchema[] = modelArr.map((model) =>
                this.convertModelToSchema(model)
            );
            const trainDetails = await this.searchService.getAll(this.indexName);
            console.log(trainDetails);
            return schemaArr;
        } catch (e) {
            throw new Error(e.toString());
        }
    }

    async update(id: number, dto: TrainDTO): Promise<TrainSchema> {
        try {
            let model: TrainModel = await this.trainRepository.update(id, dto);
            let schema: TrainSchema = this.convertModelToSchema(model);
            const trainDetails = await this.searchService.update(this.indexName, id.toString(), schema);
            console.log(trainDetails);
            
            return schema;
        } catch (e) {
            throw new Error(e.toString());
        }
    }

    async partialUpdate(id: number, dto: TrainDTO): Promise<TrainSchema> {
        try {
            let model: TrainModel = await this.trainRepository.partialUpdate(id, dto);
            let schema: TrainSchema = this.convertModelToSchema(model);
            const updatedTrainDetails = await this.searchService.update(this.indexName, id.toString(), dto);
            console.log(updatedTrainDetails);
            return schema;
        } catch (e) {
            throw new Error(e.toString());
        }
    }

    async delete(id: number): Promise<void> {
        try {
            await this.trainRepository.delete(id);
            this.searchService.delete(this.indexName, id.toString());
        } catch (e) {
            throw new Error(e.toString());
        }
    }

    async searchByName(name: string) {
        try {
            const retrievedTrains = await this.searchService.searchByName(this.indexName, name);
            console.log(retrievedTrains);    
            return retrievedTrains;
        } catch (e) {
            throw new Error(e.toString());
        }
    }

    convertModelToSchema(trainModel: TrainModel): TrainSchema {
        let trainSchema: TrainSchema = plainToInstance(
            TrainSchema,
            trainModel.toJSON() as TrainSchema
        );
        return trainSchema;
    }
}
