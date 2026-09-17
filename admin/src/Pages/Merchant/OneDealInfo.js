import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const OneDealInfo = () => {
    const [data, setData] = useState([]);


    const backUrl = process.env.REACT_APP_URL
    const navigate = useNavigate()

    const id = useParams().id;
    console.log(id, "deal id gets")

    useEffect(() => {
        axios.post(`${backUrl}/admin/Blukdeal/view`, { id }, { withCredentials: true })
            .then((res) => {
                console.log(res, "dealid sentt")
                setData(res.data.DealData);
            })
    }, [])

    // const viewone = () =>{
    //         navigate('/viewdeal')
    // }


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
            <h1 className='font-medium pb-6 text-3xl'>Particular Deal Info</h1>


            <div className='border'>
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 DARK:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 DARK:bg-gray-700 DARK:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">User Name</th>

                                <th scope="col" className="px-6 py-3">Id</th>
                                <th scope="col" className="px-6 py-3">Store</th>
                                <th scope="col" className="px-6 py-3">Title</th>

                                <th scope="col" className="px-6 py-3">Order Id</th>
                                <th scope="col" className="px-6 py-3">TrackingId</th>
                                <th scope="col" className="px-6 py-3">Otp</th>
                                <th scope="col" className="px-6 py-3">Four Digit Support</th>
                                <th scope="col" className="px-6 py-3">Alert</th>
                                <th scope="col" className="px-6 py-3">Delivered Status</th>
                                <th scope="col" className="px-6 py-3">Received</th>

                                <th scope="col" className="px-6 py-3">Dispute</th>
                                <th scope="col" className="px-6 py-3">Status</th>

                                <th scope="col" className="px-6 py-3">Invoice</th>
                                <th scope="col" className="px-6 py-3">Payment Status</th>











                            </tr>
                        </thead>

                        <tbody>
                            {data.length > 0 ? (
                                data.map((item, index) => (
                                    <tr key={index} className="bg-white border-b DARK:bg-gray-800 DARK:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap DARK:text-white">
                                            {item.UserId}
                                        </th>
                                        <td className="px-6 py-4">{item.Appid}</td>
                                        <td className="px-6 py-4"> {item.Store}</td>
                                        <td className="px-6 py-4"> {item.DealTitle}</td>
                                        <td className="px-6 py-4"> {item.OrderId}</td>
                                        <td className="px-6 py-4"> {item.TrackingId}</td>
                                        <td className="px-6 py-4"> {item.Otp}</td>
                                        <td className="px-6 py-4"> {item.FourDigit}</td>
                                        <td className="px-6 py-4">{item.Alert}</td>

                                       
                                        <td className="px-6 py-4">{item.status}</td>
                                        <td className="px-6 py-4">{item.Receive ? "Received " : "Not Received"}</td>

                                        <td className="px-6 py-4">{item.Dispute ? "No Dispute" : "Disputed"}</td>
                                        <td className="px-6 py-4">{item.Status}</td>

                                        <td className="px-6 py-4">
                                            <a href={`${backUrl}/${item.Invoice}`} target="_blank" className='hover:underline' rel="noopener noreferrer">
                                                Invoice
                                            </a>
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.PaymentStatus ? "Paid" : "Unpaid"}
                                        </td>

                                       




                                        {/* <td className="px-6 py-4"><button onClick={() => {viewone(item.DealId)}} className='hover:underline'>View</button></td> */}







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

export default OneDealInfo