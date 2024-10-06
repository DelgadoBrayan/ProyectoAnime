import { Auth } from "./auth.interface";

export interface User extends Auth{
    name:string;
    number: number;
    hobbies: String;
    img: string
}