import { model, Schema } from "mongoose";
import { IAdmin } from "./admin.interface";

const adminSchema = new Schema<IAdmin>(
    {
        id: { type: String, required: true, unique: true },
        name: { type: String, required: true },
        gender: {
            type: String,
            enum: ['male', 'female', 'other'],
            required: true
        },
        dateOfBirth: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        contactNo: { type: String, required: true },
        emergencyContact: { type: String, required: true },
        address: { type: String, required: true },
        profileImg: { type: String, required: true },
        status: {
            type: String,
            enum: ['active', 'inactive', 'pending'],
            required: true,
            default: 'pending'
        },
        managementDepartment: { type: String, required: true }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export const AdminModel = model<IAdmin>("Admin", adminSchema);
