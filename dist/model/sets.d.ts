import mongoose, { type Document } from "mongoose";
export interface ISet extends Document {
    set_num: string;
    name: string;
    year: number;
    theme_id: number;
    num_parts: number;
}
declare const _default: mongoose.Model<ISet, {}, {}, {}, mongoose.Document<unknown, {}, ISet, {}, mongoose.DefaultSchemaOptions> & ISet & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, ISet>;
export default _default;
//# sourceMappingURL=sets.d.ts.map