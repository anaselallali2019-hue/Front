import { TrendingUp, TrendingDown } from 'lucide-react';

export default function StatCard({ title, value, change, icon: Icon, color = 'primary' }) {
  const isPositive = change >= 0;
  
  const colorClasses = {
    primary: 'bg-primary-500',
    green: 'bg-green-500',
    orange: 'bg-orange-500',
    purple: 'bg-purple-500',
    blue: 'bg-blue-500',
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm text-gray-600 font-medium mb-1">{title}</p>
          <h3 className="text-3xl font-bold text-gray-900">{value}</h3>
          <div className="flex items-center mt-2">
            {isPositive ? (
              <TrendingUp className="text-green-500 mr-1" size={16} />
            ) : (
              <TrendingDown className="text-red-500 mr-1" size={16} />
            )}
            <span className={`text-sm font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
              {Math.abs(change)}%
            </span>
            <span className="text-sm text-gray-500 ml-2">vs last month</span>
          </div>
        </div>
        <div className={`${colorClasses[color]} p-4 rounded-lg`}>
          <Icon className="text-white" size={28} />
        </div>
      </div>
    </div>
  );
}
