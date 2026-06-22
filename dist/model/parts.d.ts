import mongoose, { type Document } from "mongoose";
export interface IPart extends Document {
    part_num: string;
    name: string;
    part_cat_id: number;
}
declare const _default: mongoose.Model<IPart, {}, {}, {}, mongoose.Document<unknown, {}, IPart, {}, mongoose.DefaultSchemaOptions> & IPart & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IPart>;
export default _default;
//# sourceMappingURL=parts.d.ts.map