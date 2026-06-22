import mongoose, { Schema } from "mongoose";
const inventoryPartSchema = new Schema({}, { collection: "inventory_parts" });
export default mongoose.model("InventoryPart", inventoryPartSchema);
//# sourceMappingURL=inventoryParts.js.map