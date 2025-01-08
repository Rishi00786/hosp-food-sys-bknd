import { PartialType } from '@nestjs/mapped-types';
import { CreatePantryDTO } from './createPantryDTO';

export class UpdateUseDTO extends PartialType(CreatePantryDTO) {}
