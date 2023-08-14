import { Controller } from "@nestjs/common";
import { PaymentDTO } from "../dto/payment.dto";
import { PaymentSchema } from "../schema/payment.schema";
import { PaymentService } from "../payment.service";
import { BaseController } from "src/base/base.controller";

@Controller('payment') 
export class PaymentController extends BaseController<PaymentDTO, PaymentSchema, PaymentService> {
    constructor(private paymentService: PaymentService) {
        super(paymentService);
    }
}