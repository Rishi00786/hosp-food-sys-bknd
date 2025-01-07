import { IsString, IsOptional } from 'class-validator';

export class MealPlanDTO {
  @IsString({ each: true })
  morningMealIngredients: string[];

  @IsOptional()
  @IsString()
  morningMealInstructions?: string;

  @IsString({ each: true })
  eveningMealIngredients: string[];

  @IsOptional()
  @IsString()
  eveningMealInstructions?: string;

  @IsString({ each: true })
  nightMealIngredients: string[];

  @IsOptional()
  @IsString()
  nightMealInstructions?: string;
}
