import StatWidget from '../../components/widgets/StatWidget';
import { DollarSign, TrendingUp, CreditCard, Wallet, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { AreaChart, Area, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Breadcrumbs from '../../components/ui/Breadcrumbs';

const monthlyData = [
  { month: 'Jan', income: 45000, expenses: 32000, profit: 13000 },
  { month: 'Feb', income: 52000, expenses: 35000, profit: 17000 },
  { month: 'Mar', income: 48000, expenses: 31000, profit: 17000 },
  { month: 'Apr', income: 61000, expenses: 38000, profit: 23000 },
  { month: 'May', income: 55000, expenses: 33000, profit: 22000 },
  { month: 'Jun', income: 67000, expenses: 40000, profit: 27000 },
];

const transactions = [
  { id: 1, type: 'income', description: 'Payment received from Client A', amount: 5000, date: '2024-02-01', status: 'completed' },
  { id: 2, type: 'expense', description: 'Office rent payment', amount: 3500, date: '2024-02-01', status: 'completed' },
  { id: 3, type: 'income', description: 'Product sales', amount: 8200, date: '2024-01-31', status: 'completed' },
  { id: 4, type: 'expense', description: 'Software subscriptions', amount: 1200, date: '2024-01-31', status: 'pending' },
  { id: 5, type: 'income', description: 'Consulting services', amount: 6500, date: '2024-01-30', status: 'completed' },
];

export default function FinanceDashboard() {
  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: 'Dashboards', href: '/' }, { label: 'Finance', href: '#' }]} />
      
      <div className="page-header">
        <h1 className="page-title">Finance Dashboard</h1>
        <p className="page-subtitle">Monitor your financial performance and transactions</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatWidget title="Total Income" value="$67,000" change={15.3} icon={DollarSign} color="green" />
        <StatWidget title="Total Expenses" value="$40,000" change={8.2} icon={CreditCard} color="red" />
        <StatWidget title="Net Profit" value="$27,000" change={22.5} icon={TrendingUp} color="blue" />
        <StatWidget title="Balance" value="$125,450" change={12.1} icon={Wallet} color="purple" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <div className="card-header">
            <h3 className="section-title mb-0">Income vs Expenses</h3>
          </div>
          <div className="card-body">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip />
                <Legend />
                <Bar dataKey="income" fill="#10b981" radius={[8, 8, 0, 0]} />
                <Bar dataKey="expenses" fill="#ef4444" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="section-title mb-0">Profit Trend</h3>
          </div>
          <div className="card-body">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={monthlyData}>
                <defs>
                  <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip />
                <Area type="monotone" dataKey="profit" stroke="#3b82f6" fillOpacity={1} fill="url(#colorProfit)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h3 className="section-title mb-0">Recent Transactions</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">Type</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">Description</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">Amount</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">Date</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {transactions.map((txn) => (
                <tr key={txn.id} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <td className="px-6 py-4">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg ${
                      txn.type === 'income' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                    }`}>
                      {txn.type === 'income' ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                      <span className="text-sm font-medium capitalize">{txn.type}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{txn.description}</td>
                  <td className="px-6 py-4">
                    <span className={`font-semibold ${
                      txn.type === 'income' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                    }`}>
                      {txn.type === 'income' ? '+' : '-'}${txn.amount.toLocaleString()}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{txn.date}</td>
                  <td className="px-6 py-4">
                    <Badge variant={txn.status === 'completed' ? 'success' : 'warning'}>
                      {txn.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
