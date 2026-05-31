import mongoose, { Schema, type Document } from "mongoose";

export interface IInventories extends Document {
  id: number;
  version: number;
  set_num: string;
}

const inventorySchema = new Schema({}, { collection: "inventories" });

export default mongoose.model<IInventories>("Inventory", inventorySchema);
