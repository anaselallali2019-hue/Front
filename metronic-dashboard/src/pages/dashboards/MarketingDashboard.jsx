import StatWidget from '../../components/widgets/StatWidget';
import { Users, TrendingUp, MousePointer, DollarSign, Mail, Share2 } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

const campaignData = [
  { month: 'Jan', email: 4200, social: 3100, ads: 2800 },
  { month: 'Feb', email: 4500, social: 3400, ads: 3100 },
  { month: 'Mar', email: 4800, social: 3700, ads: 3400 },
  { month: 'Apr', email: 5100, social: 4000, ads: 3700 },
  { month: 'May', email: 5400, social: 4300, ads: 4000 },
  { month: 'Jun', email: 5700, social: 4600, ads: 4300 },
];

const channelData = [
  { name: 'Organic Search', value: 35 },
  { name: 'Paid Ads', value: 25 },
  { name: 'Social Media', value: 20 },
  { name: 'Email', value: 15 },
  { name: 'Direct', value: 5 },
];

export default function MarketingDashboard() {
  return (
    <div className="space-y-6">
      <div className="page-header">
        <h1 className="page-title">Marketing Dashboard</h1>
        <p className="page-subtitle">Track your marketing campaigns and performance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatWidget title="Total Leads" value="12,847" change={18.5} icon={Users} color="blue" />
        <StatWidget title="Conversion Rate" value="4.8%" change={12.3} icon={TrendingUp} color="green" />
        <StatWidget title="Click Rate" value="3.2%" change={-2.1} icon={MousePointer} color="orange" />
        <StatWidget title="ROI" value="340%" change={25.7} icon={DollarSign} color="purple" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <div className="card-header">
            <h3 className="section-title mb-0">Campaign Performance</h3>
          </div>
          <div className="card-body">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={campaignData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="email" stroke="#3b82f6" strokeWidth={2} />
                <Line type="monotone" dataKey="social" stroke="#10b981" strokeWidth={2} />
                <Line type="monotone" dataKey="ads" stroke="#f59e0b" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="section-title mb-0">Traffic Sources</h3>
          </div>
          <div className="card-body">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={channelData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={100}
                  dataKey="value"
                >
                  {channelData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <div className="card-body text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl mb-4">
              <Mail className="text-blue-600 dark:text-blue-400" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">45,234</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Email Subscribers</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl mb-4">
              <Share2 className="text-green-600 dark:text-green-400" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">128.5K</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Social Followers</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl mb-4">
              <TrendingUp className="text-orange-600 dark:text-orange-400" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">$45,678</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Ad Spend</p>
          </div>
        </div>
      </div>
    </div>
  );
}
