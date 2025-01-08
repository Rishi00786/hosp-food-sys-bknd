import { IsString, IsNotEmpty, IsUUID, IsOptional } from 'class-validator';

export class CreateDelPerDTO {
  @IsString()
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'Contact is required' })
  contact: string;

  @IsUUID('4', { message: 'Meal ID must be a valid UUID' })
  @IsOptional()
  mealId?: string;
}
