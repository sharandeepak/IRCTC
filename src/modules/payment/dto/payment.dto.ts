import { IsNumber, IsOptional, Length, IsString } from "@nestjs/class-validator";
import { paymentModeEnums } from "src/enum/enum";

export class PaymentDTO {
    @IsString()
    @IsOptional()
    mode: paymentModeEnums;

    @IsNumber()
    @IsOptional()
    amount: number;

    @IsString()
    @Length(0,2)
    currency: String
}