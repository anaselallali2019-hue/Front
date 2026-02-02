import { Plus } from 'lucide-react';
import UserCard from '../components/cards/UserCard';
import { team } from '../data/mockData';

export default function Team() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="page-title">Team Members</h1>
          <p className="page-subtitle">Manage your team and their roles</p>
        </div>
        <button className="btn btn-primary">
          <Plus size={20} />
          <span>Add Member</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card">
          <div className="card-body">
            <p className="text-sm text-gray-600 mb-1">Total Members</p>
            <p className="text-2xl font-bold text-gray-900">{team.length}</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <p className="text-sm text-gray-600 mb-1">Total Projects</p>
            <p className="text-2xl font-bold text-gray-900">
              {team.reduce((acc, m) => acc + m.projects, 0)}
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <p className="text-sm text-gray-600 mb-1">Departments</p>
            <p className="text-2xl font-bold text-gray-900">6</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <p className="text-sm text-gray-600 mb-1">Locations</p>
            <p className="text-2xl font-bold text-gray-900">5</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {team.map((member) => (
          <UserCard key={member.id} user={{...member, avatar: null}} />
        ))}
      </div>
    </div>
  );
}
