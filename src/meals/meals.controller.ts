import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MealsService } from './meals.service';
import { MealPlanDTO } from './DTO/mealPlanDTO';

@Controller('meals')
export class MealsController {
  constructor(private readonly mealsService: MealsService) {}

  @Get()
  async getMeals() {
    return await this.mealsService.getMeals();
  }

  @Post('create/:userId')
  async createMeal(
    @Param('userId') userId: string,
    @Body() mealPlanDTO: MealPlanDTO,
  ) {
    try {
      const meal = await this.mealsService.createMeal(userId, mealPlanDTO);

      return {
        message: 'Meal created successfully',
        meal,
      };
    } catch (error) {
      return { message: 'Error creating meal', error };
    }
  }
}
