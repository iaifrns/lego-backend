import e from "express";
import { getThemeCount, getTopMostUsedThemes } from "../controller/themeController.js";

const router = e.Router()

router.get('/count', getThemeCount)

router.get('/getThemeAnalysisData', getTopMostUsedThemes)

export default router