import { useState, useEffect } from 'react';
import { Search, Filter, X, Clock, TrendingUp } from 'lucide-react';
import toast from 'react-hot-toast';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Badge from '../components/ui/Badge';

const mockResults = {
  users: [
    { id: 1, name: 'John Doe', email: 'john@example.com', type: 'user' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', type: 'user' },
  ],
  projects: [
    { id: 1, name: 'Website Redesign', status: 'active', type: 'project' },
    { id: 2, name: 'Mobile App Development', status: 'planning', type: 'project' },
  ],
  files: [
    { id: 1, name: 'Proposal.pdf', size: '2.4 MB', type: 'file' },
    { id: 2, name: 'Design.png', size: '1.8 MB', type: 'file' },
  ],
  invoices: [
    { id: 1, number: 'INV-2024-001', amount: '$5,499', type: 'invoice' },
  ],
};

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [recentSearches, setRecentSearches] = useState([
    'john doe',
    'website project',
    'invoice 2024',
  ]);

  useEffect(() => {
    if (searchQuery.length > 0) {
      setIsSearching(true);
      // Simulate search delay
      const timer = setTimeout(() => {
        console.log('Searching for:', searchQuery);
        setResults(mockResults);
        setIsSearching(false);
        toast.success(`Found ${Object.values(mockResults).flat().length} results`);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setResults(null);
    }
  }, [searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query && !recentSearches.includes(query.toLowerCase())) {
      setRecentSearches([query.toLowerCase(), ...recentSearches.slice(0, 4)]);
    }
  };

  const filters = ['Users', 'Projects', 'Files', 'Invoices', 'Orders'];

  const toggleFilter = (filter) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter((f) => f !== filter));
      console.log('Filter removed:', filter);
    } else {
      setSelectedFilters([...selectedFilters, filter]);
      console.log('Filter added:', filter);
    }
  };

  const clearAllFilters = () => {
    setSelectedFilters([]);
    console.log('All filters cleared');
    toast('Filters cleared', { icon: '🔄' });
  };

  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: 'Search', href: '#' }]} />

      <div className="card">
        <div className="card-body">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search anything... (users, projects, files, invoices)"
              className="w-full pl-14 pr-4 py-4 text-lg border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 dark:text-white"
              autoFocus
            />
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  console.log('Search cleared');
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
              >
                <X size={20} />
              </button>
            )}
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Filter size={18} />
              <span className="font-medium">Filters:</span>
            </div>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => toggleFilter(filter)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  selectedFilters.includes(filter)
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {filter}
              </button>
            ))}
            {selectedFilters.length > 0 && (
              <button
                onClick={clearAllFilters}
                className="px-3 py-1.5 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
              >
                Clear all
              </button>
            )}
          </div>

          {/* Recent Searches */}
          {!searchQuery && recentSearches.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Clock size={18} className="text-gray-400" />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Recent Searches</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {recentSearches.map((recent, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSearch(recent)}
                    className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg text-sm text-gray-700 dark:text-gray-300 transition-colors"
                  >
                    {recent}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Loading State */}
      {isSearching && (
        <div className="card">
          <div className="card-body text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">Searching...</p>
          </div>
        </div>
      )}

      {/* Results */}
      {!isSearching && results && (
        <div className="space-y-6">
          {/* Results Header */}
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Found {Object.values(results).flat().length} results for "{searchQuery}"
            </h3>
          </div>

          {/* Users Results */}
          {results.users && results.users.length > 0 && (
            <div className="card">
              <div className="card-header">
                <h4 className="font-semibold text-gray-900 dark:text-white">Users ({results.users.length})</h4>
              </div>
              <div className="card-body space-y-3">
                {results.users.map((user) => (
                  <div key={user.id} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                    <img
                      src={`https://ui-avatars.com/api/?name=${user.name}&size=48&background=random`}
                      alt={user.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 dark:text-white">{user.name}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{user.email}</p>
                    </div>
                    <Badge variant="primary">User</Badge>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects Results */}
          {results.projects && results.projects.length > 0 && (
            <div className="card">
              <div className="card-header">
                <h4 className="font-semibold text-gray-900 dark:text-white">Projects ({results.projects.length})</h4>
              </div>
              <div className="card-body space-y-3">
                {results.projects.map((project) => (
                  <div key={project.id} className="p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-gray-900 dark:text-white">{project.name}</p>
                      <Badge variant={project.status === 'active' ? 'success' : 'warning'}>
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Files Results */}
          {results.files && results.files.length > 0 && (
            <div className="card">
              <div className="card-header">
                <h4 className="font-semibold text-gray-900 dark:text-white">Files ({results.files.length})</h4>
              </div>
              <div className="card-body space-y-3">
                {results.files.map((file) => (
                  <div key={file.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{file.name}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{file.size}</p>
                    </div>
                    <Badge variant="info">File</Badge>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Empty State */}
      {!searchQuery && !results && (
        <div className="card">
          <div className="card-body text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full mb-4">
              <Search size={32} className="text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Start searching
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Search for users, projects, files, and more...
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
