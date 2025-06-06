import React from "react";
import Navigationbar from "../Components/Navigationbar";
import Search from "../Components/Search";
import Snacks_Confection from "../Components/Snacks_and_Confection/Snacks_Confection";

function Snacks() {
  return (
    <div>
      <Navigationbar />
      <Search />
      <Snacks_Confection />
    </div>
  );
}

export default Snacks;
