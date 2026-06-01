import type { Request, Response } from "express";
import InventoryPart from "../model/inventoryParts.js";
import type { PipelineStage } from "mongoose";

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

export const getMostUsedParts = async (req: Request, res: Response) => {
  try {
    const pipeline: PipelineStage[] = [
      {
        $facet: {
          topParts: [
            {
              $group: {
                _id: "$part_num",
                totalUsage: { $sum: "$quantity" },
              },
            },
            { $sort: { totalUsage: -1 } },
            { $limit: 10 },

            {
              $lookup: {
                from: "parts",
                localField: "_id",
                foreignField: "part_num",
                as: "part",
              },
            },
            { $unwind: "$part" },

            {
              $project: {
                _id: 0,
                part_num: "$_id",
                part_name: "$part.name",
                totalUsage: 1,
              },
            },
          ],

          grandTotal: [
            {
              $group: {
                _id: null,
                totalParts: { $sum: "$quantity" },
              },
            },
          ],
        },
      },
    ];

    const partsList = await InventoryPart.aggregate(pipeline);

    res.status(200).json({
      success: true,
      data: partsList,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      error: e,
      success: false,
    });
  }
};
