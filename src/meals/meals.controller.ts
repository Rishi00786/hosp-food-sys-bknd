import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MealsService } from './meals.service';
import { MealDTO } from './DTO/mealPlanDTO';

@Controller('meals')
export class MealsController {
  constructor(private readonly mealsService: MealsService) {}

  @Get()
  async getMeals() {
    return await this.mealsService.getMeals();
  }

  @Post('create/:userId')
  async createMeal(@Param('userId') userId: string, @Body() mealDTO: MealDTO) {
    try {
      const meal = await this.mealsService.createMeal(userId, mealDTO);
      return {
        message: 'Meal created successfully',
        meal,
      };
    } catch (error) {
      console.log(error);
      return { message: 'Error creating meal', error };
    }
  }

  @Put('update/:mealId')
  async updateMeal(
    @Param('mealId') mealId: string,
    @Body() mealDTO: Partial<MealDTO>,
  ) {
    try {
      const updatedMeal = await this.mealsService.updateMeal(mealId, mealDTO);
      return {
        message: 'Meal updated successfully',
        updatedMeal,
      };
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'Error updating meal',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get(':mealId')
  async getMealById(@Param('mealId') mealId: string) {
    try {
      const meal = await this.mealsService.getMealById(mealId);
      if (!meal) {
        throw new HttpException('Meal not found', HttpStatus.NOT_FOUND);
      }
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
