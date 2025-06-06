import React from 'react';
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from 'react-router-dom';

function ShoppingCart() {
  const [showAddress, setShowAddress] = React.useState(false);

  const products = [
    {
      name: "Running Shoes",
      description: [
        "Lightweight and comfortable",
        "Breathable mesh upper",
        "Ideal for jogging and casual wear",
      ],
      offerPrice: 250,
      price: 200,
      quantity: 1,
      image:
        "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage2.png",
      category: "Footwear",
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-[1400px] min-h-[600px] ">
        <div className="flex flex-col md:flex-row py-16 w-full px-6 mx-auto">

          <div className="flex-1 max-w-4xl">

            <h1 className="text-3xl font-medium mb-6">
              Shopping Cart{" "}
              <span className="text-sm text-green-700">
                {products.length} Items
              </span>
            </h1>

            <div className="grid grid-cols-[2fr_1fr_1fr] text-green-900 text-base font-medium pb-3">
              <p className="text-left">Product Details</p>
              <p className="text-center">Subtotal</p>
              <p className="text-center-8">Action</p>
            </div>

            {products.map((product, index) => (
              <div
                key={index}
                className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 items-center text-sm md:text-base font-medium pt-3"
              >
                <div className="flex items-center md:gap-6 gap-3">
                  <div className="cursor-pointer w-24 h-24 flex items-center justify-center border border-gray-300 rounded">
                    <img
                      className="max-w-full h-full object-cover"
                      src={product.image}
                      alt={product.name}
                    />
                  </div>
                  <div>
                    <p className="hidden md:block font-semibold">
                      {product.name}
                    </p>
                    <div className="font-normal text-gray-500/70">
                      
                      <div className="flex items-center">
                        <p>Qty:</p>

                        <select className="outline-none">
                          {Array(5)
                            .fill("")
                            .map((_, idx) => (
                              <option key={idx} value={idx + 1}>
                                {idx + 1}
                              </option>
                            ))}
                        </select>

                      </div>

                    </div>
                  </div>
                </div>

                <p className="text-center">
                  Rs.{product.offerPrice * product.quantity}
                </p>
                <button className="cursor-pointer mx-3">
                  <AiFillCloseCircle size={25} color='red'/>
                    
                 
                </button>
              </div>
            ))}

            <button className="group cursor-pointer flex items-center mt-8 gap-2 text-green-600 font-medium">
             
             <AiOutlineArrowLeft />

               
              Continue Shopping
            </button>
          </div>

          {/*Order Summary*/ }

          <div className="max-w-[360px] w-full bg-gray-100/80 p-5 max-md:mt-16 border border-gray-300/100 h-120">
            <h2 className="text-xl md:text-xl font-medium">Order Summary</h2>
            <hr className="border-gray-300 my-5" />

            <div className="mb-6">
              <p className="text-sm font-medium uppercase">Delivery Address</p>
              <div className="relative flex justify-between items-start mt-2">
                <p className="text-gray-500">No address found</p>
                <button
                  onClick={() => setShowAddress(!showAddress)}
                  className="text-green-600 hover:underline cursor-pointer"
                >
                  Add
                </button>
                {showAddress && (
                  <div className="absolute top-12 py-1 bg-white border border-gray-300 text-sm w-full z-10">
                    <p
                      onClick={() => setShowAddress(false)}
                      className="text-gray-500 p-2 hover:bg-gray-100"
                    >
                      New York, USA
                    </p>
                    <p
                      onClick={() => setShowAddress(false)}
                      className="text-green-700 text-center cursor-pointer p-2 hover:bg-indigo-500/10"
                    >
                      <Link to="/AddAddress">Add address</Link>
                    </p>
                  </div>
                )}
              </div>

              <p className="text-sm font-medium uppercase mt-6">
                Payment Method
              </p>
              <select className="w-full border border-gray-300 bg-white px-3 py-2 mt-2 outline-none">
                <option value="COD">Cash On Delivery</option>
                <option value="Online">Online Payment</option>
              </select>
            </div>

            <hr className="border-gray-300" />

            <div className="text-gray-500 mt-4 space-y-2">
              <p className="flex justify-between">
                <span>Price</span>
                <span>Rs.20</span>
              </p>
              <p className="flex justify-between">
                <span>Shipping Fee</span>
                <span className="text-green-600">Free</span>
              </p>
              
              <p className="flex justify-between text-lg font-medium mt-3">
                <span>Total Amount:</span>
                <span>Rs.20</span>
              </p>
            </div>

            <button className="w-full py-3 mt-6 cursor-pointer bg-green-700 text-white font-medium hover:bg-green-500 transition">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
