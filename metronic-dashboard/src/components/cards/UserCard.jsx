import { Mail, Phone, MapPin, MoreVertical } from 'lucide-react';

export default function UserCard({ user }) {
  return (
    <div className="card text-center">
      <div className="card-body">
        <div className="flex justify-end mb-2">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <MoreVertical size={18} className="text-gray-500" />
          </button>
        </div>
        
        <img
          src={user.avatar || `https://ui-avatars.com/api/?name=${user.name}&size=128&background=random`}
          alt={user.name}
          className="w-20 h-20 rounded-full mx-auto mb-4 ring-4 ring-gray-100"
        />
        
        <h3 className="font-semibold text-lg text-gray-900">{user.name}</h3>
        <p className="text-sm text-gray-500 mb-4">{user.role}</p>
        
        <div className="space-y-2 text-sm text-left mb-4">
          <div className="flex items-center gap-2 text-gray-600">
            <Mail size={16} />
            <span className="truncate">{user.email}</span>
          </div>
          {user.phone && (
            <div className="flex items-center gap-2 text-gray-600">
              <Phone size={16} />
              <span>{user.phone}</span>
            </div>
          )}
          {user.location && (
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin size={16} />
              <span>{user.location}</span>
            </div>
          )}
        </div>
        
        <div className="flex gap-2">
          <button className="btn btn-primary flex-1 btn-sm">Message</button>
          <button className="btn btn-secondary flex-1 btn-sm">View Profile</button>
        </div>
      </div>
    </div>
  );
}
