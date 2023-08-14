import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { PaymentDTO } from './dto/payment.dto';
import { PaymentSchema } from './schema/payment.schema';
import { PaymentModel } from './model/payment.model';
import { PaymentRepository } from './repository/payment.repository';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class PaymentService extends BaseService<PaymentDTO, PaymentSchema, PaymentModel, PaymentRepository> {
    constructor(private paymentRepository: PaymentRepository) {
        super(paymentRepository);
    };
    
    convertModelToSchema(paymentModel: PaymentModel): PaymentSchema {
        let paymentSchema : PaymentSchema = plainToInstance(PaymentSchema, paymentModel.toJSON() as PaymentSchema);
        return paymentSchema;
    }
}