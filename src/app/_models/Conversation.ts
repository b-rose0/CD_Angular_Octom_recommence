import { Message } from "./Message";
import { User } from "./User";

export class Conversation {
    id!: number;
    nom!: string;
    numberNotifications: number = 0;
    typing: boolean = false;
    listMember!: User[];
    listMessage!: Message[];
}