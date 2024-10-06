import { Schema, model } from "mongoose";
import { User } from "../interface/user.interface";

const UserShema = new Schema<User>(
    {
        name: {
            type:String,
            required:true
        },
        number: {
            type:Number,
            required:true
        },
        hobbies: {
            type:String,
            required:true
        },
        img: {
            type:String,
            required:false
        },
        email: {
            type:String,
            required:true
        },
        password: {
            type:String,
            required:true
        }

    },
    {timestamps:true}    
)

const UserModel = model('user', UserShema);

export default UserModel;