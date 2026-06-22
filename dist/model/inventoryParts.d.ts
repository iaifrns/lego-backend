import mongoose, { type Document } from "mongoose";
export interface IInventoryPart extends Document {
    inventory_id: number;
    part_num: string;
    color_id: number;
    quantity: number;
    is_spare: boolean;
}
declare const _default: mongoose.Model<IInventoryPart, {}, {}, {}, mongoose.Document<unknown, {}, IInventoryPart, {}, mongoose.DefaultSchemaOptions> & IInventoryPart & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IInventoryPart>;
export default _default;
//# sourceMappingURL=inventoryParts.d.ts.map