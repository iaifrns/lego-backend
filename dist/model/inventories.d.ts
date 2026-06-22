import mongoose, { type Document } from "mongoose";
export interface IInventories extends Document {
    id: number;
    version: number;
    set_num: string;
}
declare const _default: mongoose.Model<IInventories, {}, {}, {}, mongoose.Document<unknown, {}, IInventories, {}, mongoose.DefaultSchemaOptions> & IInventories & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any, IInventories>;
export default _default;
//# sourceMappingURL=inventories.d.ts.map