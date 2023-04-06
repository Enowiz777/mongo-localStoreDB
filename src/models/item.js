import mongoose from "mongoose";


// you can make the array of something - type string
const itemSchema = new mongoose.Schema({
    title: String,
    manufacturer: String,
    distributer: String,
    description: String,
    createdAt: Date,
    price: mongoose.SchemaTypes.Decimal128,
    unit: String,
})

// parameter (name of the model, schema)
const Item = mongoose.model("item", itemSchema);

export default Item;

