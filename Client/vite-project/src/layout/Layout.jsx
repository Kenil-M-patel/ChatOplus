import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";

function Layout({ children }) {
  return (
    <div className="flex h-screen dark">
      {/* Sidebar - Pass dark prop if needed */}
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar - Pass dark prop if needed */}
        <Navbar />
        
        <main className="flex-1 p-4 md:p-6 overflow-auto bg-gray-900 text-gray-100">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Layout;