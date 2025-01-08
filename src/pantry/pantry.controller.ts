import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { PantryService } from './pantry.service';
import { CreatePantryDTO } from './DTO/createPantryDTO';

@Controller('pantry')
export class PantryController {
  constructor(private readonly pantryService: PantryService) {}

  @Get()
  async getAllPantry() {
    return await this.pantryService.getAllPantry();
  }

  @Post('create')
  async createPantryItem(@Body() pantryItem: CreatePantryDTO) {
    try {
      const pantry = await this.pantryService.createPantryItem(pantryItem);
      return {
        message: 'Pantry item created successfully',
        pantry,
      };
    } catch (error) {
      return { message: 'Error creating pantry item', error };
    }
  }

  @Put('update/:pantryId')
  async updatePantryItem(
    @Param('pantryId') pantryId: string,
    @Body() updatePantryItemDTO: Partial<CreatePantryDTO>,
  ) {
    try {
      const pantry = await this.pantryService.updatePantryItem(
        pantryId,
        updatePantryItemDTO,
      );
      return {
        message: 'Pantry item updated successfully',
        pantry,
      };
    } catch (error) {
      return { message: 'Error updating pantry item', error };
    }
  }
}
