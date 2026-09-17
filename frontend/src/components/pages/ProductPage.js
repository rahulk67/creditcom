import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import AddAccount from "./PopUp/AddAccount";
import AddPan from "./PopUp/AddPan";

const ProductPage = () => {
  const id = useParams().id;
  const Id = useParams().Id;
  console.log(id);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const backUrl = process.env.REACT_APP_URL;
  const [did, setDid] = useState();

  const [pan, setPan] = useState(true);
  const [ac, setAc] = useState(true);

  useEffect(() => {}, []);

  useEffect(() => {
    axios
      .get(`${backUrl}/user/singledeal/${id}/${Id}`, { withCredentials: true })
      .then((res) => {
        const msg = res.data.msg;
        const Did = res.data.Deal.DealId;
        setDid(Did);
        console.log(Did, "deasl");
        if (msg == "no deal found") {
          console.log("No deals is live !");
        } else {
          // setShowdeals(false);
          const data = res.data.Deal;
          // console.log("hello form pro");
          // console.log(data);
          setData(data);
          console.log(res, "hh");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const shopPage = (e) => {
    e.preventDefault();

    axios.get(`${backUrl}/user/me`, { withCredentials: true }).then((res) => {
      console.log(res, "me");
      const msg = res.data.msg;
      if (msg == "Email not verifed !") {
        // alert("Please Verify your email")
        navigate("/sign-in");
      } else if (msg == "Email verifed !") {
        const Acvrifed = res.data.user.Acvrifed;
        const panvrifed = res.data.user.Panvrifed;
        if (!panvrifed) {
          setPan(false);
        } else {
          setPan(true);
          if (Acvrifed) {
            console.log(Acvrifed, "Acvrifed");
            setAc(true);
            axios
              .post(
                `${backUrl}/user/orderclick`,
                { Product_id: id, MId: Id , MGst: data?.GST  },
                { withCredentials: true }
              )
              .then((res) => {
                console.log(res, "response");
                const url = data.Link;
                console.log(url); // Replace with your desired URL
                window.open(url, "_blank", "noopener,noreferrer");
                const Id = res.data.msg;
                console.log(Id, "changes id");

                navigate(`/single-product/${id}/${Id}/${did}`);
              })
              .catch((err) => {
                console.log(err);
              });
          } else {
            setAc(false);
          }
        }
      } else {
        navigate("/sign-in");
      }
    });
  };

  return (
    <>
      {pan ? ac ? "" : <AddAccount /> : <AddPan />}

      <section className="py-6 px-3 sm:py-6">
        <div className="container mx-auto px-4">
          <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-10 lg:mt-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-3  lg:row-end-1">
              <div className="max-w-xl pl-10 overflow-hidden rounded-lg">
                <img
                  className="h-full w-60 max-w-full object-cover"
                  src={`${backUrl}/${data.Image}`}
                  alt=""
                />
              </div>
            </div>

            <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
              <h1 className="sm: text-2xl mt-0 font-bold uppercase text-gray-900 sm:text-3xl">
                {data.DealTitle}
              </h1>

              <div className="mt-2 flex items-center">
                <p className="ml-1 text-sm font-medium text-gray-500">
                  ₹ {data.Price}
                </p>
                <p className="ml-1 text-sm font-medium uppercase text-gray-500">
                  ({data.Variant})
                </p>
              </div>

              <div className="mt-3 flex select-none flex-wrap items-center gap-1"></div>

              <h2 className="mt-2 text-base text-gray-900"></h2>

              <div className="mt-3 flex select-none flex-wrap items-center gap-1">
                <label className="">
                  <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">
                    Rs. {data.Price - data?.OfferAmmount}
                  </p>
                  <span className="mt-1 block text-center text-xs">
                    You'll spend
                  </span>
                </label>

                <label className="">
                  <input
                    type="radio"
                    name="subscription"
                    value="8 Months"
                    className="peer sr-only"
                    checked
                  />
                  <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">
                    Rs.{" "}
                    {Number(data?.Price ?? 0) -
                      Number(data?.OfferAmmount ?? 0) -
                      Number(data?.thparty ?? 0) +
                      Number(data?.offerCash ?? 0)}
                  </p>
                  <span className="mt-1 block text-center text-xs">
                    Recieve from App
                  </span>
                </label>

                <label className="">
                  <input
                    type="radio"
                    name="subscription"
                    value="12 Months"
                    className="peer sr-only"
                  />
                  <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">
                    Rs.{" "}
                    {Number(data?.Price ?? 0) -
                      Number(data?.OfferAmmount ?? 0) -
                      Number(data?.thparty ?? 0) +
                      Number(data?.offerCash ?? 0) +
                      Number(data.thparty)}
                  </p>
                  <span className="mt-1 block text-center text-xs">
                    Total You Recieve
                  </span>
                </label>

                <label className="">
                  <input
                    type="radio"
                    name="subscription"
                    value="12 Months"
                    className="peer sr-only"
                  />
                  <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">
                    Rs. {Number(data?.offerCash ?? 0)}
                  </p>
                  <span className="mt-1 block text-center text-xs">
                    Total Earnings
                  </span>
                </label>
              </div>

              <div className="mt-6 flex flex-col items-center justify-between space-y-4 border-t border-b py-2 sm:flex-row sm:space-y-0">
                <button
                  onClick={shopPage}
                  type="button"
                  className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 mr-3 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  <a href="">Click To Buy </a>
                </button>
              </div>

              <ul className="mt-8 space-y-2 border px-2 rounded-md">
                <li className="flex items-center text-left text-sm font-medium text-gray-600">
                  <svg
                    className="mr-2 block h-5 w-5 align-middle text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      className=""
                    ></path>
                  </svg>
                  100% Secure Prepaid Order
                </li>

                <li className="flex items-center text-left text-sm font-medium text-gray-600">
                  <svg
                    className="mr-2 block h-5 w-5 align-middle text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      className=""
                    ></path>
                  </svg>
                  Amount Released on delivery confirmation
                </li>

                <li className="flex items-center text-left text-sm font-medium text-gray-600">
                  <svg
                    className="mr-2 block h-5 w-5 align-middle text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6M9 16h6M8 4h8a2 2 0 012 2v12a2 2 0 01-2 2H8a2 2 0 01-2-2V6a2 2 0 012-2z"
                    />
                  </svg>
                  GSTINFO : {data?.GST ? data?.GST : "Gst info not available"}
                </li>
              </ul>
            </div>

            {/* offer details from here  */}
            <div className="lg:col-span-3 border px-2 rounded-md">
              <div className="border-b border-gray-300">
                <nav className="flex gap-4">
                  <a
                    href="#"
                    title=""
                    className="border-b-2 border-gray-900 py-2 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800"
                  >
                    {" "}
                    Offer Details{" "}
                  </a>

                  {/* <a href="#" title="" className="inline-flex items-center border-b-2 border-transparent py-4 text-sm font-medium text-gray-600">
                                        Reviews
                                        <span className="ml-2 block rounded-full bg-gray-500 px-2 py-px text-xs font-bold text-gray-100"> 1,209 </span>
                                    </a> */}
                </nav>
              </div>

              <div className="mt-3 flow-root md:mt-4">
                {/* <h1 className="text-3xl font-bold">Delivered To Your Door</h1> */}
                <p className="mt-1">
                  You will get an offer Amount of {data.OfferAmmount}
                </p>
                {/* <h1 className="mt-8 text-3xl font-bold">From the Fine Farms of Brazil</h1> */}
                <p className="mt-4">
                  {data.Offer} cash back on {data.Store} Store
                </p>
              </div>
            </div>

            {/* tds details from here */}
            <div className="lg:col-span-3 border px-2 rounded-md">
              <div className="border-b border-gray-300">
                <nav className="flex gap-4">
                  <a
                    href="#"
                    title=""
                    className="border-b-2 border-gray-900 py-2 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800"
                  >
                    {" "}
                    TDS Details{" "}
                  </a>

                  {/* <a href="#" title="" className="inline-flex items-center border-b-2 border-transparent py-4 text-sm font-medium text-gray-600">
                                        Reviews
                                        <span className="ml-2 block rounded-full bg-gray-500 px-2 py-px text-xs font-bold text-gray-100"> 1,209 </span>
                                    </a> */}
                </nav>
              </div>

              <div className="md:mt-3 mt-3 flow-root ">
                {/* <h1 className="text-3xl font-bold">Delivered To Your Door</h1> */}
                <p className="mt-1">
                  2% TDS (Rs. {data.offerCash * 0.02}) will be deducted on cash
                  reward and rest amount will be transferred to your bank
                  account ({data?.offerCash - data?.offerCash * 0.02} )
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
