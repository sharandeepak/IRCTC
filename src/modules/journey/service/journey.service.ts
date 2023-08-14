import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { JourneySchema } from '../schema/journey.schema';
import { JourneyModel } from '../model/journey.model';
import { JourneyDTO } from '../dto/journey.dto';
import { JourneyRepository } from '../repository/journey.repository';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class JourneyService 
    extends BaseService<JourneyDTO, JourneySchema, JourneyModel, JourneyRepository> 
    implements BaseServiceInterface<JourneyDTO, JourneySchema> {
        constructor(private journeyRepository: JourneyRepository) {
            super(journeyRepository);
        };
        
        convertModelToSchema(journeyModel: JourneyModel):JourneySchema {
            let journeySchema : JourneySchema = plainToInstance(JourneySchema, journeyModel.toJSON() as JourneySchema);
            return journeySchema;
        }
}
