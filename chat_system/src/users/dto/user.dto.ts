export class CreateUserDto {
  id: string;

  name: string;

  email: string;

  password: string;

  pic: string;

  isAdmin: boolean;

  createdAt: Date;

  updatedAt: Date;
}
