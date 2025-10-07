import { Router } from "express";
import { CourseRoutes } from "../modules/course/course.route";
import { CategoryRoutes } from "../modules/category/category.route";
import { MentorRoutes } from "../modules/mentor/mentor.route";
import { UserRoutes } from "../modules/user/user.routes";
import { AuthRoutes } from "../modules/auth/auth.route";

export const router = Router();

const moduleRoutes = [
    {
        path: '/user',
        route: UserRoutes
    },
    {
        path: '/auth',
        route: AuthRoutes
    },
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