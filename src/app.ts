import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import { CourseRoutes } from "./app/modules/course/course.route";
import { success } from "zod";
import { notFound } from "./app/middlewares/notFound";
import { globalErrorHandler } from "./app/middlewares/globalErrorHandler";
import { CategoryRoutes } from "./app/modules/category/category.route";
import { router } from "./app/routes";
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1", router); 

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Learning Management System",
  });
});

// global error handler
app.use(globalErrorHandler);

// route not found
app.use(notFound);

export default app;
