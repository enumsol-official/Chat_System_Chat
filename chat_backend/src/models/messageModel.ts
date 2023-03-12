import {
  Entity,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './userModel';
import { Chat } from './chatModel';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User)
  sender: User;

  @Column()
  content: string;

  @ManyToOne(() => Chat)
  chat: Chat;

  @ManyToMany(() => User)
  @JoinTable()
  readBy: User[];
}
