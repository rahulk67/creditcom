// MerchantBulkOrder



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MerchantBulkOrder = () => {
  const backUrl = process.env.REACT_APP_URL
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);


   // State for filters
   const [filterUserId, setFilterUserId] = useState('');
   const [filterOrderId, setFilterOrderId] = useState('');
   const [filterDate, setFilterDate] = useState('');
   const [filterDealTitle, setFilterDealTitle] = useState('');




  const navigate = useNavigate();
  console.log("backUrl: " + backUrl);
  useEffect(() => {
    axios.get(`${backUrl}/merchant/alldeals`, {withCredentials: true})
      .then((res) => {
        console.log(res,"ALL morder")
        setData(res.data.DealData.reverse());
        setFilteredData(res.data.DealData.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); // Empty dependency array to prevent infinite API calls


   // Filter logic based on inputs
   useEffect(() => {
    const filtered = data.filter(item => {
      if (!item) return false;

      const matchesUserId = filterUserId === '' || item.Quantity.includes(filterUserId);
      const matchesOrderId = filterOrderId === '' || item.Iprice.includes(filterOrderId);
      const matchesDate = filterDate === '' || new Date(item.updatedAt).toLocaleDateString().includes(filterDate);
      const matchesDealTitle = filterDealTitle === '' || item.DealTitle.includes(filterDealTitle);
      
      return matchesUserId && matchesOrderId && matchesDate && matchesDealTitle;
    });
    
    setFilteredData(filtered);
  }, [filterUserId, filterOrderId, filterDate, filterDealTitle, data]);

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
      <h1 className=" block mb-2 text-2xl  font-medium text-gray-900 px-1.5">Merchant Bulk Order</h1>

      Filter:-

      <div className="flex gap-4 mb-4">
          <input
            type="text"
            value={filterUserId}
            onChange={e => setFilterUserId(e.target.value)}
            placeholder="Filter by Quantity"
            className="border p-2 rounded-lg"
          />
          <input
            type="text"
            value={filterOrderId}
            onChange={e => setFilterOrderId(e.target.value)}
            placeholder="Filter by Price"
            className="border p-2 rounded-lg"
          />
          <input
            type="text"
            value={filterDate}
            onChange={e => setFilterDate(e.target.value)}
            placeholder="Filter Last Date (DD/MM/YYYY)"
            className="border p-2 rounded-lg"
          />
          <input
            type="text"
            value={filterDealTitle}
            onChange={e => setFilterDealTitle(e.target.value)}
            placeholder="Filter by Product Name "
            className="border p-2 rounded-lg"
          />
        </div>

   
      <div className="relative border  overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 DARK:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 DARK:bg-gray-700 DARK:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Product Name</th>
              <th scope="col" className="px-6 py-3">Quantity</th>
              <th scope="col" className="px-6 py-3">Per Unit Price</th>
              <th scope="col" className="px-6 py-3">Last Date</th>
              <th scope="col" className="px-6 py-3">Ordered</th>
              <th scope="col" className="px-6 py-3">Shipped</th>
              <th scope="col" className="px-6 py-3">Delivered</th>
              <th scope="col" className="px-6 py-3">Payment Released</th>
              <th scope="col" className="px-6 py-3">Cancelled</th>
              <th scope="col" className="px-6 py-3">Admin Deal</th>
            </tr>
          </thead>

          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                item ? (
                <tr key={index} className="bg-white border-b DARK:bg-gray-800 DARK:border-gray-700">

                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap DARK:text-white">
                    {item.DealTitle}
                  </th>

                  <td className="px-6 py-4">{item.Quantity}</td>
                  <td className="px-6 py-4">{item.Iprice}</td>
                  <td className="px-6 py-4">{new Date(item.updatedAt).toLocaleDateString()}</td>
                  <td className="px-6 py-4">{item.Fullfiled}</td>
                  <td className="px-6 py-4">{item.Shipped}</td>
                  <td className="px-6 py-4">{item.Delivered}</td>
                  <td className="px-6 py-4">Rs.0</td>
                  <td className="px-6 py-4">0</td>
                  <td className="px-6 py-4"></td>
                  
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
  );
};

export default MerchantBulkOrder;
