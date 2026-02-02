import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import toast from 'react-hot-toast';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import AdvancedInput, { AdvancedTextarea } from '../components/forms/AdvancedInput';
import AdvancedSelect from '../components/forms/AdvancedSelect';
import DatePickerField, { DateRangePicker } from '../components/forms/DatePickerField';
import FileUpload from '../components/forms/FileUpload';
import Modal from '../components/ui/Modal';
import Alert from '../components/ui/Alert';
import Badge from '../components/ui/Badge';
import { User, Mail, Lock, Phone, Building, Send, Save } from 'lucide-react';

export default function ComponentsDemo() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    bio: '',
    selectedUsers: [],
    category: null,
    date: null,
    dateRange: { startDate: null, endDate: null },
    files: [],
  });

  const { control, handleSubmit, formState: { errors }, reset } = useForm();

  const users = [
    { value: '1', label: 'John Doe', email: 'john@example.com' },
    { value: '2', label: 'Jane Smith', email: 'jane@example.com' },
    { value: '3', label: 'Bob Johnson', email: 'bob@example.com' },
    { value: '4', label: 'Alice Brown', email: 'alice@example.com' },
    { value: '5', label: 'Charlie Wilson', email: 'charlie@example.com' },
  ];

  const categories = [
    { value: 'tech', label: 'Technology' },
    { value: 'design', label: 'Design' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'sales', label: 'Sales' },
    { value: 'hr', label: 'Human Resources' },
  ];

  const onSubmit = (data) => {
    console.log('=== FORM SUBMITTED ===');
    console.log(JSON.stringify(data, null, 2));
    
    toast.success('Form submitted successfully!', {
      duration: 3000,
      position: 'top-right',
    });

    // Show modal with submitted data
    setShowModal(true);
  };

  const handleTestClick = (componentName) => {
    console.log(`${componentName} clicked!`);
    toast('Component clicked: ' + componentName, {
      icon: '👏',
      duration: 2000,
    });
  };

  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: 'Components', href: '#' }, { label: 'Demo', href: '#' }]} />

      <div className="page-header">
        <h1 className="page-title">Advanced Components Demo</h1>
        <p className="page-subtitle">Test all form components with real functionality</p>
      </div>

      {/* Alerts Demo */}
      <div className="card">
        <div className="card-header">
          <h3 className="section-title mb-0">Alerts</h3>
        </div>
        <div className="card-body space-y-3">
          <Alert type="success" title="Success!" message="Your changes have been saved successfully." />
          <Alert type="error" title="Error!" message="Something went wrong. Please try again." />
          <Alert type="warning" title="Warning!" message="Your session will expire in 5 minutes." />
          <Alert type="info" title="Info" message="A new version is available. Please refresh." />
        </div>
      </div>

      {/* Badges Demo */}
      <div className="card">
        <div className="card-header">
          <h3 className="section-title mb-0">Badges</h3>
        </div>
        <div className="card-body flex flex-wrap gap-2">
          <Badge variant="default">Default</Badge>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="danger">Danger</Badge>
          <Badge variant="info">Info</Badge>
          <Badge variant="primary" size="lg">Large</Badge>
          <Badge variant="success" size="sm">Small</Badge>
        </div>
      </div>

      {/* Forms Demo */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="card">
          <div className="card-header">
            <h3 className="section-title mb-0">Text Inputs</h3>
          </div>
          <div className="card-body space-y-4">
            <AdvancedInput
              label="Full Name"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                console.log('Name changed:', e.target.value);
              }}
              placeholder="Enter your full name"
              icon={User}
              showClearButton
              required
              helperText="Enter your first and last name"
            />

            <AdvancedInput
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your@email.com"
              icon={Mail}
              required
              success={formData.email.includes('@') ? 'Valid email format' : undefined}
              error={formData.email && !formData.email.includes('@') ? 'Invalid email' : undefined}
            />

            <AdvancedInput
              label="Password"
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              placeholder="••••••••"
              icon={Lock}
              showPasswordToggle
              required
              helperText="Minimum 8 characters"
            />

            <AdvancedInput
              label="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+1 (234) 567-8900"
              icon={Phone}
              maxLength={20}
              showCounter
            />

            <AdvancedTextarea
              label="Biography"
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              placeholder="Tell us about yourself..."
              rows={4}
              maxLength={500}
              showCounter
              helperText="Share a brief description about yourself"
            />
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="section-title mb-0">Select & Dropdown</h3>
          </div>
          <div className="card-body space-y-4">
            <AdvancedSelect
              label="Select Team Members"
              options={users}
              value={formData.selectedUsers}
              onChange={(selected) => {
                setFormData({ ...formData, selectedUsers: selected });
                console.log('Selected users:', selected);
                toast.success(`${selected?.length || 0} users selected`);
              }}
              isMulti
              placeholder="Select one or more users..."
              helperText="Select team members for this project"
              icon={User}
            />

            <AdvancedSelect
              label="Category"
              options={categories}
              value={formData.category}
              onChange={(selected) => {
                setFormData({ ...formData, category: selected });
                console.log('Selected category:', selected);
              }}
              placeholder="Choose a category..."
              required
              icon={Building}
            />
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="section-title mb-0">Date Pickers</h3>
          </div>
          <div className="card-body space-y-4">
            <DatePickerField
              label="Event Date"
              value={formData.date}
              onChange={(date) => {
                setFormData({ ...formData, date });
                console.log('Date selected:', date);
                if (date) {
                  toast.success(`Date selected: ${date.toLocaleDateString()}`);
                }
              }}
              placeholder="Select a date..."
              helperText="Choose when the event will take place"
              required
            />

            <DatePickerField
              label="Event Date & Time"
              value={formData.date}
              onChange={(date) => setFormData({ ...formData, date })}
              showTimeSelect
              placeholder="Select date and time..."
            />

            <DateRangePicker
              label="Date Range"
              startDate={formData.dateRange.startDate}
              endDate={formData.dateRange.endDate}
              onChange={(range) => {
                setFormData({ ...formData, dateRange: range });
                console.log('Date range changed:', range);
              }}
            />
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="section-title mb-0">File Upload</h3>
          </div>
          <div className="card-body">
            <FileUpload
              label="Upload Files"
              value={formData.files}
              onChange={(files) => {
                setFormData({ ...formData, files });
                console.log('Files updated:', files.length, 'files');
                if (files.length > 0) {
                  toast.success(`${files.length} file(s) uploaded`);
                }
              }}
              maxSize={5242880}
              maxFiles={5}
              multiple
              helperText="Upload images or PDF files (max 5MB each)"
            />
          </div>
        </div>

        <div className="card">
          <div className="card-body flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={() => {
                reset();
                setFormData({
                  name: '',
                  email: '',
                  password: '',
                  phone: '',
                  bio: '',
                  selectedUsers: [],
                  category: null,
                  date: null,
                  dateRange: { startDate: null, endDate: null },
                  files: [],
                });
                console.log('Form reset');
                toast('Form reset!', { icon: '🔄' });
              }}
              className="btn btn-secondary"
            >
              Reset
            </button>
            <button type="submit" className="btn btn-primary">
              <Send size={18} />
              <span>Submit Form</span>
            </button>
          </div>
        </div>
      </form>

      {/* Modal Demo */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Form Submitted!"
        size="lg"
        footer={
          <>
            <button onClick={() => setShowModal(false)} className="btn btn-secondary">
              Close
            </button>
            <button className="btn btn-primary">
              <Save size={18} />
              <span>Save Changes</span>
            </button>
          </>
        }
      >
        <div className="space-y-4">
          <Alert type="success" message="Your form has been successfully submitted!" />
          
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Submitted Data:</h4>
            <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-auto">
              {JSON.stringify(formData, null, 2)}
            </pre>
          </div>

          <div className="flex items-center gap-2">
            <Badge variant="success">Success</Badge>
            <Badge variant="info">{formData.selectedUsers?.length || 0} users</Badge>
            <Badge variant="primary">{formData.files?.length || 0} files</Badge>
          </div>
        </div>
      </Modal>
    </div>
  );
}
