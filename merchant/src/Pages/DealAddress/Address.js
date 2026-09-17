// DeliveryConfirm

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Address = () => {
    const backUrl = process.env.REACT_APP_URL;
    const [data, setData] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        const email = localStorage.getItem("Email"); // Get email from localStorage

        if (!email) {
            console.log("No merchant email found in localStorage");
            return;
        }
        axios.get(`${backUrl}/merchant/deals`, { params: { email }, withCredentials: true })
            .then((res) => {
                console.log(res, "old merchant");
                console.log(res.data.Deal);
                setData(res.data.Deal);
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
            <h1 className='font-medium pb-6 text-3xl'>Addresses - <span className='text-sm'> {localStorage.getItem('Email')}</span></h1>


            <div className='border'>
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 DARK:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 DARK:bg-gray-700 DARK:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">ID</th>
                                <th scope="col" className="px-6 py-3">Name</th>
                                <th scope="col" className="px-6 py-3">Address Line 1</th>
                                <th scope="col" className="px-6 py-3">Address Line 2</th>
                                <th scope="col" className="px-6 py-3">PinCode</th>


                            </tr>
                        </thead>

                        <tbody>
                            {data.length > 0 ? (
                                data[0].AddressList.map((item, index) => (
                                    <tr key={index} className="bg-white border-b DARK:bg-gray-800 DARK:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap DARK:text-white">
                                            {item._id}
                                        </th>

                                        <td className="px-6 py-4">{item.AName}</td>
                                        <td className="px-6 py-4">{item.AL1}</td>
                                        <td className="px-6 py-4">{item.AL2}</td>
                                        <td className="px-6 py-4">{item.Pincode}</td>



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

export default Address;
