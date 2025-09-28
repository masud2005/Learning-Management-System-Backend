import { Request, Response } from "express";
import { CourseService } from "./course.service";
import { catchAsync } from "../../utils/catchAsync";

const createCourse = async (req: Request, res: Response) => {
  try {
    const course = await CourseService.createCourse(req.body);

    res.send({
      success: true,
      statusCode: 201,
      message: "Course created successfully",
      data: course,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateCourse = catchAsync(async (req: Request, res: Response) => {
  const courseId = req.params.id;
  const payload = req.body;
  // console.log(payload);

  const course = await CourseService.updateCourse(courseId, payload);

  res.send({
    success: true,
    statusCode: 200,
    message: "Course updated successfully",
    data: course,
  });
});

// const updateCourse = async (req: Request, res: Response) => {
//   try {
//     const courseId = req.params.id;
//     const payload = req.body;
//     console.log(payload);

//     const course = await CourseService.updateCourse(courseId, payload);

//     res.send({
//       success: true,
//       statusCode: 200,
//       message: "Course updated successfully",
//       data: course,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

const deleteCourse = async (req: Request, res: Response) => {
  const courseId = req.params.id;
  const course = await CourseService.deleteCourse(courseId);

  res.send({
    success: true,
    statusCode: 200,
    message: "Course delete successfully",
    data: course,
  });
};

const allCourses = async (req: Request, res: Response) => {
  const courses = await CourseService.allCourses();
  res.send({
    success: true,
    statusCode: 200,
    message: "Get all courses retrieved successfully",
    data: courses,
  });
};

const singleCourse = async (req: Request, res: Response) => {
  const courseId = req.params.id;
  const course = await CourseService.singleCourse(courseId);
  res.send({
    success: true,
    statusCode: 200,
    message: "Single course retrieved successfully",
    data: course,
  });
};

export const CourseController = {
  createCourse,
  updateCourse,
  deleteCourse,
  allCourses,
  singleCourse,
};
