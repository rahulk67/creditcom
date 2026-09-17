
// import React, { useState, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const SignPage = () => {
//   const [state, setState] = useState(true);
//   const [Email, setEmail] = useState("");
//   const [phoneno, setPhoneno] = useState("");
//   const [otp, setOtp] = useState(["", "", "", ""]);
//   const otpRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
//   const backUrl = process.env.REACT_APP_URL;
//   console.log(backUrl);
//   const navigate = useNavigate();

//   const [activeForm, setActiveForm] = useState("email");

//   const checking = Email.length > 0;

//   const showForm = (event) => {
//     event.preventDefault();
//     if (checking) {
//       axios.post(`${backUrl}/user/EmailRegister`, { Email }, { withCredentials: true })
//         .then((res) => {
//           const mes = res.data.msg;
//           console.log(mes, "mes");
//           console.log(res);
//           console.log(res);
//           if (mes === "user already exist!") {
//             alert(res.data.message);
//           } else if (mes === "Error is sending Email !") {
//             alert(res.data.message);
//           } else {
//             if (res.data.user == null || res.data.user.verifed === false || mes == "Email sent sucessfully !") {
//               setState(false);
//             } else {
//               navigate('/deals');
//             }
//           }
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     } else {
//       alert('Please Enter Your Email Address');
//     }
//   };

//   const handleChange = (value, index) => {
//     if (/^\d$/.test(value)) {
//       const newOtp = [...otp];
//       newOtp[index] = value;
//       setOtp(newOtp);
//       if (index < 3) {
//         otpRefs[index + 1].current.focus(); // Move to the next input
//       }
//     }
//   };

//   const handleKeyDown = (e, index) => {
//     if (e.key === "Backspace") {
//       e.preventDefault(); // Prevent default backspace behavior
//       const newOtp = [...otp];

//       if (newOtp[index] === "") {
//         if (index > 0) {
//           newOtp[index - 1] = ""; // Clear the previous input
//           otpRefs[index - 1].current.focus(); // Focus on the previous input
//         }
//       } else {
//         newOtp[index] = ""; // Clear the current input
//       }

//       setOtp(newOtp);
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const otpCode = otp.join('');
//     console.log(otpCode)
//     axios.post(`${backUrl}/user/Otpverfiy`, { Otp: otpCode }, { withCredentials: true })
//       .then((res) => {
//         const msg = res.data.msg;
//         if (msg === "Email Doesn't match" || msg === "Otp Doesn't Match") {
//           console.log(res)
//           alert(res.data);
//         } else {
//           alert(res.data.msg);
//           const userdata = res.data.userdata;
//           if (userdata) {
//             navigate('/deals')
//           }
//           else {
//             navigate('/user-form');
//           }
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };




//   const registerW = (event) => {
//     event.preventDefault();
//     // if (checking) {
//     axios.post(`${backUrl}/user/Whatsapp`, { phoneno }, { withCredentials: true })
//       .then((res) => {
//         // const mes = res.data.msg;
//         // console.log(mes, "mes");
//         // console.log(res);
//         console.log(res);
//         if (res.data.msg == "OTP sent successfully" || res.data.msg == "OTP updated successfully") {
//           setState(false);
//         } else {
//           alert(res.data.msg);
//         }

//       })
//       .catch((err) => {
//         console.log(err);
//       });
//     // } else {
//     // alert('Please Enter Your Phone Address');
//     // }
//   };


//   return (
//     <div>
//       <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-12">

//         <div class="mt-1 flex flex-col items-center">
//           <p class="text-2xl xl:text-3xl font-extrabold">
//             {/* Sign up */}
//           </p>
//           <div class="w-full flex-1 mt-8">
//             <div class="flex flex-col items-center gap-3">
//               <button onClick={() => setActiveForm("email")}
//                 class="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
//                 <div class="bg-white p-2 rounded-full">
//                   <svg class="w-4" viewBox="0 0 533.5 544.3">
//                     <path
//                       d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
//                       fill="#4285f4" />
//                     <path
//                       d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
//                       fill="#34a853" />
//                     <path
//                       d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
//                       fill="#fbbc04" />
//                     <path
//                       d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
//                       fill="#ea4335" />
//                   </svg>
//                 </div>
//                 <span class="ml-4">
//                   Sign In with Email
//                 </span>
//               </button>


//               <button onClick={() => setActiveForm("whatsapp")}
//                 class="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
//                 <div class="bg-white p-2 rounded-full">
//                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path fill="#25D366" d="M12.004 0.004c-6.628 0-12 5.372-12 12a11.94 11.94 0 003.438 8.424l-2.25 3.558 4.073-1.056A11.937 11.937 0 0012.004 24c6.628 0 12-5.372 12-12s-5.372-12-12-12zm0 22c-2.236 0-4.347-.654-6.141-1.887l-.438-.302-2.418.628.645-2.338-.282-.453a9.953 9.953 0 01-1.366-5.644c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z" />
//                     <path fill="#25D366" d="M17.402 14.235c-.298-.149-1.766-.87-2.039-.969-.273-.099-.471-.149-.669.148-.198.298-.765.969-.94 1.168-.173.199-.346.223-.644.075-1.75-.874-2.901-1.565-4.049-3.54-.306-.525.306-.487.876-1.623.097-.198.05-.37-.025-.517-.074-.148-.669-1.615-.916-2.213-.242-.582-.489-.503-.669-.512-.173-.008-.372-.007-.571-.007s-.526.075-.802.372c-.273.298-1.043 1.02-1.043 2.487 0 1.467 1.068 2.883 1.216 3.081.149.198 2.103 3.215 5.1 4.495.712.307 1.268.49 1.7.626.715.228 1.363.196 1.878.118.572-.086 1.766-.721 2.015-1.416.248-.695.248-1.289.173-1.416-.074-.126-.273-.199-.572-.347z" />
//                   </svg>

//                 </div>
//                 <span class="ml-4">
//                   Sign In with WhatsApp
//                 </span>
//               </button>
//             </div>

//             <div class="my-6 border-b text-center">
//               <div
//                 class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
//                 Sign up with {activeForm}
//               </div>
//             </div>


//           </div>
//         </div>


//         {activeForm === "email" ? <>



//           <div className={`justify-center ${state ? "block" : "hidden"}`}>

//             <form className="max-w-sm mx-auto p-4 rounded-lg border">
//               <div className="mx-auto mb-4 space-y-3">
//                 <h1 className="text-center text-3xl font-bold text-gray-700">Email</h1>
//                 <p className="text-gray-500">Verify Email to access your account</p>
//               </div>
//               <div className="mb-5">
//                 <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Enter Your email</label>
//                 <input type="email" id="email" onChange={e => setEmail(e.target.value.toLowerCase())}
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
//                   placeholder="name@xyz1234.com" required />
//               </div>
//               <button type="submit" onClick={showForm}
//                 className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
//                 Send OTP
//               </button>
//             </form>
//           </div>


//           <div className={`justify-center ${state ? "hidden" : "block"}`}>
//             <div className="max-w-md p-4  border mx-auto  text-center bg-white px-4 sm:px-8 py-10 rounded-xl">
//               <header className="mb-8">
//                 <p className="text-[15px] text-slate-500">Enter the 4-digit verification code that was sent to your email id.</p>
//               </header>

//               <form id="otp-form" onSubmit={handleSubmit}>
//                 <div className="flex items-center  justify-center gap-3">
//                   {otp.map((value, index) => (
//                     <input
//                       key={index}
//                       ref={otpRefs[index]}
//                       type="text"
//                       className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-gray hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
//                       maxLength="1"
//                       value={value}
//                       onChange={(e) => handleChange(e.target.value, index)}
//                       onKeyDown={(e) => handleKeyDown(e, index)} // Handle backspace
//                     />
//                   ))}
//                 </div>
//                 <div className="max-w-[260px] mx-auto mt-4">
//                   <button type="submit"
//                     className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-blue-700 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150">
//                     Verify Account
//                   </button>
//                 </div>
//               </form>

//               {/* <div className="text-sm text-slate-500 mt-4">Didn't receive code? <a className="font-medium text-indigo-500 hover:text-indigo-600" href="#0">Resend</a></div> */}
//             </div>
//           </div>
//         </> :




//           <>
//             {/* whatsapp */}
//             <div className={`justify-center ${state ? "block" : "hidden"}`}>

//               <form className="max-w-sm mx-auto p-4 rounded-lg border">
//                 <div className="mx-auto mb-4 space-y-3">
//                   <h1 className="text-center text-3xl font-bold text-gray-700">WhatsApp</h1>
//                   <p className="text-gray-500">Verify Your WhatsApp to access account</p>
//                 </div>
//                 <div className="mb-5">
//                   <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 ">Enter Your WhatsApp Number</label>
//                   <input type="phone" id="phone" onChange={e => setPhoneno(e.target.value)}
//                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
//                     placeholder="987-6543-210" required />
//                 </div>
//                 <button type="submit" onClick={registerW}
//                   className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
//                   Send OTP on WhatsApp
//                 </button>
//               </form>
//             </div>


//             <div className={`justify-center ${state ? "hidden" : "block"}`}>
//               <div className="max-w-md p-4  border mx-auto  text-center bg-white px-4 sm:px-8 py-10 rounded-xl">
//                 <header className="mb-8">
//                   <p className="text-[15px] text-slate-500">Enter the 4-digit verification code that was sent to your WhatsApp Number.</p>
//                 </header>

//                 <form id="otp-form" onSubmit={handleSubmit}>
//                   <div className="flex items-center  justify-center gap-3">
//                     {otp.map((value, index) => (
//                       <input
//                         key={index}
//                         ref={otpRefs[index]}
//                         type="text"
//                         className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-gray hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
//                         maxLength="1"
//                         value={value}
//                         onChange={(e) => handleChange(e.target.value, index)}
//                         onKeyDown={(e) => handleKeyDown(e, index)} // Handle backspace
//                       />
//                     ))}
//                   </div>
//                   <div className="max-w-[260px] mx-auto mt-4">
//                     <button type="submit"
//                       className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-blue-700 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150">
//                       Verify Account
//                     </button>
//                   </div>
//                 </form>

//                 {/* <div className="text-sm text-slate-500 mt-4">Didn't receive code? <a className="font-medium text-indigo-500 hover:text-indigo-600" href="#0">Resend</a></div> */}
//               </div>
//             </div>
//           </>}

//       </div>
//     </div >
//   );
// };

// export default SignPage;



import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignPage = () => {
  const [state, setState] = useState(true);
  const [Email, setEmail] = useState("");
  const [phoneno, setPhoneno] = useState("");
  // checkbox
  const [isChecked, setIsChecked] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const [otp, setOtp] = useState(["", "", "", ""]);
  const otpRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const backUrl = process.env.REACT_APP_URL;
  console.log(backUrl);
  const navigate = useNavigate();

  const [activeForm, setActiveForm] = useState("email");

  const checking = Email.length > 0;

  const showForm = (event) => {
    event.preventDefault();
    if (!isChecked) {
      setShowWarning(true);
      return;
    }

    setShowWarning(false);
    if (checking) {
      axios.post(`${backUrl}/user/EmailRegister`, { Email }, { withCredentials: true })
        .then((res) => {
          const mes = res.data.msg;
          console.log(mes, "mes");
          console.log(res);
          console.log(res);
          if (mes === "user already exist!") {
            alert(res.data.message);
          } else if (mes === "Error is sending Email !") {
            alert(res.data.message);
          } else {
            if (res.data.user == null || res.data.user.verifed === false || mes == "Email sent sucessfully !") {
              setState(false);
            } else {
              navigate('/deals');
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert('Please Enter Your Email Address');
    }
  };

  const handleChange = (value, index) => {
    if (/^\d$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (index < 3) {
        otpRefs[index + 1].current.focus(); // Move to the next input
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      e.preventDefault(); // Prevent default backspace behavior
      const newOtp = [...otp];

      if (newOtp[index] === "") {
        if (index > 0) {
          newOtp[index - 1] = ""; // Clear the previous input
          otpRefs[index - 1].current.focus(); // Focus on the previous input
        }
      } else {
        newOtp[index] = ""; // Clear the current input
      }

      setOtp(newOtp);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const otpCode = otp.join('');
    console.log(otpCode)
    axios.post(`${backUrl}/user/Otpverfiy`, { Otp: otpCode }, { withCredentials: true })
      .then((res) => {
        const msg = res.data.msg;
        if (msg === "Email Doesn't match" || msg === "Otp Doesn't Match") {
          console.log(res)
          alert(res.data);
        } else {
          alert(res.data.msg);
          const userdata = res.data.userdata;
          console.log(userdata,"dffdd")
          
          if (userdata.Email) {
            navigate('/deals')
          }
          else {
            navigate('/user-form');
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };




  const registerW = (event) => {
    event.preventDefault();
    // if (checking) {
    axios.post(`${backUrl}/user/Whatsapp`, { phoneno }, { withCredentials: true })
      .then((res) => {
        // const mes = res.data.msg;
        // console.log(mes, "mes");
        // console.log(res);
        console.log(res);
        if (res.data.msg == "OTP sent successfully" || res.data.msg == "OTP updated successfully") {
          setState(false);
        } else {
          alert(res.data.msg);
          navigate('/user-form');
        }

      })
      .catch((err) => {
        console.log(err);
      });
    // } else {
    // alert('Please Enter Your Phone Address');
    // }
  };


  return (
    <div>
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-12">

        <div class="mt-1 flex flex-col items-center">
          <p class="text-2xl xl:text-3xl font-extrabold">
            {/* Sign up */}
          </p>
          <div class="w-full flex-1 mt-8">
            <div class="flex flex-col items-center gap-3">
              <button onClick={() => setActiveForm("email")}
                class="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                <div class="bg-white p-2 rounded-full">
                  <svg class="w-4" viewBox="0 0 533.5 544.3">
                    <path
                      d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                      fill="#4285f4" />
                    <path
                      d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                      fill="#34a853" />
                    <path
                      d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                      fill="#fbbc04" />
                    <path
                      d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                      fill="#ea4335" />
                  </svg>
                </div>
                <span class="ml-4">
                  Sign In with Email
                </span>
              </button>


              <button onClick={() => setActiveForm("whatsapp")}
                class="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                <div class="bg-white p-2 rounded-full">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#25D366" d="M12.004 0.004c-6.628 0-12 5.372-12 12a11.94 11.94 0 003.438 8.424l-2.25 3.558 4.073-1.056A11.937 11.937 0 0012.004 24c6.628 0 12-5.372 12-12s-5.372-12-12-12zm0 22c-2.236 0-4.347-.654-6.141-1.887l-.438-.302-2.418.628.645-2.338-.282-.453a9.953 9.953 0 01-1.366-5.644c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z" />
                    <path fill="#25D366" d="M17.402 14.235c-.298-.149-1.766-.87-2.039-.969-.273-.099-.471-.149-.669.148-.198.298-.765.969-.94 1.168-.173.199-.346.223-.644.075-1.75-.874-2.901-1.565-4.049-3.54-.306-.525.306-.487.876-1.623.097-.198.05-.37-.025-.517-.074-.148-.669-1.615-.916-2.213-.242-.582-.489-.503-.669-.512-.173-.008-.372-.007-.571-.007s-.526.075-.802.372c-.273.298-1.043 1.02-1.043 2.487 0 1.467 1.068 2.883 1.216 3.081.149.198 2.103 3.215 5.1 4.495.712.307 1.268.49 1.7.626.715.228 1.363.196 1.878.118.572-.086 1.766-.721 2.015-1.416.248-.695.248-1.289.173-1.416-.074-.126-.273-.199-.572-.347z" />
                  </svg>

                </div>
                <span class="ml-4">
                  Sign In with WhatsApp
                </span>
              </button>
            </div>

            <div class="my-6 border-b text-center">
              <div
                class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                Sign up with {activeForm}
              </div>
            </div>


          </div>
        </div>


        {activeForm === "email" ? <>



          <div className={`justify-center ${state ? "block" : "hidden"}`}>

            <form className="max-w-sm mx-auto p-4 rounded-lg border">
              <div className="mx-auto mb-4 space-y-3">
                <h1 className="text-center text-3xl font-bold text-gray-700">Email</h1>
                <p className="text-gray-500">Verify Email to access your account</p>
              </div>
              <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Enter Your email</label>
                <input type="email" id="email" onChange={e => setEmail(e.target.value.toLowerCase())}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="name@xyz1234.com" required />
              </div>
                  {/* Checkbox */}
      <div className="flex items-center mb-4">
        <input
          id="agree"
          type="checkbox"
          checked={isChecked}
          onChange={(e) => {
            setIsChecked(e.target.checked);
            setShowWarning(false); // Clear warning if they check it
          }}
          // onChange={(e) => setIsChecked(e.target.checked)}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
        />
        <label htmlFor="agree" className="ml-2 text-sm font-medium text-gray-800">
        I agree to the{" "} <a href="/terms-of-service" className="underline hover:text-blue-800 text-blue-600" >Terms and Conditions</a>
        </label>
      </div>

      {showWarning && (
        <p className="text-sm text-red-600 mb-2">You must accept the Terms and Conditions to continue.</p>
      )}

              <button type="submit" onClick={showForm}  
                // className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                   className={`text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ${
          isChecked
            ? "bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
            : "bg-gray-400 cursor-not-allowed"
        }`}>
                Send OTP
              </button>
            </form>
          </div>


          <div className={`justify-center ${state ? "hidden" : "block"}`}>
            <div className="max-w-md p-4  border mx-auto  text-center bg-white px-4 sm:px-8 py-10 rounded-xl">
              <header className="mb-8">
                <p className="text-[15px] text-slate-500">Enter the 4-digit verification code that was sent to your email id.</p>
              </header>

              <form id="otp-form" onSubmit={handleSubmit}>
                <div className="flex items-center  justify-center gap-3">
                  {otp.map((value, index) => (
                    <input
                      key={index}
                      ref={otpRefs[index]}
                      type="text"
                      className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-gray hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                      maxLength="1"
                      value={value}
                      onChange={(e) => handleChange(e.target.value, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)} // Handle backspace
                    />
                  ))}
                </div>
                <div className="max-w-[260px] mx-auto mt-4">
                  <button type="submit"
                    className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-blue-700 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150">
                    Verify Account
                  </button>
                </div>
              </form>

              {/* <div className="text-sm text-slate-500 mt-4">Didn't receive code? <a className="font-medium text-indigo-500 hover:text-indigo-600" href="#0">Resend</a></div> */}
            </div>
          </div>
        </> :




          <>
            {/* whatsapp */}
            <div className={`justify-center ${state ? "block" : "hidden"}`}>

              <form className="max-w-sm mx-auto p-4 rounded-lg border">
                <div className="mx-auto mb-4 space-y-3">
                  <h1 className="text-center text-3xl font-bold text-gray-700">WhatsApp</h1>
                  <p className="text-gray-500">Verify Your WhatsApp to access account</p>
                </div>
                <div className="mb-5">
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 ">Enter Your WhatsApp Number</label>
                  <input type="phone" id="phone" onChange={e => setPhoneno(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="987-6543-210" required />
                </div>


               



                <button type="submit" onClick={registerW}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                  Send OTP on WhatsApp
                </button>
              </form>
            </div>


            <div className={`justify-center ${state ? "hidden" : "block"}`}>
              <div className="max-w-md p-4  border mx-auto  text-center bg-white px-4 sm:px-8 py-10 rounded-xl">
                <header className="mb-8">
                  <p className="text-[15px] text-slate-500">Enter the 4-digit verification code that was sent to your WhatsApp Number.</p>
                </header>

                <form id="otp-form" onSubmit={handleSubmit}>
                  <div className="flex items-center  justify-center gap-3">
                    {otp.map((value, index) => (
                      <input
                        key={index}
                        ref={otpRefs[index]}
                        type="text"
                        className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-gray hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                        maxLength="1"
                        value={value}
                        onChange={(e) => handleChange(e.target.value, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)} // Handle backspace
                      />
                    ))}
                  </div>
                  <div className="max-w-[260px] mx-auto mt-4">


                  <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 " required />
                    </div>
                    <label for="remember" className="ms-2 text-sm font-medium text-gray-900 ">I agree with the <a href="#" className="text-blue-600 hover:underline ">terms and conditions</a>.</label>
                </div>

                 
                    <button type="submit"
                      className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-blue-700 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150">
                      Verify Account
                    </button>
                  </div>
                </form>

                {/* <div className="text-sm text-slate-500 mt-4">Didn't receive code? <a className="font-medium text-indigo-500 hover:text-indigo-600" href="#0">Resend</a></div> */}
              </div>
            </div>
          </>}

      </div>
    </div >
  );
};

export default SignPage;