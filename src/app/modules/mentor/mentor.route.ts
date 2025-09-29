import { Router } from "express";
import { MentorController } from "./mentor.cotroller";

const router = Router();

router.post("/create-mentor", MentorController.createMentor);
router.patch("/:id", MentorController.updateMentor);
router.delete("/:id", MentorController.deleteMentor);
router.get("/all-mentors", MentorController.getAllMentors);
router.get("/:id", MentorController.getSingleMentor);

export const MentorRoutes = router;
