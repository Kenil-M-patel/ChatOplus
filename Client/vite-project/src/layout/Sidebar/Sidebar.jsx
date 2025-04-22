import React from 'react';

function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 border-r border-gray-700 text-gray-200 p-4 flex flex-col h-full">
      <h2 className="text-xl font-bold mb-4 px-2">Friends</h2>
      <ul className="space-y-1 flex-1 overflow-y-auto">
        {[1, 2, 3, 4, 5].map((friend) => (
          <li 
            key={friend}
            className="hover:bg-gray-700 p-2 rounded-md cursor-pointer transition-colors duration-150 flex items-center gap-3"
          >
            <div className="h-8 w-8 rounded-full bg-gray-600 flex items-center justify-center text-sm">
              {friend}
            </div>
            <span>Friend {friend}</span>
          </li>
        ))}
      </ul>
      <div className="pt-4 mt-auto border-t border-gray-700">
        <button className="w-full bg-gray-700 hover:bg-gray-600 p-2 rounded-md transition-colors duration-200">
          Add Friend
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;