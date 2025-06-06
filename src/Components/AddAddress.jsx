import React, { useState } from 'react';

function AddAddress() {

        const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Shipping Address:', formData);
    // 🚀 Submit the data to backend or redirect
  };

  return (
    <div>
      
          <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-green-700">Shipping Address</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Street</label>
            <input
              type="text"
              name="Street"
              value={formData.Street}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
              placeholder="123 Main St"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
              placeholder="City"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Postal Code</label>
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
              placeholder="12345"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Country</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
              placeholder="Country"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-500 transition-colors duration-300"
          >
            Save Address
          </button>
        </form>
      </div>
    </div>

    </div>
  )
}

export default AddAddress
