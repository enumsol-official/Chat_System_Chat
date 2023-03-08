import { Controller, Post, Body, Res } from '@nestjs/common';
import { User } from 'src/models/userModel';
import { CreateUserDto } from './dto/user.dto';
import { UserService } from './users.service';

@Controller('user')
export class UserController {
  constructor(private _userService: UserService) {}

  @Post('create')
  create(@Body() createUserDto: CreateUserDto) {
    const res = this._userService.create(createUserDto);
    return res;
  }
}
