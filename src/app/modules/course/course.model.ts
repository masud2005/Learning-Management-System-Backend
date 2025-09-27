import { model, Model, Schema } from "mongoose";
import { ICourse } from "./course.interface";

const courseSchema = new Schema<ICourse>({
  courseId: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  category: { type: Schema.Types.ObjectId, required: true },
  type: { type: String, required: true },
  image: { type: String, required: true },
  fee: { type: String, required: true },
  rating: { type: Number, default: 0 },
  totalRating: { type: Number, default: 0 },
  totalStudentsEnroll: { type: Number, default: 0 },
  mentor: { type: Schema.Types.ObjectId, required: true },
  courseStart: { type: String, required: true },
  duration: { type: String, required: true },
  lectures: { type: Number, required: true },
  totalExam: { type: Number, required: true },
  totalProject: { type: Number, required: true },
  courseDetails: { type: String, required: true },
  courseOverview: { type: String, required: true },
  curriculum: { type: [String], default: [] },
  courseIncludes: { type: [String], default: [] },
  softwareIncludes: { type: [String], default: [] },
  jobOption: { type: [String], default: [] },
}, {
  timestamps: true,
  versionKey: false
});


export const CourseModel = model<ICourse>("Course", courseSchema);