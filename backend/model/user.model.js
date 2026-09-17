import mongoose from "mongoose";
import connection from "../db/connection.js";

const User = new mongoose.Schema({
    first_Name:{
        type:String,
        // required: true,
        default:""
    },
    last_Name:{
        type:String,
        // required:true,
        default:""
    },
    Email:{
        type:String,
        // required:false,
        default:""
    },
    
    OTP:{
    type:String,
    required:true
    },
    Phoneno:{
        type:String,
        // required:true,
        default:"",
    },
    verifed:{
       type:Boolean,
       default: false
    },
    bankName:{
        type:String,
        default:""
    },
    IfceCode:{
        type:String,
        default:""
    },
    acNumber:{
        type:String,
        default:""
    },
    acHolder:{
        type:String,
        default:""
    },
    panNumber:{
        type:String,
        default:""
    },
    panHolder:{
        type:String,
        default:""
    },
    branch:{
        type:String,
        default:""
    },
    Panvrifed:{
        type:Boolean,
        default:false
    },
    Panvrifed:{
        type:Boolean,
        default:false
    },
    Acvrifed:{
        type:Boolean,
        default:false
    },
    Wallet:{
        type:Number,
        default:0,
    },
    NetProfit:{
        type:Number,
        default:0,

    },
    TDS:{
        type:Number,
        default:0,
    }
    
})

const userModel = mongoose.model("userdetail",User)

export default userModel