import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Calendar, Clock, X } from 'lucide-react';

export default function DatePickerField({
  label,
  value,
  onChange,
  showTimeSelect = false,
  dateFormat = 'dd/MM/yyyy',
  placeholder = 'Select date...',
  error,
  helperText,
  required = false,
  minDate,
  maxDate,
  disabled = false,
  isClearable = true,
  className = '',
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (date) => {
    console.log('Date selected:', date);
    onChange?.(date);
  };

  const handleClear = () => {
    console.log('Date cleared');
    onChange?.(null);
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none z-10">
          {showTimeSelect ? <Clock size={20} /> : <Calendar size={20} />}
        </div>

        <DatePicker
          selected={value}
          onChange={handleChange}
          showTimeSelect={showTimeSelect}
          dateFormat={showTimeSelect ? `${dateFormat} HH:mm` : dateFormat}
          placeholderText={placeholder}
          minDate={minDate}
          maxDate={maxDate}
          disabled={disabled}
          onCalendarOpen={() => setIsOpen(true)}
          onCalendarClose={() => setIsOpen(false)}
          className={`w-full pl-10 pr-10 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all
            ${error ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}
            ${disabled ? 'bg-gray-100 dark:bg-gray-700 cursor-not-allowed' : 'bg-white dark:bg-gray-800'}
            dark:text-white`}
        />

        {isClearable && value && !disabled && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {error && (
        <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
      {helperText && !error && (
        <p className="text-sm text-gray-500 dark:text-gray-400">{helperText}</p>
      )}
    </div>
  );
}

// Date Range Picker Component
export function DateRangePicker({
  label,
  startDate,
  endDate,
  onChange,
  error,
  required = false,
  className = '',
}) {
  const [focusedInput, setFocusedInput] = useState(null);

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    console.log('Date range changed:', { start, end });
    onChange?.({ startDate: start, endDate: end });
  };

  // Quick shortcuts
  const shortcuts = [
    { label: 'Today', getDates: () => [new Date(), new Date()] },
    {
      label: 'Last 7 days',
      getDates: () => {
        const end = new Date();
        const start = new Date();
        start.setDate(start.getDate() - 7);
        return [start, end];
      },
    },
    {
      label: 'Last 30 days',
      getDates: () => {
        const end = new Date();
        const start = new Date();
        start.setDate(start.getDate() - 30);
        return [start, end];
      },
    },
    {
      label: 'This month',
      getDates: () => {
        const now = new Date();
        const start = new Date(now.getFullYear(), now.getMonth(), 1);
        const end = new Date(now.getFullYear(), now.getMonth() + 1, 0);
        return [start, end];
      },
    },
  ];

  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <div className="flex gap-4 items-center">
        <div className="relative flex-1">
          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            placeholderText="Select date range..."
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-gray-800 dark:text-white"
          />
        </div>
      </div>

      {/* Shortcuts */}
      <div className="flex flex-wrap gap-2">
        {shortcuts.map((shortcut, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => {
              const dates = shortcut.getDates();
              handleDateChange(dates);
            }}
            className="px-3 py-1 text-xs font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors"
          >
            {shortcut.label}
          </button>
        ))}
      </div>

      {error && (
        <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  );
}
