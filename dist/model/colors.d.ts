import mongoose, { type Document } from "mongoose";
export interface IColor extends Document {
    id: number;
    name: string;
    rgb: string;
    is_trans: boolean;
}
declare const _default: mongoose.Model<IColor, {}, {}, {}, mongoose.Document<unknown, {}, IColor, {}, mongoose.DefaultSchemaOptions> & IColor & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any, IColor>;
export default _default;
//# sourceMappingURL=colors.d.ts.map