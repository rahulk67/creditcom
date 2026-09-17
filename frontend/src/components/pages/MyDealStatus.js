// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const MyDealStatus = () => {

//     const [showdeals, setShowdeals] = useState(false);
//     const [data, setData] = useState([])
//     const backUrl = process.env.REACT_APP_URL;


//     const navigate = useNavigate();


//     useEffect(() => {

//         axios.get(`${backUrl}/user/me`, { withCredentials: true })
//             .then((res) => {
//                 const msg = res.data.msg
//                 if (msg == "Email not verifed !") {
//                     // alert("Please Verify your email")
//                     navigate('/sign-in');

//                 } else if (msg == "Email verifed !") {

//                     axios.get(`${backUrl}/user/myorder`, { withCredentials: true })
//                         .then((res) => {
//                             console.log(res, "myorder")
//                             const msg = res.data.msg;
//                             if (msg == "0 Deal CLose !") {
//                                 setShowdeals(true);
//                                 console.log("No deals is live !");
//                             } else {
//                                 setShowdeals(false);
//                                 const data = res.data.products
//                                 console.log(data);
//                                 setData(data);
//                                 console.log(res);
//                             }

//                         }).catch((err) => {
//                             console.log(err);
//                         })
//                 }
//                 else {
//                     navigate('/sign-in');

//                 }
//             })


//     }, []);




//     return (



//         <>
//             {showdeals ?
//                 <div className="items-center text-center mt-10 text-red-600  pt-8 pb-20">No deals is in Process</div>
//                 :
//                 <section id='Projects' className="w-96 mx-auto grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 justify-items-center justify-center gap-y-8 gap-x-96 mt-8 mb-36">

//                     {data ?

//                         data.map((data) => {

//                             return (<div class="w-72 bg-gray-100 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-300">
//                                 <a

//                                     href={`/single-product/${data.Product_id}/${data.Appid}/${data.MerchantDealId}`}

//                                 >
//                                     <div style={{ height: "0rem" }} className='w-72 '>

//                                         {/* <img src={`${backUrl}/${data.Image}`}
//                                             alt="Product" class="w-72 object-cover rounded-t-xl" /> */}
//                                     </div>

//                                     <div class="w-48 pt-4">
//                                         <div className='grid gap-12 grid-cols-2 '>
//                                             <span class="text-black  pl-2 font-medium  uppercase text-xs">Earn ₹{data.OfferAmmount}</span>
//                                             <div className='w-3 h-3'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg> <span>{data.status}</span> </div>


//                                         </div>
//                                         <p class="text-gray-700  pt-4 pl-2 text-xs">on {data.CardType} Bank Credit Cards</p>
//                                         <p class="text-md  font-normal pt-1  pl-2  ">{data.DealTitle}</p>

//                                         <div className='flex items-center pt-1'>
//                                             <div class="ml-2"><img width="12" height="12" src="https://img.icons8.com/color/48/rgb-circle-1--v1.png" alt="rgb-circle-1--v1" /></div>
//                                             <p class="text-xs truncate block pl-2 uppercase ">Variant- {data.Variant}</p>
//                                         </div>


//                                         <div class="flex items-center pt-1 mb-2">
//                                             <p class="text-md pl-2 font-bold text-black cursor-auto my-1"> ₹{data.Price}</p>

//                                             <div class="ml-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
//                                                 fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
//                                                 <path fill-rule="evenodd"
//                                                     d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
//                                                 <path
//                                                     d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
//                                             </svg></div>
//                                         </div>

//                                         {/* <div>Ordered ON - {new Date(data.updatedAt).toLocaleDateString('en-GB', {
//                                             day: '2-digit',
//                                             month: 'short',
//                                             year: 'numeric'
//                                         })}
//                                         </div> */}

//                                     </div>
//                                 </a>
//                             </div>




//                             )
//                         })
//                         :
//                         <div className='px-10'>
//                             <p className='px-10 whitespace-nowrap text-lg font-medium text-red-500'>No deal is live or pending</p>
//                         </div>}







//                 </section>


//             }








//         </>

//     )
// }

// export default MyDealStatus











import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { IoCheckmarkCircle } from "react-icons/io5";


const MyDealStatus = () => {
    const [showdeals, setShowdeals] = useState(false);
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState(""); // State for search input
    const backUrl = process.env.REACT_APP_URL;
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${backUrl}/user/me`, { withCredentials: true })
            .then((res) => {
                const msg = res?.data?.msg;
                if (msg === "Email not verifed !") {
                    navigate('/sign-in');
                } else if (msg === "Email verifed !") {
                    axios.get(`${backUrl}/user/myorder`, { withCredentials: true })
                        .then((res) => {
                            const msg = res.data.msg;
                            if (msg === "0 Deal CLose !") {
                                setShowdeals(true);
                            } else {
                                setShowdeals(false);
                                setData(res.data.products);
                            }
                        })
                        .catch((err) => console.log(err));
                } else {
                    navigate('/sign-in');
                }
            });
    }, []);

    // Filter deals based on search input
    const filteredDeals = data?.filter(deal =>
        deal?.DealTitle?.toLowerCase()?.includes(searchQuery?.toLowerCase())
    );

    return (
        <>
            <div className="text-center mt-5 ">
                <input
                    type="text"
                    placeholder="Search by Deal Title..."
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            {showdeals ? (
                <div className="text-center mt-10 text-red-600 pt-8 pb-20">No deals are in process</div>
            ) : (
                <section className="w-96 mx-auto grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1 justify-items-center gap-y-8 gap-x-96 mt-8 mb-36">
                    {filteredDeals?.length > 0 ? (
                        filteredDeals?.reverse()?.map((deal) => (
                            <div key={deal.MerchantDealId} className="w-72 bg-gray-100 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-300">
                                <a href={`/single-product/${deal?.Product_id}/${deal?.Appid}/${deal?.MerchantDealId}`}>
                                    <div className="w-56 pt-4">
                                        <div className="grid gap-12 grid-cols-2">
                                            {/* <p className="text-black pl-2 font-medium uppercase text-xs">Earn ₹{deal.OfferAmmount}</p> */}
                                            <p className="text-black pl-2 font-medium uppercase text-xs">Earn ₹{deal.offerCash}</p>

                                            <div className="flex items-center gap-2  ">

                                            <IoCheckmarkCircle className='size-4'
                                             />{deal.status}
                                            </div>
                                        </div>
                                        <p className="text-gray-700 pt-4 pl-2 text-xs">on {deal.CardType} Bank Credit Cards</p>
                                        <p className="text-md font-normal pt-1 pl-2">{deal.DealTitle}</p>
                                        <div className="flex items-center pt-1">
                                            <div className="ml-2">
                                                <img width="12" height="12" src="https://img.icons8.com/color/48/rgb-circle-1--v1.png" alt="rgb-circle-1--v1" />
                                            </div>
                                            <p className="text-xs truncate block pl-2 uppercase">Variant- {deal.Variant}</p>
                                        </div>
                                        <div className="flex items-center pt-1 mb-2">
                                            <p className="text-md pl-2 font-bold text-black cursor-auto my-1">₹{deal.Price}</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))
                    ) : (
                        <div className="px-10">
                            <p className="px-10 whitespace-nowrap text-lg font-medium text-red-500">No matching deals found</p>
                        </div>
                    )}
                </section>
            )}
        </>
    );
};

export default MyDealStatus;
