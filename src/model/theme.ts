import mongoose, { Schema, type Document } from "mongoose";

export interface ITheme extends Document {
  id: number;
  name: string;
}

const themeSchema = new Schema({}, {collection: 'themes'})

export default mongoose.model<ITheme>(
    'Theme',
    themeSchema
)