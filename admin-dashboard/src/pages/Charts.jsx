import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const salesData = [
  { month: 'Jan', sales: 4000, revenue: 2400, profit: 1600 },
  { month: 'Feb', sales: 3000, revenue: 1398, profit: 1100 },
  { month: 'Mar', sales: 2000, revenue: 9800, profit: 7200 },
  { month: 'Apr', sales: 2780, revenue: 3908, profit: 2900 },
  { month: 'May', sales: 1890, revenue: 4800, profit: 3500 },
  { month: 'Jun', sales: 2390, revenue: 3800, profit: 2800 },
  { month: 'Jul', sales: 3490, revenue: 4300, profit: 3200 },
  { month: 'Aug', sales: 4000, revenue: 5200, profit: 3800 },
  { month: 'Sep', sales: 3780, revenue: 4900, profit: 3600 },
  { month: 'Oct', sales: 4200, revenue: 5500, profit: 4100 },
  { month: 'Nov', sales: 4800, revenue: 6200, profit: 4600 },
  { month: 'Dec', sales: 5200, revenue: 7000, profit: 5200 },
];

const categoryData = [
  { name: 'Electronics', value: 4500 },
  { name: 'Clothing', value: 3200 },
  { name: 'Food & Beverage', value: 2800 },
  { name: 'Books', value: 1500 },
  { name: 'Home & Garden', value: 2200 },
  { name: 'Sports', value: 1800 },
];

const performanceData = [
  { subject: 'Sales', A: 120, B: 110, fullMark: 150 },
  { subject: 'Marketing', A: 98, B: 130, fullMark: 150 },
  { subject: 'Development', A: 86, B: 130, fullMark: 150 },
  { subject: 'Support', A: 99, B: 100, fullMark: 150 },
  { subject: 'Design', A: 85, B: 90, fullMark: 150 },
  { subject: 'Analytics', A: 65, B: 85, fullMark: 150 },
];

const COLORS = ['#0ea5e9', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#06b6d4'];

export default function Charts() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Charts & Analytics</h1>
        <p className="text-gray-600 mt-1">Visualize your data with beautiful interactive charts</p>
      </div>

      {/* Line Chart */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Sales Trend</h2>
        <p className="text-sm text-gray-600 mb-6">Monthly sales performance over the year</p>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="#0ea5e9" strokeWidth={2} />
            <Line type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={2} />
            <Line type="monotone" dataKey="profit" stroke="#f59e0b" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart and Pie Chart Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Monthly Revenue Comparison</h2>
          <p className="text-sm text-gray-600 mb-6">Compare revenue and profit margins</p>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" fill="#0ea5e9" />
              <Bar dataKey="profit" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sales by Category</h2>
          <p className="text-sm text-gray-600 mb-6">Distribution of sales across categories</p>
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Area Chart and Radar Chart Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Revenue Growth</h2>
          <p className="text-sm text-gray-600 mb-6">Cumulative revenue over time</p>
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={salesData}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="revenue" stroke="#0ea5e9" fillOpacity={1} fill="url(#colorRevenue)" />
              <Area type="monotone" dataKey="profit" stroke="#10b981" fillOpacity={1} fill="url(#colorProfit)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Department Performance</h2>
          <p className="text-sm text-gray-600 mb-6">Multi-dimensional performance analysis</p>
          <ResponsiveContainer width="100%" height={350}>
            <RadarChart data={performanceData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Radar name="Team A" dataKey="A" stroke="#0ea5e9" fill="#0ea5e9" fillOpacity={0.6} />
              <Radar name="Team B" dataKey="B" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
              <Legend />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-md p-6 text-white">
          <p className="text-sm opacity-90 mb-2">Total Revenue</p>
          <h3 className="text-3xl font-bold">$54,290</h3>
          <p className="text-sm mt-2 opacity-75">+12.5% from last month</p>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow-md p-6 text-white">
          <p className="text-sm opacity-90 mb-2">Total Profit</p>
          <h3 className="text-3xl font-bold">$38,600</h3>
          <p className="text-sm mt-2 opacity-75">+8.3% from last month</p>
        </div>
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg shadow-md p-6 text-white">
          <p className="text-sm opacity-90 mb-2">Total Sales</p>
          <h3 className="text-3xl font-bold">41,530</h3>
          <p className="text-sm mt-2 opacity-75">+15.7% from last month</p>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg shadow-md p-6 text-white">
          <p className="text-sm opacity-90 mb-2">Avg Growth</p>
          <h3 className="text-3xl font-bold">+24.5%</h3>
          <p className="text-sm mt-2 opacity-75">Across all categories</p>
        </div>
      </div>
    </div>
  );
}
