import { paymentModeEnums } from "src/enum/enum";

export class PaymentDTO {
    mode: paymentModeEnums;
    amount: number;
}