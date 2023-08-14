import { Inject, Injectable } from "@nestjs/common"
import { StationDTO } from "../dto/station.dto"
import { StationModel } from "../model/station.model"
import { SEQUELIZE } from "src/core/constants"
import { BaseRepository } from "src/base/base.repository";

@Injectable()
export class StationRepository extends BaseRepository<StationDTO, StationModel> {
    constructor(@Inject(SEQUELIZE) database){
        super(database, 'StationModel');
    }  
}