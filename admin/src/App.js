import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import AddProduct from './Pages/AddProduct';
import Layout from './Pages/Layout';
import AddMerchant from './Pages/Merchant/AddMerchant';
import DealsData from './Pages/DealsData';
import ProductData from './Pages/ProductData';
import EditDeal from './Pages/EditDeal';
import Admin from './Pages/Admin';
import DashBoard from './Pages/DashBoard';
// import Invoices from './Pages/Invoices';
// import DynamicDeal from './Pages/DynamicDeal';
// import MerchantBulkOrder from './Pages/Merchant/MerchantBulkOrder';
import MerchantOrder from './Pages/Merchant/MerchantDetails';
// import Address from './Pages/DealAddress/Address';
import CreatedDeals from './Pages/DealsInfo/CreatedDeals';
// import BulkMerchantPayment from './Pages/DealsInfo/BulkMerchantPayment';
import MerchantPaymentRecieved from './Pages/DealsInfo/DealsPaymentRequest';
// import DeliveryConfirm from './Pages/Orders/DeliveryConfirm';
// import EcomOrderDetails from './Pages/Orders/EcomOrderDetails';
// import MerchantOrderVariant from './Pages/Orders/MerchantOrderVariant';
import MerchantPricing from './Pages/Merchant/MerchantPayment';
import MerchantAllData from './Pages/Merchant/MerchantAllData';
import OneDealInfo from './Pages/Merchant/OneDealInfo';
import SubmitUTR from './Pages/DealsInfo/SubmitUTR';
import UserLedger from './Pages/UserLedger';
import LedgerInfo from './Pages/LedgerInfo';
import MerchantLedger from './Pages/Merchant/MerchantLedger';

function App() {
    return (

        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Admin />} />
          <Route path="dashboard" element={<DashBoard />} />

          <Route path="add-product" element={<AddProduct />} />
          <Route path="add-merchant" element={<AddMerchant />} />
          {/* <Route path="dynamic-deals" element={<DynamicDeal/>} />
          <Route path="invoices" element={<Invoices />} /> */}


          {/* <Route path="merchant-bulk" element={<MerchantBulkOrder />} /> */}
          <Route path="merchant-details" element={<MerchantOrder />} />
          <Route path="merchant-payment" element={<MerchantPricing />} />
          <Route path="merchant-all-data/:id" element={<MerchantAllData />} />
          <Route path="viewdeal/:id" element={<OneDealInfo />} />



          {/* <Route path="bulk-merchant-payment" element={<BulkMerchantPayment />} /> */}
          <Route path="created-deals" element={<CreatedDeals />} />
          <Route path="deals-payment-request" element={<MerchantPaymentRecieved />} />
          <Route path="submit-utr/:id" element={<SubmitUTR />} />


          {/* <Route path="deliverey-confirmation" element={<DeliveryConfirm />} /> */}
          {/* <Route path="ecom-order-details" element={<EcomOrderDetails />} /> */}
          {/* <Route path="merchant-order-variant" element={<MerchantOrderVariant />} /> */}



          {/* <Route path="merchant-dynamic-deals" element={<DynamicDeal />} /> */}
          {/* <Route path="merchant-invoices" element={<Invoices />} /> */}
          {/* <Route path="address" element={<Address />} /> */}



          

          <Route path="deals-data" element={<DealsData />} />
          <Route path="product-data" element={<ProductData />} />
          <Route path="user-ledger" element={<UserLedger />} />
          <Route path="user-ledger/:id" element={<LedgerInfo />} />
          <Route path="merchant-ledger/:id" element={<MerchantLedger />} />



          <Route path="edit/deal/:id" element={<EditDeal />} />




          add-merchant
          {/* <Route path="sign-in" element={<SignPage />} /> */}
          {/* <Route path="user-form" element={<UserForm />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>

    );
}

export default App;
