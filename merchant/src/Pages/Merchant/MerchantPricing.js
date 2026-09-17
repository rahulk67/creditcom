import React , {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const MerchantPricing = () => {
    const navigate = useNavigate();


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

            <form class="max-w-sm mx-8">
                <div className=" block mb-2 text-2xl font-medium text-gray-900">Incredibles Pricing</div>

                <div class="mb-5">
                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 ">Merchant Name</label>
                    <input type="text" name='' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md  block w-full p-2.5" placeholder="" required />
                </div>

                <div class="mb-5">
                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 ">Store Name</label>
                    <input type="text"  name='' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md  block w-full p-2.5" placeholder="" required />
                </div>

                <hr className='my-2'/>

                <div class="mb-5">
                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 ">Select Variant</label>
                    <select id="countries" required className="bg-gray-50  border font-medium border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full mt-0 p-2.5 ">
                      <option selected>Select</option>
                      <option value="screenshot">list</option>
                      <option value="trackingid">list </option>
                      <option value="variant"> Variant</option>
                      <option value="invoice">list</option>
                      <option value="gst">list</option>
                      <option value="paydelay">list</option>
                    </select>
                </div>

                <div class="mb-5">
                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 ">Variant Name</label>
                    <input type="text"  name='' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md  block w-full p-2.5" placeholder="" required />
                </div>


                <div class="mb-5">
                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 ">Sale Price</label>
                    <input type="text"  name='' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md  block w-full p-2.5" placeholder="" required />
                </div>



                <div class="mb-5">
                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 ">Select offer</label>
                    <select name='' id="countries" required className="bg-gray-50  border font-medium border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full mt-0 p-2.5 ">
                      <option selected>Select</option>
                      <option value="screenshot">list</option>
                     
                    </select>
                    
                </div>

                <hr className='my-2'/>

                <div class="mb-5">
                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 ">Total Discount:</label>
                    <input type="text"  name='' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md  block w-full p-2.5" placeholder="" required />
                </div>


                
                <div class="mb-5">
                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 ">Incredible Price</label>
                    <input type="text"  name='' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md  block w-full p-2.5" placeholder="" required />
                </div>



                
                <div class="mb-5">
                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 ">Quantity</label>
                    <input type="text"  name='' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md  block w-full p-2.5" placeholder="" required />
                </div>


                
                <div class="mb-5">
                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 ">Comment</label>
                    <input type="text"  name='' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md  block w-full p-2.5" placeholder="" required />
                </div>





                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center DARK:bg-blue-600 DARK:hover:bg-blue-700 DARK:focus:ring-blue-800">Create Merchant Deals</button>

            </form>





        </div>

    )
}

export default MerchantPricing