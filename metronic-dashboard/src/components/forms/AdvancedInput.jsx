import { useState } from 'react';
import { Eye, EyeOff, X, Check, AlertCircle } from 'lucide-react';

export default function AdvancedInput({
  label,
  type = 'text',
  value = '',
  onChange,
  placeholder,
  error,
  success,
  helperText,
  required = false,
  disabled = false,
  icon: Icon,
  rightIcon: RightIcon,
  showClearButton = true,
  showPasswordToggle = false,
  maxLength,
  showCounter = false,
  onClear,
  className = '',
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const inputType = showPasswordToggle && showPassword ? 'text' : type;

  const handleChange = (e) => {
    const newValue = e.target.value;
    console.log('Input changed:', newValue);
    onChange?.(e);
  };

  const handleClear = () => {
    console.log('Input cleared');
    onClear?.();
    onChange?.({ target: { value: '' } });
  };

  const getBorderColor = () => {
    if (error) return 'border-red-500 focus:ring-red-500';
    if (success) return 'border-green-500 focus:ring-green-500';
    if (isFocused) return 'border-primary-500 focus:ring-primary-500';
    return 'border-gray-300 dark:border-gray-600 focus:ring-primary-500';
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
        {Icon && (
          <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
        )}

        <input
          type={inputType}
          value={value}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          disabled={disabled}
          maxLength={maxLength}
          className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 transition-all
            ${Icon ? 'pl-10' : ''}
            ${showClearButton || showPasswordToggle || RightIcon ? 'pr-10' : ''}
            ${getBorderColor()}
            ${disabled ? 'bg-gray-100 dark:bg-gray-700 cursor-not-allowed' : 'bg-white dark:bg-gray-800'}
            dark:text-white placeholder:text-gray-400`}
          {...props}
        />

        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
          {success && (
            <Check className="text-green-600 dark:text-green-400" size={20} />
          )}
          
          {error && (
            <AlertCircle className="text-red-600 dark:text-red-400" size={20} />
          )}

          {RightIcon && !error && !success && (
            <RightIcon className="text-gray-400" size={20} />
          )}

          {showPasswordToggle && type === 'password' && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
            >
              {showPassword ? (
                <EyeOff className="text-gray-400" size={18} />
              ) : (
                <Eye className="text-gray-400" size={18} />
              )}
            </button>
          )}

          {showClearButton && value && !disabled && !showPasswordToggle && (
            <button
              type="button"
              onClick={handleClear}
              className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
            >
              <X className="text-gray-400" size={18} />
            </button>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between gap-2">
        <div className="flex-1">
          {error && (
            <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
          )}
          {success && !error && (
            <p className="text-sm text-green-600 dark:text-green-400">{success}</p>
          )}
          {helperText && !error && !success && (
            <p className="text-sm text-gray-500 dark:text-gray-400">{helperText}</p>
          )}
        </div>

        {showCounter && maxLength && (
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {value.length}/{maxLength}
          </p>
        )}
      </div>
    </div>
  );
}

// Textarea Component
export function AdvancedTextarea({
  label,
  value = '',
  onChange,
  placeholder,
  error,
  helperText,
  required = false,
  disabled = false,
  rows = 4,
  maxLength,
  showCounter = true,
  className = '',
  ...props
}) {
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e) => {
    console.log('Textarea changed:', e.target.value.length, 'chars');
    onChange?.(e);
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <textarea
        value={value}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        disabled={disabled}
        rows={rows}
        maxLength={maxLength}
        className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 transition-all resize-none
          ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-primary-500'}
          ${disabled ? 'bg-gray-100 dark:bg-gray-700 cursor-not-allowed' : 'bg-white dark:bg-gray-800'}
          dark:text-white placeholder:text-gray-400`}
        {...props}
      />

      <div className="flex items-center justify-between gap-2">
        <div className="flex-1">
          {error && (
            <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
          )}
          {helperText && !error && (
            <p className="text-sm text-gray-500 dark:text-gray-400">{helperText}</p>
          )}
        </div>

        {showCounter && maxLength && (
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {value.length}/{maxLength}
          </p>
        )}
      </div>
    </div>
  );
}
