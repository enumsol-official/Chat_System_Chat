import { User } from './userModel';
import { Message } from './messagemodel';
export declare class Chat {
    id: number;
    chatName: string;
    isGroupChat: boolean;
    users: User[];
    latestMessage: Message;
    groupAdmin: User;
    createdAt: Date;
    updatedAt: Date;
}
