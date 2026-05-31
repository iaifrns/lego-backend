import mongoose, { Schema, type Document } from "mongoose";

export interface IColor extends Document {
  id: number;
  name: string;
  rgb: string;
  is_trans: boolean;
}

const colorSchema = new Schema({}, { collection: "colors" });

export default mongoose.model<IColor>("Color", colorSchema);
