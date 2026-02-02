import {
  DollarSign,
  ShoppingCart,
  Users,
  TrendingUp,
  Package,
  CreditCard,
  Activity,
  Eye,
} from 'lucide-react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import StatWidget from '../../components/widgets/StatWidget';
import MiniStatWidget from '../../components/widgets/MiniStatWidget';
import ProgressWidget from '../../components/widgets/ProgressWidget';
import TimelineWidget from '../../components/widgets/TimelineWidget';
import { chartData, orders } from '../../data/mockData';

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];

export default function DefaultDashboard() {
  const timelineItems = [
    { title: 'New order received', description: 'Order #12345 from John Doe', time: '2 minutes ago', color: 'blue' },
    { title: 'Payment processed', description: 'Invoice #INV-001 paid', time: '1 hour ago', color: 'green' },
    { title: 'Product shipped', description: 'Order #12344 has been shipped', time: '3 hours ago', color: 'orange' },
    { title: 'New customer registered', description: 'Jane Smith joined', time: '5 hours ago', color: 'purple' },
    { title: 'Review posted', description: '5-star review on Product X', time: '1 day ago', color: 'blue' },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="page-header">
        <h1 className="page-title">Dashboard</h1>
        <p className="page-subtitle">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Main Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatWidget
          title="Total Revenue"
          value="$52,847"
          change={12.5}
          icon={DollarSign}
          color="blue"
          subtitle="vs last month"
        />
        <StatWidget
          title="Total Orders"
          value="1,547"
          change={8.3}
          icon={ShoppingCart}
          color="green"
          subtitle="vs last month"
        />
        <StatWidget
          title="New Customers"
          value="342"
          change={-3.2}
          icon={Users}
          color="orange"
          subtitle="vs last month"
        />
        <StatWidget
          title="Conversion Rate"
          value="3.47%"
          change={2.1}
          icon={TrendingUp}
          color="purple"
          subtitle="vs last month"
        />
      </div>

      {/* Mini Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <MiniStatWidget label="Products" value="1,243" icon={Package} color="blue" />
        <MiniStatWidget label="Transactions" value="4,567" icon={CreditCard} color="green" />
        <MiniStatWidget label="Active Users" value="2,341" icon={Activity} color="orange" />
        <MiniStatWidget label="Page Views" value="45,231" icon={Eye} color="purple" />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="card">
          <div className="card-header">
            <div>
              <h3 className="section-title mb-0">Revenue Overview</h3>
              <p className="text-sm text-gray-600">Monthly revenue and profit trends</p>
            </div>
            <select className="input input-sm w-auto">
              <option>Last 12 Months</option>
              <option>Last 6 Months</option>
              <option>Last 3 Months</option>
            </select>
          </div>
          <div className="card-body">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={chartData.revenue}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" style={{ fontSize: '12px' }} />
                <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="revenue" stroke="#3b82f6" fillOpacity={1} fill="url(#colorRevenue)" strokeWidth={2} />
                <Area type="monotone" dataKey="profit" stroke="#10b981" fillOpacity={1} fill="url(#colorProfit)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Sales by Category */}
        <div className="card">
          <div className="card-header">
            <div>
              <h3 className="section-title mb-0">Sales by Category</h3>
              <p className="text-sm text-gray-600">Revenue distribution across categories</p>
            </div>
          </div>
          <div className="card-body">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={chartData.categories}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {chartData.categories.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {chartData.categories.map((cat, idx) => (
                <ProgressWidget
                  key={idx}
                  title={cat.name}
                  value={cat.sales}
                  max={20000}
                  color={['blue', 'green', 'orange', 'purple', 'red'][idx]}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Orders Chart and Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Orders Trend */}
        <div className="lg:col-span-2 card">
          <div className="card-header">
            <h3 className="section-title mb-0">Orders Trend</h3>
          </div>
          <div className="card-body">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData.revenue}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" style={{ fontSize: '12px' }} />
                <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} />
                <Tooltip />
                <Legend />
                <Bar dataKey="orders" fill="#3b82f6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="card">
          <div className="card-header">
            <h3 className="section-title mb-0">Recent Activity</h3>
          </div>
          <div className="card-body">
            <TimelineWidget items={timelineItems} />
          </div>
        </div>
      </div>

      {/* Recent Orders Table */}
      <div className="card">
        <div className="card-header">
          <h3 className="section-title mb-0">Recent Orders</h3>
          <button className="btn btn-primary btn-sm">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Order ID</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Customer</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Product</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Amount</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {orders.slice(0, 5).map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {order.orderId}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.customer}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.product}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                    ${order.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`badge ${
                      order.status === 'delivered' ? 'badge-success' :
                      order.status === 'processing' ? 'badge-primary' :
                      order.status === 'shipped' ? 'badge-warning' :
                      order.status === 'cancelled' ? 'badge-danger' :
                      'badge-gray'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Traffic Sources */}
      <div className="card">
        <div className="card-header">
          <h3 className="section-title mb-0">Traffic Sources</h3>
        </div>
        <div className="card-body">
          <div className="space-y-4">
            {chartData.traffic.map((source, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">{source.source}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-600">{source.visitors.toLocaleString()} visitors</span>
                    <span className="text-sm font-bold text-gray-900">{source.percentage}%</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${source.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
