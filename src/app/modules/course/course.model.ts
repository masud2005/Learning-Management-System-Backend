import { model, Model, Schema } from "mongoose";
import { ICourse } from "./course.interface";

const courseSchema = new Schema<ICourse>({
  courseId: { type: String, required: true },
  title: { type: String, required: true },
  slug: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, required: true },
  type: { type: String, required: true },
  image: { type: String, required: true },
  fee: { type: String, required: true },
  //   rating: { type: Number, required: true },
  rating: { type: Number, default: 0 },
  //   totalRating: { type: Number, required: true },
  totalRating: { type: Number, default: 0 },
  //   totalStudentsEnroll: { type: Number, required: true },
  totalStudentsEnroll: { type: Number, default: 0 },
  mentor: { type: Schema.Types.ObjectId, required: true },
  courseStart: { type: String, required: true },
  duration: { type: String, required: true },
  lectures: { type: Number, required: true },
  totalExam: { type: Number, required: true },
  totalProject: { type: Number, required: true },
  courseDetails: { type: String, required: true },
  courseOverview: { type: String, required: true },
  curriculum: { type: [String], default: [], required: true },
  courseIncludes: { type: [String], default: [], required: true },
  //   softwareIncludes: { type: [String], default: [], required: true },
  softwareIncludes: { type: [String], default: [] },
  //   jobOption: { type: [String], default: [], required: true },
  jobOption: { type: [String], default: [] },
});

export const CourseModel = model<ICourse>("Course", courseSchema);