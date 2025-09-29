import { ICategory } from "./category.interface";
import { CategoryModel } from "./category.model";

const createCategory = async (payload: Partial<ICategory>) => {
    const body = payload;

    const category = await CategoryModel.create(body);
    return category;
};

const updateCategory = async (categoryId: string, payload: Partial<ICategory>) => {
    const newUpdateCategory = await CategoryModel.findByIdAndUpdate(
        categoryId,
        payload,
        { new: true, runValidators: true }
    );
    return newUpdateCategory;
};

const deleteCategory = async (categoryId: string) => {
    const category = await CategoryModel.findByIdAndDelete(categoryId);
    return category;
};

const getAllCategories = async () => {
    const category = await CategoryModel.find();
    const totalCategories = await CategoryModel.countDocuments();
    return {
        data: category,
        meta: {
            total: totalCategories,
        },
    };
};

const getSingleCategory = async (categoryId: string) => {
    const category = await CategoryModel.findById(categoryId);
    return category;
};

export const CategoryService = {
    createCategory,
    updateCategory,
    deleteCategory,
    getAllCategories,
    getSingleCategory,
};
