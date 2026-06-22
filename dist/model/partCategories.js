import mongoose, { Schema } from "mongoose";
const partCategorySchema = new Schema({}, { collection: 'part_categories' });
export default mongoose.model('PartCategory', partCategorySchema);
//# sourceMappingURL=partCategories.js.map