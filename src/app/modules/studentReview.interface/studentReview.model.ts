import { model, Schema } from "mongoose";
import { IStudentReview } from "./studentReview.interface";

const studentReviewSchema = new Schema<IStudentReview>({
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    studentName: { type: String },
    studentImg: { type: String },
    description: { type: String },
    date: { type: String },
    videoUrl: { type: String }
}, {
    versionKey: false,
    timestamps: true
});

export const StudentReviewModel = model<IStudentReview>("StudentReview", studentReviewSchema);
