import { useState } from 'react';
import { Plus, Grid, List, Filter, Search, Edit, Trash2, Eye } from 'lucide-react';
import ProductCard from '../../components/cards/ProductCard';
import DataTable from '../../components/tables/DataTable';
import { products } from '../../data/mockData';

export default function Products() {
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);

  const columns = [
    {
      key: 'image',
      label: 'Product',
      render: (_, product) => (
        <div className="flex items-center gap-3">
          <img
            src={product.image || `https://picsum.photos/seed/${product.id}/100/100`}
            alt={product.name}
            className="w-12 h-12 rounded-lg object-cover"
          />
          <div>
            <p className="font-medium text-gray-900">{product.name}</p>
            <p className="text-sm text-gray-500">{product.category}</p>
          </div>
        </div>
      ),
    },
    {
      key: 'price',
      label: 'Price',
      sortable: true,
      render: (price) => <span className="font-semibold text-gray-900">${price}</span>,
    },
    {
      key: 'stock',
      label: 'Stock',
      sortable: true,
      render: (stock) => (
        <span className={`font-medium ${stock < 50 ? 'text-red-600' : 'text-green-600'}`}>
          {stock} units
        </span>
      ),
    },
    {
      key: 'sales',
      label: 'Sales',
      sortable: true,
      render: (sales) => sales.toLocaleString(),
    },
    {
      key: 'rating',
      label: 'Rating',
      sortable: true,
      render: (rating) => (
        <div className="flex items-center gap-1">
          <span className="text-yellow-400">★</span>
          <span className="font-medium">{rating}</span>
        </div>
      ),
    },
    {
      key: 'actions',
      label: 'Actions',
      render: () => (
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-blue-600">
            <Eye size={18} />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-green-600">
            <Edit size={18} />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-red-600">
            <Trash2 size={18} />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="page-title">Products</h1>
          <p className="page-subtitle">Manage your product inventory and catalog</p>
        </div>
        <button className="btn btn-primary">
          <Plus size={20} />
          <span>Add Product</span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card">
          <div className="card-body">
            <p className="text-sm text-gray-600 mb-1">Total Products</p>
            <p className="text-2xl font-bold text-gray-900">{products.length}</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <p className="text-sm text-gray-600 mb-1">Total Stock</p>
            <p className="text-2xl font-bold text-gray-900">
              {products.reduce((acc, p) => acc + p.stock, 0)}
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <p className="text-sm text-gray-600 mb-1">Total Sales</p>
            <p className="text-2xl font-bold text-gray-900">
              {products.reduce((acc, p) => acc + p.sales, 0).toLocaleString()}
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <p className="text-sm text-gray-600 mb-1">Avg. Rating</p>
            <p className="text-2xl font-bold text-gray-900">
              {(products.reduce((acc, p) => acc + p.rating, 0) / products.length).toFixed(1)}
            </p>
          </div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="card">
        <div className="card-body flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search products..."
                className="input pl-10"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="btn btn-secondary"
            >
              <Filter size={20} />
              <span className="hidden md:inline">Filters</span>
            </button>
          </div>

          <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
              }`}
            >
              <Grid size={18} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
              }`}
            >
              <List size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="card">
          <div className="card-body">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select className="input">
                  <option>All Categories</option>
                  <option>Electronics</option>
                  <option>Wearables</option>
                  <option>Accessories</option>
                  <option>Peripherals</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                <select className="input">
                  <option>All Prices</option>
                  <option>$0 - $50</option>
                  <option>$50 - $100</option>
                  <option>$100 - $200</option>
                  <option>$200+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Stock Status</label>
                <select className="input">
                  <option>All</option>
                  <option>In Stock</option>
                  <option>Low Stock</option>
                  <option>Out of Stock</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                <select className="input">
                  <option>All Ratings</option>
                  <option>4+ Stars</option>
                  <option>3+ Stars</option>
                  <option>2+ Stars</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Products Grid/List */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <DataTable columns={columns} data={products} />
      )}
    </div>
  );
}
