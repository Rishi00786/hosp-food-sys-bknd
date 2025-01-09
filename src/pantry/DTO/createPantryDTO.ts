import { IsString, IsNotEmpty } from 'class-validator';

export class CreatePantryDTO {
  @IsString()
  @IsNotEmpty({ message: 'Staff name is required' })
  staffName: string;

  @IsString()
  @IsNotEmpty({ message: 'Location is required' })
  location: string;

  @IsString()
  @IsNotEmpty({ message: 'Contact information is required' })
  contact: string;

  mealId?: string[];
}
