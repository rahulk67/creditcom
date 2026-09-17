import mongoose from "mongoose";

const utr = new mongoose.Schema({
    Merchant: {
        type: String,
    },
    UTR: {
        type: String,
    },
    Amount: {
        type: String,
    },
    MerchantId: {
        type: String,
    },
    Approved: {
        type: Boolean,
        default: false,
    },
    IncredibleId: {
        type: String,
    },
    BankName: {
        type: String,
        default: ""
    },
    Description: {
        type: String,
        default: ""
    },
    RefrenceNumber: {
        type: String,
        default: ""
    }



}, { timestamps: true })

const UTRDATA = mongoose.model("utrdetails", utr)

export default UTRDATA
