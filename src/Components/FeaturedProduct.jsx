import React, { useState } from 'react';

import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from "react-icons/io";
import Ordicolon from '../assets/Ordicolon.png';
import KohobaSoap from '../assets/KohobaSoap.png';
import Butter from '../assets/Butter.png';
import ChocolateBiscurt from '../assets/ChocolateBiscurt.png';
import BabyCheramyFloralCream from '../assets/BabyCheramyFloralCream.png';
import CoconutOil from '../assets/CoconutOil.png';
import Anchor from '../assets/Anchor.png';
import { HiShoppingCart } from "react-icons/hi";
import ProductCard from './ProductCard';





function FeaturedProduct() {

    const products = [
        { id: 1, name: "Baby Cheramy Cologne", image: Ordicolon, price: 500 },
        { id: 2, name: "Baby Kohoba Soap", image: KohobaSoap, price: 600 },
        { id: 3, name: "Kotmale Butter", image: Butter, price: 450 },
        { id: 4, name: "Maliban Chocolate Cream Biscuit", image: ChocolateBiscurt, price: 750 },
        { id: 5, name: "Baby Cheramy Floral Cream", image: BabyCheramyFloralCream, price: 1200 },
        { id: 6, name: "Fortune Coconut Oil", image: CoconutOil, price: 350 },
        { id: 7, name: "Anchor", image: Anchor, price: 980 },
      ];
      
      
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleCards = 4;
  
    const nextSlide = () => {
      if (currentIndex < products.length - visibleCards) {
        setCurrentIndex(currentIndex + 1);
      }
    };
  
    const prevSlide = () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    };

  return (

  /* <div className='h-130 w-full Feature'>
      
      <h1 className='text-3xl D'><center>Featured Products</center></h1>
      
        <div className='Div1'>
        <IoIosArrowDropleftCircle size={35} className="text-red-500 arrow-iconL" onClick={prevSlide} />
        
        <div className='slider-container'>

        <div 
            className='slider-track'
            style={{ transform: `translateX(-${currentIndex * (200 + 20)}px)` }}
        >

            {products.map((item, index) => (
              <div key={index} className='product-card'>
                <img src={item.image} alt={item.name} className='product-image'/>
                <div className='product-info'>
                <h2 className='product-name'>{item.name}</h2>
                <p className='product-price'>Rs. {item.price}.00</p>
                <button className='add-to-cart-btn'>
                <HiShoppingCart  className="cart-icon" /> Add to Cart</button>
              </div>

        </div>

            ))}

        </div>
        </div>
        <IoIosArrowDroprightCircle size={35} className="text-red-500 arrow-iconR" onClick={nextSlide} />
       </div>

    </div>*/


     


    <div className=' h-100 w-full mt-10'>

         <h1 className='text-3xl font-bold'><center>Featured Products</center></h1>

       <IoIosArrowDropleftCircle size={35} className="text-red-500 arrow-iconL" onClick={prevSlide} />
      <ProductCard/>
       <IoIosArrowDroprightCircle size={35} className="text-red-500 arrow-iconR" onClick={nextSlide} />
    </div>

  )
}

export default FeaturedProduct
