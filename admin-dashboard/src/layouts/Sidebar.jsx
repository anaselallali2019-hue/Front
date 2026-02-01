import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  Table2,
  FileText,
  BarChart3,
  Settings,
  User,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { useState } from 'react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: Users, label: 'Users', path: '/users' },
  { icon: Table2, label: 'Tables', path: '/tables' },
  { icon: FileText, label: 'Forms', path: '/forms' },
  { icon: BarChart3, label: 'Charts', path: '/charts' },
  { icon: User, label: 'Profile', path: '/profile' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`${
        collapsed ? 'w-20' : 'w-64'
      } bg-gradient-to-b from-gray-900 to-gray-800 text-white h-screen fixed left-0 top-0 transition-all duration-300 flex flex-col z-50`}
    >
      {/* Logo */}
      <div className="p-6 flex items-center justify-between border-b border-gray-700">
        {!collapsed && (
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span className="font-bold text-xl">Metronic</span>
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6 overflow-y-auto">
        <ul className="space-y-2 px-3">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'hover:bg-gray-700 text-gray-300'
                  }`
                }
              >
                <item.icon size={20} />
                {!collapsed && <span className="font-medium">{item.label}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* User Section */}
      <div className="p-4 border-t border-gray-700">
        <button className="flex items-center space-x-3 w-full px-4 py-3 hover:bg-gray-700 rounded-lg transition-colors">
          <LogOut size={20} />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
}
