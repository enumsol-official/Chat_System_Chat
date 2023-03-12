import { Entity, ObjectIdColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class User {
  @ObjectIdColumn()
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: false })
  isAdmin: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;
}
