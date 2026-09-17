import express from "express"
import connection from "./db/connection.js";
import dotenv from 'dotenv';
import User from "./Routes/User.Routes.js"
import Admin from "./Routes/Admin.Routes.js"
import Merchant from "./Routes/Merchant.Routes.js"
import cookieParser from "cookie-parser"
import cors from "cors";
import axios from "axios";

dotenv.config();
const app = express();
const PORT = 8000;
connection();
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use(cookieParser())
app.use(express.static('public'));
app.use(cors({
    origin: ["http://localhost:3000", "https://incredibles-frontend.vercel.app", "https://merchant.incredibledeals.in", "http://88.222.241.94:3000", "http://localhost:3001", "http://localhost:3002", "http://localhost:3003", "https://incredibledeals.in", "https://admin.incredibledeals.in"],
    credentials: true
}));



app.use("/user", User)
app.use("/admin", Admin)
app.use("/merchant", Merchant)










app.listen(PORT, () => {
    console.log("server is running on port", PORT)
});
