import mongoose, { Schema, type Document } from "mongoose";

export interface IInventoryPart extends Document {
  inventory_id: number;
  part_num: string;
  color_id: number;
  quantity: number;
  is_spare: boolean;
}

const inventoryPartSchema = new Schema({}, { collection: "inventory_parts" });

export default mongoose.model<IInventoryPart>("InventoryPart", inventoryPartSchema);
