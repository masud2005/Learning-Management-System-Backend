import { ICourse } from "./course.interface";
import { CourseModel } from "./course.model";

const createCourse = async (payload: Partial<ICourse>) => {
  const body = payload;

  const course = await CourseModel.create(body);
  return course;
};

const updateCourse = async (courseId: string, payload: Partial<ICourse>) => {
  const newUpdateCourse = await CourseModel.findByIdAndUpdate(
    courseId,
    payload,
    { new: true, runValidators: true }
  );
  return newUpdateCourse;
};

const allCourses = async () => {
  const courses = await CourseModel.find();
  const totalCourses = await CourseModel.countDocuments();
  return {
    courses,
    meta: {
      total: totalCourses,
    },
  };
};

const singleCourse = async (courseId: string) => {
  const course = await CourseModel.findById(courseId);
  return course;
};

export const CourseService = {
  createCourse,
  updateCourse,
  allCourses,
  singleCourse,
};
