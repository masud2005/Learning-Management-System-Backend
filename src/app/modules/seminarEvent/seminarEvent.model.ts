import { model, Schema } from "mongoose";
import { ISeminarEvent } from "./seminarEvent.interface";

const seminarEventSchema = new Schema<ISeminarEvent>({
    id: { type: Number, required: true, unique: true },
    speaker: { type: String, required: true },
    title: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    image: { type: String, required: true }
}, {
    versionKey: false,
    timestamps: true
});

export const SeminarEventModel = model<ISeminarEvent>("SeminarEvent", seminarEventSchema);
