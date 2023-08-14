import { IsNotEmpty, IsNumber, IsOptional, IsString } from "@nestjs/class-validator";

export class TrainDTO {
    @IsString()
    @IsOptional()
    name: string;
}