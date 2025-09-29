import { IMentor } from "./mentor.interface";
import { MentorModel } from "./mentor.model";

const createMentor = async (payload: Partial<IMentor>) => {
    const body = payload;

    const mentor = await MentorModel.create(body);
    return mentor;
};

const updateMentor = async (mentorId: string, payload: Partial<IMentor>) => {
    const newUpdateMentor = await MentorModel.findByIdAndUpdate(
        mentorId,
        payload,
        { new: true, runValidators: true }
    );
    return newUpdateMentor;
};

const deleteMentor = async (mentorId: string) => {
    const mentor = await MentorModel.findByIdAndDelete(mentorId);
    return mentor;
};

const getAllMentors = async () => {
    const mentors = await MentorModel.find();
    const totalMentor = await MentorModel.countDocuments();
    return {
        data: mentors,
        meta: {
            total: totalMentor,
        },
    };
};

const getSingleMentor = async (mentorId: string) => {
    const mentor = await MentorModel.findById(mentorId);
    return mentor;
};

export const MentorService = {
    createMentor,
    updateMentor,
    deleteMentor,
    getAllMentors,
    getSingleMentor,
};
