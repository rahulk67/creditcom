import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const MerchantOrderVariant = () => {
  const navigate = useNavigate()

  
  useEffect(() => {
    const Email = localStorage.getItem('Email');  // get name of cookies
    console.log(Email, "email recieved from localstorage");
    if (Email == null) {
      console.log("sfj;osadjf")
      navigate('/')
    }
  }, [])

  return (
    <form class="max-w-sm mx-8">
      <div className=" block mb-2 text-xl font-medium text-gray-900">New Merchant Order Variant

      </div>

      <div class="mb-5">
        <label for="text" class="block mb-2 text-sm font-medium text-gray-900 ">Tracking number</label>
        <input type="text"  name='' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md  block w-full p-2.5" placeholder="" required />
      </div>

      <div class="mb-5">
        <label for="text" class="block mb-2 text-sm font-medium text-gray-900 ">Variant</label>
        <select id="countries" required className="bg-gray-50  border font-medium border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-0  ">
          <option selected> </option>
          <option value="EKART">Yes</option>
          <option value="DV">No</option>

        </select>
      </div>

      <div class="mb-5">
        <label for="text" class="block mb-2 text-sm font-medium text-gray-900 ">Quantity*</label>
        <input type="text"  name='' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md  block w-full p-2.5" placeholder="" required />
      </div>





      <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center DARK:bg-blue-600 DARK:hover:bg-blue-700 DARK:focus:ring-blue-800">Create Merchant Order Variant</button>

    </form>
  )
}

export default MerchantOrderVariant