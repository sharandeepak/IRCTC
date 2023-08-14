import { IsNumber, IsOptional } from "@nestjs/class-validator";

export class JourneyStopDTO {
    @IsNumber()
    @IsOptional()
    journeyId: number;

    @IsNumber()
    @IsOptional()
    stationId: number;

    @IsNumber()
    @IsOptional()
    seqNo: number;
}