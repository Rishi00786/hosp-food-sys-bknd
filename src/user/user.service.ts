import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateUserDTO } from './DTO/createUserDTO';
import { User } from '@prisma/client';
import { UpdateUseDTO } from './DTO/updateUserDTO';

@Injectable()
export class UserService {
  constructor(private readonly databaseSevervices: DatabaseService) {}

  async createUser(createUserDTO: CreateUserDTO): Promise<User> {
    try {
      return this.databaseSevervices.user.create({
        data: createUserDTO,
      });
    } catch (error) {
      throw new HttpException(
        'Error creating user',
        HttpStatus.INTERNAL_SERVER_ERROR,
        error,
      );
    }
  }

  async getAll() {
    return this.databaseSevervices.user.findMany();
  }

  async updateUser(id: string, updateUserDTO: UpdateUseDTO): Promise<User> {
    try {
      return this.databaseSevervices.user.update({
        where: { id: id },
        data: updateUserDTO,
      });
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'Error updating user',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getUserById(userId: string) {
    return this.databaseSevervices.user.findUnique({ where: { id: userId } });
  }
}
