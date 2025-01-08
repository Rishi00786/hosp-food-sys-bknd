import { Module } from '@nestjs/common';
import { DeliveryController } from './delivery.controller';
import { DeliveryService } from './delivery.service';
import { DatabaseService } from 'src/database/database.service';

@Module({
  controllers: [DeliveryController],
  providers: [DeliveryService, DatabaseService],
})
export class DeliveryModule {}
