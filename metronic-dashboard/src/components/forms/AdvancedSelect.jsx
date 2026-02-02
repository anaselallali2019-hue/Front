import { useState, useEffect } from 'react';
import Select from 'react-select';
import { Search, X, Check } from 'lucide-react';

export default function AdvancedSelect({
  label,
  options = [],
  value,
  onChange,
  placeholder = 'Select...',
  isMulti = false,
  isSearchable = true,
  isClearable = true,
  isDisabled = false,
  error,
  helperText,
  required = false,
  icon: Icon,
  className = '',
}) {
  const [isFocused, setIsFocused] = useState(false);

  const customStyles = {
    control: (base, state) => ({
      ...base,
      minHeight: '42px',
      borderColor: error
        ? '#ef4444'
        : state.isFocused
        ? '#3b82f6'
        : '#d1d5db',
      boxShadow: state.isFocused ? '0 0 0 3px rgba(59, 130, 246, 0.1)' : 'none',
      '&:hover': {
        borderColor: error ? '#ef4444' : '#3b82f6',
      },
      backgroundColor: isDisabled ? '#f3f4f6' : 'white',
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected
        ? '#3b82f6'
        : state.isFocused
        ? '#eff6ff'
        : 'white',
      color: state.isSelected ? 'white' : '#1f2937',
      cursor: 'pointer',
      '&:active': {
        backgroundColor: '#3b82f6',
      },
    }),
    multiValue: (base) => ({
      ...base,
      backgroundColor: '#eff6ff',
      borderRadius: '6px',
    }),
    multiValueLabel: (base) => ({
      ...base,
      color: '#1e40af',
      fontWeight: '500',
    }),
    multiValueRemove: (base) => ({
      ...base,
      color: '#3b82f6',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#dbeafe',
        color: '#1e40af',
      },
    }),
  };

  const handleChange = (selectedOption) => {
    console.log('Select changed:', selectedOption);
    onChange?.(selectedOption);
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
        {Icon && !isMulti && (
          <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none z-10" size={20} />
        )}
        
        <Select
          value={value}
          onChange={handleChange}
          options={options}
          isMulti={isMulti}
          isSearchable={isSearchable}
          isClearable={isClearable}
          isDisabled={isDisabled}
          placeholder={placeholder}
          styles={customStyles}
          className={Icon && !isMulti ? 'pl-10' : ''}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          components={{
            DropdownIndicator: () => (
              <div className="px-2">
                <Search size={16} className="text-gray-400" />
              </div>
            ),
          }}
        />
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

// Exemple d'utilisation avec des options avancées
export function AdvancedSelectDemo() {
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const users = [
    { value: '1', label: 'John Doe', email: 'john@example.com' },
    { value: '2', label: 'Jane Smith', email: 'jane@example.com' },
    { value: '3', label: 'Bob Johnson', email: 'bob@example.com' },
    { value: '4', label: 'Alice Brown', email: 'alice@example.com' },
  ];

  const categories = [
    { value: 'tech', label: 'Technology', icon: '💻' },
    { value: 'design', label: 'Design', icon: '🎨' },
    { value: 'marketing', label: 'Marketing', icon: '📱' },
    { value: 'sales', label: 'Sales', icon: '💰' },
  ];

  return (
    <div className="space-y-6 p-6">
      <AdvancedSelect
        label="Select Users"
        options={users}
        value={selectedUsers}
        onChange={setSelectedUsers}
        isMulti
        placeholder="Select one or more users..."
        helperText="Select team members for this project"
      />

      <AdvancedSelect
        label="Category"
        options={categories}
        value={selectedCategory}
        onChange={setSelectedCategory}
        placeholder="Choose a category..."
        required
      />
    </div>
  );
}
