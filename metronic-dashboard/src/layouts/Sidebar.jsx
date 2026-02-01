import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  TrendingUp,
  ShoppingBag,
  ShoppingCart,
  Users,
  Package,
  BarChart3,
  MessageSquare,
  Mail,
  Calendar,
  FolderOpen,
  FileText,
  Briefcase,
  CheckSquare,
  Settings,
  HelpCircle,
  ChevronDown,
  ChevronRight,
} from 'lucide-react';
import { useState } from 'react';

const menuItems = [
  {
    section: 'Dashboards',
    items: [
      { icon: LayoutDashboard, label: 'Default', path: '/' },
      { icon: TrendingUp, label: 'Analytics', path: '/dashboards/analytics' },
      { icon: ShoppingCart, label: 'E-commerce', path: '/dashboards/ecommerce' },
    ],
  },
  {
    section: 'E-commerce',
    items: [
      { icon: ShoppingBag, label: 'Products', path: '/ecommerce/products' },
      { icon: Package, label: 'Orders', path: '/ecommerce/orders' },
      { icon: Users, label: 'Customers', path: '/ecommerce/customers' },
      { icon: BarChart3, label: 'Reports', path: '/ecommerce/reports' },
    ],
  },
  {
    section: 'Apps',
    items: [
      { icon: MessageSquare, label: 'Chat', path: '/apps/chat' },
      { icon: Mail, label: 'Email', path: '/apps/email' },
      { icon: Calendar, label: 'Calendar', path: '/apps/calendar' },
      { icon: FolderOpen, label: 'File Manager', path: '/apps/files' },
    ],
  },
  {
    section: 'Management',
    items: [
      { icon: Briefcase, label: 'Projects', path: '/projects' },
      { icon: CheckSquare, label: 'Tasks', path: '/tasks' },
      { icon: FileText, label: 'Invoices', path: '/invoices' },
      { icon: Users, label: 'Team', path: '/team' },
    ],
  },
  {
    section: 'Settings',
    items: [
      { icon: Settings, label: 'Settings', path: '/settings' },
      { icon: HelpCircle, label: 'Help & Support', path: '/help' },
    ],
  },
];

function SidebarSection({ section }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider hover:text-gray-700 transition-colors"
      >
        <span>{section.section}</span>
        {isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
      </button>
      {isOpen && (
        <ul className="mt-2 space-y-1">
          {section.items.map((item, idx) => (
            <li key={idx}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2.5 rounded-lg mx-2 transition-all ${
                    isActive
                      ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`
                }
              >
                <item.icon size={20} />
                <span className="font-medium">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-64 bg-white border-r border-gray-200 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Logo */}
        <div className="h-16 flex items-center px-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              Metronic
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="h-[calc(100vh-4rem)] overflow-y-auto py-6 scrollbar-hide">
          {menuItems.map((section, idx) => (
            <SidebarSection key={idx} section={section} />
          ))}
        </nav>
      </aside>
    </>
  );
}
