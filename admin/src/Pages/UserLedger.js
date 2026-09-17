import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from "react-router-dom"

const UserLedger = () => {
    const backUrl = process.env.REACT_APP_URL;
    const navigate = useNavigate();

    const [data, setData] = useState([]);

    const editProduct = (e, id) => {
        e.preventDefault();
        navigate(`/edit/deal/${id}`);
    };

    useEffect(() => {
        axios.get(`${backUrl}/admin/alluser`)
            .then((res) => {
                console.log(res, "ALL user")
                setData(res.data);


            })
            .catch((err) => {
                console.error(err);
            });
    }, [backUrl]); // Added dependency array to avoid repeated API calls


    useEffect(() => {
        const Email = localStorage.getItem('Email');  // get name of cookies
        console.log(Email, "email recieved from localstorage");
        if (Email == null) {
            console.log("sfj;osadjf")
            navigate('/')
        }
    }, [])





    const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.name.endsWith('.xlsx')) {
      setFile(selectedFile);
    } else {
      alert("Please select a valid Excel (.xlsx) file.");
    }
  };

  const handleUpload = async () => {
    if (!file) return;
  
    const formData = new FormData();
    formData.append('excelFile', file);
  
    try {
      const response = await axios.post(`${backUrl}/admin/upload-excel`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
  
      console.log('Upload successful:', response.data);
      alert(response.data.message)
      window.location.reload()
      // Optionally show success message to user
    } catch (error) {
      console.error('Upload failed:', error.response?.data || error.message);
      alert('Upload failed.');
    }
  };

    return (
        <div>

<div className="max-w-mdd md:w-full mx-auto p-4 mb-2 border rounded-x shadow-mjd bg-white space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">Upload Excel</h2>

      <label className="block">
        <span className="sr-only">Choose Excel file</span>
        <input
          type="file"
          accept=".xlsx"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500
                     file:mr-4 file:py-2 file:px-4
                     file:rounded-full file:border-0
                     file:text-sm file:font-semibold
                     file:bg-blue-50 file:text-blue-700
                     hover:file:bg-blue-100"
        />
      </label>

      {file && (
        <div className="text-sm text-gray-700">
          <strong>Selected File:</strong> {file.name}
        </div>
      )}

      <button
        onClick={handleUpload}
        disabled={!file}
        className={`w-full py-2 px-4 rounded-lg font-semibold text-white 
          ${file ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'}`}
      >
        Upload
      </button>

      <h1>Excel Format Will Be like this</h1>

      <table className="min-w-full divide-y divide-gray-200 text-sm text-left text-gray-900">
  <thead className="bg-gray-100 text-xs  text-gray-700">
    <tr>
      <th scope="col" className="px-6 py-3">Date</th>
      <th scope="col" className="px-6 py-3">UTR</th>
      <th scope="col" className="px-6 py-3">Remarks</th>
      <th scope="col" className="px-6 py-3">User ID</th>
      <th scope="col" className="px-6 py-3">Amount</th>
    </tr>
  </thead>
  <tbody className="divide-y divide-gray-200">
    <tr>
      <td className="px-6 py-4">13/Feb</td>
      <td className="px-6 py-4">urt number</td>
      <td className="px-6 py-4">your repmsrs</td>
      <td className="px-6 py-4">User Email (xyz123@gmail.com)</td>
      <td className="px-6 py-4">1234</td>
    </tr>
  </tbody>
</table>


<a
  href="/UserLedger Sample Excel.xlsx"
  download
  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow transition"
>
  Download Sample Excel
</a>




    </div>
        <div className="border">
            <div className="relative h-[600px] overflow-y-auto overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 DARK:text-gray-400">
                    <thead className="text-xs sticky top-0 z-10 text-gray-700 uppercase bg-gray-50 DARK:bg-gray-700 DARK:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">User ID </th>
                            <th scope="col" className="px-6 py-3">User Name</th>
                            <th scope="col" className="px-6 py-3">Payable Amount</th>

                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item._id} className="bg-white border-b DARK:bg-gray-800 DARK:border-gray-700">
                                <Link to={`/user-ledger/${item?.Email}`} className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap DARK:text-white">{item?.Email ? item?.Email : item?.Phoneno}</Link>
                                <td className="px-6 py-4">{(item?.first_Name) + (item?.last_Name)}</td>
                                <td className="px-6 py-4">{item?.Wallet}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
};

export default UserLedger;
