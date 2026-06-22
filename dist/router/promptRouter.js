import e from "express";
import { getCustomeQuery, getFirstPromptMessage, getSpecificData } from "../controller/promptController.js";
const router = e.Router();
router.get('/get_first_prompt', getFirstPromptMessage);
router.get('/get_custom_result', getCustomeQuery);
router.post('/get_specific_data', getSpecificData);
export default router;
//# sourceMappingURL=promptRouter.js.map