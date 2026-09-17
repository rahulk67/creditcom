import { Router } from "express";
const router = Router();
import upload from "../middlewares/multerver.js";

import Admin from "../controller/Admin.controller.js"
import Merchant from "../controller/Merchant.controller.js";


// router.post("/register",Admin.RegisterAdmin);
// router.post("/register/otpverify",Admin.OtpVerfiy);
router.post("/addadmin",Admin.AdminPost);
router.post("/login",Admin.AdminLogin);
// router.post("/login/verfiyotp",Admin.LoginOtpverify);
router.post("/adddeals",upload.single('Image'),Admin.Addproduct);
router.get("/editdeal/:id",Admin.EditDeal);
router.put("/updatedeal/:id",Admin.UpdateDeal);
router.post("/addmerchant",Admin.AddMerchant);


router.get("/alldeals",Admin.AllDeals);
router.post("/put-address",Admin.AddressOfMerchant);
router.get("/allorder",Admin.AllDealsData);
router.get("/allmerchant",Admin.AllMerchant);
router.get("/alluser",Admin.AllUser);

router.post("/merchantdata",Admin.AllOrderdDeals)
router.post("/Blukdeal/view",Admin.BlukDealview);
router.get("/payment/details",Admin.PaymentStatus);
router.post("/payhistory",Admin.PayHistory)
router.post("/delete-address",Admin.DeleteAddressOfMerchant)
router.post("/alert-submission",Admin.AlertSubmission)
router.post("/recieve-submission",Admin.ReciveSubmission)
router.post("/not-received",Admin.ReciveNotSubmission)
router.post("/ledgerinfo",Admin.LedgerInfo)
router.post("/merchant-ledger",Admin.MLedgerInfo)
router.post("/save-gst",Admin.SaveGST);
router.post("/upload-excel", upload.single('excelFile'), Admin.UploadExcel);








export default router;