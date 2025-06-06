import React from 'react';
import Bannerp from '../assets/Bannerp.jpg';

function Banner() {
  return (
    <div className="relative mt-8">
      <img
        src={Bannerp}
        alt="Banner"
        className="w-full h-[500px] object-cover"
      />

      <div className="absolute top-[40%] left-[25%] -translate-x-1/2 -translate-y-1/5 text-white text-center bg-green-900 border border-green-500 p-8 w-[300px] h-[200px] text-[25px]">
        <h1>
          Shop Fresh. Eat
          <br />
          Healthy Save
          <br />
          Time.
        </h1>
      </div>
    </div>
  );
}

export default Banner;

