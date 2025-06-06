import React from "react";
import Navigationbar from "../Components/Navigationbar";
import Search from "../Components/Search";
import Vegetables from "../Components/Vegetable/Vegetables";
import Footer from "../Components/Footer";

function Vegetable() {
  return (
    <div>
      <Navigationbar />
      <Search />
      <Vegetables />
      <Footer />
    </div>
  );
}

export default Vegetable;
