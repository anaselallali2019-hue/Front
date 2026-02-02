import { Plus, Filter } from 'lucide-react';
import ProjectCard from '../components/cards/ProjectCard';
import { projects } from '../data/mockData';

export default function Projects() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="page-title">Projects</h1>
          <p className="page-subtitle">Manage and track all your projects</p>
        </div>
        <button className="btn btn-primary">
          <Plus size={20} />
          <span>New Project</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card">
          <div className="card-body">
            <p className="text-sm text-gray-600 mb-1">Total Projects</p>
            <p className="text-2xl font-bold text-gray-900">{projects.length}</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <p className="text-sm text-gray-600 mb-1">In Progress</p>
            <p className="text-2xl font-bold text-blue-600">
              {projects.filter(p => p.status !== 'completed').length}
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <p className="text-sm text-gray-600 mb-1">Completed</p>
            <p className="text-2xl font-bold text-green-600">
              {projects.filter(p => p.status === 'completed').length}
            </p>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-body flex items-center gap-4">
          <button className="btn btn-secondary">
            <Filter size={18} />
            <span>All Projects</span>
          </button>
          <button className="btn btn-secondary">On Track</button>
          <button className="btn btn-secondary">At Risk</button>
          <button className="btn btn-secondary">Delayed</button>
          <button className="btn btn-secondary">Completed</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
