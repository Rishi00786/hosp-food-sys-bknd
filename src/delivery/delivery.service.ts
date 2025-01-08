import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateDelPerDTO } from './DTO/createDelPerDTO';

@Injectable()
export class DeliveryService {
  constructor(private readonly databaseService: DatabaseService) {}

  async getAllDeliveries() {
    return await this.databaseService.deliveryPerson.findMany();
  }

  async createDeliveryPerson(details: CreateDelPerDTO) {
    try {
      return await this.databaseService.deliveryPerson.create({
        data: details,
      });
    } catch (error) {
      console.error('Error creating delivery person:', error);
      throw new HttpException(
        'Error creating delivery person',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async updateDeliveryPerson(id: string, details: Partial<CreateDelPerDTO>) {
    try {
      const existingDeliveryPerson =
        await this.databaseService.deliveryPerson.findUnique({
          where: {
            id: id,
          },
        });

      if (!existingDeliveryPerson) {
        throw new HttpException(
          'Delivery person not found',
          HttpStatus.NOT_FOUND,
        );
      }

      return await this.databaseService.deliveryPerson.update({
        where: { id: id },
        data: details,
      });
    } catch (error) {
      console.error('Error updating delivery person:', error);
      throw new HttpException(
        'Error updating delivery person',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
