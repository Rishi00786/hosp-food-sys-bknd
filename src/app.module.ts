import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseService } from './database/database.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { MealsModule } from './meals/meals.module';

@Module({
  imports: [DatabaseModule, UserModule, MealsModule],
  controllers: [AppController],
  providers: [AppService, DatabaseService],
})
export class AppModule {}
