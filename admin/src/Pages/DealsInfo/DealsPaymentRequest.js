import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const OneDealInfo = () => {
  const [data, setData] = useState([]);


  const backUrl = process.env.REACT_APP_URL
  const navigate = useNavigate()

  // const id = useParams().id;
  // console.log(id, "deal id gets")

  useEffect(() => {
    axios.get(`${backUrl}/admin/payment/details`, { withCredentials: true })
      .then((res) => {
        console.log(res, "deal getss")
        console.log(res.data.AlluserData, "deals array")
        if (res.data.AlluserData == undefined) {
          setData([]);

        }
        else {
          setData(res.data.AlluserData ? res.data.AlluserData.reverse() : []);

        }


      })
  }, [])

  const submitUTR = (Appid, Product_id, MerchantDealId,TrackingId) => {
    // alert(`/submit-utr/${Appid} ${Product_id}`)
    axios.post(`${backUrl}/admin/payhistory`, { Appid ,Product_id, MerchantDealId, TrackingId }, { withCredentials: true })
      .then((res) => {
        console.log(res, "final pay yyydata")
        alert('Transaction successful! Your payment details have been updated.');
        window.location.reload()

        // setData(res.data.DealData);
      }).catch((error) => {
        // Display error if there is an issue with the API call
        if (error.response) {
          // Request made and server responded with an error status code
          alert(`Error: ${error.response.data.msg || 'Something went wrong on the server!'}`);
        } else if (error.request) {
          // Request was made but no response was received
          alert('Error: No response from the server!');
        } else {
          // Something else went wrong
          alert(`Error: ${error.message || 'Unknown error occurred!'}`);
        }
      });
  };


  useEffect(() => {
    const Email = localStorage.getItem('Email');  // get name of cookies
    console.log(Email, "email recieved from localstorage");
    if (Email == null) {
      console.log("sfj;osadjf")
      navigate('/')
    }
  }, [])


  return (
    <div>
      <h1 className='font-medium pb-6 text-3xl'> Deal Payment Request</h1>


      <div className='border'>
        <div className="relative overflow-x-auto ">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 DARK:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 DARK:bg-gray-700 DARK:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">Email Id</th>

                <th scope="col" className="px-6 py-3">Incredible Id</th>
                <th scope="col" className="px-6 py-3">Merchant</th>

                <th scope="col" className="px-6 py-3">Request Date</th>

                <th scope="col" className="px-6 py-3">User Name</th>
                <th scope="col" className="px-6 py-3">Deal Title</th>
                <th scope="col" className="px-6 py-3">Variant</th>



                <th scope="col" className="px-6 py-3">Order Id</th>


                <th scope="col" className="px-6 py-3">Tracking Id</th>
                <th scope="col" className="px-6 py-3">Support OTP</th>
                <th scope="col" className="px-6 py-3">Four Digit Support</th>
                <th scope="col" className="px-6 py-3">Alert</th>
                <th scope="col" className="px-6 py-3">Delivered Status</th>
                <th scope="col" className="px-6 py-3">Received</th>

                <th scope="col" className="px-6 py-3">Screnshot</th>

                <th scope="col" className="px-6 py-3">Invoice</th>
                <th scope="col" className="px-6 py-3">Payment Status</th>
                <th scope="col" className="px-6 py-3">Action</th>


              </tr>
            </thead>

            <tbody>
              {data.length > 0 || !undefined ? (
                data.map((item, index) => (
                  item ? (

                    <tr key={index} className="bg-white border-b DARK:bg-gray-800 DARK:border-gray-700">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap DARK:text-white">
                        {item.UserId}
                      </th>
                      <td className="px-6 py-4">{item.Appid}</td>
                      <td className="px-6 py-4">{item?.MerchantData?.Email}</td>

                      <td className="px-6 py-4"> {new Date(item.createdAt).toLocaleDateString()}</td>

                      <td className="px-6 py-4"> {item.first_Name + " " + item.last_Name}</td>
                      <td className="px-6 py-4"> {item?.Prod?.DealTitle}</td>
                      <td className="px-6 py-4"> {item?.Prod?.Variant}</td>

                      <td className="px-6 py-4"> {item.OrderId}</td>

                      <td className="px-6 py-4"> {item.TrackingId}</td>
                      <td className="px-6 py-4"> {item.Otp}</td>
                      <td className="px-6 py-4"> {item.FourDigit}</td>
                      <td className="px-6 py-4 text-red-500">{item.Alert}</td>


                      <td className="px-6 py-4">{item.status}</td>
                      <td className="px-6 py-4 text-red-500">{item.Receive ? "Received " : "Not Received"}</td>

                      {/* <td className="px-6 py-4">{item.Dispute ? "No Dispute" : "Disputed"}</td> */}


                      <td className="px-6 py-4">
                        <a href={`${backUrl}/${item.Screenshot}`} target="_blank" className='hover:underline' rel="noopener noreferrer">
                          Screenshot 
                        </a>
                      </td>

                      <td className="px-6 py-4">
                        <a href={`${backUrl}/${item.Invoice}`} target="_blank" className='hover:underline' rel="noopener noreferrer">
                          Invoice
                        </a>
                      </td>
                      <td className="px-6 py-4">
                        {item.PaymentStatus ? "Paid" : "Unpaid"}
                      </td>

                      <td className="px-6 py-4">
                        <button onClick={() => { submitUTR(item.Appid, item.Product_id, item.MerchantDealId, item.TrackingId) }} className='hover:underline'>Submit UTR</button>
                      </td>


                    </tr>) : null
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
    </div>

  )
}

export default OneDealInfo