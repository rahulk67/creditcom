import React, { useEffect, useState } from 'react';

import axios from 'axios';

const Wallet = () => {
    const backUrl = process.env.REACT_APP_URL;
    const [data, setData] = useState([])
    const [wallet, setWallet] = useState()
    const [profit, setProfit] = useState()
    const [tds, setTds] = useState()




    useEffect(() => {
        axios.get(`${backUrl}/user/walletdata`, { withCredentials: true })
            .then((res) => {
                console.log(res, 'wallet data')
                console.log(res.data.Payinfo, "dd")
                setData(res.data.Payinfo);
                setWallet(res.data.wallet);
                setProfit(res.data.profit);
                setTds(res.data.tds);


            })
    }, [])
    return (
        <div className="min-h-screen flex mt-2 justify-center">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full">
                {/* Wallet Heading */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">Wallet</h1>
                </div>

                {/* Your Balance Section */}
                <div className="mb-8 flex justify-between rounded-md px-4 py-2 bg-blue-900">

                    <div>
                        <h2 className="font-semibold  text-gray-100">Your Balance:</h2>
                        <p className="font-bold text-gray-100 mt-2 mb-4">₹
                            {wallet}
                        </p>
                    </div>
                    <div>



                        <h2 className="font-semibold  text-gray-100">Your Profit:{profit}</h2>


                        <h2 className=" font-semibold  text-gray-100">TDS Deducted:{tds}</h2>


                        <h2 className=" font-semibold  text-gray-100">Net Profited:{profit - tds}</h2>

                    </div>

                </div>




                <div className="">
                    <h1 className="text-xl font-medium text-gray-600">All Transactions</h1>
                </div>

                <hr className='w-full' />

                <div className="flex mt-2 space-x-2 border-b pb-2">
                    <button className="bg-blue-800 hover:bg-blue-600 text-white font-semibold py-1 px-6 rounded-lg">
                        Recieved
                    </button>
                    {/* <button className="bg-gray-100 hover:bg-blue-600 text-gray-800 font-semibold py-1 px-6 rounded-lg">
                        Cancelled
                    </button> */}
                </div>





                <div class="relative overflow-x-auto">
                    <table class="w-full text-xs text-left rtl:text-right text-gray-500 DARKKK:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 DARKK:bg-gray-700 DARKK:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">Updated At</th>
                                <th scope="col" class="px-6 py-3">Payment At</th>

                                <th scope="col" class="px-6 py-3">Product name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Tracking Id
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Receive From App
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Paid Amount
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Running Balance
                                </th>
                            </tr>
                        </thead>
                        <tbody>


                            {data.length > 0 ? (
                                data.reverse()?.map((item, index) => (
                                          <tr key={index} class={` ${item.PAmount ? "bg-green-100" : "bg-white"} border-b DARKK:bg-gray-800 DARKK:border-gray-700 border-gray-200`}>
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap DARKK:text-white">
                                        {item.PAmount ? "" : new Date(item.updatedAt).toLocaleString('en-US', {
                                                month: '2-digit',
                                                day: '2-digit',
                                                year: 'numeric',
                                                hour: '2-digit',
                                                minute: '2-digit',
                                                hour12: true, // Use 24-hour time
                                            })}
                                        </th>
                                        <td class="px-6 py-4">
                                        {item.PAmount ?  new Date(item.updatedAt).toDateString('en-US', {
                                                month: '2-digit',
                                                day: '2-digit',
                                                year: 'numeric',
                                                hour: '2-digit',
                                                minute: '2-digit',
                                                hour12: true, // Use 24-hour time
                                            }) : "" }
                                        </td>

                                        <td class="px-6 py-4">
                                            {item.MYDeal}
                                        </td>
                                        <td class="px-6 py-4 text-blue-800">
                                            {item.APPID}

                                        </td>
                                        <td class="px-6 py-4 text-green-600">
                                            {item.Amount}

                                        </td>
                                        <td class="px-6 py-4">
                                            {item.PAmount}
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
        </div>
    );
};

export default Wallet;
