import mongoose, { type Document } from "mongoose";
export interface IInventorySet extends Document {
    inventory_id: number;
    set_num: string;
    quantity: number;
}
declare const _default: mongoose.Model<IInventorySet, {}, {}, {}, mongoose.Document<unknown, {}, IInventorySet, {}, mongoose.DefaultSchemaOptions> & IInventorySet & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IInventorySet>;
export default _default;
//# sourceMappingURL=inventorySets.d.ts.map