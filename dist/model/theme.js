import mongoose, { Schema } from "mongoose";
const themeSchema = new Schema({}, { collection: 'themes' });
export default mongoose.model('Theme', themeSchema);
//# sourceMappingURL=theme.js.map