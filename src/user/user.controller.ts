import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './DTO/createUserDTO';
import { UpdateUseDTO } from './DTO/updateUserDTO';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async create(@Body() createUserDTO: CreateUserDTO) {
    try {
      const user = await this.userService.createUser(createUserDTO);

      return {
        message: 'User created successfully',
        user,
      };
    } catch (error) {
      return { message: 'Error creating user', error };
    }
  }

  @Get()
  async getAll() {
    return await this.userService.getAll();
  }

  @Patch('update/:id')
  async update(@Param('id') id: string, @Body() updateUserDTO: UpdateUseDTO) {
    try {
      const user = await this.userService.updateUser(id, updateUserDTO);

      return {
        message: 'User updated successfully',
        user,
      };
    } catch (error) {
      return { message: 'Error updating user', error };
    }
  }

  @Get(':userId')
  async getUserById(@Param('userId') userId: string) {
    try {
      const user = await this.userService.getUserById(userId);
      if (!user) {
        return { message: 'User not found' };
      }
      return user;
    } catch (error) {
      return { message: 'Error retrieving user', error };
    }
  }
}
