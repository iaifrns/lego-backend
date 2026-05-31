import type { Request, Response } from "express";
import Inventory from "../model/inventories.js";
import inventoryParts from "../model/inventoryParts.js";
import type { PipelineStage } from "mongoose";

export const getCountInventories = async (req: Request, res: Response) => {
  try {
    const count = await Inventory.countDocuments();

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

export const getInvetoriesPerSets = async (req: Request, res: Response) => {
  try {
    const pipeline: PipelineStage[] = [
      {
        $group: {
          _id: "$inventory_id",
          count: {
            $count:{},
          },
        },
      },
      {
        $sort: {
            count: -1
        }
      },
      {
        $limit: 8,
      },
    ];

    const inventoryList = await inventoryParts.aggregate(pipeline);

    res.status(200).json({
      success: true,
      data: inventoryList,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      error: e,
      success: false,
    });
  }
};
