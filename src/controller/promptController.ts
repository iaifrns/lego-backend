import type { Request, Response } from "express";
import { main } from "../groq/prompts.js";

export const getFirstPromptMessage = async (req: Request, res: Response) => {
    try{
        const prompt = await main()
        console.log(prompt)
    }catch(e){
        console.log(e)
        res.status(500).json({
            success: false,
            error: e
        })
    }
}