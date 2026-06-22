import mongoose, { Schema } from "mongoose";
const SetSchema = new Schema({}, { collection: "sets" });
export default mongoose.model("Set", SetSchema);
//# sourceMappingURL=sets.js.map