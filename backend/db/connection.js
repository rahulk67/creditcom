import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

console.log(process.env.TEST_URL,"check for vercel")

const connection = () =>{
mongoose.connect(process.env.MONGO_URL) //old my db

// mongoose.connect("mongodb+srv://hr:3F0pNsvjlJhDGpXeeeeeee@cluster0.uxqk6c8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

.then(()=>{
    console.log("Database sucessfully connected!")
    
})
.catch((err)=>{
    console.log("error in connecting DataBase",err)
})


}

// mongodb+srv://hr:3F0pNsvjlJhDGpXe@cluster0.uxqk6c8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

export default connection
