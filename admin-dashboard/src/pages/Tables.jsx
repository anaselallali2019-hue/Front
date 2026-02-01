import DataTable from '../components/DataTable';
import { FileSpreadsheet, Download } from 'lucide-react';

const productsData = [
  { id: 'P001', name: 'Laptop Pro 15"', category: 'Electronics', price: '$1,299', stock: 45, sales: 234, rating: 4.8 },
  { id: 'P002', name: 'Wireless Mouse', category: 'Accessories', price: '$29', stock: 156, sales: 892, rating: 4.5 },
  { id: 'P003', name: 'USB-C Cable', category: 'Accessories', price: '$15', stock: 234, sales: 1245, rating: 4.3 },
  { id: 'P004', name: 'Mechanical Keyboard', category: 'Accessories', price: '$89', stock: 67, sales: 456, rating: 4.7 },
  { id: 'P005', name: 'Smartphone X', category: 'Electronics', price: '$899', stock: 23, sales: 567, rating: 4.9 },
  { id: 'P006', name: 'Tablet Air', category: 'Electronics', price: '$599', stock: 34, sales: 345, rating: 4.6 },
  { id: 'P007', name: 'Wireless Headphones', category: 'Audio', price: '$199', stock: 89, sales: 678, rating: 4.4 },
  { id: 'P008', name: 'Smart Watch', category: 'Wearables', price: '$399', stock: 56, sales: 234, rating: 4.5 },
  { id: 'P009', name: 'External SSD 1TB', category: 'Storage', price: '$149', stock: 78, sales: 456, rating: 4.8 },
  { id: 'P010', name: 'Webcam HD', category: 'Accessories', price: '$79', stock: 123, sales: 345, rating: 4.2 },
];

export default function Tables() {
  const columns = [
    { key: 'id', label: 'Product ID', sortable: true },
    { key: 'name', label: 'Product Name', sortable: true },
    {
      key: 'category',
      label: 'Category',
      sortable: true,
      render: (value) => (
        <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">
          {value}
        </span>
      ),
    },
    { key: 'price', label: 'Price', sortable: true },
    {
      key: 'stock',
      label: 'Stock',
      sortable: true,
      render: (value) => (
        <span className={`font-medium ${value < 50 ? 'text-red-600' : 'text-green-600'}`}>
          {value}
        </span>
      ),
    },
    { key: 'sales', label: 'Total Sales', sortable: true },
    {
      key: 'rating',
      label: 'Rating',
      sortable: true,
      render: (value) => (
        <div className="flex items-center space-x-1">
          <span className="text-yellow-400">★</span>
          <span className="font-medium">{value}</span>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Data Tables</h1>
          <p className="text-gray-600 mt-1">Advanced data table with sorting, filtering and pagination</p>
        </div>
        <button className="flex items-center space-x-2 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors">
          <Download size={20} />
          <span>Export Data</span>
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Total Products</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">{productsData.length}</h3>
            </div>
            <div className="bg-blue-500 p-3 rounded-lg">
              <FileSpreadsheet className="text-white" size={24} />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Total Stock</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">
                {productsData.reduce((acc, p) => acc + p.stock, 0)}
              </h3>
            </div>
            <div className="bg-green-500 p-3 rounded-lg">
              <FileSpreadsheet className="text-white" size={24} />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Total Sales</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">
                {productsData.reduce((acc, p) => acc + p.sales, 0)}
              </h3>
            </div>
            <div className="bg-orange-500 p-3 rounded-lg">
              <FileSpreadsheet className="text-white" size={24} />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Avg Rating</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">
                {(productsData.reduce((acc, p) => acc + p.rating, 0) / productsData.length).toFixed(1)}
              </h3>
            </div>
            <div className="bg-purple-500 p-3 rounded-lg">
              <FileSpreadsheet className="text-white" size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Products Table */}
      <DataTable columns={columns} data={productsData} />
    </div>
  );
}
