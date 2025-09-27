import { Types } from "mongoose";

export interface ICategory {
    _id: Types.ObjectId;
    id: number;
    name: string;
    slug: string;
    icon: string;
    createdAt: Date;
    updatedAt: Date;
}
