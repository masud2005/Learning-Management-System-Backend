
import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { MentorService } from "./mentor.service";

const createMentor = catchAsync(async (req: Request, res: Response) => {
    const mentor = await MentorService.createMentor(req.body);

    sendResponse(res, {
        success: true,
        statusCode: 201,
        message: "Mentor created successfully",
        data: mentor
    })
});

const updateMentor = catchAsync(async (req: Request, res: Response) => {
    const mentorId = req.params.id;
    const payload = req.body;

    const mentor = await MentorService.updateMentor(mentorId, payload);

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Mentor updated successfully",
        data: mentor
    })
});


const deleteMentor = catchAsync(async (req: Request, res: Response) => {
    const mentorId = req.params.id;
    const mentor = await MentorService.deleteMentor(mentorId);

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Mentor delete successfully",
        data: mentor
    })
});

const getAllMentors = catchAsync(async (req: Request, res: Response) => {
    const mentors = await MentorService.getAllMentors();

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Get all mentors retrieved successfully",
        data: mentors.data,
        meta: mentors.meta
    })
});

const getSingleMentor = catchAsync(async (req: Request, res: Response) => {
    const mentorId = req.params.id;
    const mentor = await MentorService.getSingleMentor(mentorId);

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Get single mentor retrieved successfully",
        data: mentor,
    })
});

export const MentorController = {
    createMentor,
    updateMentor,
    deleteMentor,
    getAllMentors,
    getSingleMentor,
};
