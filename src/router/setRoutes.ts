import express from "express";
import {
  getAllSets,
  getSetandPartCountPerYear,
  getSetCountPassYear,
  getSetsCount,
} from "../controller/setController.js";

const router = express.Router();

router.get("/count", getSetsCount);

router.get("/last8_year_count", getSetCountPassYear);

router.get("/sets_part_analysis", getSetandPartCountPerYear);

router.get("/getAll", getAllSets);

export default router;
