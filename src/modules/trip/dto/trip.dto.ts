import { IsNotEmpty, IsNumber, IsOptional, IsString } from "@nestjs/class-validator";
import { HasMany } from "sequelize-typescript";
import { trainTripStatusEnum } from "src/enum/enum";

export class TripDTO {
    @IsNumber()
    @IsNotEmpty()
    jouneyId: number;

    @IsNumber()
    @IsNotEmpty()
    trainId: number;

    @IsString()
    @IsNotEmpty()
    status: trainTripStatusEnum;
}