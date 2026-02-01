import { Bell, Search, Menu, Sun, Moon } from 'lucide-react';
import { useState } from 'react';

export default function Header({ onMenuClick }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 h-16 fixed top-0 right-0 left-0 md:left-64 z-40">
      <div className="h-full px-6 flex items-center justify-between">
        {/* Left section */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuClick}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Menu size={24} />
          </button>
          
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 w-64"
            />
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center space-x-4">
          {/* Dark mode toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Notifications */}
          <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* User avatar */}
          <div className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors">
            <img
              src="https://ui-avatars.com/api/?name=John+Doe&background=0ea5e9&color=fff"
              alt="User"
              className="w-8 h-8 rounded-full"
            />
            <div className="hidden md:block">
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-gray-500">Administrator</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
