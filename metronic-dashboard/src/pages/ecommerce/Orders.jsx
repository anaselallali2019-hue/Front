import { Download, Eye, Printer } from 'lucide-react';
import DataTable from '../../components/tables/DataTable';
import StatWidget from '../../components/widgets/StatWidget';
import { ShoppingCart, DollarSign, Clock, CheckCircle } from 'lucide-react';
import { orders } from '../../data/mockData';

export default function Orders() {
  const stats = {
    total: orders.length,
    pending: orders.filter(o => o.status === 'pending').length,
    processing: orders.filter(o => o.status === 'processing').length,
    delivered: orders.filter(o => o.status === 'delivered').length,
    revenue: orders.reduce((acc, o) => acc + o.amount, 0),
  };

  const columns = [
    {
      key: 'orderId',
      label: 'Order ID',
      sortable: true,
      render: (id) => <span className="font-medium text-gray-900">{id}</span>,
    },
    { key: 'customer', label: 'Customer', sortable: true },
    { key: 'product', label: 'Product', sortable: true },
    {
      key: 'amount',
      label: 'Amount',
      sortable: true,
      render: (amount) => <span className="font-semibold text-gray-900">${amount.toFixed(2)}</span>,
    },
    {
      key: 'payment',
      label: 'Payment',
      render: (payment) => <span className="badge badge-gray">{payment}</span>,
    },
    {
      key: 'status',
      label: 'Status',
      sortable: true,
      render: (status) => (
        <span className={`badge ${
          status === 'delivered' ? 'badge-success' :
          status === 'processing' ? 'badge-primary' :
          status === 'shipped' ? 'badge-warning' :
          status === 'cancelled' ? 'badge-danger' :
          'badge-gray'
        }`}>
          {status}
        </span>
      ),
    },
    {
      key: 'date',
      label: 'Date',
      sortable: true,
      render: (date) => <span className="text-gray-600">{date}</span>,
    },
    {
      key: 'actions',
      label: 'Actions',
      render: () => (
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-blue-600">
            <Eye size={18} />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-600">
            <Printer size={18} />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="page-title">Orders</h1>
          <p className="page-subtitle">Track and manage all customer orders</p>
        </div>
        <button className="btn btn-primary">
          <Download size={20} />
          <span>Export Orders</span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatWidget
          title="Total Orders"
          value={stats.total.toString()}
          change={12.5}
          icon={ShoppingCart}
          color="blue"
        />
        <StatWidget
          title="Total Revenue"
          value={`$${stats.revenue.toFixed(2)}`}
          change={8.3}
          icon={DollarSign}
          color="green"
        />
        <StatWidget
          title="Pending Orders"
          value={stats.pending.toString()}
          change={-2.4}
          icon={Clock}
          color="orange"
        />
        <StatWidget
          title="Delivered"
          value={stats.delivered.toString()}
          change={15.8}
          icon={CheckCircle}
          color="purple"
        />
      </div>

      {/* Orders Table */}
      <DataTable columns={columns} data={orders} />
    </div>
  );
}
