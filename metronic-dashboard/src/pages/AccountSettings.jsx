import { useState } from 'react';
import { User, Lock, Bell, Shield, Globe, Save } from 'lucide-react';
import toast from 'react-hot-toast';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import AdvancedInput from '../components/forms/AdvancedInput';
import FileUpload from '../components/forms/FileUpload';

export default function AccountSettings() {
  const [activeTab, setActiveTab] = useState('profile');
  const [settings, setSettings] = useState({
    // Profile
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 8900',
    avatar: [],
    
    // Security
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    twoFactorEnabled: false,
    
    // Notifications
    emailNotifications: true,
    pushNotifications: true,
    smsNotifications: false,
    weeklyReport: true,
    
    // Privacy
    publicProfile: true,
    showEmail: false,
    showPhone: false,
  });

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'security', label: 'Security', icon: Lock },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'privacy', label: 'Privacy', icon: Shield },
  ];

  const handleSave = () => {
    console.log('=== SETTINGS SAVED ===');
    console.log(JSON.stringify(settings, null, 2));
    toast.success('Settings saved successfully!', {
      duration: 3000,
      icon: '✅',
    });
  };

  const handleToggle = (key) => {
    const newValue = !settings[key];
    setSettings({ ...settings, [key]: newValue });
    console.log(`${key} toggled to:`, newValue);
    toast.success(`${key} ${newValue ? 'enabled' : 'disabled'}`);
  };

  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: 'Account', href: '#' }, { label: 'Settings', href: '#' }]} />
      
      <div className="page-header">
        <h1 className="page-title">Account Settings</h1>
        <p className="page-subtitle">Manage your account preferences and security</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Tabs Sidebar */}
        <div className="card">
          <div className="card-body p-3">
            <nav className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    console.log('Tab changed to:', tab.label);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    activeTab === tab.id
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <tab.icon size={20} />
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <>
              <div className="card">
                <div className="card-header">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Profile Information</h3>
                </div>
                <div className="card-body space-y-4">
                  <FileUpload
                    label="Profile Picture"
                    value={settings.avatar}
                    onChange={(files) => {
                      setSettings({ ...settings, avatar: files });
                      console.log('Avatar updated');
                    }}
                    accept={{ 'image/*': [] }}
                    maxFiles={1}
                    multiple={false}
                    helperText="Upload a profile picture (JPG, PNG - Max 2MB)"
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <AdvancedInput
                      label="First Name"
                      value={settings.firstName}
                      onChange={(e) => setSettings({ ...settings, firstName: e.target.value })}
                      icon={User}
                      required
                    />
                    <AdvancedInput
                      label="Last Name"
                      value={settings.lastName}
                      onChange={(e) => setSettings({ ...settings, lastName: e.target.value })}
                      required
                    />
                  </div>

                  <AdvancedInput
                    label="Email"
                    type="email"
                    value={settings.email}
                    onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                    required
                  />

                  <AdvancedInput
                    label="Phone"
                    value={settings.phone}
                    onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                  />
                </div>
              </div>
            </>
          )}

          {/* Security Tab */}
          {activeTab === 'security' && (
            <>
              <div className="card">
                <div className="card-header">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Change Password</h3>
                </div>
                <div className="card-body space-y-4">
                  <AdvancedInput
                    label="Current Password"
                    type="password"
                    value={settings.currentPassword}
                    onChange={(e) => setSettings({ ...settings, currentPassword: e.target.value })}
                    showPasswordToggle
                    icon={Lock}
                  />
                  <AdvancedInput
                    label="New Password"
                    type="password"
                    value={settings.newPassword}
                    onChange={(e) => setSettings({ ...settings, newPassword: e.target.value })}
                    showPasswordToggle
                    icon={Lock}
                  />
                  <AdvancedInput
                    label="Confirm Password"
                    type="password"
                    value={settings.confirmPassword}
                    onChange={(e) => setSettings({ ...settings, confirmPassword: e.target.value })}
                    showPasswordToggle
                    icon={Lock}
                  />
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Two-Factor Authentication</h3>
                </div>
                <div className="card-body">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Enable 2FA</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Add an extra layer of security</p>
                    </div>
                    <button
                      onClick={() => handleToggle('twoFactorEnabled')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.twoFactorEnabled ? 'bg-primary-600' : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.twoFactorEnabled ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Notifications Tab */}
          {activeTab === 'notifications' && (
            <div className="card">
              <div className="card-header">
                <h3 className="font-semibold text-gray-900 dark:text-white">Notification Preferences</h3>
              </div>
              <div className="card-body space-y-4">
                {[
                  { key: 'emailNotifications', label: 'Email Notifications', desc: 'Receive email updates' },
                  { key: 'pushNotifications', label: 'Push Notifications', desc: 'Receive push notifications' },
                  { key: 'smsNotifications', label: 'SMS Notifications', desc: 'Receive text messages' },
                  { key: 'weeklyReport', label: 'Weekly Report', desc: 'Get weekly summary emails' },
                ].map((item) => (
                  <div key={item.key} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{item.label}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                    </div>
                    <button
                      onClick={() => handleToggle(item.key)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings[item.key] ? 'bg-primary-600' : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings[item.key] ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Privacy Tab */}
          {activeTab === 'privacy' && (
            <div className="card">
              <div className="card-header">
                <h3 className="font-semibold text-gray-900 dark:text-white">Privacy Settings</h3>
              </div>
              <div className="card-body space-y-4">
                {[
                  { key: 'publicProfile', label: 'Public Profile', desc: 'Make your profile visible to everyone' },
                  { key: 'showEmail', label: 'Show Email', desc: 'Display email on public profile' },
                  { key: 'showPhone', label: 'Show Phone', desc: 'Display phone on public profile' },
                ].map((item) => (
                  <div key={item.key} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{item.label}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                    </div>
                    <button
                      onClick={() => handleToggle(item.key)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings[item.key] ? 'bg-primary-600' : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings[item.key] ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Save Button */}
          <div className="flex justify-end">
            <button onClick={handleSave} className="btn btn-primary">
              <Save size={18} />
              <span>Save Changes</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
