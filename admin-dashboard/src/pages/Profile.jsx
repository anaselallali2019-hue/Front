import { Mail, Phone, MapPin, Calendar, Edit, Camera } from 'lucide-react';

export default function Profile() {
  const userStats = [
    { label: 'Total Orders', value: '1,234', color: 'blue' },
    { label: 'Completed', value: '987', color: 'green' },
    { label: 'In Progress', value: '156', color: 'orange' },
    { label: 'Cancelled', value: '91', color: 'red' },
  ];

  const recentActivity = [
    { action: 'Updated profile picture', time: '2 hours ago', type: 'profile' },
    { action: 'Changed password', time: '1 day ago', type: 'security' },
    { action: 'Added new payment method', time: '3 days ago', type: 'payment' },
    { action: 'Completed order #1234', time: '5 days ago', type: 'order' },
    { action: 'Updated email preferences', time: '1 week ago', type: 'settings' },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
        <p className="text-gray-600 mt-1">Manage your account information and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Cover Image */}
            <div className="h-32 bg-gradient-to-r from-primary-500 to-primary-600"></div>
            
            {/* Profile Info */}
            <div className="px-6 pb-6">
              <div className="relative -mt-16 mb-4">
                <div className="relative inline-block">
                  <img
                    src="https://ui-avatars.com/api/?name=John+Doe&size=128&background=0ea5e9&color=fff"
                    alt="Profile"
                    className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
                  />
                  <button className="absolute bottom-2 right-2 bg-primary-600 text-white p-2 rounded-full hover:bg-primary-700 transition-colors shadow-lg">
                    <Camera size={18} />
                  </button>
                </div>
              </div>

              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900">John Doe</h2>
                <p className="text-gray-600 mt-1">Senior Administrator</p>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-center space-x-3 text-gray-600">
                  <Mail size={18} className="text-gray-400" />
                  <span className="text-sm">john.doe@example.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Phone size={18} className="text-gray-400" />
                  <span className="text-sm">+1 (234) 567-8900</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <MapPin size={18} className="text-gray-400" />
                  <span className="text-sm">San Francisco, CA</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Calendar size={18} className="text-gray-400" />
                  <span className="text-sm">Joined January 2024</span>
                </div>
              </div>

              <button className="w-full mt-6 flex items-center justify-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                <Edit size={18} />
                <span>Edit Profile</span>
              </button>
            </div>
          </div>

          {/* Stats Card */}
          <div className="bg-white rounded-lg shadow-md p-6 mt-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Statistics</h3>
            <div className="space-y-4">
              {userStats.map((stat, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">{stat.label}</span>
                    <span className="text-sm font-bold text-gray-900">{stat.value}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full bg-${stat.color}-500`}
                      style={{ width: `${(parseInt(stat.value.replace(',', '')) / 1234) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* About */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">About</h3>
            <p className="text-gray-600 leading-relaxed">
              Experienced administrator with a passion for streamlining operations and improving efficiency. 
              Specialized in data management, user experience optimization, and team collaboration. 
              Always looking for innovative solutions to complex problems.
            </p>
          </div>

          {/* Personal Information */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  defaultValue="John"
                  className="input"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input
                  type="text"
                  defaultValue="Doe"
                  className="input"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  defaultValue="john.doe@example.com"
                  className="input"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  defaultValue="+1 (234) 567-8900"
                  className="input"
                  readOnly
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                <input
                  type="text"
                  defaultValue="123 Main St, San Francisco, CA 94102"
                  className="input"
                  readOnly
                />
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h3>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-4 pb-4 border-b border-gray-100 last:border-0">
                  <div className={`p-2 rounded-lg ${
                    activity.type === 'profile' ? 'bg-blue-100' :
                    activity.type === 'security' ? 'bg-red-100' :
                    activity.type === 'payment' ? 'bg-green-100' :
                    activity.type === 'order' ? 'bg-orange-100' :
                    'bg-purple-100'
                  }`}>
                    <div className={`w-2 h-2 rounded-full ${
                      activity.type === 'profile' ? 'bg-blue-500' :
                      activity.type === 'security' ? 'bg-red-500' :
                      activity.type === 'payment' ? 'bg-green-500' :
                      activity.type === 'order' ? 'bg-orange-500' :
                      'bg-purple-500'
                    }`}></div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
