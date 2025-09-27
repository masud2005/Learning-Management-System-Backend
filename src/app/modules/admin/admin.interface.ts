import { Types } from "mongoose";

export interface IAdmin {
    _id: Types.ObjectId;
    id: string;
    name: string;
    gender: 'male' | 'female' | 'other';
    dateOfBirth: string;
    email: string;
    contactNo: string;
    emergencyContact: string;
    address: string;
    profileImg: string;
    status: 'active' | 'inactive' | 'pending';
    managementDepartment: string;
    createdAt: Date;
    updatedAt: Date;
}
