import mongoose, { Schema } from "mongoose";
const inventorySetSchema = new Schema({}, { collection: "inventory_sets" });
export default mongoose.model("InventorySet", inventorySetSchema);
//# sourceMappingURL=inventorySets.js.map