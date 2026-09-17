// import React, { useEffect, useLayoutEffect, useState } from 'react'
// import NewCarousal from './NewCarousal';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import DownloadAppPopup from './DownloadAppPopup';


// const NewHomePage = () => {

//   const navigate = useNavigate();
//   const backUrl = process.env.REACT_APP_URL;
 

//   const [supportsPWA, setSupportsPWA] = useState(false);
//   const [promptInstall, setPromptInstall] = useState(null);


//   useEffect(() => {
//     axios.get(`${backUrl}/user/me`, { withCredentials: true })
//       .then((res) => {
//         const msg = res.data.msg
//         if (msg == "Email not verifed !") {
//           // alert("Please Verify your email")
//           // navigate('/sign-in');

//         } else if (msg == "Email verifed !") {
//           // navigate('/deals');
//         }
//       })

//     const handler = e => {
//       e.preventDefault();
//       console.log("we are being triggered :D");
//       setSupportsPWA(true);
//       setPromptInstall(e);
//     };
//     window.addEventListener("beforeinstallprompt", handler);

//     return () => window.removeEventListener("transitionend", handler);

//   }, []);



//   const donwnow = evt => {
//     // evt.preventDefault();
//     if (!promptInstall) {
//       return;
//     }
//     promptInstall.prompt();
//   };
//   // if (!supportsPWA) {
//   //   return null;
//   // }


//   return (
//     <div className='overflow-hidden'>
//       <div className=" bg-gray-800">

//         <div className="mx-auto h-full px-4 py-28 md:py-40 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
//           <div className="flex flex-col items-center justify-between lg:flex-row">
//             <div className="">
//               <div className="lg:max-w-xl lg:pr-5">

//                 <p className="flex text-sm uppercase text-gray-300">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 inline h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                     <path fill-rule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clip-rule="evenodd" />
//                   </svg>
//                   An agency for high credit rewards !!!
//                 </p>
//                 <h2 className="mb-6 max-w-lg text-5xl font-bold leading-snug tracking-tight text-white sm:text-7xl sm:leading-snug">
//                   We make you earn
//                   <span className="my-1 inline-block border-b-8 border-white bg-orange-400 px-4 font-bold text-white">different</span>
//                 </h2>
//                 <p className="text-base text-gray-400">"Shop. Earn. Repeat – Unlock Rewards and Cashback with Every Purchase!"</p>
//               </div>
//               <div className="mt-10 flex flex-col items-center md:flex-row">
//                 <button onClick={donwnow} className="mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-blue-700 px-6 font-medium tracking-wide text-white shadow-md transition md:mr-4 md:mb-0 md:w-auto focus:outline-none hover:bg-blue-800">Download App</button>
//                 <a href="#works" aria-label="" className="group inline-flex items-center font-semibold text-white"
//                 >Watch how it works
//                   <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-2 ml-4 h-6 w-6 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
//                     <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                   </svg>
//                 </a>
//               </div>
//             </div>
//             <div className="relative hidden lg:ml-32 lg:block lg:w-1/2">
//               <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto my-6 h-10 w-10 animate-bounce rounded-full bg-blue-50 p-2 lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
//                 <path stroke-linecap="round" stroke-linejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3" />
//               </svg>
//               <div className="abg-orange-400 w-fit rounded-[6rem] mx-auto overflow-hidden rounded-tl-none rounded-br-none">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="absolute -left-10 -top-20 h-28 w-28 rounded-xl text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
//                   <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
//                 </svg>
//                 <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-0 -bottom-20 h-28 w-28 rounded-xl text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
//                   <path fill-rule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clip-rule="evenodd" />
//                 </svg>
//                 <div className="flex w-96 flex-wrap">
//                   <div className="h-48 w-1/2 rounded-full rounded-br-none bg-red-400"></div>
//                   <div className="rounded-[6rem] h-48 w-1/2 rounded-tl-none rounded-br-none bg-violet-400"></div>
//                   <div className="h-48 w-1/2 rounded-full rounded-b-none rounded-br-none bg-yellow-400"></div>
//                   <div className="h-48 w-1/2 rounded-full rounded-t-none rounded-br-none bg-indigo-600"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <section id='works' className="w-screen py-10 how-we-make-youprofit">

//         <h1 className="mb-12 text-center font-sans text-5xl font-bold">How we make you profitable</h1>





//         <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">

//           <article className="group h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 shadow-lg">
//             {/* <img className="w-full transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-36 lg:h-48" src="https://images.unsplash.com/photo-1611002214172-792c1f90b59a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="blog" /> */}

//             <iframe className='w-full bg-gray-800 transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-36 lg:h-48' src="https://lottie.host/embed/a9f551cd-38d1-4811-aa01-28ca4714cfd3/79E6c1d6nK.json"></iframe>

//             {/* <h2 className="title-font inline-block cursor-pointer px-6 pt-4 pb-1 text-xs font-semibold uppercase tracking-widest text-orange-600 hover:font-bold">Cities</h2> */}
//             <div className="py-1 px-6">
//               <h1 className="title-font mb-3 inline-block cursor-pointer text-xl capitali font-extrabold tracking-wide text-gray-800">Maximize Your Rewards, Minimize Your Effort!</h1>
//               <p className="line-clamp-6 mb-3 cursor-pointer overflow-hidden leading-relaxed text-gray-500">Users can securely link their order details to the platform, ensuring they earn rewards and cashback with every purchase made through the website.</p>
//             </div>

//           </article>

//           <article className="group h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 shadow-lg">
//             {/* <img className="w-full transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-36 lg:h-48" src="https://images.unsplash.com/photo-1660569883128-765b7c16f731?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="blog" /> */}

//             <iframe className='w-full bg-blue-900 transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-36 lg:h-48' src="https://lottie.host/embed/080c36e3-1d20-4cab-9844-3197d747a3e9/M3M5do2c8v.json"></iframe>

//             <div className="py-1 px-6">
//               <h1 className="title-font mb-3 inline-block cursor-pointer text-xl capitali font-extrabold tracking-wide text-gray-800">Shop Smart, Earn More – Get Cashback on Every Swipe!</h1>
//               <p className="line-clamp-6 mb-3 cursor-pointer overflow-hidden leading-relaxed text-gray-500">The app curates exclusive deals from various merchants, allowing users to shop at their favorite stores while earning extra rewards and cashback.</p>
//             </div>

//           </article>

//           <article className="group h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 shadow-lg">


//             <iframe className='w-full bg-red-900 transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-36 lg:h-48' src="https://lottie.host/embed/62a6fa38-8c61-4ddf-80c3-c9ac9a9afa76/gHBejt6e9K.json"></iframe>
//             <div className="py-1 px-6">
//               <h1 className="title-font mb-3 inline-block cursor-pointer text-xl capitali font-extrabold tracking-wide text-gray-800">Your Credit Card, Your Cashback – A Perfect combo!</h1>
//               <p className="line-clamp-6 mb-3 cursor-pointer overflow-hidden leading-relaxed text-gray-500">After shopping, users receive cashback directly into their account, with options to redeem or transfer rewards easily through the app.</p>
//             </div>

//           </article>

//         </div>

//       </section>

//       <div className='grow graph'>
//         <section className="relative overflow-hidden bg-gray-100 py-12 sm:py-16 lg:py-20">
//           <div className="absolute h-72 w-72 scale-125 -right-8 -bottom-10">
//             <div className="absolute h-60 w-60 rounded-2xl border-4 border-blue-600"></div>
//             <div className="absolute h-60 w-60 translate-x-3 translate-y-3 rounded-2xl border-4 border-blue-600"></div>
//             <div className="absolute h-60 w-60 translate-x-6 translate-y-6 rounded-2xl border-4 border-blue-600"></div>
//           </div>
//           <div className="mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="sm:text-center">
//               <h2 className="text-3xl font-semibold leading-7 text-gray-900 sm:text-4xl xl:text-5xl">
//                 We are <br className="sm:hidden" />
//                 growing rapidly
//               </h2>
//               <hr className="mt-4 h-1.5 w-32 border-none bg-blue-600 sm:mx-auto sm:mt-8" />
//             </div>

//             <div className="mx-auto mt-20 grid max-w-screen-lg grid-cols-1 gap-x-8 gap-y-12 text-center sm:text-left md:grid-cols-3">



//               <div className="grow-card backdrop-blur-lg relative mb-3 rounded-3xl border bg-white/70 px-12 py-10 text-left shadow lg:px-12">
//                 <h3 className="relative text-5xl font-black text-blue-600">100K+</h3>
//                 <p className="relative mt-5 text-gray-600">Join a community of over 1 million savvy shoppers who are maximizing their rewards and cashback benefits with every purchase!</p>
//               </div>



//               <div className="backdrop-blur-lg relative mb-3 rounded-3xl border bg-white/70 px-12 py-10 text-left shadow lg:px-12">
//                 <p className="relative text-5xl font-black text-blue-600">51%</p>
//                 <p className="relative mt-5 text-gray-600">Our innovative platform has driven a 51% year-on-year growth, proving the value we bring to users and partners alike.</p>
//               </div>

//               <div className="backdrop-blur-lg relative mb-3 rounded-3xl border bg-white/70 px-12 py-10 text-left shadow lg:px-12">
//                 <p className="relative m-0 text-5xl font-black text-blue-600">95%</p>
//                 <p className="relative mt-5 text-gray-600">With a 95% satisfaction rate, our users love how easy and rewarding it is to shop using their credit cards through our platform!
//                 </p>
//               </div>

//             </div>





//           </div>
//         </section>

//       </div>





//       <div className='featured product'>
//         <section className="bg-blue-200 py-12 text-gray-700 sm:py-16 lg:py-20">
//           <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
//             <div className="mx-auto max-w-md text-center">
//               <h2 className="font-serif text-2xl font-bold sm:text-3xl">Our featured Profit !!! </h2>
//               <p className="mt-4 text-base text-gray-700">Top Picks, Maximum Rewards – More Value, More Cashback!</p>
//             </div>

//             <div className="mt-10 grid grid-cols-2  gap-6 lg:mt-16 lg:grid-cols-4 lg:gap-4">

//               <article className="relative border-gray-700 rounded-b-md border-2 duration-500 hover:scale-105 shadow-lg shadow-gray-800">
//                 <div className="aspect-square overflow-hidden">
//                   <img className="group-hover:scale-125 h-full w-full object-cover transition-all duration-300" src="./iphone.jpg" alt="" />
//                 </div>
//                 <div className="absolute top-0 m-1 rounded-full bg-white">
//                   <p className="text-[10px] rounded-full bg-black p-1 font-bold uppercase tracking-wide text-white sm:px-3 sm:py-1">Earn ₹5999</p>
//                 </div>
//                 <div className="my-2 mx-2 flex items-start justify-between">
//                   <div className="">
//                     <h3 className="text-xs font-semibold sm:text-sm md:text-base">
//                       <a href="#" title="" className="cursor-pointer">
//                         Iphone 16
//                         <span className="absolute" aria-hidden="true"></span>
//                       </a>
//                     </h3>
//                     <div className="mt-2 flex items-center">
//                       <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
//                       </svg>
//                       <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
//                       </svg>
//                       <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
//                       </svg>
//                       <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
//                       </svg>
//                       <svg className="block h-3 w-3 align-middle text-gray-400 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
//                       </svg>
//                     </div>
//                   </div>

//                   <div className="text-right">

//                     <p className="text-xs font-normal sm:text-sm md:text-base">₹149099.00</p>
//                   </div>
//                 </div>
//               </article>





//               <article className="relative border-gray-700 rounded-b-md border-2 duration-500 hover:scale-105 shadow-lg shadow-gray-800">
//                 <div className="aspect-square overflow-hidden">
//                   <img className="group-hover:scale-125 h-full w-full object-cover transition-all duration-300" src="./motorola5g.webp" alt="" />
//                 </div>
//                 <div className="absolute top-0 m-1 rounded-full bg-white">
//                   <p className="text-[10px] rounded-full bg-black p-1 font-bold uppercase tracking-wide text-white sm:px-3 sm:py-1">Earn ₹3999</p>
//                 </div>
//                 <div className="my-2 mx-2 flex items-start justify-between">
//                   <div className="">
//                     <h3 className="text-xs font-semibold sm:text-sm md:text-base">
//                       <a href="#" title="" className="cursor-pointer">
//                         Motorola 5G
//                         <span className="absolute" aria-hidden="true"></span>
//                       </a>
//                     </h3>
//                     <div className="mt-2 flex items-center">
//                       <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
//                       </svg>
//                       <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
//                       </svg>
//                       <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
//                       </svg>
//                       <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
//                       </svg>
//                       <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
//                       </svg>
//                     </div>
//                   </div>

//                   <div className="text-right">
//                     <p className="text-xs font-normal sm:text-sm md:text-base">₹47000.00</p>
//                   </div>
//                 </div>
//               </article>

//               <article className="relative border-gray-700 rounded-b-md border-2 duration-500 hover:scale-105 shadow-lg shadow-gray-800">
//                 <div className="aspect-square overflow-hidden">
//                   <img className="group-hover:scale-125 h-full w-full object-cover transition-all duration-300" src="./iphone.jpg" alt="" />
//                   <div className="absolute top-0 m-1 rounded-full bg-white">
//                     <p className="text-[10px] rounded-full bg-black p-1 font-bold uppercase tracking-wide text-white sm:px-3 sm:py-1">Earn ₹4999</p>
//                   </div>
//                 </div>
//                 <div className="my-2 mx-2 flex items-start justify-between">
//                   <div className="">
//                     <h3 className="text-xs font-semibold sm:text-sm md:text-base">
//                       <a href="#" title="" className="cursor-pointer">
//                         IPhone 16 Pro
//                         <span className="absolute" aria-hidden="true"></span>
//                       </a>
//                     </h3>
//                     <div className="mt-2 flex items-center">
//                       <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
//                       </svg>
//                       <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
//                       </svg>
//                       <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
//                       </svg>
//                       <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
//                       </svg>
//                       <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
//                       </svg>
//                     </div>
//                   </div>

//                   <div className="text-right">
//                     <p className="text-xs font-normal sm:text-sm md:text-base">₹89499.00</p>
//                   </div>
//                 </div>
//               </article>


//               <article className="relative border-gray-700 rounded-b-md border-2 duration-500 hover:scale-105 shadow-lg shadow-gray-800">
//                 <div className="aspect-square overflow-hidden">
//                   <img className="group-hover:scale-125 h-full w-full object-cover transition-all duration-300" src="./motorola.png" alt="" />
//                   <div className="absolute top-0 m-1 rounded-full bg-white">
//                     <p className="text-[10px] rounded-full bg-black p-1 font-bold uppercase tracking-wide text-white sm:px-3 sm:py-1">Earn ₹4999</p>
//                   </div>
//                 </div>
//                 <div className="my-2 mx-2 flex items-start justify-between">
//                   <div className="">
//                     <h3 className="text-xs font-semibold sm:text-sm md:text-base">
//                       <a href="#" title="" className="cursor-pointer">
//                         Motorola Edge 5G
//                         <span className="absolute" aria-hidden="true"></span>
//                       </a>
//                     </h3>
//                     <div className="mt-2 flex items-center">
//                       <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
//                       </svg>
//                       <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
//                       </svg>
//                       <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
//                       </svg>

//                       <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
//                       </svg>

//                       <svg className="block h-3 w-3 align-middle text-gray-400 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
//                       </svg>
//                     </div>
//                   </div>

//                   <div className="text-right">
//                     <p className="text-xs font-normal sm:text-sm md:text-base">₹69999.00</p>
//                   </div>
//                 </div>
//               </article>
//             </div>
//           </div>
//         </section>

//       </div>


//       <DownloadAppPopup />





//       <NewCarousal />





//     </div>
//   )
// }


// export default NewHomePage






// import React, { useEffect, useLayoutEffect, useState } from 'react'
// import NewCarousal from './NewCarousal';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import DownloadAppPopup from './DownloadAppPopup';


// const NewHomePage = () => {

//   const navigate = useNavigate();
//   const backUrl = process.env.REACT_APP_URL;
 

//   const [supportsPWA, setSupportsPWA] = useState(false);
//   const [promptInstall, setPromptInstall] = useState(null);


//   useEffect(() => {
//     axios.get(`${backUrl}/user/me`, { withCredentials: true })
//       .then((res) => {
//         const msg = res.data.msg
//         if (msg == "Email not verifed !") {
//           // alert("Please Verify your email")
//           // navigate('/sign-in');

//         } else if (msg == "Email verifed !") {
//           // navigate('/deals');
//         }
//       })

//     const handler = e => {
//       e.preventDefault();
//       console.log("we are being triggered :D");
//       setSupportsPWA(true);
//       setPromptInstall(e);
//     };
//     window.addEventListener("beforeinstallprompt", handler);

//     return () => window.removeEventListener("transitionend", handler);

//   }, []);



//   const donwnow = evt => {
//     // evt.preventDefault();
//     if (!promptInstall) {
//       return;
//     }
//     promptInstall.prompt();
//   };
//   // if (!supportsPWA) {
//   //   return null;
//   // }


//   return (
//     <div className='overflow-hidden'>
//       <div className=" bg-gray-800">

//         <div className="mx-auto h-full px-4 py-28 md:py-40 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
//           <div className="flex flex-col items-center justify-between lg:flex-row">
//             <div className="">
//               <div className="lg:max-w-xl lg:pr-5">

//                 <p className="flex text-sm uppercase text-gray-300">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 inline h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                     <path fill-rule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clip-rule="evenodd" />
//                   </svg>
//                   An agency for high credit rewards !!!
//                 </p>
//                 <h2 className="mb-6 max-w-lg text-5xl font-bold leading-snug tracking-tight text-white sm:text-7xl sm:leading-snug">
//                   We make you earn
//                   <span className="my-1 inline-block border-b-8 border-white bg-orange-400 px-4 font-bold text-white">different</span>
//                 </h2>
//                 <p className="text-base text-gray-400">"Shop for US, Earn For Yourself Unlock Rewards and Cashback on Every Transaction done for us"</p>
//               </div>
//               <div className="mt-10 flex flex-col items-center md:flex-row">
//                 <button onClick={donwnow} className="mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-blue-700 px-6 font-medium tracking-wide text-white shadow-md transition md:mr-4 md:mb-0 md:w-auto focus:outline-none hover:bg-blue-800">Download App</button>
//                 <a href="#works" aria-label="" className="group inline-flex items-center font-semibold text-white"
//                 >Watch how it works
//                   <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-2 ml-4 h-6 w-6 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
//                     <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                   </svg>
//                 </a>
//               </div>
//             </div>
//             <div className="relative hidden lg:ml-32 lg:block lg:w-1/2">
//               <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto my-6 h-10 w-10 animate-bounce rounded-full bg-blue-50 p-2 lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
//                 <path stroke-linecap="round" stroke-linejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3" />
//               </svg>
//               <div className="abg-orange-400 w-fit rounded-[6rem] mx-auto overflow-hidden rounded-tl-none rounded-br-none">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="absolute -left-10 -top-20 h-28 w-28 rounded-xl text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
//                   <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
//                 </svg>
//                 <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-0 -bottom-20 h-28 w-28 rounded-xl text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
//                   <path fill-rule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clip-rule="evenodd" />
//                 </svg>
//                 <div className="flex w-96 flex-wrap">
//                   <div className="h-48 w-1/2 rounded-full rounded-br-none bg-red-400"></div>
//                   <div className="rounded-[6rem] h-48 w-1/2 rounded-tl-none rounded-br-none bg-violet-400"></div>
//                   <div className="h-48 w-1/2 rounded-full rounded-b-none rounded-br-none bg-yellow-400"></div>
//                   <div className="h-48 w-1/2 rounded-full rounded-t-none rounded-br-none bg-indigo-600"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <section id='works' className="w-screen py-10 how-we-make-youprofit">

//         <h1 className="mb-12 text-center font-sans text-5xl font-bold">How we make you profitable</h1>





//         <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">

//           <article className="group h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 shadow-lg">
//             {/* <img className="w-full transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-36 lg:h-48" src="https://images.unsplash.com/photo-1611002214172-792c1f90b59a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="blog" /> */}

//             <iframe className='w-full bg-gray-800 transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-36 lg:h-48' src="https://lottie.host/embed/a9f551cd-38d1-4811-aa01-28ca4714cfd3/79E6c1d6nK.json"></iframe>

//             {/* <h2 className="title-font inline-block cursor-pointer px-6 pt-4 pb-1 text-xs font-semibold uppercase tracking-widest text-orange-600 hover:font-bold">Cities</h2> */}
//             <div className="py-1 px-6">
//               <h1 className="title-font mb-3 inline-block cursor-pointer text-xl capitali font-extrabold tracking-wide text-gray-800">Maximize Your Rewards, Minimize Your Effort!</h1>
//               <p className="line-clamp-6 mb-3 cursor-pointer overflow-hidden leading-relaxed text-gray-500">Eligible Users can securely link their order details to the platform, ensuring they earn rewards and cashback with every purchase made for us through the website.</p>
//             </div>

//           </article>

//           <article className="group h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 shadow-lg">
//             {/* <img className="w-full transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-36 lg:h-48" src="https://images.unsplash.com/photo-1660569883128-765b7c16f731?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="blog" /> */}

//             <iframe className='w-full bg-blue-900 transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-36 lg:h-48' src="https://lottie.host/embed/080c36e3-1d20-4cab-9844-3197d747a3e9/M3M5do2c8v.json"></iframe>

//             <div className="py-1 px-6">
//               <h1 className="title-font mb-3 inline-block cursor-pointer text-xl capitali font-extrabold tracking-wide text-gray-800">Shop Smart, Earn More – Get Cashback on Every Swipe!</h1>
//               <p className="line-clamp-6 mb-3 cursor-pointer overflow-hidden leading-relaxed text-gray-500">The app curates exclusive deals from various merchants, allowing eligible users to shop for us at their favorite stores while earning extra rewards and cashback.</p>
//             </div>

//           </article>

//           <article className="group h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 shadow-lg">


//             <iframe className='w-full bg-red-900 transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-36 lg:h-48' src="https://lottie.host/embed/62a6fa38-8c61-4ddf-80c3-c9ac9a9afa76/gHBejt6e9K.json"></iframe>
//             <div className="py-1 px-6">
//               <h1 className="title-font mb-3 inline-block cursor-pointer text-xl capitali font-extrabold tracking-wide text-gray-800">Your Credit Card, Your Cashback – A Perfect combo!</h1>
//               <p className="line-clamp-6 mb-3 cursor-pointer overflow-hidden leading-relaxed text-gray-500">Say goodbye to tedious spreadsheets 📊 and hello to stress-free accounting!<br/>

// After shopping for us, users  will put their data on the app, & will receive cashback directly into their account , Once the data is updated by the user, App does the rest work for the Users</p>
//             </div>

//           </article>

//         </div>

//       </section>

//       <div className='grow graph'>
//         <section className="relative overflow-hidden bg-gray-100 py-12 sm:py-16 lg:py-20">
//           <div className="absolute h-72 w-72 scale-125 -right-8 -bottom-10">
//             <div className="absolute h-60 w-60 rounded-2xl border-4 border-blue-600"></div>
//             <div className="absolute h-60 w-60 translate-x-3 translate-y-3 rounded-2xl border-4 border-blue-600"></div>
//             <div className="absolute h-60 w-60 translate-x-6 translate-y-6 rounded-2xl border-4 border-blue-600"></div>
//           </div>
//           <div className="mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="sm:text-center">
//               <h2 className="text-3xl font-semibold leading-7 text-gray-900 sm:text-4xl xl:text-5xl">
//                 We are <br className="sm:hidden" />
//                 growing rapidly
//               </h2>
//               <hr className="mt-4 h-1.5 w-32 border-none bg-blue-600 sm:mx-auto sm:mt-8" />
//             </div>

//             <div className="mx-auto mt-20 grid max-w-screen-lg grid-cols-1 gap-x-8 gap-y-12 text-center sm:text-left md:grid-cols-3">



//               <div className="grow-card backdrop-blur-lg relative mb-3 rounded-3xl border bg-white/70 px-12 py-10 text-left shadow lg:px-12">
//                 <h3 className="relative text-5xl font-black text-blue-600">100K+</h3>
//                 <p className="relative mt-5 text-gray-600">Join a community of over 1 million savvy shoppers who are maximizing their rewards and cashback benefits with every purchase!</p>
//               </div>



//               <div className="backdrop-blur-lg relative mb-3 rounded-3xl border bg-white/70 px-12 py-10 text-left shadow lg:px-12">
//                 <p className="relative text-5xl font-black text-blue-600">51%</p>
//                 <p className="relative mt-5 text-gray-600">Our innovative platform has driven a 51% year-on-year growth, proving the value we bring to users and partners alike.</p>
//               </div>

//               <div className="backdrop-blur-lg relative mb-3 rounded-3xl border bg-white/70 px-12 py-10 text-left shadow lg:px-12">
//                 <p className="relative m-0 text-5xl font-black text-blue-600">95%</p>
//                 <p className="relative mt-5 text-gray-600">With a 95% satisfaction rate, our users love how easy and rewarding it is to shop using their credit cards through our platform!
//                 </p>
//               </div>

//             </div>





//           </div>
//         </section>

//       </div>





//       <div className='featured product'>
//         <section className="bg-blue-200 py-12 text-gray-700 sm:py-16 lg:py-20">
//           <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
//             <div className="mx-auto max-w-md text-center">
//               <h2 className="font-serif text-2xl font-bold sm:text-3xl">Our featured Profit !!! </h2>
//               <p className="mt-4 text-base text-gray-700">Top Picks, Maximum Rewards – More Value, More Cashback!</p>
//             </div>

//             <div className="mt-10 grid grid-cols-2  gap-6 lg:mt-16 lg:grid-cols-4 lg:gap-4">

//               <article className="relative border-gray-700 rounded-b-md border-2 duration-500 hover:scale-105 shadow-lg shadow-gray-800">
//                 <div className="aspect-square overflow-hidden">
//                   <img className="group-hover:scale-125 h-full w-full object-cover transition-all duration-300" src="./iphone.jpg" alt="" />
//                 </div>
//                 <div className="absolute top-0 m-1 rounded-full bg-white">
//                   <p className="text-[10px] rounded-full bg-black p-1 font-bold uppercase tracking-wide text-white sm:px-3 sm:py-1">Earn ₹5999</p>
//                 </div>
//                 <div className="my-2 mx-2 flex items-start justify-between">
//                   <div className="">
//                     <h3 className="text-xs font-semibold sm:text-sm md:text-base">
//                       <a href="#" title="" className="cursor-pointer">
//                         Iphone 16
//                         <span className="absolute" aria-hidden="true"></span>
//                       </a>
//                     </h3>
//                     <div className="mt-2 flex items-center">
//                       <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
//                       </svg>
//                       <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
//                       </svg>
//                       <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
//                       </svg>
//                       <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
//                       </svg>
//                       <svg className="block h-3 w-3 align-middle text-gray-400 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
//                       </svg>
//                     </div>
//                   </div>

//                   <div className="text-right">

//                     <p className="text-xs font-normal sm:text-sm md:text-base">₹149099.00</p>
//                   </div>
//                 </div>
//               </article>





//               <article className="relative border-gray-700 rounded-b-md border-2 duration-500 hover:scale-105 shadow-lg shadow-gray-800">
//                 <div className="aspect-square overflow-hidden">
//                   <img className="group-hover:scale-125 h-full w-full object-cover transition-all duration-300" src="./motorola5g.webp" alt="" />
//                 </div>
//                 <div className="absolute top-0 m-1 rounded-full bg-white">
//                   <p className="text-[10px] rounded-full bg-black p-1 font-bold uppercase tracking-wide text-white sm:px-3 sm:py-1">Earn ₹3999</p>
//                 </div>
//                 <div className="my-2 mx-2 flex items-start justify-between">
//                   <div className="">
//                     <h3 className="text-xs font-semibold sm:text-sm md:text-base">
//                       <a href="#" title="" className="cursor-pointer">
//                         Motorola 5G
//                         <span className="absolute" aria-hidden="true"></span>
//                       </a>
//                     </h3>
//                     <div className="mt-2 flex items-center">
//                       <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
//                       </svg>
//                       <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
//                       </svg>
//                       <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
//                       </svg>
//                       <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
//                       </svg>
//                       <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
//                       </svg>
//                     </div>
//                   </div>

//                   <div className="text-right">
//                     <p className="text-xs font-normal sm:text-sm md:text-base">₹47000.00</p>
//                   </div>
//                 </div>
//               </article>

//               <article className="relative border-gray-700 rounded-b-md border-2 duration-500 hover:scale-105 shadow-lg shadow-gray-800">
//                 <div className="aspect-square overflow-hidden">
//                   <img className="group-hover:scale-125 h-full w-full object-cover transition-all duration-300" src="./iphone.jpg" alt="" />
//                   <div className="absolute top-0 m-1 rounded-full bg-white">
//                     <p className="text-[10px] rounded-full bg-black p-1 font-bold uppercase tracking-wide text-white sm:px-3 sm:py-1">Earn ₹4999</p>
//                   </div>
//                 </div>
//                 <div className="my-2 mx-2 flex items-start justify-between">
//                   <div className="">
//                     <h3 className="text-xs font-semibold sm:text-sm md:text-base">
//                       <a href="#" title="" className="cursor-pointer">
//                         IPhone 16 Pro
//                         <span className="absolute" aria-hidden="true"></span>
//                       </a>
//                     </h3>
//                     <div className="mt-2 flex items-center">
//                       <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
//                       </svg>
//                       <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
//                       </svg>
//                       <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
//                       </svg>
//                       <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
//                       </svg>
//                       <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
//                       </svg>
//                     </div>
//                   </div>

//                   <div className="text-right">
//                     <p className="text-xs font-normal sm:text-sm md:text-base">₹89499.00</p>
//                   </div>
//                 </div>
//               </article>


//               <article className="relative border-gray-700 rounded-b-md border-2 duration-500 hover:scale-105 shadow-lg shadow-gray-800">
//                 <div className="aspect-square overflow-hidden">
//                   <img className="group-hover:scale-125 h-full w-full object-cover transition-all duration-300" src="./motorola.png" alt="" />
//                   <div className="absolute top-0 m-1 rounded-full bg-white">
//                     <p className="text-[10px] rounded-full bg-black p-1 font-bold uppercase tracking-wide text-white sm:px-3 sm:py-1">Earn ₹4999</p>
//                   </div>
//                 </div>
//                 <div className="my-2 mx-2 flex items-start justify-between">
//                   <div className="">
//                     <h3 className="text-xs font-semibold sm:text-sm md:text-base">
//                       <a href="#" title="" className="cursor-pointer">
//                         Motorola Edge 5G
//                         <span className="absolute" aria-hidden="true"></span>
//                       </a>
//                     </h3>
//                     <div className="mt-2 flex items-center">
//                       <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
//                       </svg>
//                       <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
//                       </svg>
//                       <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
//                       </svg>

//                       <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
//                       </svg>

//                       <svg className="block h-3 w-3 align-middle text-gray-400 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
//                       </svg>
//                     </div>
//                   </div>

//                   <div className="text-right">
//                     <p className="text-xs font-normal sm:text-sm md:text-base">₹69999.00</p>
//                   </div>
//                 </div>
//               </article>
//             </div>
//           </div>
//         </section>

//       </div>


//       <DownloadAppPopup />





//       <NewCarousal />





//     </div>
//   )
// }


// export default NewHomePage








import React, { useEffect, useLayoutEffect, useState } from 'react'
import NewCarousal from './NewCarousal';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DownloadAppPopup from './DownloadAppPopup';


const NewHomePage = () => {

  const navigate = useNavigate();
  const backUrl = process.env.REACT_APP_URL;
 

  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);


  useEffect(() => {
    axios.get(`${backUrl}/user/me`, { withCredentials: true })
      .then((res) => {
        const msg = res.data.msg
        if (msg == "Email not verifed !") {
          // alert("Please Verify your email")
          // navigate('/sign-in');

        } else if (msg == "Email verifed !") {
          // navigate('/deals');
        }
      })

    const handler = e => {
      e.preventDefault();
      console.log("we are being triggered :D");
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("transitionend", handler);

  }, []);



  const donwnow = evt => {
    // evt.preventDefault();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
  };
  // if (!supportsPWA) {
  //   return null;
  // }


  return (
    <div className='overflow-hidden'>
      <div className=" bg-gray-800">

        <div className="mx-auto h-full px-4 py-28 md:py-40 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <div className="">
              <div className="lg:max-w-xl lg:pr-5">

                <p className="flex text-sm uppercase text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 inline h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clip-rule="evenodd" />
                  </svg>
                  An agency for high credit rewards !!!
                </p>
                <h2 className="mb-6 max-w-lg text-5xl font-bold leading-snug tracking-tight text-white sm:text-7xl sm:leading-snug">
                  We make you earn
                  <span className="my-1 inline-block border-b-8 border-white bg-orange-400 px-4 font-bold text-white">different</span>
                </h2>
                <p className="text-base text-gray-400">"Shop for US, Earn For Yourself Unlock Rewards and Cashback on Every Transaction done for us"</p>
              </div>
              <div className="mt-10 flex flex-col items-center md:flex-row">
                <button onClick={donwnow} className="mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-blue-700 px-6 font-medium tracking-wide text-white shadow-md transition md:mr-4 md:mb-0 md:w-auto focus:outline-none hover:bg-blue-800">Download App</button>
                <a href="#works" aria-label="" className="group inline-flex items-center font-semibold text-white"
                >Watch how it works
                  <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-2 ml-4 h-6 w-6 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="relative hidden lg:ml-32 lg:block lg:w-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto my-6 h-10 w-10 animate-bounce rounded-full bg-blue-50 p-2 lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3" />
              </svg>
              <div className="abg-orange-400 w-fit rounded-[6rem] mx-auto overflow-hidden rounded-tl-none rounded-br-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute -left-10 -top-20 h-28 w-28 rounded-xl text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-0 -bottom-20 h-28 w-28 rounded-xl text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clip-rule="evenodd" />
                </svg>
                <div className="flex w-96 flex-wrap">
                  <div className="h-48 w-1/2 rounded-full rounded-br-none bg-red-400"></div>
                  <div className="rounded-[6rem] h-48 w-1/2 rounded-tl-none rounded-br-none bg-violet-400"></div>
                  <div className="h-48 w-1/2 rounded-full rounded-b-none rounded-br-none bg-yellow-400"></div>
                  <div className="h-48 w-1/2 rounded-full rounded-t-none rounded-br-none bg-indigo-600"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id='works' className="w-screen py-10 how-we-make-youprofit">

        <h1 className="mb-12 text-center font-sans text-5xl font-bold">How we make you profitable</h1>





        <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">

          <article className="group h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 shadow-lg">
            {/* <img className="w-full transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-36 lg:h-48" src="https://images.unsplash.com/photo-1611002214172-792c1f90b59a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="blog" /> */}

            <iframe className='w-full bg-gray-800 transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-36 lg:h-48' src="https://lottie.host/embed/a9f551cd-38d1-4811-aa01-28ca4714cfd3/79E6c1d6nK.json"></iframe>

            {/* <h2 className="title-font inline-block cursor-pointer px-6 pt-4 pb-1 text-xs font-semibold uppercase tracking-widest text-orange-600 hover:font-bold">Cities</h2> */}
            <div className="py-1 px-6">
              <h1 className="title-font mb-3 inline-block cursor-pointer text-xl capitali font-extrabold tracking-wide text-gray-800">Maximize Your Rewards, Minimize Your Effort!</h1>
              <p className="line-clamp-6 mb-3 cursor-pointer overflow-hidden leading-relaxed text-gray-500">Eligible Users can securely link their order details to the platform, ensuring they earn rewards and cashback with every purchase made for us through the website.</p>
            </div>

          </article>

          <article className="group h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 shadow-lg">
            {/* <img className="w-full transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-36 lg:h-48" src="https://images.unsplash.com/photo-1660569883128-765b7c16f731?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="blog" /> */}

            <iframe className='w-full bg-blue-900 transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-36 lg:h-48' src="https://lottie.host/embed/080c36e3-1d20-4cab-9844-3197d747a3e9/M3M5do2c8v.json"></iframe>

            <div className="py-1 px-6">
              <h1 className="title-font mb-3 inline-block cursor-pointer text-xl capitali font-extrabold tracking-wide text-gray-800">Shop Smart, Earn More – Get Cashback on Every Swipe!</h1>
              <p className="line-clamp-6 mb-3 cursor-pointer overflow-hidden leading-relaxed text-gray-500">The app curates exclusive deals from various merchants, allowing eligible users to shop for us at their favorite stores while earning extra rewards and cashback.</p>
            </div>

          </article>

          <article className="group h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 shadow-lg">


            <iframe className='w-full bg-red-900 transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-36 lg:h-48' src="https://lottie.host/embed/62a6fa38-8c61-4ddf-80c3-c9ac9a9afa76/gHBejt6e9K.json"></iframe>
            <div className="py-1 px-6">
              <h1 className="title-font mb-3 inline-block cursor-pointer text-xl capitali font-extrabold tracking-wide text-gray-800">Say goodbye to tedious spreadsheets 📊 and hello to stress-free accounting!</h1>
              <p className="line-clamp-6 mb-3 cursor-pointer overflow-hidden leading-relaxed text-gray-500">

After shopping for us, users  will put their data on the app, & will receive cashback directly into their account , Once the data is updated by the user, App does the rest work for the Users</p>
            </div>

          </article>

        </div>

      </section>

      <div className='grow graph'>
        <section className="relative overflow-hidden bg-gray-100 py-12 sm:py-16 lg:py-20">
          <div className="absolute h-72 w-72 scale-125 -right-8 -bottom-10">
            <div className="absolute h-60 w-60 rounded-2xl border-4 border-blue-600"></div>
            <div className="absolute h-60 w-60 translate-x-3 translate-y-3 rounded-2xl border-4 border-blue-600"></div>
            <div className="absolute h-60 w-60 translate-x-6 translate-y-6 rounded-2xl border-4 border-blue-600"></div>
          </div>
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="sm:text-center">
              <h2 className="text-3xl font-semibold leading-7 text-gray-900 sm:text-4xl xl:text-5xl">
                We are <br className="sm:hidden" />
                growing rapidly
              </h2>
              <hr className="mt-4 h-1.5 w-32 border-none bg-blue-600 sm:mx-auto sm:mt-8" />
            </div>

            <div className="mx-auto mt-20 grid max-w-screen-lg grid-cols-1 gap-x-8 gap-y-12 text-center sm:text-left md:grid-cols-3">



              <div className="grow-card backdrop-blur-lg relative mb-3 rounded-3xl border bg-white/70 px-12 py-10 text-left shadow lg:px-12">
                <h3 className="relative text-5xl font-black text-blue-600">100K+</h3>
                <p className="relative mt-5 text-gray-600">Join a community of over 1 million savvy shoppers who are maximizing their rewards and cashback benefits with every purchase!</p>
              </div>



              <div className="backdrop-blur-lg relative mb-3 rounded-3xl border bg-white/70 px-12 py-10 text-left shadow lg:px-12">
                <p className="relative text-5xl font-black text-blue-600">51%</p>
                <p className="relative mt-5 text-gray-600">Our innovative platform has driven a 51% year-on-year growth, proving the value we bring to users and partners alike.</p>
              </div>

              <div className="backdrop-blur-lg relative mb-3 rounded-3xl border bg-white/70 px-12 py-10 text-left shadow lg:px-12">
                <p className="relative m-0 text-5xl font-black text-blue-600">95%</p>
                <p className="relative mt-5 text-gray-600">With a 95% satisfaction rate, our users love how easy and rewarding it is to shop for us through our platform!
                </p>
              </div>

            </div>





          </div>
        </section>

      </div>





      <div className='featured product'>
        <section className="bg-blue-200 py-12 text-gray-700 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-md text-center">
              <h2 className="font-serif text-2xl font-bold sm:text-3xl">Our featured Profit !!! </h2>
              <p className="mt-4 text-base text-gray-700">Top Picks, Maximum Rewards – More Value, More Cashback!</p>
            </div>

            <div className="mt-10 grid grid-cols-2  gap-6 lg:mt-16 lg:grid-cols-4 lg:gap-4">

              <article className="relative border-gray-700 rounded-b-md border-2 duration-500 hover:scale-105 shadow-lg shadow-gray-800">
                <div className="aspect-square overflow-hidden">
                  <img className="group-hover:scale-125 h-full w-full object-cover transition-all duration-300" src="./iphone.jpg" alt="" />
                </div>
                <div className="absolute top-0 m-1 rounded-full bg-white">
                  <p className="text-[10px] rounded-full bg-black p-1 font-bold uppercase tracking-wide text-white sm:px-3 sm:py-1">Earn ₹5999</p>
                </div>
                <div className="my-2 mx-2 flex items-start justify-between">
                  <div className="">
                    <h3 className="text-xs font-semibold sm:text-sm md:text-base">
                      <a href="#" title="" className="cursor-pointer">
                        Iphone 16
                        <span className="absolute" aria-hidden="true"></span>
                      </a>
                    </h3>
                    <div className="mt-2 flex items-center">
                      <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                      </svg>
                      <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                      </svg>
                      <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                      </svg>
                      <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                      </svg>
                      <svg className="block h-3 w-3 align-middle text-gray-400 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                      </svg>
                    </div>
                  </div>

                  <div className="text-right">

                    <p className="text-xs font-normal sm:text-sm md:text-base">₹149099.00</p>
                  </div>
                </div>
              </article>





              <article className="relative border-gray-700 rounded-b-md border-2 duration-500 hover:scale-105 shadow-lg shadow-gray-800">
                <div className="aspect-square overflow-hidden">
                  <img className="group-hover:scale-125 h-full w-full object-cover transition-all duration-300" src="./motorola5g.webp" alt="" />
                </div>
                <div className="absolute top-0 m-1 rounded-full bg-white">
                  <p className="text-[10px] rounded-full bg-black p-1 font-bold uppercase tracking-wide text-white sm:px-3 sm:py-1">Earn ₹3999</p>
                </div>
                <div className="my-2 mx-2 flex items-start justify-between">
                  <div className="">
                    <h3 className="text-xs font-semibold sm:text-sm md:text-base">
                      <a href="#" title="" className="cursor-pointer">
                        Motorola 5G
                        <span className="absolute" aria-hidden="true"></span>
                      </a>
                    </h3>
                    <div className="mt-2 flex items-center">
                      <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                      </svg>
                      <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                      </svg>
                      <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                      </svg>
                      <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                      </svg>
                      <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                      </svg>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-xs font-normal sm:text-sm md:text-base">₹47000.00</p>
                  </div>
                </div>
              </article>

              <article className="relative border-gray-700 rounded-b-md border-2 duration-500 hover:scale-105 shadow-lg shadow-gray-800">
                <div className="aspect-square overflow-hidden">
                  <img className="group-hover:scale-125 h-full w-full object-cover transition-all duration-300" src="./iphone.jpg" alt="" />
                  <div className="absolute top-0 m-1 rounded-full bg-white">
                    <p className="text-[10px] rounded-full bg-black p-1 font-bold uppercase tracking-wide text-white sm:px-3 sm:py-1">Earn ₹4999</p>
                  </div>
                </div>
                <div className="my-2 mx-2 flex items-start justify-between">
                  <div className="">
                    <h3 className="text-xs font-semibold sm:text-sm md:text-base">
                      <a href="#" title="" className="cursor-pointer">
                        IPhone 16 Pro
                        <span className="absolute" aria-hidden="true"></span>
                      </a>
                    </h3>
                    <div className="mt-2 flex items-center">
                      <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                      </svg>
                      <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                      </svg>
                      <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                      </svg>
                      <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                      </svg>
                      <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                      </svg>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-xs font-normal sm:text-sm md:text-base">₹89499.00</p>
                  </div>
                </div>
              </article>


              <article className="relative border-gray-700 rounded-b-md border-2 duration-500 hover:scale-105 shadow-lg shadow-gray-800">
                <div className="aspect-square overflow-hidden">
                  <img className="group-hover:scale-125 h-full w-full object-cover transition-all duration-300" src="./motorola.png" alt="" />
                  <div className="absolute top-0 m-1 rounded-full bg-white">
                    <p className="text-[10px] rounded-full bg-black p-1 font-bold uppercase tracking-wide text-white sm:px-3 sm:py-1">Earn ₹4999</p>
                  </div>
                </div>
                <div className="my-2 mx-2 flex items-start justify-between">
                  <div className="">
                    <h3 className="text-xs font-semibold sm:text-sm md:text-base">
                      <a href="#" title="" className="cursor-pointer">
                        Motorola Edge 5G
                        <span className="absolute" aria-hidden="true"></span>
                      </a>
                    </h3>
                    <div className="mt-2 flex items-center">
                      <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                      </svg>
                      <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                      </svg>
                      <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                      </svg>

                      <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                      </svg>

                      <svg className="block h-3 w-3 align-middle text-gray-400 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                      </svg>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-xs font-normal sm:text-sm md:text-base">₹69999.00</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

      </div>


      <DownloadAppPopup />





      <NewCarousal />





    </div>
  )
}


export default NewHomePage