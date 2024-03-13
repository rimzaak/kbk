import { Schema, model, models } from "mongoose";

const TransactionSchema = new Schema ({
    date: { type: Date },
    buyer: { type: Schema.Types.ObjectId, ref: 'User' },
    seller: { type: Schema.Types.ObjectId, ref: 'User' },
    buyerRating: { type: Number }, 
    sellerRating: { type: Number }, 
    shipmentOption: { type: Number }, //add new type for shipping options that include shipping costs and delivery time
    isSucceed: { type: Boolean },
    listings: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Listing' 
        }
    ],
    messages: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Message' 
        }
    ],
})

const Transaction = models.Transaction || model('Transaction', TransactionSchema);

export default Transaction;