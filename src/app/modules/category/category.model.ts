import { model, Schema } from "mongoose";
import { ICategory } from "./category.interface";

const categorySchema = new Schema<ICategory>({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    icon: { type: String, required: true }
}, {
    versionKey: false,
    timestamps: true
});

export const CategoryModel = model<ICategory>("Category", categorySchema);
