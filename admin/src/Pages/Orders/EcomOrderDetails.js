// DeliveryConfirm

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EcomOrderDetails = () => {
    const backUrl = process.env.REACT_APP_URL;
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${backUrl}/merchant/alldeals` , {withCredentials : true})
            .then((res) => {
                console.log(res.data,"hgjk");
                setData(res.data.DealData);
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
        <div>
            <h1 className='font-medium pb-6 text-3xl'>E commerce Order Details</h1>


            <div className='border'>
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 DARK:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 DARK:bg-gray-700 DARK:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">Id</th>
                                <th scope="col" className="px-6 py-3">Store</th>
                                <th scope="col" className="px-6 py-3">Order Number</th>
                                <th scope="col" className="px-6 py-3">Tracking Number</th>

                                <th scope="col" className="px-6 py-3">OTP</th>
                                <th scope="col" className="px-6 py-3">Delivery Support Pin</th>

                                <th scope="col" className="px-6 py-3">Variant</th>
                                <th scope="col" className="px-6 py-3">User Merchant</th>
                                <th scope="col" className="px-6 py-3">Price</th>

                                <th scope="col" className="px-6 py-3">Address</th>
                                <th scope="col" className="px-6 py-3">Gift Card</th>
                                <th scope="col" className="px-6 py-3">Invoice Warranty</th>
                                {/* <th scope="col" className="px-6 py-3">Action</th> */}


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
                                        <td className="px-6 py-4">{item.OrderId}</td>
                                        <td className="px-6 py-4">{item.TrackingId}</td>
                                        <td className="px-6 py-4">{item.Otp}</td>
                                        <td className="px-6 py-4">{item.FourDigit}</td>

                                        <td className="px-6 py-4">{item.Variant}</td>
                                        <td className="px-6 py-4">{item.MerchanId}</td>
                                        <td className="px-6 py-4">{item.Iprice}</td>

                                        <td className="px-6 py-4">Gujar ki thadi</td>
                                        <td className="px-6 py-4">None</td>
                                        <td className="px-6 py-4">None</td>





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

    );
};

export default EcomOrderDetails;
