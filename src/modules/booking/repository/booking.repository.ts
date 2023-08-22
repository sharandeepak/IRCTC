import { Inject, Injectable } from "@nestjs/common"
import { BaseRepository } from "src/base/base.repository"
import { BookingDTO } from "../dto/booking.dto"
import { BookingModel } from "../model/booking.model"
import { SEQUELIZE } from "src/core/constants"

@Injectable()
export class BookingRepository extends BaseRepository<BookingDTO, BookingModel> {
    constructor(@Inject(SEQUELIZE) database) {
        super(database, 'BookingModel');
    }
}