export default function ProgressWidget({ title, value, max, percentage, color = 'blue' }) {
  const colorClasses = {
    blue: 'bg-blue-600',
    green: 'bg-green-600',
    orange: 'bg-orange-600',
    purple: 'bg-purple-600',
    red: 'bg-red-600',
  };

  const actualPercentage = percentage || (value / max) * 100;

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">{title}</span>
        <span className="text-sm font-bold text-gray-900">
          {value}{max && ` / ${max}`} ({actualPercentage.toFixed(0)}%)
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className={`${colorClasses[color]} h-2.5 rounded-full transition-all duration-500`}
          style={{ width: `${actualPercentage}%` }}
        />
      </div>
    </div>
  );
}
