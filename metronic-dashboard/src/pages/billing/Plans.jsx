import { Check } from 'lucide-react';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import Badge from '../../components/ui/Badge';

export default function Plans() {
  const plans = [
    {
      name: 'Starter',
      price: 29,
      period: 'month',
      description: 'Perfect for small teams',
      features: [
        '5 Team Members',
        '10 GB Storage',
        'Basic Support',
        'Email Integration',
        'Mobile App Access',
      ],
      recommended: false,
    },
    {
      name: 'Professional',
      price: 79,
      period: 'month',
      description: 'Best for growing businesses',
      features: [
        '25 Team Members',
        '100 GB Storage',
        'Priority Support',
        'Advanced Analytics',
        'API Access',
        'Custom Integrations',
        'SSO Authentication',
      ],
      recommended: true,
    },
    {
      name: 'Enterprise',
      price: 199,
      period: 'month',
      description: 'For large organizations',
      features: [
        'Unlimited Team Members',
        '1 TB Storage',
        '24/7 Dedicated Support',
        'Advanced Security',
        'Custom Development',
        'SLA Guarantee',
        'Dedicated Account Manager',
        'On-premise Deployment',
      ],
      recommended: false,
    },
  ];

  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: 'Billing', href: '/billing' }, { label: 'Plans', href: '#' }]} />
      
      <div className="page-header">
        <div>
          <h1 className="page-title">Choose Your Plan</h1>
          <p className="page-subtitle">Select the perfect plan for your needs</p>
        </div>
      </div>

      <div className="flex justify-center mb-8">
        <div className="inline-flex items-center gap-4 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
          <button className="px-6 py-2 bg-white dark:bg-gray-700 rounded-lg shadow-sm font-medium text-gray-900 dark:text-white">
            Monthly
          </button>
          <button className="px-6 py-2 font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
            Yearly
            <Badge variant="success" size="sm" className="ml-2">Save 20%</Badge>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`card relative overflow-hidden ${
              plan.recommended ? 'ring-2 ring-primary-600 shadow-2xl' : ''
            }`}
          >
            {plan.recommended && (
              <div className="absolute top-4 right-4">
                <Badge variant="primary">Recommended</Badge>
              </div>
            )}
            
            <div className="card-body">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{plan.description}</p>
              
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-gray-900 dark:text-white">${plan.price}</span>
                  <span className="text-gray-600 dark:text-gray-400">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIdx) => (
                  <li key={featureIdx} className="flex items-start gap-3">
                    <Check className="text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`btn w-full ${plan.recommended ? 'btn-primary' : 'btn-secondary'}`}>
                Choose {plan.name}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="card">
        <div className="card-body text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Need a custom plan?</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Contact our sales team to discuss enterprise solutions
          </p>
          <button className="btn btn-primary">Contact Sales</button>
        </div>
      </div>
    </div>
  );
}
