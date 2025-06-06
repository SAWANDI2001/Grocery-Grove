import React from 'react';

function Massage() {
  return (
    <div className="w-full h-[500px] bg-amber-50">
      <div className="h-[470px] w-[90%] bg-gray-300 ml-20 mt-2 p-4">
        <div>
          <p className="text-2xl font-bold ml-[352px]">Send us Message</p>
          <p className="font-bold mt-2 ml-[352px]">Connect directly with our dedicated team.</p>

          <input
            type="text"
            placeholder="Your Name"
            className="bg-white w-[500px] h-[50px] mt-5 ml-[352px] rounded-[10px] border-none pl-4"
          />
          <input
            type="text"
            placeholder="Your Email Address"
            className="bg-white w-[500px] h-[50px] mt-5 ml-[352px] rounded-[10px] border-none pl-4"
          />
          <input
            type="text"
            placeholder="Subject"
            className="bg-white w-[500px] h-[50px] mt-5 ml-[352px] rounded-[10px] border-none pl-4"
          />
          <input
            type="text"
            placeholder="Type Your Message Here...."
            className="bg-white w-[500px] h-[75px] mt-5 ml-[352px] rounded-[10px] border-none pl-4"
          />
        </div>
        <button className="mt-7 ml-[350px] w-[100px] h-[40px] rounded-full bg-green-600 text-white hover:bg-green-400 transition duration-300">
          Send Us
        </button>
      </div>
    </div>
  );
}

export default Massage;
