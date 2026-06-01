import e from "express";
import {
  getCountInventoryParts,
  getInventoryQuentity,
  getMostUsedParts,
} from "../controller/inventoryPartController.js";

const router = e.Router();

router.get("/count", getCountInventoryParts);

router.get("/inventory_and_quentity", getInventoryQuentity);

router.get("/most_used_parts", getMostUsedParts);

export default router;
