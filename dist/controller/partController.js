import Part from '../model/parts.js';
export const getCountPart = async (req, res) => {
    try {
        const count = await Part.countDocuments();
        res.status(200).json({
            success: true,
            count
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
export const getMostUsedPartCat = async (req, res) => {
    try {
        const pipeline = [
            {
                $group: {
                    _id: '$part_cat_id',
                    count: {
                        $count: {}
                    }
                }
            },
            {
                $limit: 10
            },
        ];
        const patCatCounts = await Part.aggregate(pipeline);
        res.status(200).json({
            success: true,
            data: patCatCounts
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
//# sourceMappingURL=partController.js.map