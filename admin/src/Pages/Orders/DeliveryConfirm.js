// DeliveryConfirm

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DeliveryConfirm = () => {
  const backUrl = process.env.REACT_APP_URL;
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate();

  const [deldata, setDeldata] = useState({
    Remarks: '',
    Action: '',
  });

   // State for filters
   const [filterUserId, setFilterUserId] = useState('');
   const [filterOrderId, setFilterOrderId] = useState('');
   const [filterDate, setFilterDate] = useState('');
   const [filterDealTitle, setFilterDealTitle] = useState('');








  useEffect(() => {
    axios.get(`${backUrl}/merchant/allorderdeals`, { withCredentials: true })
      .then((res) => {
        console.log(res);
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

      const matchesUserId = filterUserId === '' || item.UserId.includes(filterUserId);
      const matchesOrderId = filterOrderId === '' || item.OrderId.includes(filterOrderId);
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


  const handleChange = (e) => {
    const { name, value, } = e.target;
    setDeldata({
      ...deldata,
      [name]: value,
    });
  };

  const confirmData = (ev) => {
    ev.preventDefault();
    console.log(deldata, "confirmDatadel");
  }


  const downloadCSV = () => {
    const headers = ['UserId', 'Appid', 'updatedAt', 'Iprice', 'OrderId', 'TrackingId', 'Otp', 'DealTitle', 'Receive', 'Dispute'];

    const escapeCSVValue = (value) => {
      if (typeof value === 'string') {
        // Escape double quotes by doubling them, and wrap values containing commas in double quotes
        return `"${value.replace(/"/g, '""')}"`;
      }
      return value ?? ''; // Return value or empty string if it's null/undefined
    };

    // Generate CSV content

    const validData = data.filter(item => item !== null && item !== undefined);

    // Generate CSV content using the filtered validData
    const rows = validData.map(item => [
      escapeCSVValue(item.UserId),
      escapeCSVValue(item.Appid),
      escapeCSVValue(new Date(item.updatedAt).toLocaleDateString()),
      escapeCSVValue(item.Iprice),
      escapeCSVValue(item.OrderId),
      escapeCSVValue(item.TrackingId),
      escapeCSVValue(item.Otp),
      escapeCSVValue(item.DealTitle),
      escapeCSVValue(item.Receive),
      escapeCSVValue(item.Dispute)
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


  return (
    <div>
      <h1 className='font-medium pb-6 text-3xl'>Delivery Confirmation</h1>

      <div className=''>
        Filter:-
        

        <div className="flex gap-4 mb-4">
          <input
            type="text"
            value={filterUserId}
            onChange={e => setFilterUserId(e.target.value)}
            placeholder="Filter by Email"
            className="border p-2 rounded-lg"
          />
          <input
            type="text"
            value={filterOrderId}
            onChange={e => setFilterOrderId(e.target.value)}
            placeholder="Filter by OrderId"
            className="border p-2 rounded-lg"
          />
          <input
            type="text"
            value={filterDate}
            onChange={e => setFilterDate(e.target.value)}
            placeholder="Filter by Date (DD/MM/YYYY)"
            className="border p-2 rounded-lg"
          />
          <input
            type="text"
            value={filterDealTitle}
            onChange={e => setFilterDealTitle(e.target.value)}
            placeholder="Filter by Product Name"
            className="border p-2 rounded-lg"
          />
        </div>
      </div>

      <hr className='my-2' />

      <button onClick={() => downloadCSV()} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-4 '>Download CSV</button>


      <hr className='my-2' />


      <div className='border'>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3">Email Id</th>
                <th scope="col" className="px-6 py-3">Incredibles Id</th>
                <th scope="col" className="px-6 py-3">Updated At</th>
                <th scope="col" className="px-6 py-3">Name</th>
                <th scope="col" className="px-6 py-3">Buyer Price</th>

                <th scope="col" className="px-6 py-3">Invoice</th>
                <th scope="col" className="px-6 py-3">Order ID</th>
                <th scope="col" className="px-6 py-3">Tracking ID</th>
                <th scope="col" className="px-6 py-3">Delivery Support</th>
                <th scope="col" className="px-6 py-3">Product</th>
                <th scope="col" className="px-6 py-3">Select</th>
                <th scope="col" className="px-6 py-3">Remarks</th>
                <th scope="col" className="px-6 py-3">Alert</th>
                <th scope="col" className="px-6 py-3">Recieved</th>
                <th scope="col" className="px-6 py-3">Not Recieved</th>
                <th scope="col" className="px-6 py-3">Dispute</th>



              </tr>
            </thead>

            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                  item ? (
                    <tr key={index} className="bg-white border-b ">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                        {item.UserId}
                      </th>
                      <td className="px-6 py-4">{item.Appid}</td>
                      <td className="px-6 py-4">{new Date(item.updatedAt).toLocaleDateString()}</td>
                      <td className="px-6 py-4">username</td>


                      <td className="px-6 py-4">{item.Iprice}</td>
                      <td className="px-6 py-4">in</td>

                      <td className="px-6 py-4">{item.OrderId}</td>
                      <td className="px-6 py-4">{item.TrackingId}</td>
                      <td className="px-6 py-4">{item.Otp}</td>
                      <td className="px-6 py-4">{item.DealTitle}</td>

                      <td className="px-6 py-4">  <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" /></td>


                      <td className="px-6 py-4">
                        <textarea
                          id="message"
                          rows="2"
                          name="Remarks"
                          value={deldata.Remarks.target}
                          onChange={handleChange}
                          className="block p-2.5 w-20 h-6 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                          placeholder=""
                        ></textarea>
                      </td>


                      <td className="px-6 py-4">
                        <select
                          id="countries"
                          name="Action"
                          value={deldata.Action.target}
                          onChange={handleChange}
                          required
                          className="bg-gray-50 border font-medium border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 mt-0"
                        >
                          <option value="">Select</option>
                          <option value={deldata.Action.target}>Need a screenshot</option>
                          <option value={deldata.Action.target}>Tracking id wrong</option>
                          <option value={deldata.Action.target}>Wrong Variant</option>
                          <option value={deldata.Action.target}>Invoice not uploaded</option>
                          <option value={deldata.Action.target}>GST not uploaded</option>
                          <option value={deldata.Action.target}>Payment Delay</option>
                        </select>

                        <button
                          onClick={(ev) => confirmData(ev)}
                          className="bg-gray-700 hover:bg-gray-500 px-1 text-white rounded-md mt-2"
                        >
                          Submit
                        </button>
                      </td>




                      <td className="px-6 py-4"><button className='bg-gray-700 hover:bg-gray-500  p-1 text-white rounded-md'>Recieved</button></td>
                      <td className="px-6 py-4"><button className='bg-gray-700 hover:bg-gray-500 p-1 text-white rounded-md'>Not Recieved</button></td>
                      <td className="px-6 py-4"><button className='bg-gray-700 hover:bg-gray-500  p-1 text-white rounded-md'>Dispute</button></td>

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

  );
};

export default DeliveryConfirm;
