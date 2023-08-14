import { IsNumber, IsOptional, IsString } from "@nestjs/class-validator";
import { trainTripStatusEnum } from "src/enum/enum";

export class TripDTO {
    @IsNumber()
    @IsOptional()
    jouneyId: number;

    @IsNumber()
    @IsOptional()
    trainId: number;

    @IsString()
    @IsOptional()
    status: trainTripStatusEnum;
}