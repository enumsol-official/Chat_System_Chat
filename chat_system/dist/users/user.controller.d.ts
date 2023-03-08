import { User } from 'src/models/userModel';
import { CreateUserDto } from './dto/user.dto';
import { UserService } from './users.service';
export declare class UserController {
    private _userService;
    constructor(_userService: UserService);
    create(createUserDto: CreateUserDto): Promise<User>;
}
