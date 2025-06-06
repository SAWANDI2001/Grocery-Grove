import React from 'react';
import { Link } from 'react-router-dom';
import fruits from "../assets/fruits.png";
import vegetable from "../assets/vegetable.png";
import Dairy from "../assets/Dairy.png";
import Bevarages from "../assets/Bevarages.png";
import Snacks from "../assets/Snacks and Confectionery.png";
import BabyProduct from "../assets/baby product.png";

function ShopByCategory() {
  return (
    <div className="w-full h-[600px] flex flex-col items-center">
      <p className="text-3xl font-bold mt-4">Shop by Category</p>

      <div className="flex flex-row justify-center gap-[180px] mt-10">
        {/* Vegetable */}
        <div className="w-[200px] h-[200px] bg-yellow-100 rounded-full mt-5 flex flex-col items-center">
          <img src={vegetable} alt="vegetable" className="w-[100px] h-[100px] mt-2" />
          <p className="text-xl font-bold mt-1">
            <Link to="/Vegetable" className="hover:underline text-black">Vegetable</Link>
          </p>
        </div>

        {/* Fruits */}
        <div className="w-[200px] h-[200px] bg-yellow-100 rounded-full mt-5 flex flex-col items-center">
          <img src={fruits} alt="fruits" className="w-[100px] h-[100px] mt-2" />
          <p className="text-xl font-bold mt-1">
            <Link to="/Fruits" className="hover:underline text-black">Fruits</Link>
          </p>
        </div>

        {/* Dairy */}
        <div className="w-[200px] h-[200px] bg-yellow-100 rounded-full mt-5 flex flex-col items-center">
          <img src={Dairy} alt="dairy" className="w-[100px] h-[100px] mt-2" />
          <p className="text-xl font-bold mt-1">
            <Link to="/Dairy" className="hover:underline text-black">Dairy</Link>
          </p>
        </div>
      </div>

      {/* Second row */}
      <div className="flex flex-row justify-center gap-[180px] mt-6">
        {/* Beverages */}
        <div className="w-[200px] h-[200px] bg-yellow-100 rounded-full mt-5 flex flex-col items-center">
          <img src={Bevarages} alt="beverages" className="w-[150px] h-[100px] mt-2" />
          <p className="text-xl font-bold mt-1">
            <Link to="/Bevarages" className="hover:underline text-black">Beverages</Link>
          </p>
        </div>

        {/* Snacks */}
        <div className="w-[200px] h-[200px] bg-yellow-100 rounded-full mt-5 flex flex-col items-center">
          <img src={Snacks} alt="snacks" className="w-[150px] h-[100px] mt-2" />
          <p className="text-xl font-bold mt-1 text-center">
            <Link to="/Snacks" className="hover:underline text-black">Snacks and Confectionery</Link>
          </p>
        </div>

        {/* Baby Product */}
        <div className="w-[200px] h-[200px] bg-yellow-100 rounded-full mt-5 flex flex-col items-center">
          <img src={BabyProduct} alt="baby product" className="w-[100px] h-[100px] mt-2" />
          <p className="text-xl font-bold mt-1">
            <Link to="BabyProduct" className="hover:underline text-black">Baby Product</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ShopByCategory;
