// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useLocation } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';



// const Navbar = () => {

//   const [iuser, setIuser] = useState();
//   const navigate = useNavigate();
//   const backUrl = process.env.REACT_APP_URL;
//   const local = useLocation().pathname;



//   useEffect(() => {

//     axios.get(`${backUrl}/user/me`, { withCredentials: true })
//       .then((res) => {
//         const msg = res.data.msg
//         // console.log("res",res)
//         // console.log(msg);
//         if (msg == "Email not verifed !") {
//           setIuser(false)
//           // alert("Email not verifed")
//           // navigate('/sign-in');

//         } else if (msg == "Email verifed !") {

//           setIuser(true);
//         }
//         else {
//           setIuser(false)
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       });





//   }, [local])





//   return (
//     <>

//       <div className='bg-gray-800 sticky top-0 w-[100%] z-50'>

//         <header className="relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 text-blue-900 md:mx-auto md:flex-row md:items-center">
//           <a href="/" className="flex cursor-pointer items-center whitespace-nowrap text-2xl font-black text-white">

//             Incre<span className='text-blue-600'>dibles</span>
//           </a>



//           <div className="absolute right-7  cursor-pointer text-blue-600">

//             {iuser ? (
//               <a className='flex ' href='/profile'>
//                 <img
//                   src="/icons89.png"
//                   alt="Profile Icon"
//                   className="w-12 md:top-3 top-2 h-12"
//                 />
//                 <div className='text-white'>Deals</div>
//                 {/* <div className='text-white'>Deal Status</div> */}

//               </a>
//             ) : (
//               <a href='/sign-in' className="rounded-full border-2 md:top-5 border-white px-6 py-1  font-medium text-white transition-colors hover:bg-white hover:text-gray-700">
//                 Login
//               </a>
//             )}

//           </div>



//         </header>
//       </div>


//     </>

//   );
// };

// export default Navbar;







import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [iuser, setIuser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarOpen, setSidebarOpen] = useState(false); // State for sidebar toggle
  const navigate = useNavigate();
  const backUrl = process.env.REACT_APP_URL;
  const local = useLocation().pathname;



  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${backUrl}/user/me`, { withCredentials: true })
      .then((res) => {
        const msg = res.data.msg;
        if (msg === "Email not verifed !") {
          setIuser(false);
        } else if (msg === "Email verifed !") {
          setIuser(true);
        } else {
          setIuser(false);
        }
      })
      .catch((err) => {
        console.log(err);
      }) .finally(() => {
      setIsLoading(false);
    });
  }, [local,backUrl]);

  // Sidebar toggle function
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };



  

  return (
    <>
      <div className="bg-gray-800 sticky top-0 w-[100%] z-50">
        <header className="relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 text-blue-900 md:mx-auto md:flex-row md:items-center">
          <a
            href="/"
            className="flex cursor-pointer items-center whitespace-nowrap text-2xl font-black text-white"
          >
            Incre<span className="text-blue-600">dibles</span>


          </a>

          

          {/* Profile Icon with Sidebar Toggle */}
<div className="absolute right-7 text-blue-600">

  {isLoading ? (
    // Loading Skeleton
    <div className="w-12 h-12 rounded-full bg-gray-600 animate-pulse"></div>
  ) : iuser ? (

    // Profile Icon
    <div
      onClick={toggleSidebar}
      className="flex items-center cursor-pointer"
    >
      <img
        src="/icons89.png"
        alt="Profile Icon"
        className="w-12 h-12"
      />
    </div>

  ) : (

    // Login Button
    <a
      href="/sign-in"
      className="rounded-full border-2 border-white px-6 py-1 font-medium text-white transition-colors hover:bg-white hover:text-gray-700"
    >
      Login
    </a>

  )}

</div>
        </header>
      </div>

      {/* Sidebar */}
      {isSidebarOpen && iuser && (
        <div
          className="fixed top-0 right-0 h-full w-64 bg-gray-800 shadow-lg p-4 z-50"
          style={{ transition: "transform 0.3s ease" }}
        >
          <button
            onClick={toggleSidebar}
            className="text-white text-lg font-bold mb-4"
          >
            ✖
          </button>
          <ul className="space-y-4">
            <li className="text-white border-b pb-2 hover:bg-gray-700 p-2 ">
              <a href="/">Home</a>
            </li>
            <li className="text-white hover:bg-gray-700 border-b pb-2 p-2 ">
              <a href="/deals">Deals</a>
            </li>
            <li className="text-white hover:bg-gray-700 border-b pb-2 p-2 ">
              <a href="/deal-status">Deal Status</a>
            </li>
            <li className="text-white hover:bg-gray-700  border-b pb-2 p-2 ">
              <a href="/profile">Profile</a>
            </li>
          </ul>
        </div>
      )}

      {/* Overlay for Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Navbar;

