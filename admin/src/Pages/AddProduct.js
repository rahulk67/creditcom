import React, { useState ,useEffect } from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';


const ProductForm = () => {

  const navigate = useNavigate();


  const backUrl = process.env.REACT_APP_URL;
  // Form state
  const [formData, setFormData] = useState({
    DealTitle: '',
    Price: '',
    Iprice: '',
    Offer: '',
    Store: '',
    Variant: '',
    DColor: '',
    OfferAmmount: '',
    CardType: '',
    DealNumber: '',
    offerCash: '',
    thparty:'',
    Image: null,
    Link: '',
    Status: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    axios.post(`${backUrl}/admin/adddeals`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data' // Optional, Axios sets this automatically for FormData
      }
    }).then((res) => {
      console.log(res);
      alert("Deal added sucessfully !");
      window.location.reload()
    }).catch((err) => {
      console.log(err);
    })

    // Add your form submission logic here
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
    <div className=''>

      <form
        className="max-w-3xl mx-auto p-4 bg-white border grid grid-cols-1 md:grid-cols-2 gap-4 text-sm"
        onSubmit={handleSubmit}
      >
        <h2 className="col-span-1 md:col-span-2 text-2xl font-bold mb-4">Add Product</h2>

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

        <div>
          <label htmlFor="price" className="block font-medium text-gray-700">
             Incredibles Price
          </label>
          <input
            type="number"
            id="Iprice"
            name="Iprice"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={formData.Iprice}
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
          <label htmlFor="variant" className="block font-medium text-gray-700">
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


        <div>
          <label htmlFor="DColor" className="block font-medium text-gray-700">
            Color
          </label>
          <input
            type="text"
            id="DColor"
            name="DColor"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={formData.DColor}
            onChange={handleChange}
          />
        </div>


        {/* Deal cardType */}
        <div>
          <label htmlFor="cardType" className="block font-medium text-gray-700">
            CardType
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

        {/* offerAmount */}
        <div>
          <label htmlFor="offerAmount" className="block font-medium text-gray-700">
            OfferAmount
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

        {/* Deal Title */}
        <div>
          <label htmlFor="dealNumber" className="block font-medium text-gray-700">
            DealNumber
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


        {/* Deal offerCash */}
        <div>
          <label htmlFor="offerCash" className="block font-medium text-gray-700">
            Incredibles CashBack
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

        {/* Deal offerCash */}
        <div>
          <label htmlFor="thparty" className="block font-medium text-gray-700">
            3rd Party CashBack
          </label>
          <input
            type="text"
            id="thparty"
            name="thparty"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={formData.thparty}
            onChange={handleChange}
          />
        </div>

        {/* Image Input */}
        <div className="md:col-span-2">
          <label htmlFor="image" className="block font-medium text-gray-700">
            Image
          </label>
          <input
            type="file"
            id="image"
            name="Image"
            className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer focus:outline-none"
            onChange={handleChange}
          />
        </div>

        {/* Link */}
        <div className="md:col-span-2">
          <label htmlFor="link" className="block font-medium text-gray-700">
            Link
          </label>
          <input
            type="text"
            id="link"
            name="Link"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={formData.Link}
            onChange={handleChange}
          />
        </div>

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
            <option value="">Select an Status</option>
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

export default ProductForm;
