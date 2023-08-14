import { Inject, Injectable } from "@nestjs/common"
import { JourneyDTO } from "../dto/journey.dto"
import { JourneyModel } from "../model/journey.model"
import { BaseRepository } from "src/base/base.repository"
import { SEQUELIZE } from "src/core/constants"

@Injectable()
export class JourneyRepository extends BaseRepository<JourneyDTO, JourneyModel> {
    constructor(@Inject(SEQUELIZE) database) {
        super(database, 'JourneyModel');
    }  
}