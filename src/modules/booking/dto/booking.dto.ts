import { IsNumber, IsOptional } from "@nestjs/class-validator";
import { bookingStatusEnum, bookingType } from "src/enum/enum";

export class BookingDTO {
    @IsNumber()
    @IsOptional()
    userId: number;

    @IsNumber()
    @IsOptional()
    tripId: number;

    @IsNumber()
    @IsOptional()
    fromStationId: number;

    @IsNumber()
    @IsOptional()
    toStationId: number;

    @IsNumber()
    @IsOptional()
    noOfTickets: number;

    @IsNumber()
    @IsOptional()
    type: bookingType;

    @IsNumber()
    @IsOptional()
    paymentId: number;

    @IsNumber()
    @IsOptional()
    status: bookingStatusEnum
}
