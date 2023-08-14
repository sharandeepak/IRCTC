import { IsOptional, IsString } from "@nestjs/class-validator";

export class StationDTO {
    @IsString()
    @IsOptional()
    name: string;

    @IsString()
    @IsOptional()
    city: string;

    @IsString()
    @IsOptional()
    state: string;
}