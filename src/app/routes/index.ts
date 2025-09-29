import { Router } from "express";
import { CourseRoutes } from "../modules/course/course.route";
import { CategoryRoutes } from "../modules/category/category.route";
import { MentorRoutes } from "../modules/mentor/mentor.route";

export const router = Router();

const moduleRoutes = [
    {
        path: '/category',
        route: CategoryRoutes
    },
    {
        path: '/course',
        route: CourseRoutes
    },
    {
        path: '/mentor',
        route: MentorRoutes
    }
]

moduleRoutes.forEach((route) => {
    router.use(route.path, route.route);
})