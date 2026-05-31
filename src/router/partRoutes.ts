import e from "express";
import { getCountPart, getMostUsedPartCat } from "../controller/partController.js";

const router = e.Router()

router.get("/count", getCountPart);

router.get("/part_cat_count", getMostUsedPartCat)

export default router