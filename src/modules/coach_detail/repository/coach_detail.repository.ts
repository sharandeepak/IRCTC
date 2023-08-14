import { Inject, Injectable } from "@nestjs/common"
import { BaseRepository } from "src/base/base.repository"
import { CoachDetailDTO } from "../dto/coach_detail.dto"
import { CoachDetailModel } from "../model/coach_detail.model"
import { SEQUELIZE } from "src/core/constants"

@Injectable()
export class CoachDetailRepository extends BaseRepository<CoachDetailDTO, CoachDetailModel> {
    constructor(@Inject(SEQUELIZE) database) {
        super(database, 'CoachDetailModel');
    }  
}