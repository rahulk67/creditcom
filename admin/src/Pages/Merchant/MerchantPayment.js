// MerchantBulkOrder



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MerchantOrder = () => {
  const backUrl = process.env.REACT_APP_URL;
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${backUrl}/merchant/alldeals`, {withCredentials: true})
      .then((res) => {
        console.log(res,"ALL morder")
        setData(res.data.DealData.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); // Empty dependency array to prevent infinite API calls

  useEffect(() => {
    const Email = localStorage.getItem('Email');  // get name of cookies
    console.log(Email, "email recieved from localstorage");
    if (Email == null) {
      console.log("sfj;osadjf")
      navigate('/')
    }
  }, [])


  return (


    <div className=''>
      <h1 className=" block mb-2 text-2xl  font-medium text-gray-900 px-1.5">Merchant Payment</h1>

   
      <div className="relative border  overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 DARK:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 DARK:bg-gray-700 DARK:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Deal Id</th>
              <th scope="col" className="px-6 py-3">Merchant Id</th>
              <th scope="col" className="px-6 py-3">Deal Title</th>
              <th scope="col" className="px-6 py-3">Total Amount</th>
              <th scope="col" className="px-6 py-3">Remaining Amount</th>
              <th scope="col" className="px-6 py-3">Paid Amount </th>
              <th scope="col" className="px-6 py-3">Action </th>



              

            </tr>
          </thead>

          <tbody>
            {data.length > 0 ? (
              data.map((item, index) => (
                <tr key={index} className="bg-white border-b DARK:bg-gray-800 DARK:border-gray-700">
                  <td className="px-6 py-4">{item.DealId}</td>


                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap DARK:text-white">
                    {item.MerchanId}
                  </th>

                  <td className="px-6 py-4">{item.DealTitle}</td>
                 
                  
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10" className="text-center py-4">
                  No deals available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MerchantOrder;
