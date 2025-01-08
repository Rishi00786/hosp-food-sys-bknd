import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { DeliveryService } from './delivery.service';
import { CreateDelPerDTO } from './DTO/createDelPerDTO';

@Controller('delivery')
export class DeliveryController {
  constructor(private readonly deliveryService: DeliveryService) {}

  @Get()
  async getAllDeliveries() {
    return await this.deliveryService.getAllDeliveries();
  }

  @Post('create')
  async createDeliveryPerson(@Body() details: CreateDelPerDTO) {
    try {
      const deliveryPerson =
        await this.deliveryService.createDeliveryPerson(details);
      return {
        message: 'Delivery person created successfully',
        deliveryPerson,
      };
    } catch (error) {
      console.error(error);
      return { message: 'Error creating delPerson', error };
    }
  }

  @Put('update/:personId')
  async updateDeliveryPerson(
    @Param('personId') id: string,
    @Body() updateDetails: Partial<CreateDelPerDTO>,
  ) {
    try {
      const deliveryPerson = await this.deliveryService.updateDeliveryPerson(
        id,
        updateDetails,
      );
      return {
        message: 'Delivery person updated successfully',
        deliveryPerson,
      };
    } catch (error) {
      console.error(error);
      return { message: 'Error updating delPerson', error };
    }
  }
}
