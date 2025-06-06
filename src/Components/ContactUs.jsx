import React from 'react';

function ContactUs() {
  return (
    <div className="flex-grow bg-white p-6 md:p-12 text-center">

      <p className="text-3xl font-bold mt-12">Contact Us</p>

      <div className="max-w-[1000px] h-[200px] mx-auto mt-8">

        <p className="text-base leading-relaxed">

          You can reach our customer support by emailing{" "}
          <b className="text-green-600">grocery@gmail.com</b> or <br />
          calling us on{" "}
          <b className="text-green-600">091-4559970 or 076-5989596</b>{" "}
          between 8:00 AM and 8:00 PM every day. <br />
          We are always ready to deliver your grocery essentials fresh and fast
          to your doorstep!

        </p>

      </div>

    </div>
    
  );
}

export default ContactUs;

