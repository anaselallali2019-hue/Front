import DataTable from '../components/DataTable';
import { Plus, Edit, Trash2, Mail, Phone } from 'lucide-react';
import { useState } from 'react';

const userData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', phone: '+1 234 567 8901', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '+1 234 567 8902', role: 'User', status: 'Active' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', phone: '+1 234 567 8903', role: 'Manager', status: 'Inactive' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', phone: '+1 234 567 8904', role: 'User', status: 'Active' },
  { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', phone: '+1 234 567 8905', role: 'User', status: 'Active' },
  { id: 6, name: 'Diana Prince', email: 'diana@example.com', phone: '+1 234 567 8906', role: 'Manager', status: 'Active' },
  { id: 7, name: 'Evan Davis', email: 'evan@example.com', phone: '+1 234 567 8907', role: 'User', status: 'Inactive' },
  { id: 8, name: 'Fiona Green', email: 'fiona@example.com', phone: '+1 234 567 8908', role: 'Admin', status: 'Active' },
  { id: 9, name: 'George Miller', email: 'george@example.com', phone: '+1 234 567 8909', role: 'User', status: 'Active' },
  { id: 10, name: 'Hannah Lee', email: 'hannah@example.com', phone: '+1 234 567 8910', role: 'Manager', status: 'Active' },
];

export default function Users() {
  const [showModal, setShowModal] = useState(false);

  const columns = [
    {
      key: 'name',
      label: 'Name',
      sortable: true,
      render: (value, row) => (
        <div className="flex items-center space-x-3">
          <img
            src={`https://ui-avatars.com/api/?name=${value}&background=0ea5e9&color=fff`}
            alt={value}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-medium text-gray-900">{value}</p>
            <p className="text-sm text-gray-500">{row.email}</p>
          </div>
        </div>
      ),
    },
    { key: 'phone', label: 'Phone', sortable: true },
    {
      key: 'role',
      label: 'Role',
      sortable: true,
      render: (value) => (
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          value === 'Admin' ? 'bg-purple-100 text-purple-800' :
          value === 'Manager' ? 'bg-blue-100 text-blue-800' :
          'bg-gray-100 text-gray-800'
        }`}>
          {value}
        </span>
      ),
    },
    {
      key: 'status',
      label: 'Status',
      sortable: true,
      render: (value) => (
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          value === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {value}
        </span>
      ),
    },
    {
      key: 'actions',
      label: 'Actions',
      render: () => (
        <div className="flex space-x-2">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-blue-600">
            <Edit size={18} />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-red-600">
            <Trash2 size={18} />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Users</h1>
          <p className="text-gray-600 mt-1">Manage your users and their permissions</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center space-x-2 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
        >
          <Plus size={20} />
          <span>Add User</span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Total Users</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">{userData.length}</h3>
            </div>
            <div className="bg-blue-500 p-3 rounded-lg">
              <Mail className="text-white" size={24} />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Active Users</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">
                {userData.filter(u => u.status === 'Active').length}
              </h3>
            </div>
            <div className="bg-green-500 p-3 rounded-lg">
              <Phone className="text-white" size={24} />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Inactive Users</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">
                {userData.filter(u => u.status === 'Inactive').length}
              </h3>
            </div>
            <div className="bg-red-500 p-3 rounded-lg">
              <Mail className="text-white" size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <DataTable columns={columns} data={userData} />
    </div>
  );
}
