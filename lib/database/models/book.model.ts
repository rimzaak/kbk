import { Document, Schema, model, models } from "mongoose";

// export interface IBook extends Document {
//     title: string,
//     ISBN: string,
//     releasedYear: string,
//     synopsis: string,
//     book_rating: number,
//     coverImageUrl: string,
//     author: {
//         _id: string,
//         name: string
//     },
//     categories: [
//         {
//             _id: string,
//             name: string
//         }
//     ],
//     listings: [
//         {
//             _id: string,
//             createdAt: Date,
//             price: string,
//             condition: string,
//             location: string,
//             user: {
//                 _id: string,
//                 name: string,
//             },
//         }
//     ],
//     transactions: [
//         {
//             _id: string,
//             createdAt: Date,
//             finishedAt: Date,
//             buyer: {
//                 _id: string,
//                 name: string,
//             }
//             listing: {
//                 _id: string,
//                 createdAt: Date,
//                 price: string,
//                 condition: string,
//                 location: string,
//                 user: {
//                     _id: string,
//                     name: string,
//                 },
//             },
//             isSuccessful: boolean,
//         }
//     ]    
// }

const BookSchema = new Schema ({
    title: { type: String, required: true },
    ISBN: { type: String, required: true, unique: true },
    releasedYear: { type: String, required: true },
    synopsis: { type: String, required: true },
    book_rating: { type: Number, required: true },
    coverImageUrl: { type: String, required: true },  
    author: { type: Schema.Types.ObjectId, ref: 'Author' },
    categories: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Category' 
        }
    ],
    listings: [
        { 
            type: Schema.Types.ObjectId,
            ref: 'Listing' 
        }
    ],
    transactions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Transaction' 
        }
    ]
})

const Book = models.Book || model('Book', BookSchema);

export default Book;