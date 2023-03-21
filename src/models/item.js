import mongoose from "mongoose";


// you can make the array of something - type string
// 
const itemSchema = new mongoose.Schema({
    title: String,
    manufacturer: String,
    distributer: String,
    description: String,
    createdAt: Date,
    Count: String,
    price: Number,
})

// parameter (name of the model, schema)
const Item = mongoose.model("item", itemSchema);

export default Item;

