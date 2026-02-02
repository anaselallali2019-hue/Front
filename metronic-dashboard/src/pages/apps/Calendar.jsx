import { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus, Calendar as CalendarIcon, Clock } from 'lucide-react';

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState('month');

  const events = [
    { id: 1, title: 'Team Meeting', start: '2024-02-15', time: '10:00 AM', color: 'blue' },
    { id: 2, title: 'Client Presentation', start: '2024-02-18', time: '2:00 PM', color: 'green' },
    { id: 3, title: 'Project Deadline', start: '2024-02-20', time: '5:00 PM', color: 'red' },
    { id: 4, title: 'Design Review', start: '2024-02-22', time: '11:00 AM', color: 'purple' },
  ];

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="page-title">Calendar</h1>
          <p className="page-subtitle">Manage your events and schedule</p>
        </div>
        <button className="btn btn-primary">
          <Plus size={20} />
          <span>New Event</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Calendar */}
        <div className="lg:col-span-3">
          <div className="card">
            <div className="card-header">
              <div className="flex items-center gap-4">
                <button onClick={prevMonth} className="p-2 hover:bg-gray-100 rounded-lg">
                  <ChevronLeft size={20} />
                </button>
                <h2 className="text-xl font-bold text-gray-900">
                  {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </h2>
                <button onClick={nextMonth} className="p-2 hover:bg-gray-100 rounded-lg">
                  <ChevronRight size={20} />
                </button>
              </div>
              <div className="flex gap-2">
                <button className={`btn btn-sm ${view === 'month' ? 'btn-primary' : 'btn-secondary'}`}>
                  Month
                </button>
                <button className={`btn btn-sm ${view === 'week' ? 'btn-primary' : 'btn-secondary'}`}>
                  Week
                </button>
                <button className={`btn btn-sm ${view === 'day' ? 'btn-primary' : 'btn-secondary'}`}>
                  Day
                </button>
              </div>
            </div>
            <div className="card-body">
              <div className="grid grid-cols-7 gap-px bg-gray-200 border border-gray-200 rounded-lg overflow-hidden">
                {/* Day Headers */}
                {dayNames.map((day) => (
                  <div key={day} className="bg-gray-50 p-3 text-center text-sm font-semibold text-gray-600">
                    {day}
                  </div>
                ))}
                
                {/* Empty cells for days before month starts */}
                {[...Array(firstDayOfMonth)].map((_, idx) => (
                  <div key={`empty-${idx}`} className="bg-white p-3 min-h-24" />
                ))}
                
                {/* Days of the month */}
                {[...Array(daysInMonth)].map((_, idx) => {
                  const day = idx + 1;
                  const isToday = day === new Date().getDate() && 
                    currentDate.getMonth() === new Date().getMonth() &&
                    currentDate.getFullYear() === new Date().getFullYear();
                    
                  return (
                    <div
                      key={day}
                      className={`bg-white p-3 min-h-24 hover:bg-gray-50 transition-colors cursor-pointer ${
                        isToday ? 'ring-2 ring-blue-500 ring-inset' : ''
                      }`}
                    >
                      <div className={`text-sm font-semibold mb-1 ${
                        isToday ? 'text-blue-600' : 'text-gray-900'
                      }`}>
                        {day}
                      </div>
                      {events.filter(e => new Date(e.start).getDate() === day).map(event => (
                        <div
                          key={event.id}
                          className={`text-xs p-1 rounded mb-1 bg-${event.color}-100 text-${event.color}-700 truncate`}
                        >
                          {event.title}
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="space-y-6">
          <div className="card">
            <div className="card-header">
              <h3 className="font-semibold text-gray-900">Upcoming Events</h3>
            </div>
            <div className="card-body space-y-3">
              {events.map((event) => (
                <div key={event.id} className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className={`w-1 rounded-full bg-${event.color}-500`} />
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 mb-1">{event.title}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <CalendarIcon size={14} />
                      <span>{event.start}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock size={14} />
                      <span>{event.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h4 className="font-semibold text-gray-900 mb-4">Quick Add Event</h4>
              <div className="space-y-3">
                <input type="text" placeholder="Event title" className="input" />
                <input type="date" className="input" />
                <input type="time" className="input" />
                <button className="btn btn-primary w-full">
                  <Plus size={18} />
                  <span>Add Event</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
