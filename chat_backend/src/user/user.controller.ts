import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/models/userModel';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async create(@Body('') user: User) {
    return await this.userService.Register(user);
  }
}
