import React, { useState } from 'react';
import axios  from 'axios';
import { useNavigate } from 'react-router-dom'


const AddAccount = () => {

  const backUrl = process.env.REACT_APP_URL;
  console.log(backUrl);
  const navigate = useNavigate();

  //for accounts details
  //states for show ac model or not
  const [acModal, setAcModal] = useState(true);


  //on click optional hai buttn se open


  //save krte hi onsubmit h ye
  const closeAcModal = (e) => {
    e.preventDefault();
    setAcModal(false);

    // Trim all data fields before sending
    const trimmedData = {
      acNumber: acData.acNumber.trim(),
      acHolder: acData.acHolder.trim().toUpperCase(),
      bankName: acData.bankName.trim(),
      IfceCode: acData.IfceCode.trim().toUpperCase(),
    };

    console.log('Trimmed Data:', trimmedData);

    axios.post(`${backUrl}/user/Ac/kyc`, trimmedData, { withCredentials: true }).then((response)=>{


      if (response.data.msg === "Valid Bank Details"){
        setAcModal(false);
        window.location.reload();
      }
      else{
        alert(response.data.msg);
      }

      console.log(response);
    })
    
  };


  const [acData, setAcData] = useState({
    acNumber: '',
    acHolder: '',
    bankName: '', 
    IfceCode: '',


  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAcData({
      ...acData,
      [name]: value,
    });
  };

  return (
    
    <div>
      {/* Modal toggle button */}
     

      {/* Main modal */}

        <div
          id="crud-modal"
          className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
          aria-hidden="true"
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            {/* Modal content */}
            <div className="relative bg-white  rounded-lg shadow DARK:bg-gray-700">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t DARK:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 DARK:text-white">
                  Add Account Details
                </h3>
                
              </div>

              {/* Modal body */}
              <form onSubmit={(e)=>closeAcModal(e)} className="p-4 md:p-5">
                <div className="grid gap-4 mb-4 grid-cols-2">
                  <div className="col-span-2">
                    <label
                      htmlFor="ac"
                      className="block mb-2 text-sm font-medium text-gray-900 DARK:text-white"
                    >
                      Account Number
                    </label>
                    <input
                      type="text"
                      name="acNumber"                     
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 DARK:bg-gray-600 DARK:border-gray-500 DARK:placeholder-gray-400 DARK:text-white DARK:focus:ring-primary-500 DARK:focus:border-primary-500"
                      placeholder="Type Account Number"
                      required=""
                      value={acData.acNumber}
                      onChange={handleChange}
                    />
                  </div>


                  <div className="col-span-2">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 DARK:text-white"
                    >
                      Account Holder
                    </label>
                    <input
                      type="text"
                      name="acHolder"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 DARK:bg-gray-600 DARK:border-gray-500 DARK:placeholder-gray-400 DARK:text-white DARK:focus:ring-primary-500 DARK:focus:border-primary-500"
                      placeholder="Type Ac. Holder name"
                      required=""
                      value={acData.acHolder}
                      onChange={handleChange}
                    />
                  </div>


                  <div className="col-span-2">
                    <label
                      htmlFor="bank"
                      className="block mb-2 text-sm font-medium text-gray-900 DARK:text-white"
                    >
                      Bank Name
                    </label>
                    <input
                      type="text"
                      name="bankName"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 DARK:bg-gray-600 DARK:border-gray-500 DARK:placeholder-gray-400 DARK:text-white DARK:focus:ring-primary-500 DARK:focus:border-primary-500"
                      placeholder="Type Bank name"
                      required=""
                      value={acData.bankName}
                      onChange={handleChange}
                    />
                  </div>




                  <div className="col-span-2">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 DARK:text-white"
                    >
                      IFSC Code
                    </label>
                    <input
                      type="text"
                      name="IfceCode"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 DARK:bg-gray-600 DARK:border-gray-500 DARK:placeholder-gray-400 DARK:text-white DARK:focus:ring-primary-500 DARK:focus:border-primary-500"
                      placeholder="Type IFSC Code"
                      required=""
                      value={acData.IfceCode}
                      onChange={handleChange}
                    />
                  </div>


                  



                </div>

                <button
                  type="submit"
                  className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center DARK:bg-blue-600 DARK:hover:bg-blue-700 DARK:focus:ring-blue-800"
                >
                  Save
                </button>
                
              </form>

            </div>
          </div>
        </div>


    </div>


  );
};

export default AddAccount;
