import { Mail, Phone, MapPin, Calendar, Edit, Camera, Briefcase } from 'lucide-react';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import Badge from '../../components/ui/Badge';

export default function UserProfile() {
  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: 'Profile', href: '#' }]} />
      
      <div className="card">
        <div className="h-48 bg-gradient-to-r from-primary-500 to-primary-700 rounded-t-xl"></div>
        <div className="card-body -mt-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div className="flex flex-col md:flex-row md:items-end gap-6">
              <div className="relative">
                <img
                  src="https://ui-avatars.com/api/?name=John+Doe&size=128&background=3b82f6&color=fff"
                  alt="User"
                  className="w-32 h-32 rounded-2xl border-4 border-white dark:border-gray-800 shadow-xl"
                />
                <button className="absolute bottom-2 right-2 bg-primary-600 text-white p-2 rounded-lg shadow-lg hover:bg-primary-700">
                  <Camera size={18} />
                </button>
              </div>
              <div className="pb-2">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white">John Doe</h1>
                  <Badge variant="success">Active</Badge>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Senior Product Designer</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <Mail size={16} />
                    <span>john.doe@example.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={16} />
                    <span>+1 234 567 8900</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>San Francisco, CA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>Joined January 2024</span>
                  </div>
                </div>
              </div>
            </div>
            <button className="btn btn-primary">
              <Edit size={18} />
              <span>Edit Profile</span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="space-y-6">
          <div className="card">
            <div className="card-header">
              <h3 className="font-semibold text-gray-900 dark:text-white">About</h3>
            </div>
            <div className="card-body space-y-4">
              <div>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Bio</h4>
                <p className="text-gray-900 dark:text-gray-100">Passionate designer with 8+ years of experience creating beautiful and functional user interfaces.</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Department</h4>
                <p className="text-gray-900 dark:text-gray-100">Design Team</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Employee ID</h4>
                <p className="text-gray-900 dark:text-gray-100">#EMP-12345</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h3 className="font-semibold text-gray-900 dark:text-white">Skills</h3>
            </div>
            <div className="card-body">
              <div className="flex flex-wrap gap-2">
                {['UI Design', 'UX Research', 'Prototyping', 'Figma', 'React', 'TypeScript'].map((skill, idx) => (
                  <Badge key={idx} variant="primary">{skill}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="card">
            <div className="card-header">
              <h3 className="font-semibold text-gray-900 dark:text-white">Recent Projects</h3>
            </div>
            <div className="card-body space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                    <Briefcase className="text-primary-600 dark:text-primary-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Website Redesign Project #{i}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Complete redesign of company website with modern UI/UX principles</p>
                    <div className="flex items-center gap-4 mt-2">
                      <Badge variant="info" size="sm">In Progress</Badge>
                      <span className="text-xs text-gray-500 dark:text-gray-400">Due: Feb 28, 2024</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h3 className="font-semibold text-gray-900 dark:text-white">Activity</h3>
            </div>
            <div className="card-body">
              <div className="space-y-4">
                {[
                  { action: 'Completed task "Design Homepage"', time: '2 hours ago' },
                  { action: 'Updated project status', time: '5 hours ago' },
                  { action: 'Joined new project team', time: '1 day ago' },
                  { action: 'Posted a comment', time: '2 days ago' },
                ].map((activity, idx) => (
                  <div key={idx} className="flex items-start gap-3 pb-4 border-b border-gray-100 dark:border-gray-700 last:border-0">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900 dark:text-gray-100">{activity.action}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
