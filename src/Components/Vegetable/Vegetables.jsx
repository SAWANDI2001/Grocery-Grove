import React, { useState, useEffect } from "react";
import "./Vegetable.css";
import { MdArrowDropDown } from "react-icons/md";
import Tomatoes from "../../assets/Tomatoes.png";
import Potatoes from "../../assets/Potatoes.png";
import Garlic from "../../assets/Garlic.png";
import Onion from "../../assets/Onion.png";
import Leeks from "../../assets/Leeks.png";
import Chilli from "../../assets/Chilli.png";
import Carrot from "../../assets/Carrot.png";
import Gotucola from "../../assets/Gotucola.png";
import Kankun from "../../assets/Kankun.png";
import ProductCard from "../ProductCard";
import AddProduct from "../DashBoard/AddProduct";

function Vegetables() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Default");

  useEffect(() => {
    fetch("http://localhost:5000/api/products?category=Vegetable&inStock=true") // replace with your server URL
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
      name: "Beans",
      price: 2,
      description: "Sweet Beans",
      category: "Vegetables",
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

  const UpdateProduct = () => {
    console.log("Update button clicked");
    const existingProduct = {
      _id: "6834972b012957e424db505b",
      name: "Beans",
      price: 500,
      description: "Sweet Beans Updated",
      category: "Vegetables",
      createdAt: "2025-05-26T16:30:35.746Z",
      updatedAt: "2025-05-26T16:30:35.746Z",
    };
    const id = existingProduct._id;
    fetch(`http://localhost:5000/api/products/${id}`, {
      method: "PUT", // or PATCH
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(existingProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Product updated:", data);
      })
      .catch((err) => console.error(err));
  };

  const DeleteProduct = () => {
    console.log("Delete button clicked");
    const id = "68349624012957e424db5043";
    fetch(`http://localhost:5000/api/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Product deleted:", data);
      })
      .catch((err) => console.error(err));
  };

  const [products, setProducts] = useState([]);

  // const [products, setProducts] = useState([
  //   { name: 'Tomatoes', price: 'Rs.40', image: Tomatoes },
  //   { name: 'Potatoes', price: 'Rs.30', image: Potatoes },
  //   { name: 'Garlic', price: 'Rs.80', image: Garlic },
  //   { name: 'Onion', price: 'Rs.60', image: Onion },
  //   { name: 'Leeks', price: 'Rs.55', image:Leeks },
  //   { name: 'Chilli', price: 'Rs.75', image: Chilli },
  //   { name: 'Carrot', price: 'Rs.45', image: Carrot },
  //   { name: ' Gotucola', price: 'Rs.50', image:  Gotucola },
  //   { name: 'Kankun', price: 'Rs.90', image: Kankun },
  // ]);

  return (
    <div>
      {/* Title */}
      <p className="font-semibold text-green-600 text-2xl Fruittitle">
        Vegetable
      </p>

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
              <div className=" w-[250px] h-[35px] flex">
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

          {/* Product Grid */}
          <div className="w-[800px] h-[1100px] marginDiv">
            <div className=" grid grid-cols-3 gap-10 h-[1100px] w-[800px] ">
              {products.map((product, index) => (
                <ProductCard
                  name={product.name}
                  price={product.price}
                  image={Potatoes}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <button
          className="flex items-center justify-between w-44 px-4 py-2 border border-green-500 rounded text-green-600 font-semibold focus:outline-none"
          type="button"
          onClick={addProduct}
        >
          Add Product
        </button>

        <button
          className="w-44 px-4 py-2 border border-green-500 "
          type="button"
          onClick={UpdateProduct}
        >
          Update button
        </button>

        <button
          className="w-44 px-4 py-2 border border-green-500 "
          type="button"
          onClick={DeleteProduct}
        >
          Delete button
        </button>
      </div>
    </div>
  );
}

export default Vegetables;
