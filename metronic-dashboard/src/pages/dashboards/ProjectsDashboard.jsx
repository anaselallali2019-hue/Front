import { useState } from 'react';
import toast from 'react-hot-toast';
import ProjectCard from '../../components/cards/ProjectCard';
import StatWidget from '../../components/widgets/StatWidget';
import TimelineWidget from '../../components/widgets/TimelineWidget';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import { Briefcase, CheckCircle, Clock, AlertCircle, Plus, Filter } from 'lucide-react';
import { projects } from '../../data/mockData';

export default function ProjectsDashboard() {
  const [filter, setFilter] = useState('all');

  const stats = {
    total: projects.length,
    onTrack: projects.filter(p => p.status === 'on-track').length,
    atRisk: projects.filter(p => p.status === 'at-risk').length,
    delayed: projects.filter(p => p.status === 'delayed').length,
    completed: projects.filter(p => p.status === 'completed').length,
  };

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.status === filter);

  const timelineItems = [
    { title: 'Project kickoff meeting', description: 'Website Redesign started', time: '2 hours ago', color: 'blue' },
    { title: 'Milestone completed', description: 'Mobile App - Design phase done', time: '1 day ago', color: 'green' },
    { title: 'Deadline updated', description: 'E-commerce Platform extended', time: '2 days ago', color: 'orange' },
    { title: 'Team member added', description: 'Sarah joined API Integration', time: '3 days ago', color: 'purple' },
  ];

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    console.log('Filter changed to:', newFilter);
    toast(`Showing ${newFilter === 'all' ? 'all' : newFilter} projects`, {
      icon: '🔍',
      duration: 2000,
    });
  };

  const handleCreateProject = () => {
    console.log('Create new project clicked');
    toast.success('Opening project creation form...', {
      icon: '🚀',
    });
  };

  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: 'Dashboards', href: '/' }, { label: 'Projects', href: '#' }]} />

      <div className="flex justify-between items-start">
        <div className="page-header">
          <h1 className="page-title">Projects Dashboard</h1>
          <p className="page-subtitle">Track and manage all your projects</p>
        </div>
        <button onClick={handleCreateProject} className="btn btn-primary">
          <Plus size={20} />
          <span>New Project</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div onClick={() => handleFilterChange('all')}>
          <StatWidget title="Total Projects" value={stats.total.toString()} icon={Briefcase} color="blue" />
        </div>
        <div onClick={() => handleFilterChange('on-track')}>
          <StatWidget title="On Track" value={stats.onTrack.toString()} icon={CheckCircle} color="green" />
        </div>
        <div onClick={() => handleFilterChange('at-risk')}>
          <StatWidget title="At Risk" value={stats.atRisk.toString()} icon={AlertCircle} color="orange" />
        </div>
        <div onClick={() => handleFilterChange('completed')}>
          <StatWidget title="Completed" value={stats.completed.toString()} icon={CheckCircle} color="purple" />
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <Filter size={18} className="text-gray-600 dark:text-gray-400" />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Filter:</span>
            </div>
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'on-track', label: 'On Track' },
              { id: 'at-risk', label: 'At Risk' },
              { id: 'delayed', label: 'Delayed' },
              { id: 'completed', label: 'Completed' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => handleFilterChange(f.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  filter === f.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="font-semibold text-gray-900 dark:text-white">Recent Activity</h3>
          </div>
          <div className="card-body">
            <TimelineWidget items={timelineItems} />
          </div>
        </div>
      </div>
    </div>
  );
}
