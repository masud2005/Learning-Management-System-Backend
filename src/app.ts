import cors from "cors";
import express, { Request, Response } from "express";
import { CourseRoutes } from "./app/modules/course/course.route";
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/course", CourseRoutes);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Learning Management System",
  });
});

export default app;
