import { PartialType } from '@nestjs/mapped-types';
import { CreateDelPerDTO } from './createDelPerDTO';

export class UpdateMealPlanDTO extends PartialType(CreateDelPerDTO) {}
