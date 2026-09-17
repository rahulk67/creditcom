import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const DashBoard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const Email = localStorage.getItem('Email');  // get name of cookies
    console.log(Email, "email recieved from localstorage");
    if (Email == null) {
      console.log("sfj;osadjf")
      navigate('/')
    }
  }, [])


  return (
    <div className='text-xl font-medium'>Incredibles, <br/> Welcome to Merchant panel. This is the default dashboard page.</div>
  )
  
}

export default DashBoard