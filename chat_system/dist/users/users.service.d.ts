import { Repository } from 'typeorm';
import { User } from 'src/models/userModel';
export declare class UserService {
    private readonly repository;
    constructor(repository: Repository<User>);
    create(user: User): Promise<User>;
}
