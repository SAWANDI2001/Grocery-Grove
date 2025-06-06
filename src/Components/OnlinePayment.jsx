import React, { useState } from 'react';

function OnlinePayment() {

         const [cardData, setCardData] = useState({
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    setCardData({
      ...cardData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Card Payment Data:', cardData);
    // 🚀 Submit to backend or integrate with payment gateway
  };

  return (
    <div>
      
             <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-green-700">Card Payment</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Name on Card</label>
            <input
              type="text"
              name="cardName"
              value={cardData.cardName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              value={cardData.cardNumber}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="1234 5678 9012 3456"
              required
            />
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 mb-1">Expiry Date</label>
              <input
                type="text"
                name="expiryDate"
                value={cardData.expiryDate}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="MM/YY"
                required
              />
            </div>

            <div className="flex-1">
              <label className="block text-gray-700 mb-1">CVV</label>
              <input
                type="password"
                name="cvv"
                value={cardData.cvv}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="123"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition-colors duration-300"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>

    </div>
  )
}

export default OnlinePayment
