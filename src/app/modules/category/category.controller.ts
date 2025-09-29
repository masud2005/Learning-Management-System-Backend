
import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { CategoryService } from "./category.service";
import { sendResponse } from "../../utils/sendResponse";

const createCategory = catchAsync(async (req: Request, res: Response) => {
    const category = await CategoryService.createCategory(req.body);

    sendResponse(res, {
        success: true,
        statusCode: 201,
        message: "Category created successfully",
        data: category
    })
});

const updateCategory = catchAsync(async (req: Request, res: Response) => {
    const categoryId = req.params.id;
    const payload = req.body;

    const category = await CategoryService.updateCategory(categoryId, payload);

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Category updated successfully",
        data: category
    })
});


const deleteCategory = catchAsync(async (req: Request, res: Response) => {
    const categoryId = req.params.id;
    const category = await CategoryService.deleteCategory(categoryId);

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Category delete successfully",
        data: category
    })
});

const getAllCategories = catchAsync(async (req: Request, res: Response) => {
    const categories = await CategoryService.getAllCategories();

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Get all categories retrieved successfully",
        data: categories.data,
        meta: categories.meta
    })
});

const getSingleCategory = catchAsync(async (req: Request, res: Response) => {
    const categoryId = req.params.id;
    const category = await CategoryService.getSingleCategory(categoryId);

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Get single category retrieved successfully",
        data: category,
    })
});

export const CategoryController = {
    createCategory,
    updateCategory,
    deleteCategory,
    getAllCategories,
    getSingleCategory,
};
