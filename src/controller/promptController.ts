import { type Request, type Response } from "express";
import {
    getGroqChatOtherCompletion,
    joinPrompt,
    main,
} from "../groq/prompts.js";
import Color from "../model/colors.js";
import Inventory from "../model/inventories.js";
import InventoryPart from "../model/inventoryParts.js";
import InventorySet from "../model/inventorySets.js";
import PartCategory from "../model/partCategories.js";
import Part from "../model/parts.js";
import Set from "../model/sets.js";
import Theme from "../model/theme.js";

const models = {
  Set,
  Theme,
  Part,
  Inventory,
  InventoryPart,
  InventorySet,
  Color,
  PartCategory,
};

type ModelName = keyof typeof models;

export const getFirstPromptMessage = async (req: Request, res: Response) => {
  try {
    const prompt = await main();
    res.status(200).json({
      success: true,
      data: prompt,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      error: e,
    });
  }
};

export const getCustomeQuery = async (req: Request, res: Response) => {
  try {
    const message = req.query.message as any;
    const prompt = joinPrompt(message);

    const result = await getGroqChatOtherCompletion(prompt);

    console.log(result.choices[0]?.message.content)
    console.log("\nit ends here")

    const modelName: ModelName = JSON.parse(result.choices[0]?.message.content as string)?.model
    const pipeline = JSON.parse(result.choices[0]?.message.content as string)?.pipeline

    const Model = models[modelName]

    const response = await Model.aggregate(pipeline).limit(10)

    res.status(200).json({
        success: true,
        data: response,
        model: modelName,
        pipeline: pipeline
    })

  } catch (e) {
    console.log(e);
    res.status(500).json({
      error: e,
      succes: false,
    });
  }
};
