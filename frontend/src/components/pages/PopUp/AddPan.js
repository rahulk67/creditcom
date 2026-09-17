import React, { useEffect, useState } from 'react';
import axios  from 'axios';

const AddPan = () => {
  // console.log(pan);
  const backUrl = process.env.REACT_APP_URL;
   
  

  //for pan modal details
  //states for show pan model or not
  const [panModal, setPanModal] = useState(false);
  // const [panver,setPanver] = useState();
  // useEffect(()=>{
  //   if(pan.panver == true){
  //     console.log(pan.panver)
  //     console.log("hiuoj")
  //     setPanModal(false);
  //   }else{
  //     console.log(pan.panver)
  //     setPanModal(true);

  //   }
  // },[pan.panver])
    



  const [panData, setPanData] = useState({
    panNumber: ''.trim(),
    panHolder: ''.trim(),
  });
  

  //save krte hi onsubmit h form ka
  const closePanModal = (e) => {
    e.preventDefault();

    setPanModal(false);
    console.log("sdfg",panData);

    const trimmedData = {
      panNumber: panData.panNumber.trim(),
      panHolder: panData.panHolder.trim().toUpperCase(),
    };

    console.log(trimmedData, "trim")





    axios.post(`${backUrl}/user/pan/kyc` , trimmedData, {withCredentials : true})
    .then((res) => {
      console.log(res);
      console.log(res.data.msg);

      if(res.data.msg == "Valid Pan Details"){
        window.location.reload();
      }else {
        alert(res.data.msg);
      }
    })

  };

  

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPanData({
      ...panData,
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
            <div className="relative bg-white rounded-lg shadow DARK:bg-gray-700">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t DARK:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 DARK:text-white">
                  Add Pan Details
                </h3>



              </div>

              {/* Modal body */}
              <form onSubmit={(e)=>closePanModal(e)} className="p-4 md:p-5">
                <div className="grid gap-4 mb-4 grid-cols-2">
                  <div className="col-span-2">
                    <label
                      htmlFor="panNumber"
                      className="block mb-2 text-sm font-medium text-gray-900 DARK:text-white"
                    >
                      Pan Number
                    </label>
                    <input
                      type="text"
                      name="panNumber"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 DARK:bg-gray-600 DARK:border-gray-500 DARK:placeholder-gray-400 DARK:text-white DARK:focus:ring-primary-500 DARK:focus:border-primary-500"
                      placeholder="Type Pan Number"
                      required=""
                      value={panData.panNumber}
                      onChange={handleChange}
                    />
                  </div>


                  <div className="col-span-2">
                    <label
                      htmlFor="panHolder"
                      className="block mb-2 text-sm font-medium text-gray-900 DARK:text-white"
                    >
                      Pan Holder Name
                    </label>
                    <input
                      type="text"
                      name="panHolder"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 DARK:bg-gray-600 DARK:border-gray-500 DARK:placeholder-gray-400 DARK:text-white DARK:focus:ring-primary-500 DARK:focus:border-primary-500"
                      placeholder="Type Pan Holder Name"
                      required=""
                      value={panData.panHolder}
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

export default AddPan;
