import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';

const UserForm = () => {
    const navigate = useNavigate();
    const [first_Name,setFirst_Name] = useState("");
    const [last_Name,setLast_Name] = useState("");
    const [Phoneno,setPhoneno] = useState("");
    const [Email,setEmail] = useState("");
  const backUrl = process.env.REACT_APP_URL;


    function handleSubmit(event) {
        event.preventDefault();
        axios.post(`${backUrl}/user/register/finish`,{first_Name,last_Name,Phoneno,Email},{withCredentials:true})
        .then((res)=>{
            if(res.data == 'sucessfully Registered !'){
                navigate('/deals');
            }
           
        })
        .catch((err)=>{
            console.log(err);
        })
        
    }

    return (
        <div className='w-full max-w-3xl mx-auto px-4 md:px-6 py-24'>
            <form className="" onSubmit={handleSubmit}>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900">First name</label>
                        <input type="text" onChange={e=>{setFirst_Name(e.target.value)}} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="John" required />
                    </div>

                    <div>
                        <label for="last_name" className="block mb-2 text-sm font-medium text-gray-900 ">Last name</label>
                        <input type="text" onChange={e=>{setLast_Name(e.target.value)}} id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Doe" required />
                    </div>

                    <div>
                        <label for="phone" className="block mb-2 text-sm font-medium text-gray-900">Phone number</label>
                        <input type="text"  onChange={e=>{setPhoneno(e.target.value)}} id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="123-45-678" required />
                    </div>

                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                        <input type="email"  onChange={e=>{setEmail(e.target.value)}} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="xyz@gmail.com" required />
                    </div>



                </div>



                <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 " required />
                    </div>
                    <label for="remember" className="ms-2 text-sm font-medium text-gray-900 ">I agree with the <a href="#" className="text-blue-600 hover:underline ">terms and conditions</a>.</label>
                </div>
                <button type="submit"  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
            </form>

        </div>
    )
}

export default UserForm
