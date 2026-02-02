import {
  Bell,
  Search,
  Menu,
  Sun,
  Moon,
  Settings,
  User,
  LogOut,
  Mail,
  MessageSquare,
  Globe,
} from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function Header({ onMenuClick }) {
  const { darkMode, toggleDarkMode } = useTheme();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const notifications = [
    {
      id: 1,
      type: 'message',
      title: 'New message from John',
      description: 'Hey, how are you doing?',
      time: '2 min ago',
      unread: true,
    },
    {
      id: 2,
      type: 'order',
      title: 'New order received',
      description: 'Order #12345 has been placed',
      time: '15 min ago',
      unread: true,
    },
    {
      id: 3,
      type: 'task',
      title: 'Task assigned',
      description: 'You have been assigned to Project X',
      time: '1 hour ago',
      unread: false,
    },
  ];

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <header className="fixed top-0 right-0 left-0 lg:left-64 z-30 h-16 bg-white border-b border-gray-200">
      <div className="h-full px-6 flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-4 flex-1">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Menu size={24} />
          </button>

          {/* Search Bar */}
          <div className="hidden md:flex relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <kbd className="absolute right-3 top-1/2 -translate-y-1/2 px-2 py-1 text-xs text-gray-500 bg-gray-100 rounded">
              ⌘K
            </kbd>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2">
          {/* Quick Actions */}
          <button className="hidden md:flex p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Globe size={20} className="text-gray-600" />
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            {darkMode ? (
              <Sun size={20} className="text-gray-600 dark:text-gray-400" />
            ) : (
              <Moon size={20} className="text-gray-600" />
            )}
          </button>

          {/* Messages */}
          <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <MessageSquare size={20} className="text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full ring-2 ring-white" />
          </button>

          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Bell size={20} className="text-gray-600" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  {unreadCount}
                </span>
              )}
            </button>

            {/* Notifications Dropdown */}
            {showNotifications && (
              <div className="absolute right-0 top-12 w-80 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
                <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
                  <h3 className="font-semibold">Notifications</h3>
                  <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full font-medium">
                    {unreadCount} new
                  </span>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.map((notif) => (
                    <div
                      key={notif.id}
                      className={`px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-0 ${
                        notif.unread ? 'bg-blue-50/50' : ''
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-2 h-2 rounded-full mt-2 ${notif.unread ? 'bg-blue-600' : 'bg-gray-300'}`} />
                        <div className="flex-1">
                          <p className="font-medium text-sm text-gray-900">{notif.title}</p>
                          <p className="text-xs text-gray-600 mt-1">{notif.description}</p>
                          <p className="text-xs text-gray-500 mt-2">{notif.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-4 py-3 border-t border-gray-100">
                  <button className="text-sm text-primary-600 hover:text-primary-700 font-medium w-full text-center">
                    View all notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* User Profile */}
          <div className="relative">
            <button
              onClick={() => setShowProfile(!showProfile)}
              className="flex items-center gap-3 pl-3 pr-2 py-1.5 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <div className="hidden md:block text-right">
                <p className="text-sm font-medium text-gray-900">John Doe</p>
                <p className="text-xs text-gray-500">Administrator</p>
              </div>
              <img
                src="https://ui-avatars.com/api/?name=John+Doe&background=3b82f6&color=fff&size=128"
                alt="User"
                className="w-10 h-10 rounded-lg ring-2 ring-gray-100"
              />
            </button>

            {/* Profile Dropdown */}
            {showProfile && (
              <div className="absolute right-0 top-14 w-56 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
                <div className="px-4 py-3 border-b border-gray-100">
                  <p className="font-semibold text-gray-900">John Doe</p>
                  <p className="text-sm text-gray-500">john.doe@example.com</p>
                </div>
                <div className="py-2">
                  <a href="/profile" className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors text-gray-700">
                    <User size={18} />
                    <span className="text-sm">My Profile</span>
                  </a>
                  <a href="/settings" className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors text-gray-700">
                    <Settings size={18} />
                    <span className="text-sm">Settings</span>
                  </a>
                  <a href="/messages" className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors text-gray-700">
                    <Mail size={18} />
                    <span className="text-sm">Messages</span>
                  </a>
                </div>
                <div className="border-t border-gray-100 pt-2">
                  <button className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors text-red-600 w-full">
                    <LogOut size={18} />
                    <span className="text-sm">Logout</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
