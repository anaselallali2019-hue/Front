import { Plus, Download, Eye, Edit, Trash2 } from 'lucide-react';
import DataTable from '../components/tables/DataTable';
import StatWidget from '../components/widgets/StatWidget';
import { DollarSign, FileText, Clock, CheckCircle } from 'lucide-react';
import { invoices } from '../data/mockData';

export default function Invoices() {
  const stats = {
    total: invoices.reduce((acc, inv) => acc + inv.amount, 0),
    paid: invoices.filter(i => i.status === 'paid').reduce((acc, i) => acc + i.amount, 0),
    pending: invoices.filter(i => i.status === 'pending').reduce((acc, i) => acc + i.amount, 0),
    overdue: invoices.filter(i => i.status === 'overdue').reduce((acc, i) => acc + i.amount, 0),
  };

  const columns = [
    {
      key: 'invoiceNo',
      label: 'Invoice #',
      sortable: true,
      render: (id) => <span className="font-medium text-blue-600">{id}</span>,
    },
    { key: 'client', label: 'Client', sortable: true },
    {
      key: 'amount',
      label: 'Amount',
      sortable: true,
      render: (amount) => <span className="font-semibold text-gray-900">${amount.toLocaleString()}</span>,
    },
    { key: 'items', label: 'Items', sortable: true },
    { key: 'date', label: 'Issue Date', sortable: true },
    { key: 'dueDate', label: 'Due Date', sortable: true },
    {
      key: 'status',
      label: 'Status',
      sortable: true,
      render: (status) => (
        <span className={`badge ${
          status === 'paid' ? 'badge-success' :
          status === 'pending' ? 'badge-warning' :
          'badge-danger'
        }`}>
          {status}
        </span>
      ),
    },
    {
      key: 'actions',
      label: 'Actions',
      render: () => (
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-blue-600">
            <Eye size={18} />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-green-600">
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
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="page-title">Invoices</h1>
          <p className="page-subtitle">Manage invoices and billing</p>
        </div>
        <div className="flex gap-3">
          <button className="btn btn-secondary">
            <Download size={20} />
            <span>Export</span>
          </button>
          <button className="btn btn-primary">
            <Plus size={20} />
            <span>New Invoice</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatWidget
          title="Total Revenue"
          value={`$${stats.total.toLocaleString()}`}
          change={15.3}
          icon={DollarSign}
          color="blue"
        />
        <StatWidget
          title="Paid"
          value={`$${stats.paid.toLocaleString()}`}
          change={8.7}
          icon={CheckCircle}
          color="green"
        />
        <StatWidget
          title="Pending"
          value={`$${stats.pending.toLocaleString()}`}
          change={3.2}
          icon={Clock}
          color="orange"
        />
        <StatWidget
          title="Overdue"
          value={`$${stats.overdue.toLocaleString()}`}
          change={-5.1}
          icon={FileText}
          color="red"
        />
      </div>

      <DataTable columns={columns} data={invoices} />
    </div>
  );
}
