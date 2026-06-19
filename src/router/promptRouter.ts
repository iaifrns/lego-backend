import e from "express";
import { getCustomeQuery, getFirstPromptMessage } from "../controller/promptController.js";

const router = e.Router()

router.get('/get_first_prompt', getFirstPromptMessage)

router.get('/get_custom_result', getCustomeQuery)

export default router