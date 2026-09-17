// MerchantBulkOrder

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";

const MerchantOrder = () => {
  const backUrl = process.env.REACT_APP_URL;
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentEmail, setCurrentEmail] = useState(null);
  const [addressForm, setAddressForm] = useState({
    AName: "",
    AL1: "",
    AL2: "",
    Pincode: "",
  });
  const navigate = useNavigate();

  const [gstValue, setGstValue] = useState();

  useEffect(() => {
    axios
      .get(`${backUrl}/admin/allmerchant`, { withCredentials: true })
      .then((res) => {
        console.log(res, "ALL merch");
        setData(res.data.reverse());
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

  const viewMdata = (id) => {
    // axios.post(`${backUrl}/`, Email, {withCredentials: true})
    // .then((res) => {
    //   console.log(res, "email sentt")
    // })
    navigate(`/merchant-all-data/${id}`);
  };

  const downloadCSV = () => {
    const headers = ["Name", "Email", "Password"];

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
      escapeCSVValue(item.Name),
      escapeCSVValue(item.Email),
      escapeCSVValue(item.Password),
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

  const [newAddresses, setNewAddresses] = useState({});
  const [updatedData, setUpdatedData] = useState(data);

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddressForm((prev) => ({ ...prev, [name]: value }));
  };

  const openModal = (email) => {
    setCurrentEmail(email);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setAddressForm({ AName: "", AL1: "", AL2: "", Pincode: "" });
  };

  const submitAddress = () => {
    if (
      !addressForm.AName ||
      !addressForm.AL1 ||
      !addressForm.AL2 ||
      !addressForm.Pincode
    ) {
      alert("All fields are required.");
      return;
    }
    axios
      .post(
        `${backUrl}/admin/put-address`,
        {
          email: currentEmail,
          address: addressForm,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res, "address updated");
        if (res.data.message === "Address added successfully") {
          alert("Address added successfully!");
          window.location.reload();
        } else {
          alert("Something went wrong. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error adding address:", error);
        alert("Failed to add address. Please try again.");
      });
    closeModal();
  };

  // const putAddress = (email) => {
  //   if (!newAddresses[email]) {
  //     alert("Please enter an address.");
  //     return;
  //   }

  //   axios.post(`${backUrl}/admin/put-address`, {
  //     email: email,
  //     address: newAddresses[email],
  //   }, {
  //     headers: {
  //       "Content-Type": "application/json",
  //     }
  //   }).then((res) => {
  //     console.log(res, "address updated")
  //     // Check if the response message matches
  //     if (res.data.message === "Address added successfully") {
  //       alert("Address added successfully!");
  //       window.location.reload(); // Reload the page after success
  //     } else {
  //       alert("Something went wrong. Please try again.");
  //     }

  //   }).catch((error) => {
  //     console.error("Error adding address:", error);
  //     alert("Failed to add address. Please try again.");
  //   });

  //   const newData = updatedData.map((item) => {
  //     if (item.Email === email) {
  //       return {
  //         ...item,
  //         addresses: [...(item.addresses || []), newAddresses[email]],
  //       };
  //     }
  //     return item;
  //   });

  //   setUpdatedData(newData);
  //   setNewAddresses((prev) => ({ ...prev, [email]: "" }));

  //   // Here, make an API call to store the new address in the database
  //   console.log(`Adding address for ${email}:`, newAddresses[email]);
  // };

  const deleteAddress = async (email, address) => {
    try {
      const response = await fetch(`${backUrl}/admin/delete-address`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, address }),
      });

      if (!response.ok) throw new Error("Failed to delete address");

      const result = await response.json();

      // Update local state to reflect the deleted address
      const newData = updatedData.map((item) => {
        if (item.Email === email) {
          return {
            ...item,
            AddressList: item.AddressList.filter((addr) => addr !== address),
          };
        }
        return item;
      });

      setUpdatedData(newData);
      console.log(result.message);
      if (result.message === "Address deleted successfully") {
        alert("Address deleted successfully!");
        window.location.reload();
      }
    } catch (error) {
      console.error("Error deleting address:", error);
    }
  };

  const addGst = async (gstValue, email) => {
    console.log(gstValue, email, "Sending GST and Email");

    axios.post(`${backUrl}/admin/save-gst`, {email,gstValue}).then((res)=>{
      console.log(res,"check")
      alert(res.data.msg)
    })
  };

  return (
    <div className="">
      <button
        onClick={() => downloadCSV()}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-4 DARK:bg-blue-600 DARK:hover:bg-blue-700 focus:outline-none DARK:focus:ring-blue-800"
      >
        Download CSV
      </button>
      <h1 className=" block mb-2 text-2xl  font-medium text-gray-900 px-1.5">
        Merchant Details
      </h1>

      <div className="relative border  overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 DARK:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 DARK:bg-gray-700 DARK:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>

              <th scope="col" className="px-6 py-3">
                Password
              </th>
              <th scope="col" className="px-6 py-3">
                View
              </th>
              <th scope="col" className="px-6 py-3">
                GST
              </th>

              <th scope="col" className="px-6 py-3">
                Add Address
              </th>
            </tr>
          </thead>

          <tbody>
            {data.length > 0 ? (
              data.map((item, index) => (
                <tr
                  key={index}
                  className="bg-white border-b DARK:bg-gray-800 DARK:border-gray-700"
                >
                  <td className="px-6 py-4">{item.Name}</td>

                  <Link
                    to={`/merchant-ledger/${item.Email}`}
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap DARK:text-white"
                  >
                    {item.Email}
                  </Link>
                  <td className="px-6 py-4">{item.TotalWallet}</td>

                  <td className="px-6 py-4">{item.Password}</td>

                  <td className="px-6 py-4">
                    <button
                      onClick={() => {
                        viewMdata(item._id);
                      }}
                      className="hover:underline"
                    >
                      View Details
                    </button>
                  </td>

                  <td className="px-6 py-4">
                  {item.GST}

                    <div className="flex items-center space-x-2">
                      <input
                        name={item._id}
                        placeholder="Edit GST"
                        value={gstValue}
                        onChange={(e) => setGstValue(e.target.value)}
                        className="border border-gray-300 rounded px-2 py-1 w-32"
                      />
                      <button
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                        onClick={() => addGst(gstValue, item.Email)}
                      >
                        Update GST
                      </button>
                    </div>
                   
                  </td>



                  <td className="px-6 py-4">
                    <button
                      onClick={() => openModal(item.Email)}
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                      Add Address
                    </button>
                  </td>

                  <td className="px-6 py-4">
                    {item.AddressList && item.AddressList.length > 0 ? (
                      item.AddressList.map((addr, addrIndex) => (
                        <div key={addrIndex}>
                          {`${addr.AName},${addr.AL1},${addr.AL2},${addr.Pincode}`}
                          <button
                            onClick={() => deleteAddress(item.Email, addr)}
                            className="ml-2 text-red-500 hover:text-red-700"
                          >
                            ❌
                          </button>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-500 text-sm">
                        No addresses added
                      </p>
                    )}
                  </td>

                  {/* Display List of Addresses */}
                  {/* <td className="px-6 py-4">
                    {item.AddressList && item.AddressList.length > 0 ? (
                      <ul className="list-disc pl-4">
                        {item.AddressList.map((addr, addrIndex) => (
                          <li key={addrIndex} className="text-sm">{addr}

                            <button
                              onClick={() => deleteAddress(item.Email, addr)}
                              className="ml-2 text-red-500 hover:text-red-700"
                            >
                              ❌
                            </button>



                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-500 text-sm">No addresses added</p>
                    )}
                  </td> */}
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

        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-md">
              <h2 className="text-xl mb-4">Add Address for {currentEmail}</h2>
              <input
                name="AName"
                placeholder="Address Name"
                value={addressForm.AName}
                onChange={handleAddressChange}
                className="border p-2 mb-2 w-full"
              />
              <input
                name="AL1"
                placeholder="Address Line 1"
                value={addressForm.AL1}
                onChange={handleAddressChange}
                className="border p-2 mb-2 w-full"
              />
              <input
                name="AL2"
                placeholder="Address Line 2"
                value={addressForm.AL2}
                onChange={handleAddressChange}
                className="border p-2 mb-2 w-full"
              />
              <input
                name="Pincode"
                placeholder="Pincode"
                value={addressForm.Pincode}
                onChange={handleAddressChange}
                className="border p-2 mb-2 w-full"
              />
              <div className="flex justify-end">
                <button
                  onClick={closeModal}
                  className="bg-red-500 text-white px-4 py-2 mr-2 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={submitAddress}
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MerchantOrder;
