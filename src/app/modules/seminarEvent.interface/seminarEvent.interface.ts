import { Types } from "mongoose";

export interface ISeminarEvent {
    _id: Types.ObjectId;
    id: number;
    speaker: string;
    title: string;
    date: string;
    time: string;
    image: string;
    createdAt: Date;
    updatedAt: Date;
}
