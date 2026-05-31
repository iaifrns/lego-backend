import mongoose, { Schema, type Document } from "mongoose";

export interface IPart extends Document {
  part_num: string;
  name: string;
  part_cat_id: number;
}

const PartShema = new Schema({}, { collection: "parts" });

export default mongoose.model<IPart>("Part", PartShema);
