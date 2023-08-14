import { Inject, Injectable } from "@nestjs/common"
import { BaseRepository } from "src/base/base.repository"
import { PaymentDTO } from "../dto/payment.dto"
import { PaymentModel } from "../model/payment.model"
import { SEQUELIZE } from "src/core/constants"

@Injectable()
export class PaymentRepository extends BaseRepository<PaymentDTO, PaymentModel> {
    constructor(@Inject(SEQUELIZE) database){
        super(database, 'PaymentModel');
    }  
}