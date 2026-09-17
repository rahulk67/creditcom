import mongoose from "mongoose";

const MerchantDeal = new mongoose.Schema({
    DealId: {
        type: String,

    },
    MerchanId: {
        type: String,
        default: "lokeshkumariiit@gmail.com"
    },
    Extra: {
        type: String,
        default: "0"
    },
    Address: {
        AName: { type: String, default: "" },
        AL1: { type: String, default: "" },
        AL2: { type: String, default: "" },
        Pincode: { type: String, default: "" }
    },
    Quantity: {
        type: String,
        default: "0"
    },

    ProductId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product"

    },
    Fullfiled: {
        type: String,
        default: "0"
    },
    Color: {
        type: String,
        default: "Any Color"
    },
    GST:{
        type: String,
        default:""
    },
    Shipped: {
        type: String,
        default: "0",

    },
    Delivered: {
        type: String,
        default: "0",
    }

}, { timestamps: true })


const DealCreate = mongoose.model("deal", MerchantDeal)

export default DealCreate