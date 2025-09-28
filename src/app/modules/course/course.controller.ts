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

const updateCourse = async (req: Request, res: Response) => {
  try {
    const courseId = req.params.id;
    const payload = req.body;
    console.log(payload)

    const course = await CourseService.updateCourse(courseId, payload);

    res.send({
      success: true,
      statusCode: 201,
      message: "Course updated successfully",
      data: course,
    });
  } catch (error) {
    console.log(error);
  }
};

export const CourseController = {
  createCourse,
  updateCourse,
};
