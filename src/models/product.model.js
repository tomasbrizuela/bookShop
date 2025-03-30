import mongoose from "mongoose";

const productCollection = "productos"

const productSchema = mongoose.Schema({
    name: String,
    description: String,
    author: String,
    price: Number,
    quantity: Number
})

const productModel = mongoose.model(productCollection, productSchema)

export default productModel;