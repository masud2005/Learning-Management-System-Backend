import { Router } from "express";
import { CourseController } from "./course.controller";

const router = Router();

router.post("/create-course", CourseController.createCourse);
router.patch("/:id", CourseController.updateCourse);
router.delete("/:id", CourseController.deleteCourse);
router.get("/all-courses", CourseController.allCourses);
router.get("/:id", CourseController.singleCourse);

export const CourseRoutes = router;
