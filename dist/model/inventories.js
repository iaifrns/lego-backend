import mongoose, { Schema } from "mongoose";
const inventorySchema = new Schema({}, { collection: "inventories" });
export default mongoose.model("Inventory", inventorySchema);
//# sourceMappingURL=inventories.js.map