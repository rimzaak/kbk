import { Schema, model, models } from "mongoose";

const ListingSchema = new Schema ({
    
})

const Listing = models.Listing || model('Listing', ListingSchema);

export default Listing;