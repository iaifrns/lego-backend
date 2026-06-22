import {} from "express";
import { getGroqChatOtherCompletion, joinPrompt, main, } from "../groq/prompts.js";
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
export const getFirstPromptMessage = async (req, res) => {
    try {
        const prompt = await main();
        res.status(200).json({
            success: true,
            data: prompt,
        });
    }
    catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            error: e,
        });
    }
};
export const getCustomeQuery = async (req, res) => {
    try {
        const message = req.query.message;
        const prompt = joinPrompt(message);
        const result = await getGroqChatOtherCompletion(prompt);
        console.log(result.choices[0]?.message.content);
        console.log("\nit ends here");
        const modelName = JSON.parse(result.choices[0]?.message.content)?.model;
        const pipeline = JSON.parse(result.choices[0]?.message.content)?.pipeline;
        const Model = models[modelName];
        const response = await Model.aggregate(pipeline).limit(10);
        const count = await Model.aggregate(pipeline).count(modelName);
        res.status(200).json({
            success: true,
            data: response,
            model: modelName,
            pipeline: pipeline,
            count: count[0][modelName],
        });
    }
    catch (e) {
        console.log(e);
        res.status(500).json({
            error: e,
            succes: false,
        });
    }
};
export const getSpecificData = async (req, res) => {
    try {
        const { model, pipeline, page } = req.body;
        const Model = models[model];
        const skip = page == 1 ? 0 : (page - 1) * 10;
        const data = await Model.aggregate(pipeline).skip(skip).limit(10);
        console.log(skip);
        res.status(200).json({
            success: true,
            data: data,
        });
    }
    catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            error: e,
        });
    }
};
//# sourceMappingURL=promptController.js.map