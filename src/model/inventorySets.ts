import mongoose, { Schema, type Document } from "mongoose";

export interface IInventorySet extends Document {
  inventory_id: number;
  set_num: string;
  quantity: number;
}

const inventorySetSchema = new Schema({}, { collection: "inventory_sets" });

export default mongoose.model<IInventorySet>(
  "InventorySet",
  inventorySetSchema,
);
