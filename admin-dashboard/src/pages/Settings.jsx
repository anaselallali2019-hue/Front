import { Bell, Lock, User, Globe, Palette, Shield } from 'lucide-react';
import { useState } from 'react';

export default function Settings() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    smsNotifications: true,
    weeklyReport: true,
    twoFactorAuth: false,
    publicProfile: true,
    showEmail: false,
    language: 'en',
    timezone: 'UTC-8',
    theme: 'light',
  });

  const handleToggle = (key) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleChange = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-1">Manage your account settings and preferences</p>
      </div>

      {/* Notifications Settings */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center space-x-3">
          <Bell className="text-primary-600" size={24} />
          <h2 className="text-xl font-bold text-gray-900">Notifications</h2>
        </div>
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Email Notifications</p>
              <p className="text-sm text-gray-600">Receive email about your account activity</p>
            </div>
            <button
              onClick={() => handleToggle('emailNotifications')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.emailNotifications ? 'bg-primary-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.emailNotifications ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Push Notifications</p>
              <p className="text-sm text-gray-600">Receive push notifications on your devices</p>
            </div>
            <button
              onClick={() => handleToggle('pushNotifications')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.pushNotifications ? 'bg-primary-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.pushNotifications ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">SMS Notifications</p>
              <p className="text-sm text-gray-600">Receive text messages for important updates</p>
            </div>
            <button
              onClick={() => handleToggle('smsNotifications')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.smsNotifications ? 'bg-primary-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.smsNotifications ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Weekly Report</p>
              <p className="text-sm text-gray-600">Receive weekly summary of your activity</p>
            </div>
            <button
              onClick={() => handleToggle('weeklyReport')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.weeklyReport ? 'bg-primary-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.weeklyReport ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Security Settings */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center space-x-3">
          <Lock className="text-primary-600" size={24} />
          <h2 className="text-xl font-bold text-gray-900">Security</h2>
        </div>
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Two-Factor Authentication</p>
              <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
            </div>
            <button
              onClick={() => handleToggle('twoFactorAuth')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.twoFactorAuth ? 'bg-primary-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.twoFactorAuth ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
              Change Password
            </button>
          </div>
          
          <div>
            <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
              Manage Sessions
            </button>
          </div>
        </div>
      </div>

      {/* Privacy Settings */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center space-x-3">
          <Shield className="text-primary-600" size={24} />
          <h2 className="text-xl font-bold text-gray-900">Privacy</h2>
        </div>
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Public Profile</p>
              <p className="text-sm text-gray-600">Make your profile visible to everyone</p>
            </div>
            <button
              onClick={() => handleToggle('publicProfile')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.publicProfile ? 'bg-primary-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.publicProfile ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Show Email Address</p>
              <p className="text-sm text-gray-600">Display your email on your public profile</p>
            </div>
            <button
              onClick={() => handleToggle('showEmail')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.showEmail ? 'bg-primary-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.showEmail ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Preferences */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center space-x-3">
          <Palette className="text-primary-600" size={24} />
          <h2 className="text-xl font-bold text-gray-900">Preferences</h2>
        </div>
        <div className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
            <select
              value={settings.language}
              onChange={(e) => handleChange('language', e.target.value)}
              className="input"
            >
              <option value="en">English</option>
              <option value="fr">Français</option>
              <option value="es">Español</option>
              <option value="de">Deutsch</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
            <select
              value={settings.timezone}
              onChange={(e) => handleChange('timezone', e.target.value)}
              className="input"
            >
              <option value="UTC-8">Pacific Time (UTC-8)</option>
              <option value="UTC-5">Eastern Time (UTC-5)</option>
              <option value="UTC+0">UTC</option>
              <option value="UTC+1">Central European Time (UTC+1)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Theme</label>
            <select
              value={settings.theme}
              onChange={(e) => handleChange('theme', e.target.value)}
              className="input"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="auto">Auto (System)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium">
          Save Changes
        </button>
      </div>
    </div>
  );
}
