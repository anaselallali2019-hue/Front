import { Calendar, Users, Clock } from 'lucide-react';
import ProgressWidget from '../widgets/ProgressWidget';

export default function ProjectCard({ project }) {
  const statusColors = {
    'on-track': 'green',
    'at-risk': 'orange',
    'delayed': 'red',
    'completed': 'blue',
  };

  return (
    <div className="card hover:shadow-lg transition-shadow cursor-pointer">
      <div className="card-body">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-1">{project.name}</h3>
            <p className="text-sm text-gray-600">{project.description}</p>
          </div>
          <span className={`badge badge-${statusColors[project.status]}`}>
            {project.status.replace('-', ' ')}
          </span>
        </div>

        <ProgressWidget
          title="Progress"
          value={project.progress}
          max={100}
          color={statusColors[project.status]}
        />

        <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar size={16} />
            <span className="text-xs">{project.deadline}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Users size={16} />
            <span className="text-xs">{project.team} members</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Clock size={16} />
            <span className="text-xs">{project.tasks} tasks</span>
          </div>
        </div>

        {project.team && (
          <div className="flex -space-x-2 mt-4">
            {[...Array(Math.min(5, project.team))].map((_, idx) => (
              <img
                key={idx}
                src={`https://ui-avatars.com/api/?name=User${idx}&size=32&background=random`}
                alt=""
                className="w-8 h-8 rounded-full ring-2 ring-white"
              />
            ))}
            {project.team > 5 && (
              <div className="w-8 h-8 rounded-full bg-gray-200 ring-2 ring-white flex items-center justify-center text-xs font-medium text-gray-600">
                +{project.team - 5}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
