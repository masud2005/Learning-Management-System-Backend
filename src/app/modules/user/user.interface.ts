import { Types } from "mongoose";

export interface IUser {
    _id: Types.ObjectId;
    id: string;
    password: string;
    isPasswordChanged: boolean;
    role: 'student' | 'mentor' | 'admin';
    status: 'active' | 'blocked' | 'pending';
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
}
