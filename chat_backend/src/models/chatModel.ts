import {
  Entity,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './userModel';
import { Message } from './messagemodel';

@Entity()
export class Chat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  chatName: string;

  @Column({ default: false })
  isGroupChat: boolean;

  @ManyToMany(() => User)
  @JoinTable()
  users: User[];

  @ManyToOne(() => Message, { nullable: true })
  latestMessage: Message;

  @ManyToOne(() => User, { nullable: true })
  groupAdmin: User;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
