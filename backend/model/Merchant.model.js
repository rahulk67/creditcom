import mongoose from "mongoose";


const addressSchema = new mongoose.Schema({
    AName: { type: String, default: "" },
    AL1: { type: String, default: "" },
    AL2: { type: String, default: "" },
    Pincode: { type: String, default: "" }
});

const merchant = new mongoose.Schema({
    Name:{
        type:String
    },
    Email:{
        type:String,

    },
    Password:{
        type:String
    },
    TotalWallet :{
        type:Number,
        default:0

    },
    GST:{
        type:String,
        default:"",
    },
    AddressList: [addressSchema]
    // AddressList:{
    //     type:Array,
    //     default:[]
    // }
})


const MerchantData = mongoose.model("merchantdetail",merchant)

export default MerchantData;