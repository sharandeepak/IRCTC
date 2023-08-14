import { Injectable } from '@nestjs/common';
import { TrainModel } from '../model/train.model';
import { TrainSchema } from '../schema/train.schema';
import { TrainRepository } from '../repository/train.repository';
import { plainToInstance } from 'class-transformer';
import { TrainDTO } from '../dto/train.dto';
import { BaseService } from 'src/base/base.service';

@Injectable()
export class TrainService extends BaseService<TrainDTO, TrainSchema, TrainModel, TrainRepository> implements BaseServiceInterface<TrainDTO, TrainSchema> {
    constructor(private trainRepository: TrainRepository) {
        super(trainRepository);
    }

    convertModelToSchema(trainModel: TrainModel): TrainSchema {
        let trainSchema : TrainSchema = plainToInstance(TrainSchema, trainModel.toJSON() as TrainSchema);
        return trainSchema;
    }
}
