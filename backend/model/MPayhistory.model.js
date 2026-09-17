import mongoose from "mongoose";

const Mpaymenthistory = new mongoose.Schema({
    
    IAmount: {
        type: String,
    },
    MPEmail: {
        type: String,
    },
    TrackingID: {
        type: String,
    },
    MPAID :{
        type: Number,
        default: "0"

    },
    MYDeal:{
        type: String,
    },
    RunningBalance:{
        type: Number,
        default: "0"
    }
    


}, { timestamps: true })

const MERCHANTPAYDATA = mongoose.model("mpayhistory", Mpaymenthistory)

export default MERCHANTPAYDATA
