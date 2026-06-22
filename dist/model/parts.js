import mongoose, { Schema } from "mongoose";
const PartShema = new Schema({}, { collection: "parts" });
export default mongoose.model("Part", PartShema);
//# sourceMappingURL=parts.js.map