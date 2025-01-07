import { Module } from '@nestjs/common';
import { MealsService } from './meals.service';
import { MealsController } from './meals.controller';
import { DatabaseService } from 'src/database/database.service';

@Module({
  providers: [MealsService, DatabaseService],
  controllers: [MealsController],
})
export class MealsModule {}
