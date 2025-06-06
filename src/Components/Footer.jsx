import React from 'react';
import { BsTelephone } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="flex flex-col md:flex-row justify-around bg-green-900 text-white py-10 px-4 gap-8">
      <div className="flex flex-col gap-2 max-w-[250px]">
        <h1 className="text-3xl font-bold italic font-serif">Grocery<br />Grove</h1>
        <p className="text-sm">GroceryGrow, No.10,<br />Ahangama Road,<br />Imadura.</p>
        <p className="text-sm flex items-center gap-2">
          <BsTelephone /> 091-4559970
        </p>
        <p className="text-sm flex items-center gap-2">
          <MdOutlineEmail /> grocery@gmail.com
        </p>
      </div>

      <div className="flex flex-col gap-2 max-w-[250px]">
        <h3 className="text-green-400 font-bold mt-4">Quick links</h3>
        <p>
          <Link to="/" className="no-underline text-white hover:text-green-400">
            Home
          </Link>
        </p>
        <p>
          <Link to="/About" className="no-underline text-white hover:text-green-400">
            About Us
          </Link>
        </p>

        <h3 className="text-green-400 font-bold mt-4">Customer Services</h3>
        <p>
          <Link to="/Contact" className="no-underline text-white hover:text-green-400">
            Contact us
          </Link>
        </p>
      </div>

      <div className="flex flex-col gap-2 max-w-[250px]">
        <h3 className="text-green-400 font-bold mt-4">Category</h3>
        <p>
          <Link to="/Vegetable" className="no-underline text-white hover:text-green-400">
            Vegetables
          </Link>
        </p>
        <p>
          <Link to="/Fruits" className="no-underline text-white hover:text-green-400">
            Fruits
          </Link>
        </p>
        <p>
          <Link to="/Dairy" className="no-underline text-white hover:text-green-400">
            Dairy
          </Link>
        </p>
        <p>
          <Link to="/Bevarages" className="no-underline text-white hover:text-green-400">
            Beverages
          </Link>
        </p>
        <p>
          <Link to="/Snacks" className="no-underline text-white hover:text-green-400">
            Snacks and Confectionery
          </Link>
        </p>
        <p>
          <Link to="/BabyProducts" className="no-underline text-white hover:text-green-400">
            Baby Products
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Footer;

