import { Outlet, Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import NewSideBar from "./NewSideBar";

const Layout = () => {

    const [showside, setShowside] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const Email = localStorage.getItem('Email');  // get name of cookies
        console.log(Email, "email recieved from localstorage");
        if (Email == null) {
            console.log("sfj;osadjf")
            setShowside(false);
            
            navigate('/')
           
        }
        else{
            setShowside(true);

        }

    })



    return (
        <>
            <div className="flex mt-20 h-screen">
                {/* sidebar */}


                {showside ?
              
                    <NewSideBar />

                    : ""}
              


                {/* Main content area */}
                <div className="flex-grow md:ml-64 ml-2 ">
                    {/* Navbar */}
                    {/* <header className="bg-white  fixed w-full z-10 top-0 left-0">
                        <div className="max-w-7xl mx-auto py-4 px-4">
                            <h1 className="text-xl font-bold">IncrediblesDeals</h1>
                        </div>
                    </header> */}

                    {/* Content area for rendering components via Outlet */}
                    <div className="m-4 ">
                        <Outlet />
                    </div>
                </div>



            </div>
        </>
    )
};

export default Layout;
