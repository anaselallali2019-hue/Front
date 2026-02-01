export default function TimelineWidget({ items }) {
  const colorClasses = {
    blue: 'bg-blue-600 border-blue-200',
    green: 'bg-green-600 border-green-200',
    orange: 'bg-orange-600 border-orange-200',
    purple: 'bg-purple-600 border-purple-200',
    red: 'bg-red-600 border-red-200',
  };

  return (
    <div className="relative">
      {items.map((item, index) => (
        <div key={index} className="flex gap-4 pb-8 last:pb-0">
          <div className="relative">
            <div className={`w-3 h-3 rounded-full ${colorClasses[item.color || 'blue']}`} />
            {index !== items.length - 1 && (
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-0.5 h-full bg-gray-200" />
            )}
          </div>
          <div className="flex-1 -mt-0.5">
            <p className="text-sm font-medium text-gray-900">{item.title}</p>
            <p className="text-sm text-gray-600 mt-1">{item.description}</p>
            <p className="text-xs text-gray-500 mt-2">{item.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
