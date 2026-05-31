import type { Request, Response } from "express";
import Color from '../model/colors.js'

export const getColorCount = async (req: Request, res: Response) => {
    try{
        const colorCount = await Color.countDocuments()

        res.status(200).json({
            success: true,
            count: colorCount
        })
    }catch(e){
        console.log(e)
        res.status(500).json({
            success: false,
            error: e
        })
    }
}