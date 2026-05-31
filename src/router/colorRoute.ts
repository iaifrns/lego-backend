import e from "express";
import { getColorCount } from "../controller/colorController.js";

const router = e.Router()

router.get('/count', getColorCount)

export default router