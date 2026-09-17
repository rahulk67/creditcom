import mongoose from "mongoose";
import { type } from "os";

const Admin = new mongoose.Schema({
    Email:{
        type:String,
        default:"businessincredibles05@gmail.com",
        
    },
    Otp:{
        type:String
    },
    Phoneno:{
        type:String,
        default:""
    },
    Password:{
        type:String,
        default:"incredibles@1234"
    },
    Name:{
        type:String,
        default:""
    },
    verified:{
     type:Boolean,
     default:false
    }
})

const AdminData = mongoose.model("Admindetail",Admin)

export default AdminData;