import { useState } from 'react';
import { Search, Send, Phone, Video, MoreVertical, Paperclip, Smile, Image } from 'lucide-react';
import { chatContacts } from '../../data/mockData';

export default function Chat() {
  const [selectedContact, setSelectedContact] = useState(chatContacts[0]);
  const [message, setMessage] = useState('');

  const messages = [
    { id: 1, sender: 'Sarah Johnson', content: 'Hey! How are you doing?', time: '10:30 AM', isMine: false },
    { id: 2, sender: 'Me', content: 'Hi Sarah! I\'m doing great, thanks! How about you?', time: '10:32 AM', isMine: true },
    { id: 3, sender: 'Sarah Johnson', content: 'I\'m good! Working on the new project design.', time: '10:35 AM', isMine: false },
    { id: 4, sender: 'Me', content: 'That\'s awesome! Can\'t wait to see it.', time: '10:36 AM', isMine: true },
    { id: 5, sender: 'Sarah Johnson', content: 'I\'ll send you a preview soon. See you tomorrow!', time: '10:38 AM', isMine: false },
  ];

  const handleSend = () => {
    if (message.trim()) {
      // Handle send message
      setMessage('');
    }
  };

  return (
    <div className="h-[calc(100vh-8rem)]">
      <div className="card h-full flex overflow-hidden">
        {/* Contacts Sidebar */}
        <div className="w-80 border-r border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search contacts..."
                className="input pl-10"
              />
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            {chatContacts.map((contact) => (
              <button
                key={contact.id}
                onClick={() => setSelectedContact(contact)}
                className={`w-full p-4 flex items-start gap-3 hover:bg-gray-50 transition-colors border-b border-gray-100 ${
                  selectedContact.id === contact.id ? 'bg-blue-50' : ''
                }`}
              >
                <div className="relative">
                  <img
                    src={`https://ui-avatars.com/api/?name=${contact.name}&size=48&background=random`}
                    alt={contact.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <span className={`absolute bottom-0 right-0 w-3 h-3 border-2 border-white rounded-full ${
                    contact.status === 'online' ? 'bg-green-500' :
                    contact.status === 'away' ? 'bg-yellow-500' :
                    'bg-gray-400'
                  }`} />
                </div>
                <div className="flex-1 text-left min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-gray-900">{contact.name}</span>
                    <span className="text-xs text-gray-500">{contact.time}</span>
                  </div>
                  <p className="text-sm text-gray-600 truncate">{contact.lastMessage}</p>
                </div>
                {contact.unread > 0 && (
                  <span className="bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {contact.unread}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={`https://ui-avatars.com/api/?name=${selectedContact.name}&size=40&background=random`}
                alt={selectedContact.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="font-semibold text-gray-900">{selectedContact.name}</h3>
                <p className="text-sm text-gray-500 capitalize">{selectedContact.status}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Phone size={20} className="text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Video size={20} className="text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <MoreVertical size={20} className="text-gray-600" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.isMine ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-md ${msg.isMine ? 'order-2' : 'order-1'}`}>
                  {!msg.isMine && (
                    <p className="text-xs text-gray-500 mb-1 px-4">{msg.sender}</p>
                  )}
                  <div className={`px-4 py-3 rounded-2xl ${
                    msg.isMine
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-gray-100 text-gray-900 rounded-bl-none'
                  }`}>
                    <p className="text-sm">{msg.content}</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 px-4">{msg.time}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-end gap-3">
              <div className="flex gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Paperclip size={20} className="text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Image size={20} className="text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Smile size={20} className="text-gray-600" />
                </button>
              </div>
              <div className="flex-1 relative">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSend())}
                  placeholder="Type a message..."
                  rows={1}
                  className="input resize-none"
                />
              </div>
              <button
                onClick={handleSend}
                className="btn btn-primary"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
