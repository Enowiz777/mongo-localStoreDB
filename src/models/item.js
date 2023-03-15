import mongoose from "mongoose";


// you can make the array of something - type string
// 
const itemSchema = new mongoose.Schema({
    title: String,
    description: String,
    createdAt: Date,
    hashtags: [{ type: String }],
    meta: {
      views: Number,
      rating: Number,
    },
})