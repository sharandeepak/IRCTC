import { Inject, Injectable } from '@nestjs/common';
import { TrainDTO } from '../dto/train.dto';
import { TrainModel } from '../model/train.model';
import { BaseRepository } from 'src/base/base.repository';
import { SEQUELIZE } from 'src/core/constants';

@Injectable()
export class TrainRepository extends BaseRepository<TrainDTO, TrainModel> {
    constructor(@Inject(SEQUELIZE) database){
        super(database, 'TrainModel');
    }
}
