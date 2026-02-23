import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: String,
    price: Number
});

export const productModel = mongoose.model("products", productSchema);