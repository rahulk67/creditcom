import { Router } from "express";
import Merchant from "../controller/Merchant.controller.js"
const router = Router();



router.get("/deals",Merchant.DealForMerchant);
router.post("/deals/create/:id",Merchant.Dealcreate);
router.post("/login",Merchant.MerchantLogin)
router.get("/update/deals",Merchant.DealsUpdate);
router.get("/alldeals",Merchant.AlldealsforMerchant)
router.get("/allorderdeals",Merchant.AllOrderdDeals)

router.post("/utr",Merchant.MerchantUTR);
router.get("/mwallet", Merchant.MWallet)
router.post("/mlogout",Merchant.MLogout);


export default router;