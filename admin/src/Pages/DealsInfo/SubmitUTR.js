import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const SubmitUTR = () => {
    const [data, setData] = useState([]);


    const backUrl = process.env.REACT_APP_URL
    const navigate = useNavigate()

    const [paydata, setPaydata] = useState({

        UTR: '',
        Amount: "",
        appId:useParams().id,
    });

    // const appId = useParams().id;
    // // console.log(Aid, "u id gets")



    const utrsubmit = (e) => {
        e.preventDefault()
        console.log('utrpay Data:', paydata);
        axios.post(`${backUrl}/admin/payhistory`, paydata , { withCredentials: true })
            .then((res) => {
                console.log(res, "final pay yyydata")
                // setData(res.data.DealData);
            })


    }

    const handleChange = (e) => {
        const { name, value, } = e.target;
        setPaydata({
            ...paydata,
            [name]: value,
        });
    };



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

            <form onSubmit={utrsubmit} class="max-w-sm mx-8">
                <div className=" block mb-2 text-2xl font-medium text-gray-900">Submit UTR</div>

                {/* <div class="mb-5">
                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 ">Merchant</label>
                    <input type="text" name='Merchant' onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md  block w-full p-2.5" placeholder="" required />
                </div> */}

                <div class="mb-5">
                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 ">UTR*/Refrence No</label>
                    <input type="text" name='UTR' onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md  block w-full p-2.5" placeholder="" required />
                </div>

                <div class="mb-5">
                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 ">Amount</label>
                    <input type="text" name='Amount' onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md  block w-full p-2.5" placeholder="" required />
                </div>

                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit UTR</button>

            </form>



        </div>
    )
}

export default SubmitUTR