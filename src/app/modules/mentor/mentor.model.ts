import { model, Schema } from "mongoose";
import { IMentor } from "./mentor.interface";

const mentorSchema = new Schema<IMentor>(
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
        designation: { type: String, required: true },
        departmentName: { type: String, required: true },
        specialized_area: { type: [String], default: [] },
        education_qualification: { type: [String], default: [] },
        workExperience: { type: [String], default: [] },
        experienceYears: { type: String, required: true },
        experienceTrainedStudents: { type: String, required: true },
        reviews: { type: Number, default: 0 },
        bio: { type: String, required: true },
        lifeJourney: { type: String, required: true }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

export const MentorModel = model<IMentor>("Mentor", mentorSchema);