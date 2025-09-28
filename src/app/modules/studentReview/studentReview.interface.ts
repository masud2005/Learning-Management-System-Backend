import { Types } from "mongoose";

export interface IStudentReview {
    _id: Types.ObjectId;
    id: string;
    title: string;
    studentName?: string;
    studentImg?: string;
    description?: string;
    date?: string;
    videoUrl?: string;
    createdAt: Date;
    updatedAt: Date;
}
