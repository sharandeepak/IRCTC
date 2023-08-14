import { Exclude } from "class-transformer";
import { paymentModeEnums } from "src/enum/enum";

export class PaymentSchema {
    mode: paymentModeEnums;
    amount: number;
    @Exclude()
    createdAt: Date;
    @Exclude()
    updatedAt: Date;
    @Exclude()
    deletedAt: Date;
}