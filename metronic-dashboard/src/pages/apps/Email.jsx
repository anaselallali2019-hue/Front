import { useState } from 'react';
import {
  Search,
  Star,
  Inbox,
  Send,
  File,
  Trash2,
  Archive,
  Tag,
  RefreshCw,
  MoreVertical,
  Reply,
  Forward,
  Printer,
  ChevronLeft,
  Edit3,
} from 'lucide-react';
import { emails } from '../../data/mockData';

export default function Email() {
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [view, setView] = useState('inbox');

  const folders = [
    { icon: Inbox, label: 'Inbox', count: 12, color: 'blue' },
    { icon: Star, label: 'Starred', count: 4, color: 'yellow' },
    { icon: Send, label: 'Sent', count: 0, color: 'green' },
    { icon: File, label: 'Drafts', count: 3, color: 'gray' },
    { icon: Archive, label: 'Archive', count: 0, color: 'purple' },
    { icon: Trash2, label: 'Trash', count: 0, color: 'red' },
  ];

  const labels = [
    { name: 'Work', color: 'bg-blue-500' },
    { name: 'Personal', color: 'bg-green-500' },
    { name: 'Important', color: 'bg-red-500' },
    { name: 'Design', color: 'bg-purple-500' },
    { name: 'Dev', color: 'bg-orange-500' },
  ];

  return (
    <div className="h-[calc(100vh-8rem)]">
      <div className="card h-full flex overflow-hidden">
        {/* Sidebar */}
        <div className="w-64 border-r border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <button className="btn btn-primary w-full">
              <Edit3 size={20} />
              <span>Compose</span>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {/* Folders */}
            <div className="space-y-1 mb-6">
              {folders.map((folder, idx) => (
                <button
                  key={idx}
                  onClick={() => setView(folder.label.toLowerCase())}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
                    view === folder.label.toLowerCase()
                      ? 'bg-blue-50 text-blue-600'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <folder.icon size={18} />
                    <span className="font-medium">{folder.label}</span>
                  </div>
                  {folder.count > 0 && (
                    <span className={`text-xs font-semibold ${
                      view === folder.label.toLowerCase() ? 'text-blue-600' : 'text-gray-500'
                    }`}>
                      {folder.count}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Labels */}
            <div>
              <h4 className="text-xs font-semibold text-gray-500 uppercase mb-3 px-3">Labels</h4>
              <div className="space-y-1">
                {labels.map((label, idx) => (
                  <button
                    key={idx}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-700"
                  >
                    <span className={`w-2 h-2 rounded-full ${label.color}`} />
                    <span className="font-medium">{label.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Email List or Detail */}
        {!selectedEmail ? (
          <div className="flex-1 flex flex-col">
            {/* Toolbar */}
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      placeholder="Search emails..."
                      className="input pl-10"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <RefreshCw size={18} className="text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <MoreVertical size={18} className="text-gray-600" />
                  </button>
                </div>
              </div>
            </div>

            {/* Email List */}
            <div className="flex-1 overflow-y-auto">
              {emails.map((email) => (
                <button
                  key={email.id}
                  onClick={() => setSelectedEmail(email)}
                  className={`w-full p-4 flex items-start gap-4 border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                    email.unread ? 'bg-blue-50/30' : ''
                  }`}
                >
                  <button className={`mt-1 ${email.starred ? 'text-yellow-400' : 'text-gray-300 hover:text-gray-400'}`}>
                    <Star size={18} fill={email.starred ? 'currentColor' : 'none'} />
                  </button>
                  
                  <div className="flex-1 text-left min-w-0">
                    <div className="flex items-start justify-between mb-1">
                      <span className={`font-medium ${email.unread ? 'text-gray-900' : 'text-gray-700'}`}>
                        {email.from}
                      </span>
                      <span className="text-sm text-gray-500">{email.date}</span>
                    </div>
                    <p className={`text-sm mb-1 ${email.unread ? 'font-semibold text-gray-900' : 'text-gray-900'}`}>
                      {email.subject}
                    </p>
                    <p className="text-sm text-gray-600 truncate">{email.preview}</p>
                    {email.labels && email.labels.length > 0 && (
                      <div className="flex gap-2 mt-2">
                        {email.labels.map((label, idx) => (
                          <span key={idx} className="badge badge-gray text-xs">
                            {label}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {email.unread && (
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                  )}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col">
            {/* Email Header */}
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={() => setSelectedEmail(null)}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                >
                  <ChevronLeft size={20} />
                  <span>Back to inbox</span>
                </button>
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Archive size={18} className="text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Trash2 size={18} className="text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <MoreVertical size={18} className="text-gray-600" />
                  </button>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">{selectedEmail.subject}</h2>

              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <img
                    src={`https://ui-avatars.com/api/?name=${selectedEmail.from}&size=48&background=random`}
                    alt={selectedEmail.from}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{selectedEmail.from}</p>
                    <p className="text-sm text-gray-600">to me</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">{selectedEmail.date}</span>
              </div>
            </div>

            {/* Email Body */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  {selectedEmail.preview}
                  <br /><br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                  <br /><br />
                  Best regards,<br />
                  {selectedEmail.from}
                </p>
              </div>
            </div>

            {/* Email Actions */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex gap-3">
                <button className="btn btn-primary">
                  <Reply size={18} />
                  <span>Reply</span>
                </button>
                <button className="btn btn-secondary">
                  <Forward size={18} />
                  <span>Forward</span>
                </button>
                <button className="btn btn-secondary">
                  <Printer size={18} />
                  <span>Print</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
