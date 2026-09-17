import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ManageBank = () => {
    const [accData, setAccData] = useState()

    // Form state
    const [accountData, setAccountData] = useState({
        bankName: '',
        IfceCode: '',
        acNumber: '',
        acHolder: '',
        panNumber: '',
        panHolder: '',
        branch: ''

    });

    const backUrl = process.env.REACT_APP_URL;




    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setAccountData({
            ...accountData,
            [name]: value,
        });
    };



    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${backUrl}/user/me`, { withCredentials: true })
            .then((res) => {
                const msg = res.data.msg
                // const User = res.data.user;
                // setData(User)
                if (msg == "Email not verifed !") {
                    // alert("Please Verify your email")
                    navigate('/sign-in');

                } else if (msg == "Email verifed !") {
                    // setLoading(false);
                }
                else {
                    navigate('/sign-in');
                }
            })
    }, []);



    useEffect(() => {
        axios.get(`${backUrl}/user/me`, { withCredentials: true })
            .then((res) => {
                console.log(res, "bankd");
                const bankdata = res.data;
                console.log(bankdata, "bankdata");
                setAccData(bankdata);  // Update the state
            })
            .catch((error) => {
                console.error("Error fetching user data", error);
            });
    }, []);

    useEffect(() => {
        // This effect runs whenever accData changes
        console.log(accData, "Updated accData");  // Now you can log the updated state here
    }, [accData]);  // Dependency on accData

    console.log(accData,"map data")


    useEffect(() => {
        axios.get(`${backUrl}/user/me`, { withCredentials: true })

            .then((res) => {
                const bankdata = res.data.user;

                if (bankdata.Acvrifed && bankdata.Panvrifed) {
                    // navigate("/manage-bank")
                }
                else {
                    navigate('/deals');
                }


            }).catch((error) => {
                console.error("Error fetching user data", error);
            });





    }, [])

    return (
        <div className='w-full max-w-3xl mx-auto px-4 md:px-6 pb-24 pt-8'>
            <form className="" >
                <h2 class="block mb-2 text-lg font-medium pb-4 text-gray-900">Your Bank Details</h2>

                <div class="grid gap-6 mb-6 md:grid-cols-2">
                    {/* {accData.} */}


                    <div>
                        <label for="bankName" class="block mb-2 text-sm font-medium text-gray-900">Bank Name</label>
                        
                        <p onChange={handleChange} name='panHolder' type="text" id="panHolder" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">{accData?.user?.bankName}</p>
                    </div>

                    {/* <div>
                        <label for="branch" class="block mb-2 text-sm font-medium text-gray-900 ">Branch Name</label>
                        <p onChange={handleChange} name='panHolder' type="text" id="panHolder" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">{accData?.user?.panHolder}</p>
                    </div> */}


                    <div>
                        <label for="IfceCode" class="block mb-2 text-sm font-medium text-gray-900 ">IFSC Code</label>
                        <p onChange={handleChange} name='panHolder' type="text" id="panHolder" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">{accData?.user?.IfceCode}</p>
                    </div>


                    <div>
                        <label for="acNumber" class="block mb-2 text-sm font-medium text-gray-900 ">Account Number</label>
                        <p onChange={handleChange} name='panHolder' type="text" id="panHolder" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">{accData?.user?.acNumber}</p>
                    </div>

                    <div>
                        <label for="acHolder" class="block mb-2 text-sm font-medium text-gray-900">Account Holder name</label>
                        <p onChange={handleChange} name='panHolder' type="text" id="panHolder" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">{accData?.user?.acHolder}</p>
                    </div>




                    <div>
                        <label for="panNumber" class="block mb-2 text-sm font-medium text-gray-900 ">Pan Number</label>
                        <p onChange={handleChange} name='panHolder' type="text" id="panHolder" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">{accData?.user?.panNumber}</p>
                    </div>



                    <div>
                        <label for="panHolder" class="block mb-2 text-sm font-medium text-gray-900 ">PAN Holder Name</label>
                        <p onChange={handleChange} name='panHolder' type="text" id="panHolder" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">{accData?.user?.panHolder}</p>
                    </div>



                </div>




            </form>

        </div>

    );
};




export default ManageBank
