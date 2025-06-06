import React from "react"; 
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaPlus, FaShoppingCart } from 'react-icons/fa';
import { AiFillProduct } from "react-icons/ai";

function Dashboard() {
  const sidebarLinks = [
    {
      name: 'Dashboard',
      path: '/',
      icon: <FaTachometerAlt className="text-xl" />,
    },
    {
      name: 'Add Product',
      path: '/AddProduct',
      icon: <FaPlus className="text-xl" />,
    },
    {
      name: 'Product List',
      path: '/ProductList',
      icon: <AiFillProduct className="text-xl"/>,
    },
    {
      name: 'Orders',
      path: '/MyOrderList',
      icon: <FaShoppingCart className="text-xl" />,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* Top Navbar */}
      <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-500 py-3 bg-green-700 transition-all duration-300">
        <div className="w-65 h-20 flex justify-center">
          <Link to="/">
            <h1 className="text-3xl font-serif text-white font-bold italic">
              Grocery
              <br />
              Grove
            </h1>
          </Link>
        </div>

        <div className="w-80 h-20 flex justify-center">
          <div className="flex items-center gap-20 text-white">
            <p>Hi! Admin</p>
            <button className="border rounded-full text-sm px-4 py-1 w-25">Logout</button>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="md:w-64 w-full border-r h-[550px] text-base border-gray-500 pt-4 flex flex-col bg-white shadow-md">
        {sidebarLinks.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className={`flex items-center py-3 px-6 gap-4 text-green-700 hover:bg-green-100 transition-all duration-200 ${
              index === 0 ? 'bg-green-200 font-semibold' : ''
            }`}
          >
            {item.icon}
            <span className="hidden md:inline">{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
