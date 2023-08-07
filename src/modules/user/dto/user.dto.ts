import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from '@nestjs/class-validator';

export class UserDTO {
  @IsString()
  @IsOptional()
  fullName: string;

  @IsString()
  @IsOptional()
  userName: string;

  @IsString()
  @IsOptional()
  password: string;

  @IsString()
  @IsOptional()
  mobile: string;

  @IsBoolean()
  @IsOptional()
  isAdmin: boolean;
}
