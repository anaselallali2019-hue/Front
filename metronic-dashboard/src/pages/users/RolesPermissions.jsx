import { useState } from 'react';
import toast from 'react-hot-toast';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import Badge from '../../components/ui/Badge';
import Modal from '../../components/ui/Modal';
import AdvancedInput from '../../components/forms/AdvancedInput';
import { Plus, Edit, Trash2, Shield, Check, X } from 'lucide-react';

const rolesData = [
  {
    id: 1,
    name: 'Super Admin',
    description: 'Full system access with all permissions',
    users: 2,
    permissions: ['all'],
    color: 'red',
  },
  {
    id: 2,
    name: 'Admin',
    description: 'Administrative access with most permissions',
    users: 5,
    permissions: ['users.create', 'users.edit', 'users.delete', 'content.manage', 'reports.view'],
    color: 'orange',
  },
  {
    id: 3,
    name: 'Manager',
    description: 'Team management and content moderation',
    users: 12,
    permissions: ['users.view', 'users.edit', 'content.manage', 'reports.view'],
    color: 'blue',
  },
  {
    id: 4,
    name: 'Editor',
    description: 'Content creation and editing',
    users: 25,
    permissions: ['content.create', 'content.edit', 'content.view'],
    color: 'green',
  },
  {
    id: 5,
    name: 'User',
    description: 'Basic user access',
    users: 156,
    permissions: ['content.view', 'profile.edit'],
    color: 'gray',
  },
];

const allPermissions = [
  {
    category: 'Users Management',
    permissions: [
      { id: 'users.create', label: 'Create Users' },
      { id: 'users.edit', label: 'Edit Users' },
      { id: 'users.delete', label: 'Delete Users' },
      { id: 'users.view', label: 'View Users' },
    ],
  },
  {
    category: 'Content Management',
    permissions: [
      { id: 'content.create', label: 'Create Content' },
      { id: 'content.edit', label: 'Edit Content' },
      { id: 'content.delete', label: 'Delete Content' },
      { id: 'content.view', label: 'View Content' },
      { id: 'content.publish', label: 'Publish Content' },
    ],
  },
  {
    category: 'Reports & Analytics',
    permissions: [
      { id: 'reports.view', label: 'View Reports' },
      { id: 'reports.export', label: 'Export Reports' },
      { id: 'analytics.view', label: 'View Analytics' },
    ],
  },
  {
    category: 'Settings',
    permissions: [
      { id: 'settings.view', label: 'View Settings' },
      { id: 'settings.edit', label: 'Edit Settings' },
    ],
  },
];

export default function RolesPermissions() {
  const [showModal, setShowModal] = useState(false);
  const [editingRole, setEditingRole] = useState(null);
  const [selectedPermissions, setSelectedPermissions] = useState([]);

  const handleEditRole = (role) => {
    console.log('Editing role:', role.name);
    setEditingRole(role);
    setSelectedPermissions(role.permissions);
    setShowModal(true);
    toast(`Editing role: ${role.name}`, { icon: '✏️' });
  };

  const handleDeleteRole = (role) => {
    console.log('Delete role:', role.name);
    toast.error(`Role "${role.name}" deleted`, {
      duration: 3000,
    });
  };

  const togglePermission = (permissionId) => {
    if (selectedPermissions.includes(permissionId)) {
      setSelectedPermissions(selectedPermissions.filter(p => p !== permissionId));
      console.log('Permission removed:', permissionId);
    } else {
      setSelectedPermissions([...selectedPermissions, permissionId]);
      console.log('Permission added:', permissionId);
    }
  };

  const handleSaveRole = () => {
    console.log('=== ROLE SAVED ===');
    console.log('Permissions:', selectedPermissions);
    toast.success('Role permissions updated!', {
      icon: '✅',
      duration: 3000,
    });
    setShowModal(false);
  };

  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: 'Users', href: '/users/list' }, { label: 'Roles & Permissions', href: '#' }]} />

      <div className="flex justify-between items-start">
        <div className="page-header">
          <h1 className="page-title">Roles & Permissions</h1>
          <p className="page-subtitle">Manage user roles and their permissions</p>
        </div>
        <button
          onClick={() => {
            console.log('Create new role');
            setEditingRole(null);
            setSelectedPermissions([]);
            setShowModal(true);
            toast('Creating new role...', { icon: '➕' });
          }}
          className="btn btn-primary"
        >
          <Plus size={20} />
          <span>New Role</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {Object.entries(stats).map(([key, value], idx) => (
          <div key={key} className="card">
            <div className="card-body text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1 capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rolesData.map((role) => (
          <div key={role.id} className="card hover:shadow-lg transition-shadow">
            <div className="card-body">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-3">
                  <div className={`p-3 bg-${role.color}-100 dark:bg-${role.color}-900/30 rounded-lg`}>
                    <Shield className={`text-${role.color}-600 dark:text-${role.color}-400`} size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{role.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{role.description}</p>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Users</span>
                  <Badge variant={role.color === 'red' ? 'danger' : 'primary'}>{role.users}</Badge>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-medium">{role.permissions.length}</span> permissions
                </div>
              </div>

              <div className="mb-4 max-h-32 overflow-y-auto">
                <div className="flex flex-wrap gap-1">
                  {role.permissions.slice(0, 5).map((perm, idx) => (
                    <Badge key={idx} variant="default" size="sm">
                      {perm === 'all' ? 'All Permissions' : perm.split('.')[1]}
                    </Badge>
                  ))}
                  {role.permissions.length > 5 && (
                    <Badge variant="info" size="sm">+{role.permissions.length - 5}</Badge>
                  )}
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => handleEditRole(role)}
                  className="btn btn-primary btn-sm flex-1"
                >
                  <Edit size={16} />
                  <span>Edit</span>
                </button>
                <button
                  onClick={() => handleDeleteRole(role)}
                  className="btn btn-secondary btn-sm"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={editingRole ? `Edit Role: ${editingRole.name}` : 'Create New Role'}
        size="xl"
        footer={
          <>
            <button onClick={() => setShowModal(false)} className="btn btn-secondary">
              Cancel
            </button>
            <button onClick={handleSaveRole} className="btn btn-primary">
              <Check size={18} />
              <span>Save Role</span>
            </button>
          </>
        }
      >
        <div className="space-y-6">
          <AdvancedInput
            label="Role Name"
            defaultValue={editingRole?.name || ''}
            placeholder="Enter role name..."
            icon={Shield}
            required
          />

          <AdvancedInput
            label="Description"
            defaultValue={editingRole?.description || ''}
            placeholder="Describe this role..."
          />

          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              Permissions
              <span className="ml-2 text-xs font-normal text-gray-500 dark:text-gray-400">
                ({selectedPermissions.length} selected)
              </span>
            </h4>

            <div className="space-y-4">
              {allPermissions.map((category, catIdx) => (
                <div key={catIdx} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <h5 className="font-medium text-gray-900 dark:text-white mb-3">{category.category}</h5>
                  <div className="space-y-2">
                    {category.permissions.map((perm) => {
                      const isSelected = selectedPermissions.includes(perm.id);
                      return (
                        <label
                          key={perm.id}
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors"
                        >
                          <div className="relative">
                            <input
                              type="checkbox"
                              checked={isSelected}
                              onChange={() => togglePermission(perm.id)}
                              className="w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500 cursor-pointer"
                            />
                            {isSelected && (
                              <Check className="absolute inset-0 text-white pointer-events-none" size={14} />
                            )}
                          </div>
                          <span className="text-sm text-gray-700 dark:text-gray-300">{perm.label}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
