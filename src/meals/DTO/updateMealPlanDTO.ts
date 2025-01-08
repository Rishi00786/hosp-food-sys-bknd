import { PartialType } from '@nestjs/mapped-types';
import { MealDTO } from './mealPlanDTO';

export class UpdateMealPlanDTO extends PartialType(MealDTO) {}
