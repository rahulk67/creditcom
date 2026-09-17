import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Layout from './Pages/Layout';

import MerchantAdmin from './Pages/MerchantAdmin';
import DashBoard from './Pages/DashBoard';
import Invoices from './Pages/Invoices';
import DynamicDeal from './Pages/DynamicDeal';
import MerchantBulkOrder from './Pages/Merchant/MerchantBulkOrder';
import MerchantOrder from './Pages/Merchant/MerchantOrder';
import Address from './Pages/DealAddress/Address';
import FinancialPayUTR from './Pages/MerchantPayment/FinancialPayUTR';
import BulkMerchantPayment from './Pages/MerchantPayment/BulkMerchantPayment';
import MerchantPaymentRecieved from './Pages/MerchantPayment/MerchantPaymentRecieved';
import DeliveryConfirm from './Pages/Orders/DeliveryConfirm';
import EcomOrderDetails from './Pages/Orders/EcomOrderDetails';
import MerchantOrderVariant from './Pages/Orders/MerchantOrderVariant';
import MerchantPricing from './Pages/Merchant/MerchantPricing';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MerchantAdmin />} />
          <Route path="dashboard" element={<DashBoard />} />


          <Route path="merchant-bulk" element={<MerchantBulkOrder />} />
          <Route path="merchant-order" element={<MerchantOrder />} />
          <Route path="merchant-pricing" element={<MerchantPricing />} />

          <Route path="bulk-merchant-payment" element={<BulkMerchantPayment />} />
          <Route path="/financial-pay-utr" element={<FinancialPayUTR />} />
          <Route path="merchant-payment-recieved" element={<MerchantPaymentRecieved />} />

          <Route path="deliverey-confirmation" element={<DeliveryConfirm />} />
          <Route path="ecom-order-details" element={<EcomOrderDetails />} />
          <Route path="merchant-order-variant" element={<MerchantOrderVariant />} />



          <Route path="merchant-dynamic-deals" element={<DynamicDeal />} />
          <Route path="merchant-invoices" element={<Invoices />} />
          <Route path="address" element={<Address />} />






          







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
