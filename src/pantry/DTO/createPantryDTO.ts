import { IsString, IsNotEmpty, IsUUID, IsOptional } from 'class-validator';

export class CreatePantryDTO {
  @IsString()
  @IsNotEmpty({ message: 'Staff name is required' })
  staffName: string;

  @IsString()
  @IsNotEmpty({ message: 'Location is required' })
  Location: string;

  @IsString()
  @IsNotEmpty({ message: 'Contact information is required' })
  Contact: string;

  @IsUUID('4', { message: 'Meal ID must be a valid UUID' })
  @IsOptional()
  mealId?: string;
}
