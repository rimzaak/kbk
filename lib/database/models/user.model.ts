import { Schema, model, models } from "mongoose";

const UserSchema = new Schema ({
    clerkId: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, unique: true },
    name: { type: String, required: true },
    shipping_address: {type: String},
    photoURL: { type: String },
    user_rating: { type: Number },
    ig_url: { type: String },
    listings: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Listing' 
        },
    ],
    transactions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Transaction' 
        }
    ],
    messages: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Message' 
        }
    ]
})

const User = models.User || model('User', UserSchema);

export default User;