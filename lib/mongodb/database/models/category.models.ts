import { Schema, model, models } from "mongoose";

const CategorySchema = new Schema ({
    
})

const Category = models.Category || model('Category', CategorySchema);

export default Category;