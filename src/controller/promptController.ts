import type { Request, Response } from "express";
import { main } from "../groq/prompts.js";

export const getFirstPromptMessage = async (req: Request, res: Response) => {
    try{
        const prompt = await main()
        res.status(200).json({
            success: true,
            data: prompt
        })
    }catch(e){
        console.log(e)
        res.status(500).json({
            success: false,
            error: e
        })
    }
}