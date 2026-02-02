import { useState } from 'react';
import toast from 'react-hot-toast';
import SuperDataTable from '../components/tables/SuperDataTable';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Badge from '../components/ui/Badge';
import { Edit, Trash2, Eye } from 'lucide-react';

const mockData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', department: 'IT', salary: 95000, joinDate: '2023-01-15' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Manager', status: 'Active', department: 'Sales', salary: 85000, joinDate: '2023-02-20' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Developer', status: 'Inactive', department: 'IT', salary: 75000, joinDate: '2023-03-10' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Designer', status: 'Active', department: 'Design', salary: 70000, joinDate: '2023-01-05' },
  { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'Developer', status: 'Active', department: 'IT', salary: 80000, joinDate: '2023-04-12' },
  { id: 6, name: 'Diana Prince', email: 'diana@example.com', role: 'Manager', status: 'Active', department: 'Marketing', salary: 90000, joinDate: '2023-02-28' },
  { id: 7, name: 'Evan Davis', email: 'evan@example.com', role: 'Analyst', status: 'Active', department: 'Finance', salary: 65000, joinDate: '2023-05-15' },
  { id: 8, name: 'Fiona Green', email: 'fiona@example.com', role: 'HR Manager', status: 'Active', department: 'HR', salary: 82000, joinDate: '2023-03-20' },
  { id: 9, name: 'George Miller', email: 'george@example.com', role: 'Developer', status: 'Active', department: 'IT', salary: 78000, joinDate: '2023-06-01' },
  { id: 10, name: 'Hannah Lee', email: 'hannah@example.com', role: 'Designer', status: 'Inactive', department: 'Design', salary: 72000, joinDate: '2023-04-18' },
  { id: 11, name: 'Ian Foster', email: 'ian@example.com', role: 'Sales Rep', status: 'Active', department: 'Sales', salary: 60000, joinDate: '2023-07-10' },
  { id: 12, name: 'Julia Martinez', email: 'julia@example.com', role: 'Developer', status: 'Active', department: 'IT', salary: 83000, joinDate: '2023-05-25' },
];

export default function DataTableDemo() {
  const columns = [
    {
      key: 'name',
      label: 'Employee',
      sortable: true,
      render: (_, row) => (
        <div className="flex items-center gap-3">
          <img
            src={`https://ui-avatars.com/api/?name=${row.name}&size=40&background=random`}
            alt={row.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-medium text-gray-900 dark:text-white">{row.name}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{row.email}</p>
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
          role === 'Developer' ? 'primary' :
          'default'
        }>
          {role}
        </Badge>
      ),
    },
    {
      key: 'department',
      label: 'Department',
      sortable: true,
    },
    {
      key: 'salary',
      label: 'Salary',
      sortable: true,
      render: (salary) => <span className="font-semibold">${salary.toLocaleString()}</span>,
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
      key: 'joinDate',
      label: 'Join Date',
      sortable: true,
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (_, row) => (
        <div className="flex items-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              console.log('View employee:', row.name);
              toast(`Viewing ${row.name}`, { icon: '👁️' });
            }}
            className="p-2 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-lg transition-colors"
          >
            <Eye size={18} className="text-blue-600 dark:text-blue-400" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              console.log('Edit employee:', row.name);
              toast(`Editing ${row.name}`, { icon: '✏️' });
            }}
            className="p-2 hover:bg-green-100 dark:hover:bg-green-900/30 rounded-lg transition-colors"
          >
            <Edit size={18} className="text-green-600 dark:text-green-400" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              console.log('Delete employee:', row.name);
              toast.error(`${row.name} deleted!`);
            }}
            className="p-2 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition-colors"
          >
            <Trash2 size={18} className="text-red-600 dark:text-red-400" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: 'Tables', href: '#' }, { label: 'Advanced DataTable', href: '#' }]} />

      <div className="page-header">
        <h1 className="page-title">Super Advanced DataTable</h1>
        <p className="page-subtitle">DataTable with all features: search, sort, pagination, bulk actions, export, column toggle</p>
      </div>

      <div className="card">
        <div className="card-body">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Features:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              '✅ Search (real-time)',
              '✅ Multi-column sorting',
              '✅ Pagination (10/25/50/100)',
              '✅ Row selection',
              '✅ Bulk actions',
              '✅ Export to CSV',
              '✅ Column show/hide',
              '✅ Row click events',
              '✅ Empty state',
              '✅ Responsive',
              '✅ Dark mode',
              '✅ All console logged',
            ].map((feature, idx) => (
              <div key={idx} className="text-sm text-gray-700 dark:text-gray-300">
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>

      <SuperDataTable
        columns={columns}
        data={mockData}
        selectable
        exportable
        onRowClick={(row) => {
          console.log('Row clicked:', row);
          toast(`Clicked on ${row.name}`, { icon: '👆' });
        }}
        onBulkDelete={(indices) => {
          console.log('Bulk delete:', indices);
        }}
      />
    </div>
  );
}
