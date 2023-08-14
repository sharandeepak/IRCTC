import { BaseRepository } from "src/base/base.repository"
import { JourneyStopDTO } from "../dto/journey_stop.dto"
import { JourneyStopModel } from "../model/journey_stop.model"
import { Inject, Injectable } from "@nestjs/common"
import { SEQUELIZE } from "src/core/constants"

@Injectable()
export class JourneyStopRepository extends BaseRepository<JourneyStopDTO, JourneyStopModel> {
    constructor(@Inject(SEQUELIZE) database) {
        super(database, 'JourneyStopModel');
    }  
}