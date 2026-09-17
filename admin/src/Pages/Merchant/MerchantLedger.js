import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

const MerchantLedger = () => {
  const backUrl = process.env.REACT_APP_URL;
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const MchtEmail = useParams().id

  useEffect(() => {
    axios.post(`${backUrl}/admin/merchant-ledger`, {MchtEmail})
      .then((res) => {
        console.log(res, "ALL M payment Info")
        setData(res.data.MPayinfo);
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
      <h1 className=" block mb-2 text-2xl  font-medium text-gray-900 px-1.5">Merchant Payment Recieved</h1>

      <div className=' mb-2 text-md  font-medium text-gray-900 px-1.5'>Payment Transaction (Transactions will update within 2 days)</div>

      {/* <Link to="/financial-pay-utr" className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-4 DARK:bg-blue-600 DARK:hover:bg-blue-700 focus:outline-none DARK:focus:ring-blue-800'>Submit UTR for payment</Link> */}


      {/* <Link to="#" className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-4 DARK:bg-blue-600 DARK:hover:bg-blue-700 focus:outline-none DARK:focus:ring-blue-800'>Download CSV</Link> */}


      <div class="relative overflow-x-auto mt-8">
        <table class="w-full text-xs text-left rtl:text-right text-gray-500 DARKKK:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 DARKK:bg-gray-700 DARKK:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">Updated At</th>
              <th scope="col" class="px-6 py-3">Payment At</th>

              <th scope="col" class="px-6 py-3">Deal Title               </th>
              <th scope="col" class="px-6 py-3">
                Tracking Id
              </th>
              <th scope="col" class="px-6 py-3">
                Incredible Price
              </th>
              <th scope="col" class="px-6 py-3">
                Merchant Paid
              </th>
              <th scope="col" class="px-6 py-3">
                Running Balance
              </th>
            </tr>
          </thead>
          <tbody>


            {data?.length > 0 ? (
              data.map((item, index) => (
                <tr key={index} class="bg-white border-b DARKK:bg-gray-800 DARKK:border-gray-700 border-gray-200">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap DARKK:text-white">
                    {new Date(item.updatedAt).toLocaleString('en-US', {
                      month: '2-digit',
                      day: '2-digit',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                      hour12: true, // Use 24-hour time
                    })}
                  </th>
                  <td class="px-6 py-4">
                    {/* {new Date(item.updatedAt).toLocaleString('en-US', {
                                            month: '2-digit',
                                            day: '2-digit',
                                            year: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit',
                                            hour12: true, // Use 24-hour time
                                        })} */}
                  </td>

                  <td class="px-6 py-4">
                    {item.MYDeal}
                  </td>
                  <td class="px-6 py-4 text-blue-800">
                    {item.TrackingID}

                  </td>
                  <td class="px-6 py-4 text-green-600">
                    {item.IAmount}

                  </td>
                  <td class="px-6 py-4">
                    {item.MPAID}
                  </td>
                  <td class="px-6 py-4">
                    {item.RunningBalance}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10" className="text-center py-4">
                  No Transactions Yet
                </td>
              </tr>
            )}

          </tbody>
        </table>
      </div>

    </div>
  );
};

export default MerchantLedger;







