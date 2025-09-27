import { Types } from "mongoose";

export interface ICertification {
    _id: Types.ObjectId;
    id: string;
    name: string;
    image: string;
    phoneNumber: string;
    email: string;
    studentId: string;
    courseName: string;
    batchName: string;
    createdAt: Date;
    updatedAt: Date;
}
