import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-white mb-4">404</h1>
        <div className="text-white mb-8">
          <h2 className="text-3xl font-bold mb-2">Page Not Found</h2>
          <p className="text-xl text-primary-100">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="flex items-center justify-center space-x-2 bg-white text-primary-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
          >
            <Home size={20} />
            <span>Go Home</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center space-x-2 bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-400 transition-colors font-medium border-2 border-white"
          >
            <ArrowLeft size={20} />
            <span>Go Back</span>
          </button>
        </div>

        <div className="mt-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-xl shadow-lg">
            <span className="text-primary-600 font-bold text-2xl">M</span>
          </div>
        </div>
      </div>
    </div>
  );
}
