import e from "express";
import { getColorCount, getColors } from "../controller/colorController.js";
const router = e.Router();
router.get('/count', getColorCount);
router.get('/getAll', getColors);
export default router;
//# sourceMappingURL=colorRoute.js.map