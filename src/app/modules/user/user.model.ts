import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";


const userSchema = new Schema<IUser>(
    {
        id: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        isPasswordChanged: { type: Boolean, default: false },
        role: {
            type: String,
            enum: ['student', 'mentor', 'admin'],
            required: true,
            default: 'student'
        },
        status: {
            type: String,
            enum: ['active', 'blocked', 'pending'],
            required: true,
            default: 'pending'
        },
        isDeleted: { type: Boolean, default: false }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export const UserModel = model<IUser>("User", userSchema);