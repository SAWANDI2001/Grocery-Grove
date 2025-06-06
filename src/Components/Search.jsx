import React from 'react';
import { MdSearch } from 'react-icons/md';

function Search() {
  return (
    <div className="flex items-center max-w-md mx-auto rounded-full overflow-hidden bg-yellow-50 shadow mt-6">
      
      <div className="flex items-center flex-1 p-3">
        <MdSearch className="mr-2 text-gray-400 text-lg" />
        <input
          type="text"
          placeholder="Search for products"
          className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-500"
        />
      </div>

      <button className="bg-green-600 text-white border-none px-5 py-3 font-bold cursor-pointer rounded-r-full transition-colors duration-300 hover:bg-green-700">
        Search
      </button>

    </div>
  );
}

export default Search;

