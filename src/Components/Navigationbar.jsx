import React from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { HiShoppingCart } from 'react-icons/hi';
import { Link } from 'react-router-dom';

function Navigationbar() {
  return (
    <div className="bg-green-600 h-24 flex items-center justify-between px-8 text-white font-serif">
      <h1 className="text-3xl font-bold italic">
        Grocery<br />Grove
      </h1>

      <ul className="flex items-center gap-12">
        <li>
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>

        <li className="relative group">
          <span className="flex items-center gap-1 cursor-pointer">
            Categories
            <RiArrowDropDownLine />
          </span>
          <ul className="hidden group-hover:block absolute bg-green-600 top-full left-0 rounded shadow-md min-w-[180px] z-10">
            <li className="px-4 py-2 hover:bg-green-700">
              <Link to="/Vegetable">Vegetable</Link>
            </li>
            <li className="px-4 py-2 hover:bg-green-700">
              <Link to="/Fruits">Fruit</Link>
            </li>
            <li className="px-4 py-2 hover:bg-green-700">
              <Link to="/BabyProducts">Baby Products</Link>
            </li>
            <li className="px-4 py-2 hover:bg-green-700">
              <Link to="/Dairy">Dairy</Link>
            </li>
            <li className="px-4 py-2 hover:bg-green-700">
              <Link to="/Bevarages">Beverages</Link>
            </li>
            <li className="px-4 py-2 hover:bg-green-700">
              <Link to="/Snacks">Snacks and Confection</Link>
            </li>
          </ul>
        </li>

        <li>
          <Link to="/Contact" className="hover:underline">
            Contact us
          </Link>
        </li>

        <li>
          <Link to="/About" className="hover:underline">
            About us
          </Link>
        </li>

        <li className="text-orange-400 font-bold">
          <Link to="/SignIn">
            <u>Sign in</u>
          </Link>
        </li>

        <li className="relative">
          <Link to="/Cart" className="flex items-center gap-1">
            <HiShoppingCart size={25} />
            <span className="absolute top-0 -left-0 bg-red-600 text-white text-xs px-1 rounded-full">
              0
            </span>
           
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigationbar;
