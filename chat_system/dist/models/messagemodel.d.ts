import { User } from './userModel';
import { Chat } from './chatModel';
export declare class Message {
    id: number;
    sender: User;
    content: string;
    chat: Chat;
    readBy: User[];
    createdAt: Date;
    updatedAt: Date;
}
