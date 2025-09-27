import { Types } from "mongoose";

export interface ICourse {
    _id: Types.ObjectId;
    courseId: string;
    title: string;
    slug: string;
    category: Types.ObjectId;
    type: string;
    image: string;
    fee: string;
    rating?: number;
    totalRating?: number;
    totalStudentsEnroll: number;
    mentor: Types.ObjectId;
    courseStart: string;
    duration: string;
    lectures: number;
    totalExam: number;
    totalProject: number;
    courseDetails: string;
    courseOverview: string;
    curriculum: string[];
    courseIncludes: string[];
    softwareIncludes?: string[];
    jobOption?: string[];
    createdAt: Date;
    updatedAt: Date;
}