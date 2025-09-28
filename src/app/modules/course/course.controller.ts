import { Request, Response } from "express";
import { CourseService } from "./course.service";
import { success } from "zod";

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

export const CourseController = {
  createCourse,
};
