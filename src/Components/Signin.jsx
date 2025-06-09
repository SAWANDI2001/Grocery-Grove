import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Signin() {
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const togglePassword = () => {
    setShowPassword(!showPassword);

  };

  const handleSubmit = (e) => {
      console.log('signin clicked');
    // e.preventDefault();


    // // API request
    // try {
    //   const response = await fetch('http://localhost:5000/api/users/login', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ email, password }),
    //   });

    //   const data = await response.json();

    //   if (response.ok) {
    //     setMessage(`${data.message}`);
    //     // Optionally redirect here: e.g. navigate('/dashboard');
    //   } else {
    //     setMessage(` ${data.message}`);
    //   }
    // } catch (error) {
    //   console.error('Error:', error);
    //   setMessage(' Something went wrong. Try again!');
    // }
  }

  return (
    <div>
      <div className="w-full h-[400px]">
        <p className="text-2xl font-bold mt-5 text-center">Login</p>

        <div className="w-[400px] h-[300px] bg-gray-100 ml-[550px] mt-5">
          <form onSubmit={handleSubmit}>
            <div className="mb-2 ml-[50px]">
              <label className="block text-gray-700">Email</label>
              <input
                type="text"
                className="w-[300px] px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-600 bg-white"
              />
            </div>

            <div className="mb-2 ml-[50px] mt-2">
              <label className="block text-gray-700">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="w-[300px] px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-600 bg-white"
                />

                <span
                  className="absolute inset-y-0 right-18 flex items-center text-gray-600 cursor-pointer"
                  onClick={togglePassword} >
                  {showPassword ? <FiEye size={20} /> : <FiEyeOff size={20} />}
                </span>
              </div>
            </div>

            <div className="ml-[245px]">
              <Link
                to="/FogotPassword"
                className="text-purple-800 text-[13px] hover:underline"
              >
                <u>Forgot Password?</u>
              </Link>
            </div>

            <button
              type="submit"
              className="w-[300px] bg-green-700 text-white font-semibold py-2 rounded hover:bg-green-800 transition duration-200 ml-[50px] mt-6"
            >
              LOGIN
            </button>

            <p className="text-center mt-2 text-gray-700 text-[15px]">
              Not signed up yet?{' '}
              <Link
                to="/SignUp"
                className="text-green-700 font-semibold hover:underline"
              >
                SIGN UP NOW.
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signin;
