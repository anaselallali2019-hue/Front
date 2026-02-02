import { useState } from 'react';
import toast from 'react-hot-toast';
import StatWidget from '../components/widgets/StatWidget';
import MiniStatWidget from '../components/widgets/MiniStatWidget';
import ProgressWidget from '../components/widgets/ProgressWidget';
import TimelineWidget from '../components/widgets/TimelineWidget';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Badge from '../components/ui/Badge';
import { 
  Users, ShoppingCart, DollarSign, TrendingUp, Package, Mail, Phone, Activity,
  CheckCircle, Clock, AlertCircle, XCircle
} from 'lucide-react';

export default function WidgetsShowcase() {
  const [clickCount, setClickCount] = useState(0);

  const handleWidgetClick = (widgetName) => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    console.log(`Widget clicked: ${widgetName} (Total clicks: ${newCount})`);
    toast.success(`${widgetName} clicked!`, {
      icon: '👆',
      duration: 2000,
    });
  };

  const timelineItems = [
    { title: 'Order placed', description: 'New order #12345', time: '2 min ago', color: 'blue' },
    { title: 'Payment received', description: 'Invoice #INV-001 paid', time: '1 hour ago', color: 'green' },
    { title: 'Product shipped', description: 'Order #12344 shipped', time: '3 hours ago', color: 'orange' },
    { title: 'New customer', description: 'John Doe registered', time: '1 day ago', color: 'purple' },
    { title: 'Ticket resolved', description: 'Support ticket #789 closed', time: '2 days ago', color: 'red' },
  ];

  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: 'Widgets', href: '#' }]} />
      
      <div className="page-header">
        <div>
          <h1 className="page-title">Widgets Showcase</h1>
          <p className="page-subtitle">All available widgets with real interactions</p>
        </div>
        <div className="flex items-center gap-4">
          <Badge variant="info">Total Clicks: {clickCount}</Badge>
          <button
            onClick={() => {
              setClickCount(0);
              console.log('Click counter reset');
              toast('Counter reset!', { icon: '🔄' });
            }}
            className="btn btn-secondary btn-sm"
          >
            Reset Counter
          </button>
        </div>
      </div>

      {/* Stat Widgets */}
      <div>
        <h3 className="section-title">Stat Widgets (Clickable)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div onClick={() => handleWidgetClick('Total Users')}>
            <StatWidget
              title="Total Users"
              value="12,543"
              change={12.5}
              icon={Users}
              color="blue"
            />
          </div>
          <div onClick={() => handleWidgetClick('Total Orders')}>
            <StatWidget
              title="Total Orders"
              value="8,234"
              change={-3.2}
              icon={ShoppingCart}
              color="green"
            />
          </div>
          <div onClick={() => handleWidgetClick('Revenue')}>
            <StatWidget
              title="Revenue"
              value="$52,847"
              change={18.7}
              icon={DollarSign}
              color="orange"
            />
          </div>
          <div onClick={() => handleWidgetClick('Growth')}>
            <StatWidget
              title="Growth Rate"
              value="24.5%"
              change={5.3}
              icon={TrendingUp}
              color="purple"
            />
          </div>
        </div>
      </div>

      {/* Mini Stat Widgets */}
      <div>
        <h3 className="section-title">Mini Stat Widgets</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div onClick={() => handleWidgetClick('Products')}>
            <MiniStatWidget label="Products" value="1,243" icon={Package} color="blue" />
          </div>
          <div onClick={() => handleWidgetClick('Messages')}>
            <MiniStatWidget label="Messages" value="456" icon={Mail} color="green" />
          </div>
          <div onClick={() => handleWidgetClick('Calls')}>
            <MiniStatWidget label="Calls" value="89" icon={Phone} color="orange" />
          </div>
          <div onClick={() => handleWidgetClick('Active Users')}>
            <MiniStatWidget label="Active" value="2,341" icon={Activity} color="purple" />
          </div>
        </div>
      </div>

      {/* Progress Widgets */}
      <div className="card">
        <div className="card-header">
          <h3 className="section-title mb-0">Progress Widgets</h3>
        </div>
        <div className="card-body space-y-4">
          <ProgressWidget title="Website Development" value={75} max={100} color="blue" />
          <ProgressWidget title="Mobile App" value={45} max={100} color="green" />
          <ProgressWidget title="Marketing Campaign" value={90} max={100} color="orange" />
          <ProgressWidget title="Sales Target" value={60} max={100} color="purple" />
          <ProgressWidget title="Customer Satisfaction" value={85} max={100} color="red" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Timeline Widget */}
        <div className="card">
          <div className="card-header">
            <h3 className="section-title mb-0">Timeline Widget</h3>
          </div>
          <div className="card-body">
            <TimelineWidget items={timelineItems} />
          </div>
        </div>

        {/* Status Badges */}
        <div className="card">
          <div className="card-header">
            <h3 className="section-title mb-0">Status Badges</h3>
          </div>
          <div className="card-body space-y-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-600 dark:text-green-400" size={24} />
              <div className="flex-1">
                <p className="font-medium text-gray-900 dark:text-white">Success Status</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Everything is working perfectly</p>
              </div>
              <Badge variant="success">Active</Badge>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="text-orange-600 dark:text-orange-400" size={24} />
              <div className="flex-1">
                <p className="font-medium text-gray-900 dark:text-white">Pending Status</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Waiting for approval</p>
              </div>
              <Badge variant="warning">Pending</Badge>
            </div>
            <div className="flex items-center gap-3">
              <AlertCircle className="text-blue-600 dark:text-blue-400" size={24} />
              <div className="flex-1">
                <p className="font-medium text-gray-900 dark:text-white">Info Status</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Additional information available</p>
              </div>
              <Badge variant="info">Info</Badge>
            </div>
            <div className="flex items-center gap-3">
              <XCircle className="text-red-600 dark:text-red-400" size={24} />
              <div className="flex-1">
                <p className="font-medium text-gray-900 dark:text-white">Error Status</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Action required</p>
              </div>
              <Badge variant="danger">Error</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Demo */}
      <div className="card">
        <div className="card-header">
          <h3 className="section-title mb-0">Interactive Widget Test</h3>
        </div>
        <div className="card-body">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Click on any widget above to test interactivity. 
            Each click will trigger a toast notification and log to console.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              <strong>Total Clicks:</strong> {clickCount} | 
              <strong className="ml-4">Last Action:</strong> Check console (F12)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
