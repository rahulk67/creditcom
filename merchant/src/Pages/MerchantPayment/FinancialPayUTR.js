import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const FinancialPayUTR = () => {
    const navigate = useNavigate();
    const backUrl = process.env.REACT_APP_URL;

    const [utrdata, setUtrdata] = useState({
      
    });


    useEffect(() => {

    })




    useEffect(() => {
        const Email = localStorage.getItem('Email');  // get name of cookies
        console.log(Email, "email recieved from localstorage");
        if (Email == null) {
            console.log("sfj;osadjf")
            navigate('/')
        }
    }, [])

    const utrsubmit = (e) => {
        e.preventDefault()
        console.log('utr Data:', utrdata);
        axios.post(`${backUrl}/merchant/utr`, utrdata, { withCredentials: true })
        .then((res) => {
                console.log(res, "utrrr")
                if(res.data.msg === "success"){
                    alert("Submitted Successfully");
                    window.location.reload()
                    

                }
            })


            .catch((err) => {
                console.log(err);
            })

    }

    const handleChange = (e) => {
        const { name, value, } = e.target;
        setUtrdata({
            ...utrdata,
            [name]: value,
        });
    };



    return (
        <div>

            <form onSubmit={utrsubmit} class="max-w-sm mx-8">
                <div className=" block mb-2 text-2xl font-medium text-gray-900">Financial Pay UTR</div>

                <div class="mb-5">
                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 ">Payment Date</label>
                    <input type="date" name='Date' onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md  block w-full p-2.5" placeholder="" required />
                </div>

                
                <div class="mb-5">
                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 ">UTR ID*</label>
                    <input type="text" name='UTR' onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md  block w-full p-2.5" placeholder="" required />
                </div>


                <div class="mb-5">
                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 ">Remarks</label>
                    <input type="text" name='Remarks' onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md  block w-full p-2.5" placeholder="" required />
                </div>

                <div class="mb-5">
                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 ">Amount</label>
                    <input type="number" name='Amount' onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md  block w-full p-2.5" placeholder="" required />
                </div>

               

                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center DARK:bg-blue-600 DARK:hover:bg-blue-700 DARK:focus:ring-blue-800">Create Financial UTR</button>

            </form>



        </div>

    )
}

export default FinancialPayUTR