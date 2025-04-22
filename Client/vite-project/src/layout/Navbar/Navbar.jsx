import React from 'react';
import logo from '../../assets/Adobe Express - file.png'
function Navbar() {
  return (
    <header className="bg-gray-800 border-b border-gray-700 text-gray-200 flex justify-between items-center p-4">
     <div className="flex items-center gap-3">
  <img
    src={logo}
    alt="Chatoplus Logo"
    className="h-20 w-20 md:h-20 md:w-50 object-cover"
   
  />
  <span className="font-bold text-lg md:text-xl">Chatoplus</span>
</div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="h-8 w-8 rounded-full object-cover border border-gray-600"
          />
          <span className="hidden sm:inline">John Doe</span>
        </div>
        <button className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded-md transition-colors duration-200">
          Logout
        </button>
      </div>
    </header>
  );
}

export default Navbar;