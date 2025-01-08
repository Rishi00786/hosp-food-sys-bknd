import { IsString, IsBoolean, IsOptional, IsArray } from 'class-validator';

export class MealDTO {
  @IsArray()
  morningMealIng: string[];

  @IsArray()
  nightMealIng: string[];

  @IsArray()
  eveningMealIng: string[];

  @IsOptional()
  @IsString()
  morningMealIns?: string;

  @IsOptional()
  @IsString()
  nightMealIns?: string;

  @IsOptional()
  @IsString()
  eveningMealIns?: string;

  @IsOptional()
  @IsBoolean()
  morningMealPrep?: boolean;

  @IsOptional()
  @IsBoolean()
  nightMealPrep?: boolean;

  @IsOptional()
  @IsBoolean()
  eveningMealPrep?: boolean;

  @IsOptional()
  @IsBoolean()
  morningMealDel?: boolean;

  @IsOptional()
  @IsBoolean()
  nightMealDel?: boolean;

  @IsOptional()
  @IsBoolean()
  eveningMealDel?: boolean;

  @IsOptional()
  @IsBoolean()
  assigned?: boolean;
}
