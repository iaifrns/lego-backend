import mongoose, { Schema, type Document } from "mongoose";

export interface IPartCategory extends Document {
  id: number;
  name: string;
}

const partCategorySchema = new Schema({},{collection: 'part_categories'})

export default mongoose.model<IPartCategory>(
    'PartCategory',
    partCategorySchema
)
