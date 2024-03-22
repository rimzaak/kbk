import { Schema, model, models } from "mongoose";

const MessageSchema = new Schema ({
    startTime: { type: Date },
    subject: { type: String, required: true },
    message: { type: String },
    listing: { type: Schema.Types.ObjectId, ref: 'Listing' },
    sender: { type: Schema.Types.ObjectId, ref: 'User' },
    receiver: { type: Schema.Types.ObjectId, ref: 'User' },
    transaction: { type: Schema.Types.ObjectId, ref: 'Transaction' }
    
})

const Message = models.Message || model('Message', MessageSchema);

export default Message;