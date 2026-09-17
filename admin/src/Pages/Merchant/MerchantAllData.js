import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const MerchantAllData = () => {
    const [data, setData] = useState([]);


    const backUrl = process.env.REACT_APP_URL
    const navigate = useNavigate()

    const id = useParams().id;
    console.log(id)

    useEffect(() => {
        axios.post(`${backUrl}/admin/merchantdata`, { id }, { withCredentials: true })
            .then((res) => {
                console.log(res, "email sentt")
                setData(res.data.DealData);
            })
    },[])

    const viewone = (DealId) =>{
        navigate(`/viewdeal/${DealId}`)
    }


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
            <h1 className='font-medium pb-6 text-3xl'>Merchant All Data Details</h1>


            <div className='border'>
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 DARK:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 DARK:bg-gray-700 DARK:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">Id</th>
                                <th scope="col" className="px-6 py-3">Store</th>
                                <th scope="col" className="px-6 py-3">Title</th>
                                <th scope="col" className="px-6 py-3">Quantity</th>


                                <th scope="col" className="px-6 py-3">#Ordered</th>
                                <th scope="col" className="px-6 py-3">#Delivered</th>
                                <th scope="col" className="px-6 py-3">#Shipped</th>


                                <th scope="col" className="px-6 py-3">Total Price</th>
                                <th scope="col" className="px-6 py-3">Merchant Id</th>
                                <th scope="col" className="px-6 py-3">View info</th>


                                

                            </tr>
                        </thead>

                        <tbody>
                            {data.length > 0 ? (
                                data.map((item, index) => (
                                    <tr key={index} className="bg-white border-b DARK:bg-gray-800 DARK:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap DARK:text-white">
                                            {item.DealId}
                                        </th>
                                        <td className="px-6 py-4">{item.Store}</td>
                                        <td className="px-6 py-4">{item.DealTitle}</td>
                                        <td className="px-6 py-4">{item.Quantity}</td>

                                        <td className="px-6 py-4">{item.Fullfiled}</td>
                                        <td className="px-6 py-4">{item.Delivered}</td>
                                        <td className="px-6 py-4">{item.Shipped}</td>

                                        <td className="px-6 py-4">{parseFloat(item.Iprice) + parseFloat(item.Extra)}</td>
                                        <td className="px-6 py-4">{item.MerchanId}</td>
                                        <td className="px-6 py-4"><button onClick={() => {viewone(item.DealId)}} className='hover:underline'>View</button></td>

                                        





                                        {/* <td className="px-6 py-4"><button className='bg-gray-700 hover:bg-gray-500 mb-1 p-1 text-white rounded-md'>View</button><button className='bg-gray-700 hover:bg-gray-500 mb-1 p-1 text-white rounded-md'>Request-TrackingId</button><button className='bg-gray-700 hover:bg-gray-500  p-1 text-white rounded-md'>Request-OTP</button></td> */}

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
        </div>

    )
}

export default MerchantAllData