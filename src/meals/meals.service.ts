import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { MealPlanDTO } from './DTO/mealPlanDTO';

@Injectable()
export class MealsService {
  constructor(private readonly databaseSevervices: DatabaseService) {}

  async getMeals() {
    return this.databaseSevervices.meals.findMany();
  }

  async createMeal(userId: string, mealPlanDTO: MealPlanDTO) {
    try {
      return this.databaseSevervices.meals.create({
        data: {
          userId: userId,
          plan: {
            morningMeal: {
              ingredients: mealPlanDTO.morningMealIngredients,
              instructions: mealPlanDTO.morningMealInstructions || '',
            },
            eveningMeal: {
              ingredients: mealPlanDTO.eveningMealIngredients,
              instructions: mealPlanDTO.eveningMealInstructions || '',
            },
            nightMeal: {
              ingredients: mealPlanDTO.nightMealIngredients,
              instructions: mealPlanDTO.nightMealInstructions || '',
            },
          },
        },
      });
    } catch (error) {
      console.error(error);
      throw new Error('Error creating meal');
    }
  }
}
