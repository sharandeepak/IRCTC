import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { JourneyStopDTO } from '../dto/journey_stop.dto';
import { JourneyStopSchema } from '../schema/journey_stop.schema';
import { JourneyStopModel } from '../model/journey_stop.model';
import { JourneyStopRepository } from '../repository/journey_stop.repository';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class JourneyStopService extends BaseService<JourneyStopDTO, JourneyStopSchema, JourneyStopModel, JourneyStopRepository> {
    constructor(private journeyStopRepository: JourneyStopRepository) {
        super(journeyStopRepository);
    };
    
    convertModelToSchema(journeyStopModel: JourneyStopModel): JourneyStopSchema {
        let journeyStopSchema : JourneyStopSchema = plainToInstance(JourneyStopSchema, journeyStopModel.toJSON() as JourneyStopSchema);
        return journeyStopSchema;
    }
}