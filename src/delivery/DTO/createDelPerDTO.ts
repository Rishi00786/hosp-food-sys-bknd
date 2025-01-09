import { IsString, IsNotEmpty } from 'class-validator';

export class CreateDelPerDTO {
  @IsString()
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'Contact is required' })
  contact: string;

  mealId: string;
}
