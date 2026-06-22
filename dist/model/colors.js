import mongoose, { Schema } from "mongoose";
const colorSchema = new Schema({}, { collection: "colors" });
export default mongoose.model("Color", colorSchema);
//# sourceMappingURL=colors.js.map