import React from 'react';
import { Link } from 'react-router-dom';

function ForgotPassword() {
  return (
    <div className="flex items-center justify-center min-h-150  ]">
      <div className="bg-white text-gray-700 max-w-md w-full mx-4 p-8 text-left text-sm rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-900 p-4">Forget Password?</h2>
        
        <div className='w-full h-15 '>
        <label htmlFor="email" className="block mb-2 font-medium ">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          className="w-full border border-gray-300 focus:border-indigo-500 outline-none rounded px-4 py-2.5 mb-5"
        />
        </div>

        <div className='w-full h-15'>
        <button
          type="button"
          className="w-full bg-green-700 hover:bg-green-600 transition text-white py-2.5 rounded font-medium mb-6"
        >
          Send Email
        </button>

        <p className="text-center">
          Don’t have an account?{' '}
          <Link to="/SignUp"className="text-green-700 underline cursor-pointer">Signup Now</Link>
        </p>

        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
