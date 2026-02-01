import { Link } from 'react-router-dom';
import { Home, RefreshCw } from 'lucide-react';

export default function Error500() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <div className="text-center max-w-lg">
        <h1 className="text-9xl font-bold text-red-600 dark:text-red-400 mb-4">500</h1>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Server Error</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Something went wrong on our end. We're working to fix it.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn btn-primary">
            <Home size={20} />
            <span>Go Home</span>
          </Link>
          <button onClick={() => window.location.reload()} className="btn btn-secondary">
            <RefreshCw size={20} />
            <span>Retry</span>
          </button>
        </div>
      </div>
    </div>
  );
}
