import mongoose, { type Document } from "mongoose";
export interface IPartCategory extends Document {
    id: number;
    name: string;
}
declare const _default: mongoose.Model<IPartCategory, {}, {}, {}, mongoose.Document<unknown, {}, IPartCategory, {}, mongoose.DefaultSchemaOptions> & IPartCategory & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any, IPartCategory>;
export default _default;
//# sourceMappingURL=partCategories.d.ts.map