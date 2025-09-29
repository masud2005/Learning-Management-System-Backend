import { Router } from "express";
import { CourseRoutes } from "../modules/course/course.route";
import { CategoryRoutes } from "../modules/category/category.route";

export const router = Router();

const moduleRoutes = [
    {
        path: '/category',
        route: CategoryRoutes
    },
    {
        path: '/course',
        route: CourseRoutes
    }
]

moduleRoutes.forEach((route) => {
    router.use(route.path, route.route);
})