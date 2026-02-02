import { Plus, Search, Filter, Edit, Trash2, Eye, MoreVertical } from 'lucide-react';
import DataTable from '../../components/tables/DataTable';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import Badge from '../../components/ui/Badge';
import { useState } from 'react';
import Modal from '../../components/ui/Modal';

const usersData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', lastLogin: '2024-02-01' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active', lastLogin: '2024-02-01' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Manager', status: 'Inactive', lastLogin: '2024-01-28' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'User', status: 'Active', lastLogin: '2024-02-01' },
  { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'Editor', status: 'Active', lastLogin: '2024-01-30' },
];

export default function UsersList() {
  const [showAddModal, setShowAddModal] = useState(false);

  const columns = [
    {
      key: 'name',
      label: 'User',
      sortable: true,
      render: (_, user) => (
        <div className="flex items-center gap-3">
          <img
            src={`https://ui-avatars.com/api/?name=${user.name}&size=40&background=random`}
            alt={user.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-medium text-gray-900 dark:text-white">{user.name}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{user.email}</p>
          </div>
        </div>
      ),
    },
    {
      key: 'role',
      label: 'Role',
      sortable: true,
      render: (role) => (
        <Badge variant={
          role === 'Admin' ? 'danger' :
          role === 'Manager' ? 'warning' :
          'default'
        }>
          {role}
        </Badge>
      ),
    },
    {
      key: 'status',
      label: 'Status',
      sortable: true,
      render: (status) => (
        <Badge variant={status === 'Active' ? 'success' : 'default'}>
          {status}
        </Badge>
      ),
    },
    {
      key: 'lastLogin',
      label: 'Last Login',
      sortable: true,
    },
    {
      key: 'actions',
      label: 'Actions',
      render: () => (
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
            <Eye size={18} className="text-blue-600 dark:text-blue-400" />
          </button>
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
            <Edit size={18} className="text-green-600 dark:text-green-400" />
          </button>
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
            <Trash2 size={18} className="text-red-600 dark:text-red-400" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: 'Users', href: '#' }]} />
      
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="page-title">Users Management</h1>
          <p className="page-subtitle">Manage your users and their permissions</p>
        </div>
        <button onClick={() => setShowAddModal(true)} className="btn btn-primary">
          <Plus size={20} />
          <span>Add User</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card">
          <div className="card-body">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Users</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{usersData.length}</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Active</p>
            <p className="text-2xl font-bold text-green-600 dark:text-green-400">
              {usersData.filter(u => u.status === 'Active').length}
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Admins</p>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {usersData.filter(u => u.role === 'Admin').length}
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">New This Month</p>
            <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">12</p>
          </div>
        </div>
      </div>

      <DataTable columns={columns} data={usersData} />

      <Modal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        title="Add New User"
        footer={
          <>
            <button onClick={() => setShowAddModal(false)} className="btn btn-secondary">
              Cancel
            </button>
            <button className="btn btn-primary">Add User</button>
          </>
        }
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
            <input type="text" className="input" placeholder="Enter name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
            <input type="email" className="input" placeholder="Enter email" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Role</label>
            <select className="input">
              <option>User</option>
              <option>Admin</option>
              <option>Manager</option>
              <option>Editor</option>
            </select>
          </div>
        </div>
      </Modal>
    </div>
  );
}
