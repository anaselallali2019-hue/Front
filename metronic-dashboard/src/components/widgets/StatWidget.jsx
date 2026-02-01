import { TrendingUp, TrendingDown } from 'lucide-react';

export default function StatWidget({ title, value, change, icon: Icon, color = 'blue', subtitle }) {
  const isPositive = change >= 0;

  const colorClasses = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    orange: 'bg-orange-500',
    purple: 'bg-purple-500',
    red: 'bg-red-500',
    pink: 'bg-pink-500',
    indigo: 'bg-indigo-500',
    cyan: 'bg-cyan-500',
  };

  return (
    <div className="card stat-card">
      <div className="card-body">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-600 mb-2">{title}</p>
            <h3 className="text-3xl font-bold text-gray-900 mb-3">{value}</h3>
            
            {change !== undefined && (
              <div className="flex items-center gap-2">
                <div className={`flex items-center gap-1 ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                  {isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                  <span className="text-sm font-semibold">{Math.abs(change)}%</span>
                </div>
                <span className="text-sm text-gray-500">{subtitle || 'vs last month'}</span>
              </div>
            )}
          </div>

          {Icon && (
            <div className={`${colorClasses[color]} p-3 rounded-xl`}>
              <Icon className="text-white" size={24} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
