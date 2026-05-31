import express from "express";
import { getSetandPartCountPerYear, getSetCountPassYear, getSetsCount } from "../controller/setController.js";

const router = express.Router();

router.get("/count", getSetsCount);

router.get("/last8_year_count", getSetCountPassYear);

router.get("/sets_part_analysis", getSetandPartCountPerYear)

export default router