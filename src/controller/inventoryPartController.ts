import type { Request, Response } from "express";
import InventoryPart from "../model/inventoryParts.js";

export const getCountInventoryParts = async (req: Request, res: Response) => {
  try {
    const count = await InventoryPart.countDocuments();

    res.status(200).json({
      success: true,
      count,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      error: e,
    });
  }
};

export const getInventoryQuentity = async (req: Request, res: Response) => {
  try {
    const pipeline = [
      {
        $group: {
          _id: "$inventory_id",
          count: {
            $sum: "$quantity",
          },
        },
      },
      {
        $limit: 10,
      },
    ];

    const inventoryPartList = await InventoryPart.aggregate(pipeline);

    res.status(200).json({
      success: true,
      data: inventoryPartList,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      error: e,
    });
  }
};
