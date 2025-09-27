import { model, Schema } from "mongoose";
import { ICertification } from "./certification.interface";

const certificationSchema = new Schema<ICertification>({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
    studentId: { type: String, required: true },
    courseName: { type: String, required: true },
    batchName: { type: String, required: true }
}, {
    versionKey: false,
    timestamps: true
});

export const CertificationModel = model<ICertification>("Certification", certificationSchema);
