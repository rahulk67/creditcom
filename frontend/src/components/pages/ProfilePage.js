import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';





const ProfilePage = () => {

    // const [showdeals, setShowdeals] = useState(false);
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();
    const backUrl = process.env.REACT_APP_URL;

    useEffect(() => {
        axios.get(`${backUrl}/user/me`, { withCredentials: true })
            .then((res) => {
                const msg = res.data.msg
                const User = res.data.user;
                setData(User)
                if (msg == "Email not verifed !") {
                    // alert("Please Verify your email")
                    navigate('/sign-in');

                } else if (msg == "Email verifed !") {
                    setLoading(false);
                }
                else {
                    navigate('/sign-in');
                }
            })
    }, []);






    const handleLogout = async () => {
        try {
            const response = await fetch(`${backUrl}/user/logout`, {
                method: 'POST',
                credentials: 'include', // Send cookies with request
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log(response,"lootuout")

            if (response.ok) {
                // Clear frontend cookies or tokens
                Cookies.remove('Email', { path: '/' });
                Cookies.remove('PhoneNumber', { path: '/' });

                // Redirect to sign-in page
                navigate('/sign-in');
            } else {
                console.error('Failed to log out:', response.statusText);
            }
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="w-4 h-4 border-2 border-blue-500 border-solid border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }


    return (
        <div className="bg-white pt-2 pb-4">

            <div className="max-w-sm mx-auto bg-white  rounded-lg overflow-hidden shadow-lg">
                <div className="border-b px-4 pb-6">
                    <div className="text-center my-4">
                        <img className="h-32 w-32 rounded-full border-4 border-white  mx-auto my-4"
                            src="chicken.png" alt="" />

                        <div className="py-2">
                            <h3 className="font-bold text-2xl text-gray-800  mb-1">{data.first_Name + " " + data.last_Name}</h3>

                            <div className="inline-flex text-gray-700 font-semibold items-center">
                                <img className="h-5 w-5 text-gray-400 mr-4" src='phone.png' alt='' width="24" height="24" />
                                {data.Phoneno}
                            </div>

                            <div className="inline-flex text-gray-700 font-semibold items-center">
                                <img className="h-5 w-5 text-gray-400  mr-4" src='gmail.png' alt='' width="24" height="24" />

                                {data.Email}
                            </div>

                        </div>
                    </div>
                    <div className="flex gap-2 px-2">
                        <button
                            className="flex-1 rounded bg-blue-600  text-white font-bold hover:bg-blue-800  px-2 py-2">
                            Profile and Settings
                        </button>

                    </div>
                </div>


                <hr />

                <div className="mt-3 grid  ">


                    <a href='manage-bank' className="flex items-center justify-between w-full py-3 px-5  font-medium text-gray-500 focus:ring-4 focus:ring-gray-200   hover:bg-gray-100  gap-3">
                        <span className="flex items-center gap-2">
                            <img className='w-5 h-5 me-2' src='provider.png' alt='' />
                            Manage Bank and KYC</span>

                        <svg data-accordion-icon className="w-3 h-3 rotate-90 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                        </svg>
                    </a>



                    <a href='wallet' className="flex items-center justify-between w-full py-3 px-5  font-medium text-gray-500 focus:ring-4 focus:ring-gray-200   hover:bg-gray-100  gap-3">
                        <span className="flex items-center gap-2">
                            <img className='w-5 h-5 me-2' src='atm-card.png' alt='' />
                            MY Wallet</span>

                        <svg data-accordion-icon className="w-3 h-3 rotate-90 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                        </svg>
                    </a>


                    <a href='faq' className="flex items-center justify-between w-full py-3 px-5  font-medium text-gray-500 focus:ring-4 focus:ring-gray-200  hover:bg-gray-100  gap-3">
                        <span className="flex items-center gap-2">
                            <img className='w-5 h-5 me-2' src='question-mark.png' alt='' />
                            FAQ's</span>

                        <svg data-accordion-icon className="w-3 h-3 rotate-90 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                        </svg>
                    </a>


                    <a href='terms-of-service' className="flex items-center justify-between w-full py-3 px-5  font-medium text-gray-500 focus:ring-4 focus:ring-gray-200  hover:bg-gray-100  gap-3">
                        <span className="flex items-center gap-2">
                            <img className='w-5 h-5 me-2' src='hospitality.png' alt='' />
                            Terms Of Service</span>

                        <svg data-accordion-icon className="w-3 h-3 rotate-90 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                        </svg>
                    </a>


                    <a href='privacy-policy' className="flex items-center justify-between w-full py-3 px-5  font-medium text-gray-500 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 gap-3">
                        <span className="flex items-center gap-2">
                            <img className='w-5 h-5 me-2' src='compliant.png' alt='' />
                            Privacy Policy
                        </span>

                        <svg data-accordion-icon className="w-3 h-3 rotate-90 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                        </svg>
                    </a>


                    <a href='contact' className="flex items-center justify-between w-full py-3 px-5  font-medium text-gray-500 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 gap-3">
                        <span className="flex items-center gap-2">
                            <img className='w-5 h-5 me-2' src='customer-service.png' alt='' />
                            Contact Support</span>

                        <svg data-accordion-icon className="w-3 h-3 rotate-90 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                        </svg>
                    </a>

                    <button onClick={() => { handleLogout() }} type="button" className="flex items-center justify-between w-full py-3 px-5  font-medium text-gray-500 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 gap-3">
                        <span className="flex items-center gap-2">
                            <img className='w-5 h-5 me-2' src='logout.png' alt='' />
                            Log Out</span>

                        <svg data-accordion-icon className="w-3 h-3 rotate-90 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                        </svg>
                    </button>

                </div>
            </div>
        </div>

    )
}

export default ProfilePage