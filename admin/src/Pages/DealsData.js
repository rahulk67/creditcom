import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DealsData = () => {
    const backUrl = process.env.REACT_APP_URL;
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${backUrl}/admin/allorder`)
            .then((res) => {
                console.log(res.data.products);
                

                if (res.data.products && res.data.products.length > 0) {
                    setData(res?.data?.products?.reverse());
                  } else {
                    setData([]);
                  }
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
        <div className='border'>
            <div className="relative h-[600px] overflow-y-auto overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 DARK:text-gray-400">
                    <thead className="text-xs sticky top-0 z-10 text-gray-700 uppercase bg-gray-50 DARK:bg-gray-700 DARK:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Email Id</th>
                            <th scope="col" className="px-6 py-3">Incredibles Id</th>
                            <th scope="col" className="px-6 py-3">Merchant GST</th>

                            <th scope="col" className="px-6 py-3">Product Name</th>
                            <th scope="col" className="px-6 py-3">Variant</th>

                            <th scope="col" className="px-6 py-3">Order ID</th>
                            <th scope="col" className="px-6 py-3">Tracking ID</th>
                            <th scope="col" className="px-6 py-3">Four Digit</th>
                            <th scope="col" className="px-6 py-3">OTP</th>


                            <th scope="col" className="px-6 py-3">Support ID</th>
                            <th scope="col" className="px-6 py-3">Cart Support ID</th>
                            <th scope="col" className="px-6 py-3">Quantity</th>
                            <th scope="col" className="px-6 py-3">Per Unit Price</th>
                            <th scope="col" className="px-6 py-3">Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data ?
                            <>
                                {
                                    data.length > 0 ? (
                                        data.map((item, index) => (
                                            item ? (
                                                <tr key={index} className="bg-white border-b DARK:bg-gray-800 DARK:border-gray-700">
                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap DARK:text-white">
                                                        {item.UserId}
                                                    </th>
                                                    <td className="px-6 py-4">{item.Appid}</td>
                                                    <td className="px-6 py-4">{item.mGst}</td>

                                                    <td className="px-6 py-4">{item.DealTitle}</td>
                                                    <td className="px-6 py-4">{item.Variant}</td>
                                                    <td className="px-6 py-4">{item.OrderId}</td>
                                                    <td className="px-6 py-4">{item.TrackingId}</td>
                                                    <td className="px-6 py-4">{item.FourDigit}</td>
                                                    <td className="px-6 py-4">{item.Otp}</td>

                                                    

                                                    <td className="px-6 py-4">{item.SupportId}</td>
                                                    <td className="px-6 py-4">{item.CartSupportId}</td>
                                                    <td className="px-6 py-4">1</td>
                                                    <td className="px-6 py-4">{item.Price}</td>
                                                    <td className="px-6 py-4">{item.Status}</td>
                                                </tr>) : "Not available yet"
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="10" className="text-center py-4">
                                                No deals available.
                                            </td>
                                        </tr>
                                    )
                                }
                            </>

                            : (
                                <tr>
                                    <td colSpan="10" className="text-center py-4">
                                        No deals added yet
                                    </td>
                                </tr>
                            )}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DealsData;
