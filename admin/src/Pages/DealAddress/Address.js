// DeliveryConfirm

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Address = () => {
    const backUrl = process.env.REACT_APP_URL;
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${backUrl}/merchant/allorder` , {withCredentials : true})
            .then((res) => {
                console.log(res.data.products);
                setData(res.data.products);
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
            <h1 className='font-medium pb-6 text-3xl'>Addresses</h1>


            <div className='border'>
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 DARK:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 DARK:bg-gray-700 DARK:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">ID</th>
                                <th scope="col" className="px-6 py-3">First Name</th>
                                <th scope="col" className="px-6 py-3">Last Name</th>
                                <th scope="col" className="px-6 py-3">City</th>
                                <th scope="col" className="px-6 py-3">PinCode</th>
                                <th scope="col" className="px-6 py-3">State</th>

                                <th scope="col" className="px-6 py-3">Address Line 1</th>
                                <th scope="col" className="px-6 py-3">Addres Line 2</th>
                                <th scope="col" className="px-6 py-3">LandMark</th>
                                <th scope="col" className="px-6 py-3">Created at</th>
                                <th scope="col" className="px-6 py-3"> Updated at</th>
                                <th scope="col" className="px-6 py-3">Last Ordered on</th>
                                <th scope="col" className="px-6 py-3">Phone Number</th>
                                <th scope="col" className="px-6 py-3">View</th>


                            </tr>
                        </thead>

                        <tbody>
                            {data.length > 0 ? (
                                data.map((item, index) => (
                                    <tr key={index} className="bg-white border-b DARK:bg-gray-800 DARK:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap DARK:text-white">
                                            ID
                                        </th>

                                        <td className="px-6 py-4">First Name</td>
                                        <td className="px-6 py-4">Last Name</td>
                                        <td className="px-6 py-4">City</td>
                                        <td className="px-6 py-4">PinCode</td>
                                        <td className="px-6 py-4">State</td>
                                        <td className="px-6 py-4">Address Line 1</td>
                                        <td className="px-6 py-4">Addres Line 2</td>
                                        <td className="px-6 py-4">empty</td>
                                        <td className="px-6 py-4">Created at</td>
                                        <td className="px-6 py-4"> Updated at</td>
                                        <td className="px-6 py-4">empty</td>
                                        <td className="px-6 py-4">empty</td>

                                        <td className="px-6 py-4"><button className='bg-gray-700 hover:bg-gray-500  p-1 text-white rounded-sm'>View</button></td>

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
