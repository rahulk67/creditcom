import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom';

const Invoices = () => {
  const navigate = useNavigate()
  
  useEffect(() => {
    const Email = localStorage.getItem('Email');  // get name of cookies
    console.log(Email, "email recieved from localstorage");
    if (Email == null) {
      console.log("sfj;osadjf")
      navigate('/')
    }
  }, [])
  return (
    <div className='font-medium'>There are no Merchant Invoices yet.</div>
  )
}

export default Invoices