import e from "express";
import { getCountInventories, getInvetoriesPerSets } from "../controller/inventoryController.js";

const router = e.Router()

router.get('/count', getCountInventories)

router.get('/8_inventory_persets', getInvetoriesPerSets)

export default router