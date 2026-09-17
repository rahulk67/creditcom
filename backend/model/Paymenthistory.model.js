import mongoose from "mongoose";

const payHistory = new mongoose.Schema({
    
    UTR: {
        type: String,
    },
    Email: {
        type: String,
    },
    Amount: {
        type: String,
    },
    PAmount: {
        type: String,
    },
    APPID: {
        type: String,
    },
    MYDeal:{
        type: String,
    },
    RunningBalance:{
        type: String,
    }
    


}, { timestamps: true })

const PAYDATA = mongoose.model("payHistoryDetail", payHistory)

export default PAYDATA
