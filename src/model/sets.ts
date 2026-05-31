import mongoose, { Schema, type Document } from "mongoose";

export interface ISet extends Document {
  set_num: string;
  name: string;
  year: number;
  theme_id: number;
  num_parts: number;
}

const SetSchema = new Schema({}, { collection: "sets" });

export default mongoose.model<ISet>("Set", SetSchema);
