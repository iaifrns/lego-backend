import type { Request, Response } from "express";
import Set from "../model/sets.js";
import type { PipelineStage } from "mongoose";

export const getSetsCount = async (req: Request, res: Response) => {
  try {
    const count = await Set.countDocuments();

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

export const getSetCountPassYear = async (req: Request, res: Response) => {
  try {
    const pipeline: PipelineStage[] = [
      {
        $group: {
          _id: "$year",
          count: {
            $count: {},
          },
        },
      },
      {
        $sort: {
          _id: -1,
        },
      },
      {
        $limit: 8,
      },
    ];

    const setList = await Set.aggregate(pipeline);

    res.status(200).json({
      success: true,
      data: setList,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      error: e,
    });
  }
};

export const getSetandPartCountPerYear = async (
  req: Request,
  res: Response,
) => {
  try {
    const pipeline: PipelineStage[] = [
      {
        $group: {
          _id: "$year",
          sets_count: {
            $count: {},
          },
          total_parts: {
            $sum: "$num_parts",
          },
        },
      },
      {
        $sort: {
          _id: 1,
        },
      },
    ];

    const dataAnalyseList = await Set.aggregate(pipeline);

    res.status(200).json({
      success: true,
      data: dataAnalyseList,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      error: e,
    });
  }
};

export const getAllSets = async (req: Request, res: Response) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 15;

    let skip = 0;

    if (page > 1) {
      skip = page * limit;
    }

    const pipeline = [
      {
        $lookup: {
          from: "themes",
          localField: "theme_id",
          foreignField: "id",
          as: "theme",
        },
      },
      {
        $unwind: "$theme",
      },
      {
        $project: {
          _id: 0,
          set_num: 1,
          name: 1,
          year: 1,
          num_parts: 1,
          theme: "$theme.name",
        },
      },
    ];

    const sets = await Set.aggregate(pipeline).skip(skip).limit(limit);

    res.status(200).json({
      success: true,
      data: sets,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      error: e,
    });
  }
};
