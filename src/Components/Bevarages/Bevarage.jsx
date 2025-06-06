import React, { useState, useEffect } from 'react';
import './Bevaragese.css';
import { MdArrowDropDown } from "react-icons/md";
import Up7 from '../../assets/Up7.png';
import CreamSoda from '../../assets/CreamSoda.png';
import DrinkingWater from '../../assets/DrinkingWater.png';
import KistWoodappleNectar from '../../assets/KistWoodappleNectar.png';
import KotmaleFullcreamFreshmilk from '../../assets/KotmaleFullcreamFreshmilk.png';
import MDPassionFruitCordial from '../../assets/MDPassionFruitCordial.png';
import  Milo from '../../assets/Milo.png';
import  MothaFaludaMix from '../../assets/MothaFaludaMix.png';
import  Necto from '../../assets/Necto.png';
import ProductCard from '../ProductCard';

function Bevarage() {

     const [isOpen, setIsOpen] = useState(false);
      const [selected, setSelected] = useState('Default');

       useEffect(() => {
          fetch('http://localhost:5000/api/products?category=Bevarage') // replace with your server URL
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error(err));
        }, []);
    
      const options = [
        'Default',
        'Name (A-Z)',
        'Name (Z-A)',
        'Price (Low to High)',
        'Price (High to Low)',
      ];
    
      const handleSelect = (option) => {
        setSelected(option);
        setIsOpen(false);
      };

      const addProduct = () => {
        const newProduct = {
          name: 'Up 7',
          price: 600,
          description: 'Cool drink',
          category: 'Bevarage',
        };
      
        fetch('http://localhost:5000/api/products', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newProduct),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log('Product created:', data);
          })
          .catch((err) => console.error(err));
      };
      
      const UpdateProduct = () => {
        console.log("Update button clicked")
       const existingProduct = {
              "_id": "6834972b012957e424db505b",
              "name": "Beans",
              "price": 500,
              "description": "Sweet Beans Updated",
              "category": "Vegetables",
              "createdAt": "2025-05-26T16:30:35.746Z",
              "updatedAt": "2025-05-26T16:30:35.746Z"
          };
      const id = existingProduct._id;
          fetch(`http://localhost:5000/api/products/${id}`, {
          method: 'PUT', // or PATCH
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(existingProduct),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log('Product updated:', data);
          })
          .catch((err) => console.error(err));
      
      };
      
      const DeleteProduct= () =>{
        console.log("Delete button clicked");
        const id="68349624012957e424db5043";
         fetch(`http://localhost:5000/api/products/${id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            console.log('Product deleted:', data);
          })
          .catch((err) => console.error(err));
      }
      
       const [products, setProducts] = useState([]);
    
      // Dummy products
     // const products = [
     //   { name: '7 Up', price: 'Rs.40', image: Up7},
     //   { name: 'Cream Soda', price: 'Rs.30', image: CreamSoda},
     //   { name: 'Drinking Water', price: 'Rs.80', image: DrinkingWater },
     //   { name: 'Kist Woodapple Nectar', price: 'Rs.60', image: KistWoodappleNectar },
     //   { name: 'KotmaleFullcreamFreshmilk', price: 'Rs.55', image: KotmaleFullcreamFreshmilk },
     //   { name: 'MD Passion Fruit Cordial', price: 'Rs.75', image: MDPassionFruitCordial},
     //   { name: 'Milo', price: 'Rs.45', image: Milo },
     //   { name: 'Motha Faluda Mix', price: 'Rs.50', image: MothaFaludaMix},
     //   { name: 'Necto', price: 'Rs.90', image: Necto },
     // ];

  return (
    <div>
      
         {/* Title */}
              <p className="font-semibold text-green-600 text-2xl BevaragesTitle">Bevarages</p>
        
              <div className="flex gap-4 bg-amber-900 w-full h-[1300px]">
                {/* Left Sidebar */}
                <div className="w-[300px] min-h-[600px] bg-white border-r border-gray-300 p-4">
                  <p className="text-[15px] mb-2 BeSubtitle font-semibold text-black">Subcategories</p>
                  <p className="text-black text-sm Catergory5 cursor-pointer hover:text-green-700">Fresh Vegetables</p>
                  <p className="text-black text-sm Catergory5 cursor-pointer hover:text-green-700">Leafy</p>
                  <p className="text-black text-sm Catergory5 cursor-pointer hover:text-green-700">Leafy</p>
        
                    <br/>
                  <div className="PriceDiv5">
                    <p className="text-[15px] mb-2 Subtitle font-semibold text-green-600">Price</p>
                    <div className="flex gap-2 items-center ml-4">
                      <input type="text" placeholder="Min" className="w-12 border border-gray-300 rounded px-1 text-sm"/>
                      <span>-</span>
                      <input type="text" placeholder="Max" className="w-12 border border-gray-300 rounded px-1 text-sm"/>
                    </div>
                  </div>
                </div>
        
        
                {/* Right Content */}
                <div className="w-full min-h-[1100px] bg-pink-200 p-4">
                  {/* Sort By Section */}
                  <div className="flex justify-end items-center mb-6">
                    <div className="flex items-center gap-2">
        
        
                      <div className='bg-amber-400 w-[250px] h-[35px] flex'>
        
                      <span className="font-semibold text-gray-800">Sort by :</span>
                      <div className=" relative">
                        <button
                          onClick={() => setIsOpen(!isOpen)}
                          className="flex items-center justify-between w-44 px-4 py-2 border border-green-500 rounded text-green-600 font-semibold focus:outline-none"
                        >
                          {selected}
                          
                          <MdArrowDropDown className="ml-2 text-xl"/>
        
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
                 
                         <div className='w-[800px] h-[1100px] marginDiv'>
              
                        <div className=" grid grid-cols-3 gap-10 h-[1100px] w-[800px] ">
                          {products.map((product, index) => (
                            
                              <ProductCard name={product.name} price={product.price} image={product.image} index={index} />
                          ))}
                        </div>
                        </div>
                </div>
              </div>

    </div>
  )
}

export default Bevarage