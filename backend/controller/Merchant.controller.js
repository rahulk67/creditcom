import MerchantData from "../model/Merchant.model.js"
import crypto from "crypto";
import DealCreate from "../model/MerchantDeal.model.js"
import Product from "../model/Productlist.model.js";
import myproduct from "../model/Myproduct.js";
import UTRDATA from "../model/UTR.model.js";
import MERCHANTPAYDATA from "../model/MPayhistory.model.js";
const DealId = () => {
  return crypto.randomInt(100000, 1000000)
}
const option = {
  path: "/",
  // secure: true,       // Ensure the cookie is only sent over HTTPS
  httpOnly: true,
  // sameSite: "None"

}

const MerchantLogin = async (req, res) => {
  const { Email, Password } = req.body;
  const authEmail = await MerchantData.findOne({ Email })
  if (!authEmail) {
    return res.json("User not Exist ! check your email")
  }
  const CheckPassword = (authEmail.Password === Password)
  if (!CheckPassword) {
    return res.json("Wrong Password! Check Your Password ")
  }

  res
    .status(200)
    .cookie("Memail", Email, option)
    .json("Succesfully Login!");
}

const Dealcreate = async (req, res) => {
  try {
    const Email = req.cookies.Memail;
    const id = req.params.id
    console.log(Email, id, "data  from forntend ")
    const Merchant = await MerchantData.findOne({ Email: Email })
    if (!Merchant) {
      return res.json({ msg: "Merchant Not Exist !" })
    }

    const { Extra, Quantity, Color, Address, GST } = req.body;
    console.log(req.body, "address")
    if (Quantity > 50) {
      return res.json({ msg: "Qunatity of product should be less then 50" })
    }
    const Deal_Id = DealId()

    let parsedAddress = {};
    try {
      parsedAddress = JSON.parse(Address);
    } catch (err) {
      console.log("Failed to parse Address:", err.message);
      return res.json({ msg: "Invalid Address format" });
    }

    await DealCreate.create({
      DealId: Deal_Id,
      Quantity: Quantity,
      Extra: Extra,
      ProductId: id,
      MerchanId: Email,
      Color: Color,
      Address: {
        AName: parsedAddress.AName || "",
        AL1: parsedAddress.AL1 || "",
        AL2: parsedAddress.AL2 || "",
        Pincode: parsedAddress.Pincode || ""
      },
      GST: GST,
    })

    res.json({ msg: "Deal Created succesfully !" })
  } catch (error) {
    console.log(error);
    res.json({ msg: "Intrenal server error" })
  }




}


const DealForMerchant = async (req, res) => {
  try {
    const { email } = req.query; // Get email from query parameters

    console.log(req.query, "query parameters")

    if (!email) {
      return res.status(400).json({ msg: "Email is required" });
    }
    const Deal = await Product.find({ Status: "Active" });
    if (!Deal) {
      return res.json({ msg: "0 Deals live" });

    }
    // Find merchant using email
    const merchant = await MerchantData.findOne({ Email: email });
    console.log(merchant,"forgst")

    if (!merchant) {
      return res.status(404).json({ msg: "Merchant not found" });
    }

    // Merge address list into each deal
    const updatedDeals = Deal.map((deal) => ({
      ...deal.toObject(), // Convert Mongoose document to a plain object
      AddressList: merchant.AddressList, // Add address list to each deal
      GST: merchant.GST,
    }));

    console.log(updatedDeals,"updated deals")

    // Send response with updated deals
    res.json({ Deal: updatedDeals });

  } catch (error) {
    console.log(error);
    res.json({ msg: "Intrenal server Error !" })
  }
}

const DealsUpdate = async (req, res) => {
  const Email = req.cookies.Memail;
  if (!Email) {
    return res.json({ msg: "Email not found " })
  }
  const data = await DealCreate.find({ MerchanId: Email })
  if (data.length === 0) {
    return res.json({ msg: "no deals" })
  }
  res.json({ msg: 'success', data })
}


// const AlldealsforMerchant = async (req, res) => {
//     try {
//       const Email = req.cookies.Memail;

//       // Find all deals related to the merchant's email
//       const MerchantDeal = await DealCreate.find({ MerchanId: Email });

//       // Loop over each deal and fetch related product data
//       const DealData = await Promise.all(
//         MerchantDeal.map(async (item) => {
//           // Find product data related to the current deal
//           const mydealdata = await myproduct.find({ MerchantDealId: item.DealId });
//           console.log()

//           // Fetch product details for each product in the deal
//           const ProductData = await Promise.all(
//             mydealdata.map(async (myitem) => {
//               const product = await Product.findById(myitem.Product_id);
//               return product._doc; // Return product document
//             })
//           );

//           // Merge the deal and its associated product data
//           return {
//             ...item,  // Deal data
//             ...ProductData // Associated products
//           };
//         })
//       );

//       // Send the combined data as a response
//       console.log(DealData);
//       res.status(200).json({ Deals: DealData });
//     } catch (error) {
//       console.error('Error fetching deals for merchant:', error);
//       res.status(500).json({ msg: 'Internal Server Error' });
//     }
//   };

const AlldealsforMerchantr = async (req, res) => {
  const Email = req.cookies.Memail;
  console.log("emial first", Email)
  try {
    const MerchantDeal = await DealCreate.find({ MerchanId: Email });
    console.log("MerchanId",MerchantDeal)

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
//old alldealsformaerch second from chantgpt





// const AllOrderdDeals = async (req, res) => {
//   const Email = req.cookies.Memail;
//    console.log("emial merchat",Email)
//   try {
//     const MerchantDeal = await DealCreate.find({ MerchanId: Email });
//     // console.log("MerchanId",MerchantDeal)

//     const DealData = await Promise.all(
//       MerchantDeal.map(async (deal) => {
//         const myDealData = await myproduct.find({ MerchantDealId: deal.DealId });
//         // console.log(myDealData, "mydealdatata")
//         if (myDealData.length != 0) {
//           await Promise.all(
//             myDealData.map(async (myDeal) => {
//               const product = await Product.findById(myDeal.Product_id);
//               if (product) {
//                 Object.assign(deal._doc, myDeal._doc, product._doc); // Merge product data into deal
//               }
//             })
//           );





//           return deal._doc;
          
//         }
//         // else{
//         // return 
//         // }
//       })
//     );

//     // Return all merged data in a single object
//     // console.log(DealData,"hhhhhhhh");
//     res.json({ DealData });
//     // res.json({msg:"hello world"})
//   } catch (error) {
//     console.log(error)
//     res.status(500).json({ msg: "Error fetching deals", error });
//   }
// };


const AlldealsforMerchant = async (req, res) => {
  const Email = req.cookies.Memail;
  console.log("email first", Email);

  try {
    const MerchantDeal = await DealCreate.find({ MerchanId: Email });

    const DealData = await Promise.all(
      MerchantDeal.map(async (deal) => {
        const myDealData = await myproduct.find({ MerchantDealId: deal.DealId });

        if (myDealData.length > 0) {
          // For each myDeal, get the related product and structure result cleanly
          const merged = await Promise.all(
            myDealData.map(async (myDeal) => {
              const product = await Product.findById(myDeal.Product_id);
              if (product) {
                return {
                  ...deal.toObject(),
                  ...myDeal.toObject(),
                  ...product.toObject(),
                };
              } else {
                return null;
              }
            })
          );
          return merged.filter(Boolean); // Remove any nulls
        } else {
          // Direct deal-product relation
          const product = await Product.findById(deal.ProductId);
          if (product) {
            return [{
              deal: deal.toObject(),
              product: product.toObject(),
            }];
          }
        }

        return []; // If nothing found, return empty array to maintain structure
      })
    );

    // Flatten nested arrays
    const cleanedData = DealData.flat().filter(Boolean);

    res.json({ DealData: cleanedData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error fetching deals", error });
  }
};




const AllOrderdDeals = async (req, res) => {
  const Email = req.cookies.Memail;
  console.log("email merchant", Email);

  try {
    const MerchantDeal = await DealCreate.find({ MerchanId: Email });

    const DealData = await Promise.all(
      MerchantDeal.map(async (deal) => {
        const myDealData = await myproduct.find({ MerchantDealId: deal.DealId });

        if (myDealData.length === 0) return null;

        const enrichedDeals = await Promise.all(
          myDealData.map(async (myDeal) => {
            const product = await Product.findById(myDeal.Product_id);
            return product
              ? {
                  ...deal._doc,
                  ...myDeal._doc,
                  product: product._doc, // avoid flattening too much
                }
              : null;
          })
        );

        // Return the first enriched deal or all if needed
        return enrichedDeals.filter(Boolean); // Filter nulls
      })
    );

    // Flatten and filter any null/undefined
    const cleanedData = DealData.flat().filter(Boolean);

    res.json({ DealData: cleanedData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error fetching deals", error });
  }
};


const MerchantUTR = async (req, res) => {
  // try {
  //   const Email = req.cookies.Memail;
  //   console.log(Email,"new cookies")
  //   if (!Email) {
  //     return res.json({ msg: "Email not found " })
  //   }
  //   const Merchant = await MerchantData.find({ Email: Email })
  //   if (!Merchant) {
  //     return res.json({ msg: "Merchant not found " });

  //   }

  //   await UTRDATA.create({
  //     MerchantId: Email,
  //     Merchant: req.body.Merchant,
  //     UTR: req.body.UTR,
  //     Amount: req.body.Amount,


  //   })

  //   res.json({ msg: "successfully created !" })
  // } catch (error) {
  //   res.json({ msg: "error creating" });
  // }


  try {

    const Email = req.cookies.Memail;

    console.log(req.body, "req body latest")

    const { Date, UTR, Remarks, Amount } = req.body

    console.log(Email, "new cookies")
    if (!Email) {
      return res.json({ msg: "Email not found " })
    }

    const Merchant = await MerchantData.findOne({ Email: Email })
    if (!Merchant) {
      return res.json({ msg: "Merchant not found " });

    }

    const m = Merchant.TotalWallet

    console.log(m, "my merchstn")

    const newRunning = Merchant.TotalWallet - Amount



    Merchant.TotalWallet = newRunning

    await Merchant.save()

    await MERCHANTPAYDATA.create({
      IAmount: null,
      MPEmail: Email,
      TrackingID: UTR,
      MYDeal: Remarks,
      MPAID: Amount,
      RunningBalance: newRunning,
    })

    // const data = await Product.findById(Product_id); //that product i want to calclulat recive from app
    // if (!data) {
    //   return res.status(404).json({ msg: "Product not found." });
    // }



    // console.log(user, "list")
    // console.log(data, "that deal")
    // const recivefromapp = (
    //   Number(data?.Price ?? 0) -
    //   Number(data?.OfferAmmount ?? 0) -
    //   Number(data?.thparty ?? 0) +
    //   Number(data?.offerCash ?? 0)
    // )



    // const profit = (
    //   Number(data?.offerCash ?? 0)
    // )

    // const merchantProfit = Number(data?.Iprice ?? 0) //iprice

    // console.log(merchantProfit, "merchantProfit")

    // const title = data.DealTitle
    // console.log(recivefromapp, "that wall")

    // const Email = user.UserId

    // const userM = await MerchantData.findOne({ Email: mEmail })
    // console.log(userM, "userm")
    // const PreMoney = userM.TotalWallet
    // console.log(typeof (merchantProfit))
    // const total = PreMoney + merchantProfit
    // console.log(total, "pre money")

    // userM.TotalWallet = total

    // await userM.save();

    // await MERCHANTPAYDATA.create({
    //   IAmount: merchantProfit,
    //   MPEmail: merchant.MerchanId,
    //   TrackingID: trId,
    //   MYDeal: title,
    //   MPAID: 0,
    //   RunningBalance: PreMoney + merchantProfit,
    // })




    // const userw = await userModel.findOne({ Email: Email })
    // if (!userw) {
    //   return res.status(404).json({ msg: "User not found." });
    // }
    // const PrevWallet = userw.Wallet
    // console.log(recivefromapp, "recive from")
    // const EndWallet = PrevWallet + recivefromapp
    // userw.Wallet = EndWallet
    // const PrevProfit = userw.NetProfit
    // const EndProfit = PrevProfit + profit
    // userw.NetProfit = EndProfit

    // const PrevTDS = userw.TDS
    // const EndTDS = PrevTDS + profit * .2
    // userw.TDS = EndTDS




    // await userw.save();
    // // console.log(userw , "walletuser")



    // await PAYDATA.create({
    //   Email: Email,
    //   Amount: recivefromapp,
    //   APPID: req.body.Appid,
    //   MYDeal: title,
    //   RunningBalance: userw.Wallet,

    // })
    res.json({ msg: "success", })

  } catch (error) {
    res.status(500).json({ msg: error.message || 'Something went wrong. Please try again later.' });
  }

};


const MWallet = async (req, res) => {
  const Email = req.cookies.Memail;
  console.log(Email, "walle")

  try {
    // Fetch pay information and user data
    const MPayinfo = await MERCHANTPAYDATA.find({ MPEmail: Email });
    console.log(MPayinfo, "Pay info")

    // Check if user exists and extract wallet
    if (!MPayinfo) {
      return res.status(404).json({ error: "User not found" });
    }


    // Combine Payinfo array with wallet data
    // var data = Payinfo.map(item => ({ ...item.toObject(), wallet }));
    var data = { MPayinfo, }
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


const MLogout = async (req, res) => {

  console.log("dgfsffgdgf")
  

  try {
    // Destroy session if using session-based auth
    req.session?.destroy?.();

    // Clear cookies from server-side
    res.clearCookie("Memail", { path: "/" });

    // Send success response
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({ message: "Logout failed" });
  }
};









export default { MerchantLogin, MLogout, Dealcreate, DealForMerchant, DealsUpdate, AlldealsforMerchant, MerchantUTR, AllOrderdDeals, MWallet }