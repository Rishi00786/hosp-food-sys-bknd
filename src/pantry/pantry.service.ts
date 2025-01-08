import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreatePantryDTO } from './DTO/createPantryDTO';

@Injectable()
export class PantryService {
  constructor(private readonly databaseService: DatabaseService) {}

  async getAllPantry() {
    return await this.databaseService.pantry.findMany();
  }

  async createPantryItem(pantryItem: CreatePantryDTO) {
    try {
      return await this.databaseService.pantry.create({
        data: pantryItem,
      });
    } catch (error) {
      console.error('Error creating pantry item:', error);
      throw new HttpException(
        'Error creating pantry item',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async updatePantryItem(
    pantryId: string,
    pantryItem: Partial<CreatePantryDTO>,
  ) {
    try {
      const existingPantryItem = await this.databaseService.pantry.findUnique({
        where: { id: pantryId },
      });
      if (!existingPantryItem) {
        throw new HttpException('Pantry item not found', HttpStatus.NOT_FOUND);
      }

      return await this.databaseService.pantry.update({
        where: { id: pantryId },
        data: pantryItem,
      });
    } catch (error) {
      console.error('Error updating pantry item:', error);
      throw new HttpException(
        'Error updating pantry item',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
