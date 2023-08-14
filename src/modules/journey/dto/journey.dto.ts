import { IsOptional, IsString } from "@nestjs/class-validator";
import { trainTypeEnum } from "src/enum/enum";

export class JourneyDTO {
    @IsString()
    @IsOptional()
    name: string;

    @IsString()
    @IsOptional()
    trainType: trainTypeEnum;
}