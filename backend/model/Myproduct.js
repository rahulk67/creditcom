import mongoose from "mongoose";

const MyProducts = new mongoose.Schema({
    
    Appid:{
        type:String,
    },
    UserId:{
        type:String,
    },
    Product_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product"
    },

    OrderId:{
        type:String,
        default:""
    },
    // TrackingCompnay:{
    //     type:String,
    //     default:""
    // },
    TrackingId:{
        type:String,
        default:""
    },
    Otp:{
        type:String,
        default:""
    },
    FourDigit:{
        type:String,
        default:""
    },
    Invoice:{
        type:String,
        default:""
    },
    Screenshot:{
        type:String,
        default:""
    },
    PaymentSatuts:{
        type:Boolean,
        default:false,
    },
    status:{
      type:String,
        default:"none"
    }, 

    MerchantDealId :{
        type:String,
        default:"",
    },

    mGst:{
        type:String,
        default:""
    },
    Receive:{
        type:Boolean,
        default:"false"
    },
    Alert:{
        type:String,
        default:""
    },
    Dispute:{
        type:Boolean,
        default:"false",
    }
    

    
},{timestamps:true})


const myproduct = mongoose.model("myproduct",MyProducts);

export default myproduct;
