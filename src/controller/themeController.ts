import type { Request, Response } from "express";
import Theme from "../model/theme.js";
import Set from "../model/sets.js";
import type { PipelineStage } from "mongoose";

export const getThemeCount = async (req: Request, res: Response) => {
  try {
    const themeCount = await Theme.countDocuments();

    res.status(200).json({
      success: true,
      count: themeCount,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      error: e,
    });
  }
};

export const getTopMostUsedThemes = async (req: Request, res: Response) => {
  try {
    const pipeline: PipelineStage[] = [
      {
        $group: {
          _id: "$theme_id",
          count: {
            $count: {},
          },
        },
      },
      {
        $lookup: {
          from: "themes",
          localField: "_id",
          foreignField: "id",
          as: "theme",
        },
      },
      { $unwind: "$theme" },
      {
        $project: {
          _id: 0,
          themeName: "$theme.name",
          count: 1,
        },
      },
      {
        $sort: {
          count: -1,
        },
      },
      { $limit: 20 },
    ];

    const themeData = await Set.aggregate(pipeline);

    res.status(200).json({
      success: true,
      data: themeData,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      error: e,
    });
  }
};
