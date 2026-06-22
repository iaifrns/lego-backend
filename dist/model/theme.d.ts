import mongoose, { type Document } from "mongoose";
export interface ITheme extends Document {
    id: number;
    name: string;
}
declare const _default: mongoose.Model<ITheme, {}, {}, {}, mongoose.Document<unknown, {}, ITheme, {}, mongoose.DefaultSchemaOptions> & ITheme & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any, ITheme>;
export default _default;
//# sourceMappingURL=theme.d.ts.map