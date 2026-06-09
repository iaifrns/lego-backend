import e from "express";
import { getFirstPromptMessage } from "../controller/promptController.js";

const router = e.Router()

router.get('/get_first_prompt', getFirstPromptMessage)

export default router