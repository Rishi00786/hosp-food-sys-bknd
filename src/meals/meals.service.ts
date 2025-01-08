import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { MealDTO } from './DTO/mealPlanDTO';

@Injectable()
export class MealsService {
  constructor(private readonly databaseServices: DatabaseService) {}

  async getMeals() {
    return this.databaseServices.meals.findMany();
  }

  async createMeal(userId: string, mealDTO: MealDTO) {
    try {
      const meal = await this.databaseServices.meals.create({
        data: {
          userId,
          ...mealDTO,
        },
      });
      return meal;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'Error creating meal',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async updateMeal(mealId: string, mealDTO: Partial<MealDTO>) {
    try {
      const existingMeal = await this.databaseServices.meals.findUnique({
        where: { id: mealId },
      });
      if (!existingMeal) {
        throw new HttpException('Meal not found', HttpStatus.NOT_FOUND);
      }

      const updatedMeal = await this.databaseServices.meals.update({
        where: { id: mealId },
        data: { ...mealDTO },
      });

      return updatedMeal;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'Error updating meal',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getMealById(mealId: string) {
    try {
      const meal = await this.databaseServices.meals.findUnique({
        where: { id: mealId },
      });
      return meal;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'Error retrieving meal',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
