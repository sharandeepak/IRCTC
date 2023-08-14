import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { CoachDetailDTO } from '../dto/coach_detail.dto';
import { CoachDetailSchema } from '../schema/coach_detail.schema';
import { CoachDetailModel } from '../model/coach_detail.model';
import { CoachDetailRepository } from '../repository/coach_detail.repository';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class CoachDetailService extends BaseService<CoachDetailDTO, CoachDetailSchema, CoachDetailModel, CoachDetailRepository> {
    constructor(private Repository: CoachDetailRepository) {
        super(Repository);
    };
    
    convertModelToSchema(coachDetailModel: CoachDetailModel): CoachDetailSchema {
        let coachDetailSchema : CoachDetailSchema = plainToInstance(CoachDetailSchema, coachDetailModel.toJSON() as CoachDetailSchema);
        return coachDetailSchema;
    }
}
