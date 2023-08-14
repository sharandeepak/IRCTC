import { IsNumber, IsOptional, IsString } from "@nestjs/class-validator";
import { coachTypeEnum } from "src/enum/enum";

export class CoachDetailDTO {
    @IsNumber()
    @IsOptional()
    tripId: number;

    @IsString()
    @IsOptional()
    coachType: coachTypeEnum;

    @IsNumber()
    @IsOptional()
    coachCapacity: number;
    
    @IsNumber()
    @IsOptional()
    coachPrice: number;
}