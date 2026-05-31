import e from "express";
import { getCountInventoryParts, getInventoryQuentity } from "../controller/inventoryPartController.js";

const router = e.Router()

router.get('/count', getCountInventoryParts)

router.get('/inventory_and_quentity', getInventoryQuentity)

export default router