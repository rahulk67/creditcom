import React, { useEffect, useState } from 'react';
import { FaBoxOpen, FaRegArrowAltCircleDown, FaRegArrowAltCircleRight, FaTags, FaUserCircle } from 'react-icons/fa';

import { FaHome } from 'react-icons/fa';




// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

const Footer = () => {

  const [showAddress, setShowAddress] = useState(true)
  const [showLinks, setShowLinks] = useState(true)

  const showAdd = (e) => {
    setShowAddress(false)
  }

  const hideAdd = (e) => {
    setShowAddress(true)
  }

  const showLink = (e) => {
    setShowLinks(false)
  }
  const hideLink = (e) => {
    setShowLinks(true)
  }


  return (

    <div className=''>


      {/* Desktop View  */}
      <footer className="bg-gray-800 md:block ">
        <div className="mx-auto grid max-w-screen-xl gap-x-12 md:gap-y-8 gap-y-1 px-4 py-8 md:grid-cols-2 xl:grid-cols-3 xl:px-10">

          <div className="max-w-sm">
            <div className="mb-6 flex h-12 items-center space-x-2">
              <span className="text-2xl font-bold text-white">Incre<span className="text-blue-600">dibles</span></span>
            </div>
            <div className="text-white">Shop. Earn. Repeat – Unlock Rewards and Cashback with Every Purchase!</div>
          </div>


          <div className="">
            <div className="mb-2 mt-4 flex flex-row gap-2 font-medium text-blue-600 xl:mb-4">Address <button onClick={showAdd} className={`${showAddress ? "block" : "hidden"} md:hidden`}><FaRegArrowAltCircleRight /></button> <button onClick={hideAdd} className={`${showAddress ? "hidden" : "block"} md:hidden`}><FaRegArrowAltCircleDown /></button> </div>



            {/* <div className={`text-white ${showAddress ? "hidden" : "block"} md:block pb-2`}>
              Near Sagar Enclave,<br />
              Mangyawas-302020 <br />
              (Jaipur Office)
              <hr />

            </div> */}

            {/* <div className={`text-white ${showAddress ? "hidden" : "block"} md:block pb-2`}>
              729 Transport Nagar, <br />
              Transport Nagar-211011 <br />
              (Allahabad Office)
              <hr />


            </div> */}

            <div className={`text-white md:block ${showAddress ? "hidden" : "block"}`}>
              RELIABLE EMPIRE SOLUTIONS
              PLOT NO - A4 LOGIX TECHNOVA,  <br />
              B-320, SECTOR -132, <br />
              GAUTAM BUDDHA NAGAR 201301<br />
              (Noida Office)
            </div>




          </div>

          <div className="">

            <div className="mb-2 md:mt-4 flex flex-row gap-2 font-medium text-blue-600 xl:mb-4">Links<button onClick={showLink} className={`${showLinks ? "block" : "hidden"} md:hidden`}><FaRegArrowAltCircleRight /></button> <button onClick={hideLink} className={`${showLinks ? "hidden" : "block"} md:hidden`}><FaRegArrowAltCircleDown /></button> </div>
            <nav aria-label="Footer Navigation" className="text-gray-500">

              <ul className={`space-y-3 text-white ${showLinks ? "hidden" : "block"} md:block`}>
                <li><a className="text-white hover:text-blue-600 hover:underline" href="/about-us">About Us</a></li>
                <li><a className="text-white hover:text-blue-600 hover:underline" href="/contact">Contact</a></li>
                <li><a className="text-white hover:text-blue-600 hover:underline" href="/faq">FAQ's</a></li>
                <li><a className="text-white hover:text-blue-600 hover:underline" href="/terms-of-service">Terms of Service</a></li>
                <li><a className="text-white hover:text-blue-600 hover:underline" href="/privacy-policy">Privacy Policy</a></li>
              </ul>
            </nav>
          </div>




        </div>

        <hr></hr>

        <div className="bg-gray-800">
          <div className="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-white sm:flex-row sm:justify-between sm:text-left">
            <div className="">© {new Date().getFullYear()} RELIABLE EMPIRE SOLUTIONS | All Rights Reserved</div>
          </div>
        </div>
      </footer>



      {/* Mobile View  */}
      <div className="fixed bottom-0 left-0 w-full flex md:hidden justify-around items-center border-t border-gray-200  bg-white  py-1">
        <a href="/" className="text-gray-600 flex flex-col items-center hover:text-gray-900 ">
          <FaHome size={25} />
          <span className="">Home</span>
        </a>
        <a href="/deals" className="text-gray-600 flex flex-col items-center hover:text-gray-900 ">
          <FaTags size={25} />
          <span className="">Deals</span>
        </a>

        <a href="/deal-status" className="text-gray-600 flex flex-col items-center hover:text-gray-900 ">
          <FaBoxOpen size={25} />
          <span className="">Order</span>
        </a>

        <a href="/profile" className="text-gray-600 flex flex-col items-center  hover:text-gray-900 ">
          <FaUserCircle size={25} />
          <span className="">Profile</span>
        </a>
        {/* 
        <a href="/profile" className="text-gray-600 hover:text-gray-900">
          <FaUser size={36} />
          <span className="">Profile</span>
        </a> */}

      </div>
    </div>


  );
};

export default Footer;

