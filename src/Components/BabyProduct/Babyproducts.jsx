import React, { useState, useEffect } from 'react';
import './BabyProduct.css';
import { MdArrowDropDown } from "react-icons/md";
import BabyCheramyHarbalCream from '../../assets/BabyCheramyHarbalCream.png';
import BabyCheramyFloralCream from '../../assets/BabyCheramyFloralCream.png';
import CowGate from '../../assets/CowGate.png';
import LactogenComfopro1 from '../../assets/LactogenComfopro1.png';
import LittleLionBabyRucks from '../../assets/LittleLionBabyRucks.png';
import MarvelBabyDiapers from '../../assets/MarvelBabyDiapers.png';
import  Nangrow13 from '../../assets/Nangrow13.png';
import  NestleCeregrow13 from '../../assets/NestleCeregrow13.png';
import  PearsbabyDiapers from '../../assets/PearsbabyDiapers.png';
import ProductCard from '../ProductCard';

function Babyproducts() {

    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState('Default');
  
          useEffect(() => {
                    fetch('http://localhost:5000/api/products?category=Baby Products') // replace with your server URL
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
        const newProduct={
           name:"Baby Cheramy Floral Cream",
           price:240,
           description: "Baby Product",
           category: "Baby Products",
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


  
    // Dummy products
   // const products = [
    //  { name: 'Baby Cheramy Harbal Cream', price: 'Rs.40', image: BabyCheramyHarbalCream},
    //  { name: 'Baby Cheramy Floral Cream', price: 'Rs.30', image: BabyCheramyFloralCream},
    //  { name: 'Cow & Gate 6 months', price: 'Rs.80', image: CowGate },
     // { name: 'Lactogen Comfopro 1', price: 'Rs.60', image: LactogenComfopro1 },
     // { name: 'Little Lion Baby Rucks', price: 'Rs.55', image: LittleLionBabyRucks },
     // { name: 'Marvel Baby Diapers', price: 'Rs.75', image: MarvelBabyDiapers},
     // { name: 'Nangrow 1-3', price: 'Rs.45', image: Nangrow13 },
     // { name: 'Nestle Ceregrow 1-3', price: 'Rs.50', image: NestleCeregrow13},
     // { name: 'Pears baby Diapers', price: 'Rs.90', image: PearsbabyDiapers },
    //];

      const [products, setProducts] = useState([]);  

  return (
    <div>
      
        {/* Title */}
        <p className="font-semibold text-green-600 text-2xl Babytitle">Baby Products</p>
        
        <div className="flex gap-4 bg-amber-900 w-full h-[1300px]">
          {/* Left Sidebar */}
          <div className="w-[300px] min-h-[600px] bg-white border-r border-gray-300 p-4">
            <p className="text-[15px] mb-2 Subtitle3 font-semibold text-black">Subcategories</p>
            <p className="text-black text-sm Catergory3 cursor-pointer hover:text-green-700">Fresh Vegetables</p>
            <p className="text-black text-sm Catergory3 cursor-pointer hover:text-green-700">Leafy</p>
            <p className="text-black text-sm Catergory3 cursor-pointer hover:text-green-700">Leafy</p>
  
              <br/>
            <div className="PriceDiv2">
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

export default Babyproducts
