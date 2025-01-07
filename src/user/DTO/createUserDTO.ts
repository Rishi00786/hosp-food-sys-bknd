import { IsString, IsNumber, IsArray, IsInt } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  name: string;

  @IsArray()
  @IsString({ each: true })
  diseases: string[];

  @IsArray()
  @IsString({ each: true })
  allergies: string[];

  @IsNumber()
  @IsInt()
  room: number;

  @IsNumber()
  @IsInt()
  bed: number;

  @IsNumber()
  @IsInt()
  floor: number;

  @IsNumber()
  @IsInt()
  age: number;

  @IsString()
  gender: string;

  @IsString()
  contact: string;

  @IsString()
  emergencyContact: string;
}
