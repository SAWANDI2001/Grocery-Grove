import React, { useState } from 'react';
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full h-[500px] bg-white mt-12">
      <p className="text-3xl font-bold text-center">Sign Up</p>

      <div className="flex items-center justify-center mt-12">
        <div className="w-[800px] h-[350px] bg-gray-200">
          <form className="space-y-4">

            {/* Row 1 */}
            <div className="flex justify-center gap-10">
              <div className="flex flex-col w-[300px] relative">
                <label className="text-gray-700 font-medium mb-1">Email</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:border-green-600 bg-white"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex justify-center gap-10">
              <div className="flex flex-col w-[300px] relative">
                <label className="text-gray-700 font-medium mb-1">Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:border-green-600 bg-white"
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex justify-center gap-10">
              <div className="flex flex-col w-[300px] relative">
                <label className="text-gray-700 font-medium mb-1">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:border-green-600 bg-white"
                />
                <span
                  onClick={togglePassword}
                  className="absolute right-5 top-10 text-gray-600 cursor-pointer"
                >
                  {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                </span>
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="bg-green-700 text-white rounded-full w-[300px] h-10 font-bold hover:bg-green-800 ml-[250px] mt-4"
            >
              SIGN UP
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
