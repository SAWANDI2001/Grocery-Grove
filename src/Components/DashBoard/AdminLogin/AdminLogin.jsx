import React, { useState } from 'react';

import './Adminlogin.css'


function AdminLogin() {
   
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");
  

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (!email || !password) {
        setError("All fields are required.");
        return;
    }
    console.log("Admin Login", { email, password });

    setEmail("");
    setPassword("");
    setError("");
  };

    return (

        <div className="w-full h-[400px] bg-white marginL">
            <p className="text-3xl font-bold text-center">Sign Up</p>

            <div className='flex items-center justify-center marginL'>
            <div className="w-[600px] h-[200px] bg-gray-200 ">
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                <form className="space-y-4" onSubmit={handleLogin}>

                    {/* Row 1 */}
                    <div className="flex justify-center gap-10">
                        

                        <div className="flex flex-col w-[300px] relative">
                            <label htmlFor="email" className="text-gray-700 font-medium mb-1">Email</label>
                            <input
                                type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='admin@example.com'
                                className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:border-green-600 bg-white"
                            />
                        </div>
                    </div>

                  

                    {/* Row 2 */}
                    <div className="flex justify-center gap-10">
                        <div className="flex flex-col w-[300px] relative">
                            <label htmlFor="password" className="text-gray-700 font-medium mb-1">Password</label>
                            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Admin'

                                className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:border-green-600 bg-white" 
                               />
                           
                        </div>

                    </div>

                    {/* Button */}
                    <button type="submit"
                        className="bg-green-800 text-white rounded-full w-[300px] font-bold hover:bg-green-600 LoginButton"
                    >
                        LOGIN
                    </button>

                </form>
            </div>
            </div>
        </div>
    );
}

export default AdminLogin;
