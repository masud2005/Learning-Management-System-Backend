import { Request, Response } from "express";
import { CourseService } from "./course.service";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";

const createCourse = catchAsync(async (req: Request, res: Response) => {
  const course = await CourseService.createCourse(req.body);

  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "Course created successfully",
    data: course
  })
  // res.send({
  //   success: true,
  //   statusCode: 201,
  //   message: "Course created successfully",
  //   data: course,
  // });
});

const updateCourse = catchAsync(async (req: Request, res: Response) => {
  const courseId = req.params.id;
  const payload = req.body;
  // console.log(payload);

  const course = await CourseService.updateCourse(courseId, payload);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Course updated successfully",
    data: course
  })
});


const deleteCourse = catchAsync(async (req: Request, res: Response) => {
  const courseId = req.params.id;
  const course = await CourseService.deleteCourse(courseId);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Course delete successfully",
    data: course
  })
});

const allCourses = catchAsync(async (req: Request, res: Response) => {
  const courses = await CourseService.allCourses();

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Get all courses retrieved successfully",
    data: courses.data,
    meta: courses.meta
  })
});

const singleCourse = catchAsync(async (req: Request, res: Response) => {
  const courseId = req.params.id;
  const course = await CourseService.singleCourse(courseId);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Single course retrieved successfully",
    data: course,
  })
});

export const CourseController = {
  createCourse,
  updateCourse,
  deleteCourse,
  allCourses,
  singleCourse,
};
