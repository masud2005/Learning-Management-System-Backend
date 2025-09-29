import { Router } from "express";
import { CategoryController } from "./category.controller";

const router = Router();

router.post("/create-category", CategoryController.createCategory);
router.patch("/:id", CategoryController.updateCategory);
router.delete("/:id", CategoryController.deleteCategory);
router.get("/all-categories", CategoryController.getAllCategories);
router.get("/:id", CategoryController.getSingleCategory);

export const CategoryRoutes = router;
