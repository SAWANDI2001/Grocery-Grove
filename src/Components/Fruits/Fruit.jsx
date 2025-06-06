import React, { useState, useEffect } from "react";
import "./Fruits.css";
import { MdArrowDropDown } from "react-icons/md";
import Avacado from "../../assets/Avacado.png";
import Banana from "../../assets/Banana.png";
import Guavava from "../../assets/Guavava.png";
import Katuanoda from "../../assets/Katuanoda.png";
import Mango from "../../assets/Mango.png";
import Papaya from "../../assets/Papaya.png";
import Pineapple from "../../assets/Pineapple.png";
import Rabutan from "../../assets/Rabutan.png";
import Watermelone from "../../assets/Watermelone.png";
import { HiShoppingCart } from "react-icons/hi";
import ProductCard from "../ProductCard";
import Dummy2 from "./Dummy2";

function Fruit() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Default");

  useEffect(() => {
    fetch("http://localhost:5000/api/products?category=Fruits") // replace with your server URL
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  const options = [
    "Default",
    "Name (A-Z)",
    "Name (Z-A)",
    "Price (Low to High)",
    "Price (High to Low)",
  ];

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  const addProduct = () => {
    const newProduct = {
      name: "Apple",
      price: 100,
      description: "New Fruits",
      category: "Fruits",
    };

    fetch("http://localhost:5000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Product created:", data);
      })
      .catch((err) => console.error(err));
  };

  /*const handleDelete = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };*/

  // Dummy products
  /*const products = [
       { name: 'Avacado', price: 'Rs.40', image: Avacado},
       { name: 'Banana.', price: 'Rs.30', image: Banana},
       { name: 'Guavava', price: 'Rs.80', image: Guavava },
       { name: 'Katu anoda', price: 'Rs.60', image: Katuanoda},
       { name: 'Mango', price: 'Rs.55', image:Mango },
       { name: 'Papaya', price: 'Rs.75', image: Papaya},
       { name: 'Pineapple', price: 'Rs.45', image: Pineapple },
       { name: 'Rabutan', price: 'Rs.50', image: Rabutan},
       { name: 'Watermelone', price: 'Rs.90', image: Watermelone },
       ];*/

  const [products, setProducts] = useState([]);

  //    { name: 'Avacado', price: 'Rs.40', image: Avacado},
  //   { name: 'Banana.', price: 'Rs.30', image: Banana},
  //   { name: 'Guavava', price: 'Rs.80', image: Guavava },
  //  { name: 'Katu anoda', price: 'Rs.60', image: Katuanoda},
  //  { name: 'Mango', price: 'Rs.55', image:Mango },
  //  { name: 'Papaya', price: 'Rs.75', image: Papaya},
  //  { name: 'Pineapple', price: 'Rs.45', image: Pineapple },
  //  { name: 'Rabutan', price: 'Rs.50', image: Rabutan},
  // { name: 'Watermelone', price: 'Rs.90', image: Watermelone },
  // ]);

  return (
    <div>
      {/* Title */}
      <p className="font-semibold text-green-600 text-2xl Fruittitle">Fruits</p>

      <div className="flex gap-4 w-full h-[1300px]">
        {/* Left Sidebar */}
        <div className="w-[300px] min-h-[600px] bg-white border-r border-gray-300 p-4">
          <p className="text-[15px] mb-2 Subtitle2 font-semibold text-black">
            Subcategories
          </p>
          <p className="text-black text-sm Catergory2 cursor-pointer hover:text-green-700">
            Fresh Vegetables
          </p>
          <p className="text-black text-sm Catergory2 cursor-pointer hover:text-green-700">
            Leafy
          </p>
          <p className="text-black text-sm Catergory2 cursor-pointer hover:text-green-700">
            Leafy
          </p>

          <br />
          <div className="PriceDiv1">
            <p className="text-[15px] mb-2 Subtitle font-semibold text-green-600">
              Price
            </p>
            <div className="flex gap-2 items-center ml-4">
              <input
                type="text"
                placeholder="Min"
                className="w-12 border border-gray-300 rounded px-1 text-sm"
              />
              <span>-</span>
              <input
                type="text"
                placeholder="Max"
                className="w-12 border border-gray-300 rounded px-1 text-sm"
              />
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full min-h-[1100px] p-4">
          {/* Sort By Section */}
          <div className="flex justify-end items-center mb-6">
            <div className="flex items-center gap-2">
              <div className="bg-amber-400 w-[250px] h-[35px] flex">
                <span className="font-semibold text-gray-800">Sort by :</span>
                <div className=" relative">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center justify-between w-44 px-4 py-2 border border-green-500 rounded text-green-600 font-semibold focus:outline-none"
                  >
                    {selected}

                    <MdArrowDropDown className="ml-2 text-xl" />
                  </button>

                  {/* Dropdown */}
                  {isOpen && (
                    <ul className="absolute mt-1 w-44 bg-white border border-gray-200 rounded shadow-md z-10">
                      {options.map((option, index) => (
                        <li
                          key={index}
                          onClick={() => handleSelect(option)}
                          className="px-4 py-2 text-sm text-gray-700 hover:bg-green-100 hover:text-green-700 cursor-pointer"
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* {products.map((product, index) => ( <Dummy2 name={product.name}/>
                                      ))} */}

          {/* Product Grid */}
          <div className="w-[800px] h-[1100px] marginDiv">
            <div className=" grid grid-cols-3 gap-10 h-[1100px] w-[800px] ">
              {products.map((product, index) => (
                // <div key={index} className="border rounded shadow-sm p-4 flex flex-col items-center hover:shadow-md transition">
                //    <img src={product.image} alt={product.name} className="w-40 h-40 object-contain mb-3"/>

                //   <p className="font-bold text-[16px] text-gray-800 mb-1 text-center">{product.name}</p>
                //   <p className="text-black text-[16px] mb-2 text-center">{product.price}</p>
                //   <button className="bg-green-600 text-white px-4 py-1 text-sm font-semibold rounded w-[150px] h-[30px] hover:bg-green-700 flex items-center justify-center gap-2">
                //      <HiShoppingCart className="text-lg" />
                //     Add to Cart
                //   </button>
                // </div>
                // <FruitCard name={product.name} price={product.price} image={product.image} index={index} onDelete={() => handleDelete(index)}/>

                <ProductCard
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fruit;
