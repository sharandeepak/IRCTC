import { Injectable } from '@nestjs/common';
import { StationDTO } from './dto/station.dto';
import { StationSchema } from './schema/station.schema';
import { StationModel } from './model/station.model';
import { plainToInstance } from 'class-transformer';
import { BaseService } from 'src/base/base.service';
import { StationRepository } from './repository/station.repository';

@Injectable()
export class StationService extends BaseService<StationDTO, StationSchema, StationModel, StationRepository> implements BaseServiceInterface<StationDTO, StationSchema> {
    constructor(private stationRepository: StationRepository) {
        super(stationRepository);
    };
    
    convertModelToSchema(stationModel: StationModel): StationSchema {
        let stationSchema : StationSchema = plainToInstance(StationSchema, stationModel.toJSON() as StationSchema);
        return stationSchema;
    }
}