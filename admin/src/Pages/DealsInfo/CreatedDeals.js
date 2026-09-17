import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProductData = () => {
    const backUrl = process.env.REACT_APP_URL;
    const navigate = useNavigate();

    const [data, setData] = useState([]);

    const editProduct = (e, id) => {
        e.preventDefault();
        navigate(`/edit/deal/${id}`);
    };

    const downloadCSV = () => {
        const headers = ['DealTitle','Date', 'Offer', 'Price', 'Iprice', 'Store', 'Variant', 'CardType', 'OfferAmmount', 'DealNumber', 'offerCash', 'Status'];

        const escapeCSVValue = (value) => {
            if (typeof value === 'string') {
                // Escape double quotes by doubling them, and wrap values containing commas in double quotes
                return `"${value.replace(/"/g, '""')}"`;
            }
            return value ?? ''; // Return value or empty string if it's null/undefined
        };

        // Generate CSV content

        const validData = data?.filter(item => item !== null && item !== undefined);

        // Generate CSV content using the filtered validData
        const rows = validData.map(item => [
            escapeCSVValue(item.DealTitle),
            escapeCSVValue(new Date(item.createdAt).toLocaleDateString()),
            escapeCSVValue(item.Offer),
            escapeCSVValue(item.Price),
            escapeCSVValue(item.Iprice),
            escapeCSVValue(item.Store),
            escapeCSVValue(item.Variant),
            escapeCSVValue(item.CardType),
            escapeCSVValue(item.OfferAmmount),
            escapeCSVValue(item.DealNumber),
            escapeCSVValue(item.offerCash),
            escapeCSVValue(item.Status)

        ]);

        const csvContent = [
            headers.join(','), // Join headers with commas
            ...rows.map(e => e.join(',')) // Join each row with commas
        ].join('\n'); // Join rows with newlines

        // Create and trigger the CSV download
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', 'table_data.csv');
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    useEffect(() => {
        axios.get(`${backUrl}/admin/alldeals`)
            .then((res) => {
                if (res.data.msg === "0 Deal Closes !") {
                    alert("0 deals");
                } else {
                    console.log(res);
                    setData(Array.isArray(res.data) && res.data.length > 0 ? res.data.reverse() : []);
                }
            })
            .catch((err) => {
                console.error(err);
            });
    }, [backUrl]); // Added dependency array to avoid repeated API calls


    useEffect(() => {
        const Email = localStorage.getItem('Email');  // get name of cookies
        console.log(Email, "email recieved from localstorage");
        if (Email == null) {
            console.log("sfj;osadjf")
            navigate('/')
        }
    }, [])





    return (
        <div className="">
            <div className='font-sans font medium text-xl mb-2'>Created Deals
                <button onClick={() => downloadCSV()} className='text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm ml-6 px-5 py-2 me-2 '>Download CSV</button>

            </div>
            <div className="relative border h-[600px] overflow-y-auto overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 ">
                    <thead className="text-xs sticky top-0 z-10 text-gray-700 uppercase bg-gray-50  ">
                        <tr>
                            <th scope="col" className="px-6 py-3">Deal Title</th>
                            <th scope="col" className="px-6 py-3">Dated</th>

                            <th scope="col" className="px-6 py-3">Price</th>
                            <th scope="col" className="px-6 py-3">Offer</th>
                            <th scope="col" className="px-6 py-3">Store</th>
                            <th scope="col" className="px-6 py-3">Variant</th>
                            <th scope="col" className="px-6 py-3">Card Type</th>
                            <th scope="col" className="px-6 py-3">Offer Amount</th>
                            <th scope="col" className="px-6 py-3">Deal Number</th>
                            <th scope="col" className="px-6 py-3">Offer Cash</th>
                            <th scope="col" className="px-6 py-3">Status</th>
                            <th scope="col" className="px-6 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item._id} className="bg-white border-b DARK:bg-gray-800 DARK:border-gray-700">
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap DARK:text-white">{item.DealTitle}</td>
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap DARK:text-white">{new  Date(item.createdAt).toLocaleDateString()}</td>

                                <td className="px-6 py-4">{item.Price}</td>
                                <td className="px-6 py-4">{item.Offer}</td>
                                <td className="px-6 py-4">{item.Store}</td>
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap DARK:text-white">{item.Variant}</td>
                                <td className="px-6 py-4">{item.CardType}</td>
                                <td className="px-6 py-4">{item.OfferAmmount}</td>
                                <td className="px-6 py-4">{item.DealNumber}</td>
                                <td className="px-6 py-4">{item.Offer}</td>
                                <td className="px-6 py-4">{item.Status}</td>
                                <td className="px-6 py-4">
                                    <button onClick={(e) => editProduct(e, item._id)} className=" hover:underline">
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductData;
