import { Schema, model, models } from "mongoose";

const AuthorSchema = new Schema ({
    
})

const Author = models.Author || model('Author', AuthorSchema);

export default Author;