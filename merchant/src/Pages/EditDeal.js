import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams ,useNavigate} from 'react-router-dom';

const EditDeal = () => {
  const backUrl = process.env.REACT_APP_URL;
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    DealTitle: '',
    Price: '',
    Offer: '',
    Store: '',
    Variant: '',
    OfferAmmount: '',
    CardType: '',
    DealNumber: '',
    offerCash: '',
    Status: '',
  });

  const { id } = useParams(); // Get the ID from the URL parameters

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  useEffect(() => {
    axios.get(`${backUrl}/admin/editdeal/${id}` , {withCredentials: true})
      .then((res) => {
        const data = res.data.data;
        setFormData({
          DealTitle: data.DealTitle || '',
          Price: data.Price || '',
          Offer: data.Offer || '',
          Store: data.Store || '',
          Variant: data.Variant || '',
          OfferAmmount: data.OfferAmmount || '',
          CardType: data.CardType || '',
          DealNumber: data.DealNumber || '',
          offerCash: data.offerCash || '',
          Status: data.Status || '',
        });
      })
      .catch((err) => console.error(err));

     
    
  }, [backUrl, id]); // Dependency array to prevent infinite loop

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`${backUrl}/admin/updatedeal/${id}`,formData).then((res)=>{
      navigate("/product-data")
    }).catch((err)=>{
      console.error(err);
    })
  };


  useEffect(() => {
    const Email = localStorage.getItem('Email');  // get name of cookies
    console.log(Email, "email recieved from localstorage");
    if (Email == null) {
        console.log("sfj;osadjf")
        navigate('/')
    }
}, [])


  return (
    <div className='mx-14 my-10 p-10'>
      <form
        className="max-w-3xl mx-auto p-4 bg-white border grid grid-cols-1 md:grid-cols-2 gap-4 text-sm"
        onSubmit={handleSubmit}
      >
        <h2 className="col-span-1 md:col-span-2 text-2xl font-bold mb-4">Edit Deal Data</h2>

        {/* Deal Title */}
        <div>
          <label htmlFor="dealTitle" className="block font-medium text-gray-700">
            Deal Title
          </label>
          <input
            type="text"
            id="dealTitle"
            name="DealTitle"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={formData.DealTitle}
            onChange={handleChange}
          />
        </div>

        {/* Price */}
        <div>
          <label htmlFor="price" className="block font-medium text-gray-700">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="Price"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={formData.Price}
            onChange={handleChange}
          />
        </div>

        {/* Offer */}
        <div className="md:col-span-2">
          <label htmlFor="offer" className="block font-medium text-gray-700">
            Offer
          </label>
          <textarea
            id="offer"
            name="Offer"
            rows="3"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={formData.Offer}
            onChange={handleChange}
          />
        </div>

        {/* Store */}
        <div>
          <label htmlFor="store" className="block font-medium text-gray-700">
            Store
          </label>
          <input
            type="text"
            id="store"
            name="Store"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={formData.Store}
            onChange={handleChange}
          />
        </div>

        {/* Variant */}
        <div>
          <label htmlFor="variant" className="block font-medium text-gray-700">
            Variant
          </label>
          <input
            type="text"
            id="variant"
            name="Variant"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={formData.Variant}
            onChange={handleChange}
          />
        </div>

        {/* Card Type */}
        <div>
          <label htmlFor="cardType" className="block font-medium text-gray-700">
            Card Type
          </label>
          <input
            type="text"
            id="cardType"
            name="CardType"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={formData.CardType}
            onChange={handleChange}
          />
        </div>

        {/* Offer Amount */}
        <div>
          <label htmlFor="offerAmount" className="block font-medium text-gray-700">
            Offer Amount
          </label>
          <input
            type="number"
            id="offerAmount"
            name="OfferAmmount"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={formData.OfferAmmount}
            onChange={handleChange}
          />
        </div>

        {/* Deal Number */}
        <div>
          <label htmlFor="dealNumber" className="block font-medium text-gray-700">
            Deal Number
          </label>
          <input
            type="text"
            id="dealNumber"
            name="DealNumber"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={formData.DealNumber}
            onChange={handleChange}
          />
        </div>

        {/* Offer Cash */}
        <div>
          <label htmlFor="offerCash" className="block font-medium text-gray-700">
            Offer Cash
          </label>
          <input
            type="text"
            id="offerCash"
            name="offerCash"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={formData.offerCash}
            onChange={handleChange}
          />
        </div>

        {/* Status */}
        <div className="md:col-span-2">
          <label htmlFor="Status" className="block font-medium text-gray-700">
            Status
          </label>
          <select
            id="Status"
            name="Status"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={formData.Status}
            onChange={handleChange}
          >
            <option value="">Select a Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditDeal;
