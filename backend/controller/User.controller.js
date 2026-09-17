import EmailVerfication from "../middlewares/Emailverfication.js";
import userModel from "../model/user.model.js";
import Product from "../model/Productlist.model.js";
import myproduct from "../model/Myproduct.js";
import PAYDATA from "../model/Paymenthistory.model.js";
import crypto from "crypto";
import MerchantData from "../model/Merchant.model.js";
import DealCreate from "../model/MerchantDeal.model.js";
import { parse } from "path";

import axios from "axios";

const genrateOtp = () => {
  return crypto.randomInt(1000, 10000);
};
const option = {
  path: "/",
  secure: true, // Ensure the cookie is only sent over HTTPS
  // httpOnly: true,
  sameSite: "None",
};

const EmailRegister = async (req, res) => {
  const Email = req.body.Email;

  console.log(Email);
  const user = await userModel.findOne({ Email: Email });
  console.log(user);
  if (user) {
    const otp = genrateOtp();
    console.log(otp);

    const Subject = "Otp Verification";
    const Message = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your OTP Code</title>
    <style>
      body { font-family: Arial, sans-serif; background-color: #f4f4f4; color: #333; }
      .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #fff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); }
      h1 { color: #333; font-size: 24px; text-align: center; }
      .otp { background-color: #f0f0f0; font-size: 28px; color: #007bff; padding: 15px; text-align: center; letter-spacing: 5px; }
      .footer { text-align: center; font-size: 14px; color: #777; margin-top: 30px; }
      .footer a { color: #007bff; text-decoration: none; }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Your OTP Code</h1>
      <p>Dear User,</p>
      <p>Here is your One-Time Password (OTP) to verify your identity:</p>
      <div class="otp">${otp}</div>
      <p>The OTP is valid for 10 minutes. Please do not share it with anyone.</p>
      <p>Thank you,<br>The IncrediblesDeals Team</p>
    </div>
    <div class="footer">
      <p>&copy; 2024 IncrediblesDeals. All rights reserved.</p>
    </div>
  </body>
  </html>
`;
    EmailVerfication(Email, Subject, Message);
    user.OTP = otp;
    await user.save();
    return res
      .status(200)
      .cookie("Email", Email, option)
      .json({ msg: "Email sent sucessfully !", user });
  }
  const otp = genrateOtp();
  console.log(otp);

  const Subject = "Otp Verification";
  const Message = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your OTP Code</title>
    <style>
      body { font-family: Arial, sans-serif; background-color: #f4f4f4; color: #333; }
      .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #fff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); }
      h1 { color: #333; font-size: 24px; text-align: center; }
      .otp { background-color: #f0f0f0; font-size: 28px; color: #007bff; padding: 15px; text-align: center; letter-spacing: 5px; }
      .footer { text-align: center; font-size: 14px; color: #777; margin-top: 30px; }
      .footer a { color: #007bff; text-decoration: none; }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Your OTP Code</h1>
      <p>Dear User,</p>
      <p>Here is your One-Time Password (OTP) to verify your identity:</p>
      <div class="otp">${otp}</div>
      <p>The OTP is valid for 10 minutes. Please do not share it with anyone.</p>
      <p>Thank you,<br>The IncrediblesDeals Team</p>
    </div>
    <div class="footer">
      <p>&copy; 2024 IncrediblesDeals. All rights reserved.</p>
    </div>
  </body>
  </html>
`;

  try {
    EmailVerfication(Email, Subject, Message);

    await userModel.create({
      Email: Email,
      OTP: otp,
    });
    res
      .status(200)
      .cookie("Email", Email, option)
      .json({ msg: "Email sent sucessfully !", user });
  } catch (error) {
    console.log(error);
    res.status(202).json({ msg: "Error in sending Email !", user });
  }
};

const WhatsAppRegister = async (req, res) => {
  const sendWhatsAppOTP = async (countryCode, phoneNumber, otp) => {
    try {
      const API_KEY =
        "dFV0Z0hrVWpKeUphTHB2Sldjbi1KRGpTWjVOWWRBcXN0Z20yMFlKNDNwQTo="; // Store API Key in environment variable
      const API_URL = "https://api.interakt.ai/v1/public/message/";

      const requestBody = {
        countryCode: countryCode, // Example: "+91" for India
        phoneNumber: phoneNumber, // User's WhatsApp number
        type: "Template",
        callbackData: "otp_verification", // Optional callback data
        template: {
          name: "otp_auth_", // Ensure this matches the template name in Interakt
          languageCode: "en_GB",
          bodyValues: [otp], // Replace {{otp}} in the template with actual OTP
          buttonValues: {
            0: [otp], // ✅ Pass a valid value (short URL)
          },
        },
      };

      const response = await axios.post(API_URL, requestBody, {
        headers: {
          Authorization: `Basic ${API_KEY}`,
          "Content-Type": "application/json",
        },
      });

      console.log("Message sent successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error(
        "Error sending message:",
        error.response ? error.response.data : error.message
      );
      throw error;
    }
  };

  const { phoneno } = req.body;

  if (!phoneno) {
    return res.status(400).json({ msg: "Phone number is required" });
  }

  try {
    const otp = genrateOtp(); // Function to generate a random OTP

    const existingUser = await userModel.findOne({ Phoneno: phoneno });

    if (existingUser) {
      // Update OTP if user already exists

      // Example usage

      existingUser.OTP = otp;
      await existingUser.save();
      // res.status(200)
      //   .cookie("PhoneNumber", phoneno, option).json({ msg: "OTP updated successfully", OTP: otp });
    } else {
      // Create a new user with the phone number

      const newUser = new userModel({
        Phoneno: phoneno,
        OTP: otp,
      });
      await newUser.save();
    }

    await sendWhatsAppOTP("+91", phoneno, otp);

    res
      .status(200)
      .cookie("PhoneNumber", phoneno, option)
      .json({ msg: "OTP sent successfully", OTP: otp, existingUser });
  } catch (error) {
    console.log(error);
    res.status(202).json({ msg: "Error in sending Whatsapp !" });
  }
};

const LOGOUT = async (req, res) => {
  const email = req.cookies.Email;
  const phoneno = req.cookies.PhoneNumber;

  if (!email && !phoneno) {
    return res
      .status(400)
      .json({ message: "No email or phone number found in cookies" });
  }

  // Find the user and update verified to false
  const user = await userModel.findOneAndUpdate(
    { $or: [{ Email: email }, { Phoneno: phoneno }] },
    { verifed: false },
    { new: true } // Returns the updated document
  );

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  // Clear server-side sessions if applicable
  req.session?.destroy?.();

  // Clear cookies if set on the server side
  res.clearCookie("Email", { path: "/" });
  res.clearCookie("PhoneNumber", { path: "/" });

  // Send a success response
  res.status(200).json({ message: "Logged out successfully" });
};

const OtpVerfiy = async (req, res) => {
  const { Otp } = req.body;
  console.log(Otp);
  // const Email = req.cookies.Email;

  const Email = req.cookies.Email || ""; // Get Email from cookies
  const PhoneNumber = req.cookies.PhoneNumber || ""; // Get Phone Number from cookies

  console.log(PhoneNumber, "email from cookies");
  // const user = await userModel.findOne({ Email: Email });
  // console.log(user);

  let user;

  if (Email) {
    user = await userModel.findOne({ Email: Email });
  } else if (PhoneNumber) {
    user = await userModel.findOne({ Phoneno: PhoneNumber });
  }

  const Eyes = user.Email;
  console.log(Eyes,"eyes")
  const Ephone = user.Phoneno;

  console.log(user, "verif");

  if (!user) {
    return res.json({
      msg: "Email or Phone number Doesn't match",
      user,
      Email,
    });
  }

  console.log(user.OTP, "db otp");
  if (user.OTP == Otp) {
    user.verifed = true;
    await user.save();
    if (user.Phoneno.length > 0) {
      res
        .status(200)

        .json({ msg: "Sucessfully Otp Match", userdata: user });
    } else {
      res
        .status(200)

        .json({ msg: "Sucessfully Otp Match" , userdata: user });
    }
  } else {
    res.status(400).json({ msg: "Otp Doesn't Match", userdata: false });
  }
};

const UserData = async (req, res) => {
  const emailFromCookie = req.cookies.Email;
  const phoneFromCookie = req.cookies.PhoneNumber;
  const { first_Name, last_Name, Phoneno, Email } = req.body;

  let user;
  if (phoneFromCookie) {
    // 🔍 Find user by Phone from cookies
    user = await userModel.findOne({ Phoneno: phoneFromCookie });
  } else if (emailFromCookie) {
    // 🔍 Find user by Email from cookies
    user = await userModel.findOne({ Email: emailFromCookie });
  } else if (Phoneno) {
    // 🔍 Find user by Phone from request body
    user = await userModel.findOne({ Phoneno });
  } else if (Email) {
    // 🔍 Find user by Email from request body
    user = await userModel.findOne({ Email });
  }

  if (!user) {
    return res.json("Email doesn't exist in db");
  }
  user.first_Name = first_Name;
  user.last_Name = last_Name;
  if (Phoneno && !user.Phoneno) user.Phoneno = Phoneno; // Set phone if missing
  if (Email && !user.Email) user.Email = Email; // Set email if missing

  await user.save();
  res.status(200).json("sucessfully Registered !");
};

const ResndOtp = async (req, res) => {};

const UserCheck = async (req, res) => {
  // const Email = req.cookies.Email;
  const Email = req.cookies.Email || ""; // Get Email from cookies
  console.log(req.cookies,"coolkies")
  const PhoneNumber = req.cookies.PhoneNumber || "";

  let user;

  if (Email) {
    user = await userModel.findOne({ Email });
  }
  if (!user && PhoneNumber) {
    user = await userModel.findOne({ Phoneno: PhoneNumber });
  }

  if (!user) {
    return res.json({ msg: "user not exist !" });
  }
  if (user.verifed == false) {
    res.json({ msg: "Email not verifed !" });
  } else {
    res.json({ msg: "Email verifed !", user, Email, PhoneNumber });
  }
};

const OrderClick = async (req, res) => {
  try {
    const Email = req.cookies.Email;

    console.log(req.body, "jgljfdjgj;lkjg;osd");

    // Check if the Email cookie exists
    if (!Email) {
      return res.status(400).json({ error: "Email cookie not found" });
    }

    console.log(req.cookies);
    console.log("User", Email);

    // Generate a random AppId
    const AppId = "app" + crypto.randomInt(1000000, 10000000);
    console.log("Generated AppId:", AppId);

    // Uncomment and modify this section when database integration is needed
    await myproduct.create({
      Appid: AppId,
      UserId: Email,
      Product_id: req.body.Product_id,
      MerchantDealId: req.body.MId,
      mGst:req.body.MGst,
    });
    const data = await Product.findById(req.body.Product_id);
    const price = parseFloat(data.Price);
    const offer = parseFloat(data.OfferAmmount) * 0.98;
    const cashrewardI = price - parseFloat(data.offerCash);

    const totalwallet = offer + cashrewardI;
    const user = await userModel.findOne({ Email: Email });
    // user.Wallet = totalwallet
    await user.save();

    console.log(req.body, AppId);
    res.json({ msg: AppId, Email });
  } catch (error) {
    console.error("Error in OrderClick:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const Myproduct = async (req, res) => {
  console.log(req.files, "requested files");
  try {
    const { OrderId, TrackingId, Otp, FourDigit, AppId } = req.body;
    // console.log(OrderId, TrackingId, Otp, FourDigit, AppId);
    // console.log(req.body);
    const Product = await myproduct.findOne({ Appid: AppId });
    // console.log(Product);
    if (!Product) {
      res.json({ msg: "AppId is Doesn't Exist !" });
    }
    // else {

    //   if (req.file) {
    //     const image = `/images/${req.file.filename}`

    //     Product.OrderId = OrderId
    //     // Product.TrackingCompnay = TrackingCompnay
    //     Product.TrackingId = TrackingId
    //     Product.Otp = Otp
    //     Product.FourDigit = FourDigit
    //     Product.Invoice = image

    //     await Product.save();
    //     res.json({ msg: "order sucessfully Placed !" })
    //   }
    //   else {
    //     if(orderId){

    //     }
    //     Product.OrderId = OrderId
    //     // Product.TrackingCompnay = TrackingCompnay
    //     // Product.TrackingId = TrackingId
    //     // Product.Otp = Otp
    //     // Product.FourDigit = FourDigit
    //     // // Product.Invoice = image

    //     await Product.save();
    //     res.json({ msg: "order sucessfully Placed !" })
    //   }

    // }
    else {
      if (OrderId) {
        Product.OrderId = OrderId;
        const id = Product.MerchantDealId;
        const deal = await DealCreate.findOne({ DealId: id });
        if (!deal) {
          return res.json({ msg: "error in filling order id" });
        }

        const Delivered = parseInt(deal.Fullfiled) + 1;
        deal.Fullfiled = Delivered;

        await deal.save();

        Product.status = "ordered";

        await Product.save();
        return res.json({ msg: "order sucessfully Placed !" });
      } else if (TrackingId) {
        Product.TrackingId = TrackingId;
        const id = Product.MerchantDealId;
        const deal = await DealCreate.findOne({ DealId: id });
        // console.log(deal);
        if (!deal) {
          return res.json({ msg: "error in filling order id" });
        }

        const Delivered = parseInt(deal.Shipped) + 1;
        deal.Shipped = Delivered;

        await deal.save();

        Product.status = "shipped";

        await Product.save();
        return res.json({ msg: "order sucessfully Placed !" });
      } else if (Otp && FourDigit) {
        (Product.Otp = Otp), (Product.FourDigit = FourDigit);

        const id = Product.MerchantDealId;
        //    const deal =  await DealCreate.find({DealId:id});
        //    if(!deal){
        //     return res.json({msg:"error in filling order id"})
        //    }

        //   const Delivered = parseInt(deal.Shipped) +1;
        //   deal.Shipped =Delivered;

        //  await deal.save();

        //  Product.status = "shipped";

        await Product.save();
        return res.json({ msg: "order sucessfully Placed !" });
      } else if (req.files) {
        console.log(req.files, "check herer");
        const invoce = req.files.image?.[0] ? `/images/${req.files.image[0].filename}`  : null;
        const ss = req.files.image2?.[0] ? `/images/${req.files?.image2[0]?.filename}` : null;
        console.log(invoce, ss, "invoice");

       if (invoce)Product.Invoice = invoce;
       if (ss)Product.Screenshot = ss;
        await Product.save();
        return res.json({ msg: "Invoice successfully saved!" });
      }
    }
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

// this is update code rember it Thaks
const Deals = async (req, res) => {
  try {
    // Find all active products
    const Deal = await Product.find({ Status: "Active" });

    if (Deal.length > 0) {
      const Deals = await Promise.all(
        Deal.map(async (product) => {
          const dealproduct = await DealCreate.find({ ProductId: product._id });

          // Append product details to each deal
          const DealData = await Promise.all(
            dealproduct.map((deal) => {
              return {
                ...product._doc, // Spread product fields
                ...deal._doc, // Spread deal fields
              };
            })
          );

          return DealData;
        })
      );

      // Flatten the Deals array as it may have nested arrays
      const flattenedDeals = Deals.flat();

      console.log(flattenedDeals);

      // Return the response with the number of deals and deal details
      res.json({ Deal: Deal.length, Deals: flattenedDeals });
    } else {
      res.json({ msg: "0 Deals is live!" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};

const SingleDeal = async (req, res) => {
  const id = req.params.id;
  const Id = req.params.Id;
  // console.log(id,"single id");
  const dealproduct = await DealCreate.findOne({ DealId: Id });
  if (!dealproduct) {
    console.log("❌ No deal product found with DealId:", Id);
    return res.json({ msg: "No deal found" });
  }
  console.log(dealproduct, "dela product");
  const dealsproduct = await Product.findById(dealproduct.ProductId);

  console.log(dealsproduct, "cccccc", dealproduct.ProductId, dealproduct);

  const deal = { ...dealsproduct._doc, ...dealproduct._doc };

  if (dealproduct) {
    res.json({ Deal: deal });
  } else {
    res.json({ msg: "no deal found" });
  }
};

// const SingleDealData = async (req, res) => {
//   const id = req.params.id;
//   // const Id = req.params.Id;
//   console.log(id);
//   const dealproduct = await DealCreate.findOne({ DealId: Id });
//   const dealsproduct = await Product.findById(dealproduct.ProductId);
//   console.log(dealsproduct,"cccccc",dealproduct.ProductId, dealproduct)

//    const deal = {...dealsproduct._doc, ...dealproduct._doc}

//   if (dealproduct) {
//     res.json({ Deal: deal })

//   }
//   else {
//     res.json({ msg: "no deal found" });
//   }

// }

// genrate access token

let token = null; // Store token globally for reuse

const GenrateToken = async () => {
  try {
    var formdata = new FormData();
    formdata.append("client_id", `${process.env.CLIENT_ID}`);
    formdata.append("client_secret", `${process.env.CLIENT_SECRET_KEY}`);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    const response = await fetch(
      "https://production.deepvue.tech/v1/authorize",
      requestOptions
    );
    const result = await response.text();
    const parsedResult = JSON.parse(result);

    if (parsedResult.access_token) {
      console.log(parsedResult.access_token, "access token");
      token = parsedResult.access_token; // Set token globally
    }
  } catch (error) {
    console.log("Error generating token:", error);
  }
};

const PanKyc = async (req, res) => {
  try {
    const Email = req.cookies.Email;
    const user = await userModel.findOne({ Email });
    if (!user) {
      return res.json("User does not exist");
    }

    user.panNumber = req.body.panNumber;
    user.panHolder = req.body.panHolder;
    const dbcheckforPan = await userModel.find({
      panNumber: req.body.panNumber,
    });
    if (dbcheckforPan.length > 0) {
      return res.json({ msg: "Pan Number Already Verified" });
    }
    // Check if token exists or generate it if not available
    if (!token) {
      await GenrateToken();
    }

    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("x-api-key", `${process.env.CLIENT_SECRET_KEY}`);
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    // API call for PAN verification
    let response = await fetch(
      `https://production.deepvue.tech/v1/verification/panbasic?pan_number=${req.body.panNumber}&name=${req.body.panHolder}`,
      requestOptions
    );
    let result = await response.text();
    let parsedResult = JSON.parse(result);

    console.log(parsedResult, "parsedresult jfkajs;lk;");

    if (
      parsedResult?.data?.status === "VALID" 
      // &&
      // parsedResult?.data?.full_name.toUpperCase() ===
      //   req.body.panHolder.toUpperCase()
    ) {
      user.Panvrifed = true;
      await user.save();
      return res.json({ msg: "Valid Pan Details" });
    } else if (parsedResult?.data?.status === "INVALID") {
      return res.json({ msg: "Invalid Details" });
    } 
    // else if (
    //   parsedResult?.data?.full_name.toUpperCase() !==
    //   req.body.panHolder.toUpperCase()
    // ) 
    // {
    //   return res.json({ msg: "Invalid Name Please Check your Name " });
    // } 
    else if (parsedResult.detail === "Not a valid token") {
      console.log("Invalid token, regenerating...");

      // Regenerate token and retry the PAN verification
      await GenrateToken();

      myHeaders.set("Authorization", `Bearer ${token}`); // Update the header with new token

      response = await fetch(
        `https://production.deepvue.tech/v1/verification/panbasic?pan_number=${req.body.panNumber}&name=${req.body.panHolder}`,
        requestOptions
      );
      result = await response.text();
      parsedResult = JSON.parse(result);

      if (parsedResult?.data?.status === "VALID") {
        user.Panvrifed = true;
        await user.save();
        return res.json({ msg: "Valid Pan Details after Token Refresh" });
      } else if (parsedResult?.data?.status === "INVALID") {
        return res.json({ msg: "Invalid Details after Token Refresh" });
      }
    }
  } catch (error) {
    console.log("Error in PAN KYC:", error);
    return res.status(500).json({ msg: "Error processing request" });
  }
};

const ACKyc = async (req, res) => {
  try {
    const Email = req.cookies.Email;
    const user = await userModel.findOne({ Email });
    if (!user) {
      return res.json("User does not exist");
    }

    // Update user's bank details
    user.bankName = req.body.bankName;
    user.IfceCode = req.body.IfceCode;
    user.acNumber = req.body.acNumber;
    user.acHolder = req.body.acHolder;
    user.branch = req.body.branch;

    // Check if PAN holder's name and account holder's name match
    // if (user.panHolder !== req.body.acHolder) {
    //   return res.json({ msg: "Pan holder and account holder name should be the same" });
    // }

    // Ensure token is available before making the API request
    if (!token) {
      await GenrateToken(); // Assuming this function sets the global 'token'
    }

    // Proceed with the bank verification request
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("x-api-key", `${process.env.CLIENT_SECRET_KEY}`);
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    // Fetch the bank account verification response
    const response = await fetch(
      `https://production.deepvue.tech/v1/verification/bankaccount?account_number=${req.body.acNumber}&ifsc=${req.body.IfceCode}&name=${req.body.acHolder}`,
      requestOptions
    );
    const resultText = await response.text();
    const result = JSON.parse(resultText);

    console.log("API result:", result); // Debugging the result
    // if (user.panHolder !== req.body.acHolder) {
    //   console.log(user.panHolder, req.body.acHolder);

    //   return res
    //     .status(200)
    //     .send({ msg: "Pan Holder and Ac Holder Name should same" });
    // }

    if (
      result?.data?.message === "Bank Account details verified successfully."
    ) {
      // console.log("hhhhhhhhh")
      if (
        result?.data?.name_information?.name_at_bank_cleaned.toUpperCase() ===
        result?.data?.name_information?.name_provided.toUpperCase()
      ) {
        console.log("hhhhhh552145");
        user.Acvrifed = true;
        await user.save();
        return res.json({ msg: "Valid Bank Details" });
      } else {
        console.log("hhhhh00000");
        return res.json({ msg: "Invalid Bank Details" });
      }
    }

    // Handle specific error messages
    if (result?.data?.message === "Invalid account number or ifsc provided") {
      return res.json({ msg: "Invalid account number or IFSC provided" });
    }
    if (result?.data?.message === "Account is blocked") {
      return res.json({ msg: "Account is blocked" });
    }
    if (result?.data?.message === "IFSC is invalid") {
      return res.json({ msg: "IFSC is invalid" });
    }
    if (result?.data?.message === "Given account is an NRE account") {
      return res.json({ msg: "Given account is an NRE account" });
    }
    if (result?.message == "Beneficiary bank offline") {
      return res.json({ msg: "Beneficiary bank offline" });
    }
  } catch (error) {
    console.error("Error during account verification:", error);
    return res.status(500).json({ msg: "Error processing request" });
  }
};

const myOrder = async (req, res) => {
  try {
    const Email = req.cookies.Email;
    const ProductsfromDb = await myproduct.find({ UserId: Email });

    await Promise.all(
      ProductsfromDb.map(async (product) => {
        const UpdateAtTime = new Date(product.updatedAt);
        const TimeNow = new Date();
        const TimeDiffernce = (TimeNow - UpdateAtTime) / (1000 * 60 * 60);
        if (TimeDiffernce > 8 && product.OrderId === "") {
          await myproduct.findByIdAndDelete(product._id);
        }
      })
    );

    const Products = await myproduct.find({ UserId: Email });

    if (Products.length > 0) {
      const UpdateProducts = await Promise.all(
        Products.map(async (product) => {
          const ProductDetails = await Product.findById(product.Product_id);

          return {
            ...product.toObject(), // Convert Mongoose document to a plain object
            ...(ProductDetails ? ProductDetails.toObject() : {}), // Combine with ProductDetails
          };
        })
      );

      // Step 4: Return the combined object containing all products
      res.json({ products: UpdateProducts });
    } else {
      res.json({ msg: "0 Deal Closes !" });
    }
  } catch (error) {
    // Handle errors
    res.status(500).json({ error: error.message });
  }
};

const WalletData = async (req, res) => {
  const Email = req.cookies.Email;
  console.log(Email, "walle");

  try {
    // Fetch pay information and user data
    const Payinfo = await PAYDATA.find({ Email: Email });
    const user = await userModel.findOne({ Email: Email });

    // Check if user exists and extract wallet
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const wallet = user.Wallet; // Assuming 'Wallet' is a property, not a promise
    const profit = user.NetProfit;
    const tds = user.TDS;

    // Combine Payinfo array with wallet data
    // var data = Payinfo.map(item => ({ ...item.toObject(), wallet }));
    var data = { Payinfo, wallet, profit, tds };
    console.log(data, "sfddf");

    // var data = { wallet };

    // Send the combined data as response
    res.json(data);
  } catch (error) {
    // Handle any errors
    console.log(error, "eerrr");
    res.status(500).json({ error: error.message });
  }
};

export default {
  EmailRegister,
  WhatsAppRegister,
  OtpVerfiy,
  UserData,
  ResndOtp,
  LOGOUT,
  OrderClick,
  Myproduct,
  Deals,
  UserCheck,
  SingleDeal,
  PanKyc,
  myOrder,
  ACKyc,
  WalletData,
};
