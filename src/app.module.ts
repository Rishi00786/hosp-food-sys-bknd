import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseService } from './database/database.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { MealsModule } from './meals/meals.module';
import { PantryService } from './pantry/pantry.service';
import { PantryModule } from './pantry/pantry.module';
import { DeliveryService } from './delivery/delivery.service';
import { DeliveryModule } from './delivery/delivery.module';

@Module({
  imports: [DatabaseModule, UserModule, MealsModule, PantryModule, DeliveryModule],
  controllers: [AppController],
  providers: [AppService, DatabaseService, PantryService, DeliveryService],
})
export class AppModule {}
