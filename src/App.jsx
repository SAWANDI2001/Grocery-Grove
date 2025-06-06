import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Page/Home';
import About from './Page/About';
import Contact from './Page/Contact';
import BabyProducts from './Page/BabyProducts';
import Vegetable from './Page/Vegetable';
import Dairy from './Page/Dairy';
import Snacks from './Page/Snacks';
import Fruits from './Page/Fruits';
import Bevarages from './Page/Bevarages';
import SignIn from './Page/SignIn';
import SignUp from './Page/SignUp';
import Cart from './Page/Cart';
import FogotPassword from './Components/FogotPassword';

import DashBoard from './Components/DashBoard/Dashboard'
import Orders from './Components/DashBoard/Orders';
import AdminLogin from './Components/DashBoard/AdminLogin/AdminLogin';
import  AddProduct from './Components/DashBoard/AddProduct'
import MyOrderList from './Page/MyOrderList';
import ProductList from './Components/DashBoard/ProductList';
import ProductAbout from './Components/ProductAbout';
import ShoppingCart from './Components/ShoppingCart';
import AddAddress from './Components/AddAddress';
import OnlinePayment from './Components/OnlinePayment';



function App() {
 

  return (
    <>
      <div>

      <BrowserRouter>
          <Routes>

          <Route path="/" element={<Home/>}></Route>
          <Route path="/About" element={<About/>}></Route>
          <Route path="/Contact" element={<Contact/>}></Route>

          <Route path="/BabyProducts" element={<BabyProducts/>}></Route>
          <Route path="/Vegetable" element={<Vegetable/>}></Route>
          <Route path="/Dairy" element={<Dairy/>}></Route>
          <Route path="/Snacks" element={<Snacks/>}></Route>
          <Route path="/Fruits" element={<Fruits/>}></Route>
          <Route path="/Bevarages" element={<Bevarages/>}></Route>

          <Route path="/SignIn" element={<SignIn/>}></Route>
          <Route path="/SignUp" element={<SignUp/>}></Route>
          <Route path="/Cart" element={<Cart/>}></Route>
          <Route path="/FogotPassword" element={<FogotPassword/>}></Route>
          <Route path="/MyOrderList" element={<MyOrderList/>}></Route>

          <Route path="/DashBoard" element={<DashBoard/>}></Route>
          <Route path="/AddProduct" element={<AddProduct/>}></Route>
          <Route path="/Orders" element={<Orders/>}></Route>
          <Route path="/AdminLogin" element={<AdminLogin/>}></Route>
          <Route path="/ProductList" element={<ProductList/>}></Route>
          <Route path="/ProductAbout" element={<ProductAbout/>}></Route>
          <Route path="/ShoppingCart" element={<ShoppingCart/>}></Route>
          <Route path="/AddAddress" element={<AddAddress/>}></Route>
          <Route path="/OnlinePayment" element={<OnlinePayment/>}></Route>

          

          </Routes>
        </BrowserRouter>


      </div>
    </>
  )
}

export default App
