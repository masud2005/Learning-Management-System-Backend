import { ICourse } from "./course.interface";
import { CourseModel } from "./course.model";

const createCourse = async (payload: Partial<ICourse>) => {
  const body = payload;

  const course = await CourseModel.create(body);
  return course;
};

export const CourseService = {
  createCourse,
};
