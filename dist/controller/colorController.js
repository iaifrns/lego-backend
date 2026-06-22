import Color from '../model/colors.js';
export const getColorCount = async (req, res) => {
    try {
        const colorCount = await Color.countDocuments();
        res.status(200).json({
            success: true,
            count: colorCount
        });
    }
    catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            error: e
        });
    }
};
export const getColors = async (req, res) => {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        let skip = 0;
        if (page > 1) {
            skip = limit * page;
        }
        const colors = await Color.find({}, { _id: 0 }).skip(skip).limit(limit);
        res.status(200).json({
            success: true,
            data: colors
        });
    }
    catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            error: e
        });
    }
};
//# sourceMappingURL=colorController.js.map