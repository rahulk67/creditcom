import EmailVerfication from "../middlewares/Emailverfication.js"
import crypto, { hkdf } from "crypto";
import AdminData from "../model/Admin.model.js";
import Product from "../model/Productlist.model.js";
import MerchantData from "../model/Merchant.model.js"
import myproduct from "../model/Myproduct.js";
import DealCreate from "../model/MerchantDeal.model.js"
import userModel from "../model/user.model.js";
import PAYDATA from "../model/Paymenthistory.model.js"
import MERCHANTPAYDATA from "../model/MPayhistory.model.js";


import XLSX from 'xlsx';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const genrateOtp = () => {
    return crypto.randomInt(1000, 10000)
}
const option = {
    path: "/",
    httpOnly: true,
    Credentials: true

}


// const OtpVerfiy = async (req, res) => {
//     const Email = req.cookie
//     const Admin = await AdminData.findOne(Email);

//     const otp = Admin.Otp;

//     if (Otp == req.body) {
//         Admin.verified = true;
//         await Admin.save();
//         res.json("Sucessfully Registered !")
//     }
//     else {
//         res.json("Wrong Otp")
//     }

// }







// const AdminLogin = async (req, res) => {
//     const Email = req.body
//     const Admin = AdminData.findOne(Email)
//     if (!Admin) {
//         return res.json("Email Doesn't Exist");
//     }
//     // if (Admin.verified) {
//     //     return res.json("First Verfiy Your Email !")
//     // }
//     try {
//         const otp = genrateOtp();
//         console.log(otp)


//         const Subject = "Otp Verification";
//         const Message = `Otp is ${otp}`

//         EmailVerfication(Email, Subject, Message)

//         Admin.Otp = otp;
//         await Admin.save();
//         res.json("Otp Send on Your Email !")
//     } catch (error) {
//         res.json(error)
//     }
// }

const AdminLogin = async (req, res) => {
    try {
        const Email = req.body.Email
        const Password = req.body.Password;
        console.log("Email", Email, Password)
        const Admin = await AdminData.findOne({ Email });

        // const otp = Admin.Otp;!
        if (!Admin) {
            return res.json({ msg: "Email is not existing" })
        }
        if (Admin.Password != Password) {
            return res.json({ msg: "Password not match" })
        }

        res.json({ msg: "successfully" });
    } catch (error) {
        console.log(error);
        res.json({ msg: "error" })

    }


}

const AdminPost = async (req, res) => {
    await AdminData.create({});
    res.json({ msg: "success" });
}

const Addproduct = async (req, res) => {
    console.log(req.body)
    if (!req.file) {
        await Product.create({
            DealTitle: req.body.DealTitle,
            Price: req.body.Price,
            Offer: req.body.Offer,
            Store: req.body.Store,
            Variant: req.body.Variant,
            DColor: req.body.DColor,

            Link: req.body.Link,
            OfferAmmount: req.body.OfferAmmount,
            CardType: req.body.CardType,
            DealNumber: req.body.DealNumber,
            offerCash: req.body.offerCash,
            thparty: req.body.thparty,
            Status: req.body.Status,
            Iprice: req.body.Iprice,
        });
        res.json("Product List Sucessfully !")

    }
    else {

        try {
            const Image = `/images/${req.file.filename}`;

            await Product.create({
                DealTitle: req.body.DealTitle,
                Price: req.body.Price,
                Offer: req.body.Offer,
                Store: req.body.Store,
                Variant: req.body.Variant,
                DColor: req.body.DColor,
                Image: Image,
                Link: req.body.Link,
                OfferAmmount: req.body.OfferAmmount,
                CardType: req.body.CardType,
                DealNumber: req.body.DealNumber,
                offerCash: req.body.offerCash,
                thparty: req.body.thparty,
                Status: req.body.Status,
                Iprice: req.body.Iprice,
            })
            res.json("Product List Sucessfully !")

        } catch (error) {
            res.json(error)

        }
    }


}

const AllMerchant = async (req, res) => {
    try {
        const Data = await MerchantData.find()
        if (Data.length == 0) {
            return res.json("0 merchant is aviable")
        }
        res.json(Data);
    }
    catch (error) {
        res.json(error)

    }
}

const AllUser = async (req, res) => {
    try {
        const Data = await userModel.find()
        if (Data.length == 0) {
            return res.json("0 user is aviable")
        }
        res.json(Data);
    }
    catch (error) {
        res.json(error)
    }
}


const AddressOfMerchant = async (req, res) => {
    try {
        const { email, address } = req.body;
        // console.log(req.body);

        if (!email || !address) {
            return res.status(400).json({ message: "Email and address are required" });
        }

        // Find the merchant by email and update the AddressList array
        const merchant = await MerchantData.findOneAndUpdate(
            { Email: email },
            { $push: { AddressList: address } }, // Add new address to array
            { new: true }
        );

        if (!merchant) {
            return res.status(404).json({ message: "Merchant not found" });
        }

        res.status(200).json({ message: "Address added successfully", merchant });

    } catch (error) {
        console.error("Error updating address:", error);
        res.status(500).json({ message: "Server error" });
    }
};

const DeleteAddressOfMerchant = async (req, res) => {


    try {
        const { email, address } = req.body;
        console.log(req.body);



        if (!email || !address) {
            return res.status(400).json({ message: "Email and address are required" });
        }

        // Find the merchant by email and remove the address from AddressList
        const updatedMerchant = await MerchantData.findOneAndUpdate(
            { Email: email },
            { $pull: { AddressList: address } }, // Remove the specific address
            { new: true }
        );

        if (!updatedMerchant) {
            return res.status(404).json({ message: "Merchant not found" });
        }

        res.json({ message: "Address deleted successfully", merchant: updatedMerchant });
    } catch (error) {
        console.error("Error deleting address:", error);
        res.status(500).json({ message: "Internal server error" });
    }

}




const AddMerchant = async (req, res) => {
    try {
        const { Email, Password, Name } = req.body;
        const Merchant = await MerchantData.findOne({ Email });
        if (Merchant) {
            return res.json("Email Alreadt Exist !")
        }
        await MerchantData.create({
            Email: req.body.Email,
            Password: req.body.Password,
            Name: req.body.Name,
        })
        res.json("Merchant Created Sucessfully !")
    } catch (error) {
        res.json(error)
    }
}

const AllDeals = async (req, res) => {
    const Products = await Product.find({});
    if (Products.length > 0) {



        res.json(Products)
    }
    else {
        res.json({ msg: "0 Deal Closes !" });
    }
}

const EditDeal = async (req, res) => {
    const id = req.params.id;
    const data = await Product.findById(id);
    if (!data) {
        return res.json({ msg: "no deal here !" })
    }

    res.json({ data })
}

const UpdateDeal = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        product.DealTitle = req.body.DealTitle || product.DealTitle;
        product.Price = req.body.Price || product.Price;
        product.Iprice = req.body.Iprice || product.Iprice;

        product.Offer = req.body.Offer || product.Offer;
        product.Store = req.body.Store || product.Store;
        product.Variant = req.body.Variant || product.Variant;
        product.DColor = req.body.DColor || product.DColor;
        product.OfferAmmount = req.body.OfferAmmount || product.OfferAmmount;
        product.CardType = req.body.CardType || product.CardType;
        product.DealNumber = req.body.DealNumber || product.DealNumber;
        product.offerCash = req.body.offerCash || product.offerCash;
        product.thparty = req.body.thparty || product.thparty;
        product.Status = req.body.Status || product.Status;

        // Save the updated product
        await product.save();

        res.json({ message: "Product updated successfully!" });
    } catch (error) {
        res.status(500).json({ error: "An error occurred while updating the product" });
    }



}
const AllDealsData = async (req, res) => {
    try {
        //   const Email = req.cookies.Email;
        const Products = await myproduct.find({});

        if (Products.length > 0) {
            // Step 1: Create an array to hold the updated products
            const UpdateProducts = await Promise.all(
                Products.map(async (product) => {
                    // Step 2: Fetch ProductDetails for the current product
                    const ProductDetails = await Product.findById(product.Product_id);

                    // Step 3: Merge the product and ProductDetails into a single object
                    return {
                        ...product.toObject(), // Convert Mongoose document to a plain object
                        ...ProductDetails ? ProductDetails.toObject() : {} // Combine with ProductDetails
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

const AllOrderdDeals = async (req, res) => {
    const id = req.body.id;
    console.log(id)
    const mdata = await MerchantData.findOne({ _id: id })
    const Email = mdata.Email;
    console.log(Email);
    //  console.log("emial",Email)
    try {
        const MerchantDeal = await DealCreate.find({ MerchanId: Email });
        // console.log("MerchanId",MerchantDeal)

        const DealData = await Promise.all(
            MerchantDeal.map(async (deal) => {
                const myDealData = await myproduct.find({ MerchantDealId: deal.DealId });
                console.log(myDealData, "mydealdatata")

                if (myDealData.length != 0) {
                    await Promise.all(
                        myDealData.map(async (myDeal) => {
                            const product = await Product.findById(myDeal.Product_id);
                            if (product) {
                                Object.assign(deal._doc, myDeal._doc, product._doc); // Merge product data into deal
                            }
                        })
                    );
                }
                else {
                    const data = await Product.findById(deal.ProductId);
                    console.log(data, "secconds")
                    if (data) {

                        console.log(data);
                        Object.assign(deal._doc, data._doc); // Merge product data into deal
                    }

                }

                return deal._doc;
            })
        );

        // Return all merged data in a single object
        // console.log(DealData,"hhhhhhhh");
        res.json({ DealData });
        // res.json({msg:"hello world"})
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "Error fetching deals", error });
    }
};


const BlukDealview = async (req, res) => {
    const id = req.body.id;
    console.log(id)
    // const mdata = await MerchantData.findOne({_id:id})
    // const Email = mdata.Email;
    // console.log(Email);
    //  console.log("emial",Email)
    try {
        //   const MerchantDeal = await DealCreate.find({ MerchanId: Email });
        // console.log("MerchanId",MerchantDeal)
        const myDealData = await myproduct.find({ MerchantDealId: id });

        const DealData = await Promise.all(
            myDealData.map(async (deal) => {
                console.log(myDealData, "mydealdatata")


                const product = await Product.findById(deal.Product_id);
                const myDeal = await DealCreate.findOne({ DealId: deal.MerchantDealId })
                if (product) {
                    Object.assign(deal._doc, myDeal._doc, product._doc); // Merge product data into deal
                }




                return deal._doc;
            })
        );

        // Return all merged data in a single object
        // console.log(DealData,"hhhhhhhh");
        res.json({ DealData });
        // res.json({msg:"hello world"})
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "Error fetching deals", error });
    }
};

const PaymentStatus = async (req, res) => {
    try {
        const data = await myproduct.find({ Receive: true, PaymentSatuts: false });
        console.log(data, "payment status")

        if (data.length === 0) {
            return res.json({ msg: "0 Payments remaining" });
        }

        const AlluserData = await Promise.all(
            data.map(async (item) => {
                const user = await userModel.findOne({ Email: item.UserId });
                const mmm = await MerchantData.findOne({ GST: item.mGst });


                const Productdata = await Product.findOne({_id: item.Product_id})
                // console.log(Productdata,"prooodd")


                // Ensure that user exists
                if (!user) {
                    return { ...item._doc, user: null }; // Handle case where user is not found
                }

                if (!mmm) {
                    return { ...item._doc, mmm: null }; // Handle case where mmm is not found
                }

                if(!Productdata){
                    return { ...item._doc,Productdata:null}
                }

                return { ...item._doc, ...user._doc, MerchantData: mmm || null, Prod:Productdata || null };
            })
        );

        res.json({ AlluserData });
    } catch (error) {
        console.log(error);
        res.status(500).json({ Error: error.message });
    }
};



const AlertSubmission = async (req, res) => {
    try {
        const { Appid, Action } = req.body;

        if (!Appid || !Action) {
            return res.status(400).json({ message: "Appid and Action are required" });
        }

        // Find the product using Appid and update the Alert field
        const updatedProduct = await myproduct.findOneAndUpdate(
            { Appid: Appid },
            { $set: { Alert: Action, Receive: true } },
            // Update the Alert field with Action value
            { new: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ message: "Alert updated successfully", product: updatedProduct });
    } catch (error) {
        console.error("Error updating alert:", error);
        res.status(500).json({ message: "Server error" });
    }
};


const ReciveSubmission = async (req, res) => {
    try {
        const { Appid, Product_id, UserId } = req.body;

        if (!Appid) {
            return res.status(400).json({ message: "Appid is required" });
        }

        const data = await Product.findById(Product_id);
        const price = parseFloat(data.Price)
        const offer = parseFloat(data.OfferAmmount) * .98;
        const cashrewardI = price - parseFloat(data.offerCash)

        const totalwallet = offer + cashrewardI;
        const user = await userModel.findOne({ Email: UserId })
        // user.Wallet =  (user.Wallet || 0) + totalwallet
        // await user.save();

        // Find the product using Appid and update the Receive field to true
        const updatedProduct = await myproduct.findOneAndUpdate(
            { Appid: Appid },
            { $set: { Receive: true, Alert: "" } },  // Set Receive to true & clear Alert field
            { new: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ message: "Receive status updated successfully", product: updatedProduct });
    } catch (error) {
        console.error("Error updating receive status:", error);
        res.status(500).json({ message: "Server error" });
    }
};

const ReciveNotSubmission = async (req, res) => {
    try {
        const { Appid } = req.body;

        if (!Appid) {
            return res.status(400).json({ message: "AppId is required" });
        }

        const updatedProduct = await myproduct.findOneAndUpdate(
            { Appid: Appid },
            { $set: { Receive: false, Alert: "" } }, // Set Receive to false and clear Alert
            { new: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ message: "Marked as Not Received", data: updatedProduct });
    } catch (error) {
        console.error("Error in Not Received API:", error);
        res.status(500).json({ message: "Server error" });
    }
};








const PayHistory = async (req, res) => {
    // console.log(req.body, "reqbody")

    const { Product_id, Appid } = req.body
    if (!Product_id || !Appid) {
        return res.status(400).json({ msg: "Product ID and App ID are required." });
    }


    try {

        const appId = req.body.Appid
        const mid = req.body.MerchantDealId
        const trId = req.body.TrackingId
        // console.log(mid, "mid")
        // const product_id = req.body.Product_id
        const user = await myproduct.findOne({ Appid: appId })
        const merchant = await DealCreate.findOne({ DealId: mid })
        const mEmail = merchant.MerchanId
        // console.log(merchant.MerchanId, "Merchta id")





        if (!user) {
            return res.status(404).json({ msg: "User not found." });
        }

        const data = await Product.findById(Product_id); //that product i want to calclulat recive from app
        if (!data) {
            return res.status(404).json({ msg: "Product not found." });
        }



        // console.log(user, "list")
        // console.log(data, "that deal")
        const recivefromapp = (
            Number(data?.Price ?? 0) -
            Number(data?.OfferAmmount ?? 0) -
            Number(data?.thparty ?? 0) +
            Number(data?.offerCash ?? 0)
        )

       

        const profit = (
            Number(data?.offerCash ?? 0)
        )

        // const merchantProfit = Number(data?.Iprice ?? 0 ) //iprice

        const merchantProfit =  (Number(data?.Price) -   Number(data?.OfferAmmount)) + (Number(data?.offerCash) + Number(data?.Iprice ?? 0 ))
        
        console.log(merchantProfit, "merchantProfit")

        const title = `${data.DealTitle} (${data.Variant})`;
        // console.log(recivefromapp, "that wall")

        const Email = user.UserId

        const userM = await MerchantData.findOne({Email: mEmail })
        console.log(userM, "userm")
        const PreMoney = userM.TotalWallet
        console.log(typeof(merchantProfit) )
        const total = PreMoney + merchantProfit
        console.log(total, "pre money")

        userM.TotalWallet = total

        await userM.save();

        await MERCHANTPAYDATA.create({
            IAmount: merchantProfit ,   
            MPEmail: merchant.MerchanId,
            TrackingID: trId,
            MYDeal:title ,
            MPAID:  0,
            RunningBalance: PreMoney + merchantProfit,
        })




        const userw = await userModel.findOne({ Email: Email })
        if (!userw) {
            return res.status(404).json({ msg: "User not found." });
        }
        const PrevWallet = userw.Wallet
        console.log(recivefromapp, "recive from")
        const EndWallet = PrevWallet + recivefromapp
        userw.Wallet = EndWallet
        const PrevProfit = userw.NetProfit
        const EndProfit = PrevProfit + profit
        userw.NetProfit = EndProfit

        const PrevTDS = userw.TDS
        const EndTDS = PrevTDS + profit * 0.02
        userw.TDS = EndTDS




        await userw.save();
        // console.log(userw , "walletuser")

        

        await PAYDATA.create({
            Email: Email,
            Amount: recivefromapp,
            APPID: req.body.TrackingId,
            MYDeal: title,
            RunningBalance: userw.Wallet,

        })

        // now remove this entry from the db mathc iwth api id like 

        await myproduct.deleteOne({Appid : appId });
        // await PAYDATA.deleteMany({Email : Email });
        





        res.json({ msg: "success", transactionDetails: { Amount: recivefromapp, RunningBalance: userw.Wallet } })

    } catch (error) {
        res.status(500).json({ msg: error.message || 'Something went wrong. Please try again later.' });
    }

}

const excelDateToJSDate = (serial) => {
    const utcDays = Math.floor(serial - 25569);
    const utcValue = utcDays * 86400; // seconds
    const dateInfo = new Date(utcValue * 1000);
    return dateInfo.toISOString().split('T')[0]; // e.g., "2025-05-07"
  };
  

const UploadExcel = async (req,res) => {
    console.log(req.file, "req file for excel upload");

    try {
      if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }
  
      // Build the full path to the uploaded file
      const filePath = path.join(__dirname, '../public/images', req.file.filename);
      console.log(filePath, "Full path to Excel file");
  
      // Read and parse the Excel file
      const workbook = XLSX.readFile(filePath);
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      let jsonData = XLSX.utils.sheet_to_json(sheet);


       // Convert Date field
    jsonData = jsonData.map(row => {
        if (row.Date && typeof row.Date === 'number') {
          row.Date = excelDateToJSDate(row.Date);
        }
        return row;
      });
  
      console.log('Excel JSON data:', jsonData);


      const processedEntries = [];


      for (const row of jsonData) {
        const email = row['User ID'];
        console.log(email,"emaill")
        const amount = Number(row.Amount);
        const remarks = row.Remarks || '';
        const appid = String(row.UTR || '');
  
        const user = await userModel.findOne({ Email : email });
        console.log(user,"usere")
        if (!user) {
          console.warn(`User not found for email: ${email}`);
          continue;
        }
  
        const previousWallet = user?.Wallet || 0;
        const newWallet = previousWallet - amount;
        console.log(newWallet,"newwallerr")
  
        if (newWallet < 0) {
          console.warn(`Insufficient wallet for ${email}: ${previousWallet}`);
          continue;
        }
  
        const payEntry = new PAYDATA({
          Email: email,
          PAmount: String(amount),
          MYDeal: remarks,
          APPID: appid,
          RunningBalance: String(newWallet),
          createdAt: new Date(row.Date + 'T00:00:00.000Z'),
          updatedAt: new Date(row.Date + 'T00:00:00.000Z')
        });
  
        await payEntry.save();
  
        // Update user wallet
        user.Wallet = newWallet;
        await user.save();
  
        processedEntries.push(payEntry);
      }
  
      res.status(200).json({
        message: 'Excel processed and saved to PAYDATA successfully',
      saved: processedEntries.length,
      entries: processedEntries
      });
  
      // Optional: Clean up the file
      // fs.unlinkSync(filePath);
  
    } catch (error) {
      console.error('Error reading Excel file:', error);
      res.status(500).json({ error: 'Failed to process Excel file' });
    }
}


const LedgerInfo = async (req, res) => {
    // const Email = req.cookies.Email;
    // console.log(Email, "walle")
    const Email = req.body.Email;
    console.log(Email, "cookie emal")

    try {
        // Fetch pay information and user data
        const Payinfo = await PAYDATA.find({ Email: Email });
        const user = await userModel.findOne({ Email: Email });

        // Check if user exists and extract wallet
        if (!user) {
            return res.status(403).json({ error: "User not found" });
        }

        const wallet = user.Wallet; // Assuming 'Wallet' is a property, not a promise
        const profit = user.NetProfit;
        const tds = user.TDS;

        // Combine Payinfo array with wallet data
        // var data = Payinfo.map(item => ({ ...item.toObject(), wallet }));
        var data = { Payinfo, wallet, profit, tds }
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


const MLedgerInfo = async (req, res) => {
    const BodyEmail = req.body.MchtEmail;
    console.log(req.body, "walle")
    // const MerEmail = req.body.Email;
    // console.log(req.body.MEmail, "cookie  memail emal")

    try {
        // Fetch pay information and user data
        const MPayinfo = await MERCHANTPAYDATA.find({ MPEmail: BodyEmail });
        console.log(MPayinfo,"Payinfo")
        // const user = await userModel.findOne({ Email: Email });

        // Check if user exists and extract wallet
        if (MPayinfo.length === 0) {
            return res.status(200).json({ error: "MERCHANT not found" });
        }


        // const wallet = user.Wallet; // Assuming 'Wallet' is a property, not a promise
        // const profit = user.NetProfit;
        // const tds = user.TDS;

        // Combine Payinfo array with wallet data
        // var data = Payinfo.map(item => ({ ...item.toObject(), wallet }));
        var data = { MPayinfo }
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



const SaveGST = async (req, res) => {
    const Emailbody = req.body.email;
    const GSTM  = req.body.gstValue;

    console.log(req.body,"gst")
    
  
    try {
      // Find merchant by email and update GST
      const updatedMerchant = await MerchantData.findOneAndUpdate(
        { Email: Emailbody },
        { GST: GSTM },
        { new: true,  } // upsert false = don't create new if not found
      );

      console.log(updatedMerchant, "find merchat")
  
      if (!updatedMerchant) {
        return res.status(404).json({ msg: "Merchant not found" });
      }
  
      res.json({ msg: "GST updated successfully", updatedMerchant });
    } catch (error) {
      console.error("Error updating GST:", error);
      res.status(500).json({ msg: "Server error", error });
    }
  };
  

export default {
    AllDealsData, AdminLogin, AdminPost, AddressOfMerchant, AllUser, AlertSubmission, ReciveSubmission, ReciveNotSubmission, DeleteAddressOfMerchant, AllOrderdDeals, Addproduct, AllMerchant, AddMerchant, AllDeals, EditDeal
    , UpdateDeal, BlukDealview, PaymentStatus, PayHistory, UploadExcel, LedgerInfo , MLedgerInfo,SaveGST
}
