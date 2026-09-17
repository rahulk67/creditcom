// DeliveryConfirm

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EcomOrderDetails = () => {
  const backUrl = process.env.REACT_APP_URL;
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${backUrl}/merchant/alldeals`, { withCredentials: true })
      .then((res) => {
        console.log(res.data, "hgjk");
        setData(res.data.DealData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); // Empty dependency array to prevent infinite API calls

  useEffect(() => {
    const Email = localStorage.getItem("Email"); // get name of cookies
    console.log(Email, "email recieved from localstorage");
    if (Email == null) {
      console.log("sfj;osadjf");
      navigate("/");
    }
  }, []);

  const downloadCSV = () => {
    const headers = [
      "DealId",
      "Store",
      "Date",
      "OrderId",
      "TrackingId",
      "Otp",
      "FourDigit",
      "Variant",
      "MerchanId",
      "Iprice",
    ];

    const escapeCSVValue = (value) => {
      if (typeof value === "string") {
        // Escape double quotes by doubling them, and wrap values containing commas in double quotes
        return `"${value.replace(/"/g, '""')}"`;
      }
      return value ?? ""; // Return value or empty string if it's null/undefined
    };

    // Generate CSV content

    const validData = data.filter(
      (item) => item !== null && item !== undefined
    );

    // Generate CSV content using the filtered validData
    const rows = validData.map((item) => [
      escapeCSVValue(item.DealId),
      escapeCSVValue(item.Store),
        escapeCSVValue(new Date(item.updatedAt).toLocaleDateString()),
      escapeCSVValue(item.OrderId),
      escapeCSVValue(item.TrackingId),
      escapeCSVValue(item.Otp),
      escapeCSVValue(item.FourDigit),
      escapeCSVValue(item.Variant),
      escapeCSVValue(item.MerchanId),
      escapeCSVValue(item.Iprice),
    ]);

    const csvContent = [
      headers.join(","), // Join headers with commas
      ...rows.map((e) => e.join(",")), // Join each row with commas
    ].join("\n"); // Join rows with newlines

    // Create and trigger the CSV download
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "table_data.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <h1 className="font-medium pb-6 text-3xl">E commerce Order Details</h1>

      <button
        onClick={() => downloadCSV()}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-4 DARK:bg-blue-600 DARK:hover:bg-blue-700 focus:outline-none DARK:focus:ring-blue-800"
      >
        Download CSV
      </button>

      <div className="border">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 DARK:text-gray-400">
            <thead className="text-xs  text-gray-700 uppercase bg-gray-50 DARK:bg-gray-700 DARK:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Id
                </th>
                <th scope="col" className="px-6 py-3">
                  UserId
                </th>
                
                <th scope="col" className="px-6 py-3">
                  Store
                </th>
                <th scope="col" className="px-6 py-3">
                  Order Number
                </th>
                <th scope="col" className="px-6 py-3">
                  Tracking Number
                </th>

                <th scope="col" className="px-6 py-3">
                  OTP
                </th>
                <th scope="col" className="px-6 py-3 ">
                  Delivery Support Pin(FourDigit)
                </th>

                <th scope="col" className="px-6 py-3">
                  Variant
                </th>
                <th scope="col" className="px-6 py-3">
                  User Merchant
                </th>
                <th scope="col" className="px-6 py-3">
                 Per cost to Merchant
                </th>

                <th scope="col" className="px-6 py-3">
                  Screenshot{" "}
                </th>

                <th scope="col" className="px-6 py-3">
                  Invoice{" "}
                </th>
              </tr>
            </thead>

            <tbody>
              {data.length > 0 ? (
                data?.reverse()?.map((item, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b DARK:bg-gray-800 DARK:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap DARK:text-white"
                    >
                      {item.DealId}
                    </th>
                    <td className="px-6 py-4">{item.UserId}</td>

                    <td className="px-6 py-4">{item.Store}</td>
                    <td className="px-6 py-4">{item.OrderId}</td>
                    <td className="px-6 py-4">{item.TrackingId}</td>
                    <td className="px-6 py-4">{item.Otp}</td>
                    <td className="px-6 py-4">{item.FourDigit}</td>

                    <td className="px-6 py-4">{item.Variant}</td>
                    <td className="px-6 py-4">{item.MerchanId}</td>

                    <td className="px-6 py-4">
                      {(Number(item.Price) -   Number(item.OfferAmmount)) + (Number(item.offerCash) + Number(item.Iprice))}
                    </td>

                    {/* <td className="px-6 py-4">
                      {(
                        parseFloat(item.Price) -
                        parseFloat(item.OfferAmmount) +
                        parseFloat(item.offerCash) +
                        parseFloat(item.Iprice)
                      ).toFixed(2)}
                    </td> */}


                    
<td className="px-6 py-4">
                      <a
                        href={`${backUrl}${item.Screenshot}`}
                        target="_blank"
                        className="hover:underline"
                        rel="noopener noreferrer"
                      >
                        Screenshot
                      </a>
                    </td>

                    <td className="px-6 py-4">
                      <a
                        href={`${backUrl}${item.Invoice}`}
                        target="_blank"
                        className="hover:underline"
                        rel="noopener noreferrer"
                      >
                        Invoice
                      </a>
                    </td>

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
