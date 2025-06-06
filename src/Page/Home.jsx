import React from 'react'
import Navigationbar from '../Components/Navigationbar'
import Search from '../Components/Search'
import Banner from '../Components/Banner'
import FeaturedProduct from '../Components/FeaturedProduct'
import ShopByCatergory from '../Components/ShopByCatergory'
import Massage from '../Components/Massage'
import Footer from '../Components/Footer'

function Home() {
  return (
    <div>
      
        <Navigationbar/>
        <Search/>
        <Banner/>
        <FeaturedProduct/>
        <ShopByCatergory/>
        <Massage/>
        <Footer/>
        
    </div>
  )
}

export default Home
