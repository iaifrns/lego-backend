import Inventory from "../model/inventories.js";
import inventoryParts from "../model/inventoryParts.js";
export const getCountInventories = async (req, res) => {
    try {
        const count = await Inventory.countDocuments();
        res.status(200).json({
            success: true,
            count,
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
export const getInvetoriesPerSets = async (req, res) => {
    try {
        const pipeline = [
            {
                $group: {
                    _id: "$inventory_id",
                    count: {
                        $count: {},
                    },
                },
            },
            {
                $sort: {
                    count: -1
                }
            },
            {
                $limit: 8,
            },
        ];
        const inventoryList = await inventoryParts.aggregate(pipeline);
        res.status(200).json({
            success: true,
            data: inventoryList,
        });
    }
    catch (e) {
        console.log(e);
        res.status(500).json({
            error: e,
            success: false,
        });
    }
};
//# sourceMappingURL=inventoryController.js.map