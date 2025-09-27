import { Types } from "mongoose";

export interface ICourse {
    courseId: string;
    title: string;
    slug: string;
    category: Types.ObjectId;
    type: string;
    image: string;
    fee: string;
    // rating: number;
    rating?: number;
    // totalRating: number;
    totalRating?: number;
    // totalStudentsEnroll: number;
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
    // softwareIncludes: string[];
    softwareIncludes?: string[];
    // jobOption: string[];
    jobOption?: string[];
}