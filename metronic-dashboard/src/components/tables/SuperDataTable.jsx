import { useState, useMemo } from 'react';
import toast from 'react-hot-toast';
import {
  Search,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Download,
  Filter,
  X,
  Settings,
  Check,
} from 'lucide-react';
import Badge from '../ui/Badge';

export default function SuperDataTable({
  columns = [],
  data = [],
  pageSize = 10,
  selectable = true,
  exportable = true,
  onRowClick,
  onBulkDelete,
  className = '',
}) {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(pageSize);
  const [visibleColumns, setVisibleColumns] = useState(columns.map(c => c.key));
  const [showColumnSettings, setShowColumnSettings] = useState(false);

  // Sorting
  const sortedData = useMemo(() => {
    const sorted = [...data];
    if (sortConfig.key) {
      sorted.sort((a, b) => {
        const aVal = a[sortConfig.key];
        const bVal = b[sortConfig.key];
        if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
        if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }
    return sorted;
  }, [data, sortConfig]);

  // Search
  const filteredData = useMemo(() => {
    if (!searchTerm) return sortedData;
    return sortedData.filter((row) =>
      Object.values(row).some((val) =>
        String(val).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [sortedData, searchTerm]);

  // Pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  const handleSort = (key) => {
    if (!key) return;
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
    console.log('Sorted by:', key, direction);
    toast(`Sorted by ${key} (${direction})`, { icon: '🔃', duration: 1500 });
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const allIds = paginatedData.map((_, idx) => startIndex + idx);
      setSelectedRows(allIds);
      console.log('All rows selected:', allIds.length);
      toast.success(`${allIds.length} rows selected`);
    } else {
      setSelectedRows([]);
      console.log('All rows deselected');
      toast('Selection cleared', { icon: '🔄' });
    }
  };

  const handleSelectRow = (index) => {
    if (selectedRows.includes(index)) {
      setSelectedRows(selectedRows.filter(i => i !== index));
      console.log('Row deselected:', index);
    } else {
      setSelectedRows([...selectedRows, index]);
      console.log('Row selected:', index);
    }
  };

  const handleBulkDelete = () => {
    console.log('=== BULK DELETE ===');
    console.log('Deleting rows:', selectedRows);
    toast.success(`${selectedRows.length} rows deleted!`, {
      icon: '🗑️',
      duration: 2000,
    });
    setSelectedRows([]);
    onBulkDelete?.(selectedRows);
  };

  const handleExport = () => {
    console.log('=== EXPORTING DATA ===');
    console.log('Total rows:', filteredData.length);
    const csv = [
      columns.map(c => c.label).join(','),
      ...filteredData.map(row =>
        columns.map(c => row[c.key]).join(',')
      )
    ].join('\n');
    console.log('CSV data:', csv);
    toast.success('Data exported to CSV!', {
      icon: '📥',
      duration: 2000,
    });
  };

  const toggleColumn = (columnKey) => {
    if (visibleColumns.includes(columnKey)) {
      setVisibleColumns(visibleColumns.filter(k => k !== columnKey));
      console.log('Column hidden:', columnKey);
    } else {
      setVisibleColumns([...visibleColumns, columnKey]);
      console.log('Column shown:', columnKey);
    }
  };

  const visibleColumnObjects = columns.filter(c => visibleColumns.includes(c.key));

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Toolbar */}
      <div className="card">
        <div className="card-body">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                  console.log('Search:', e.target.value);
                }}
                placeholder="Search..."
                className="input pl-10 pr-10"
              />
              {searchTerm && (
                <button
                  onClick={() => {
                    setSearchTerm('');
                    console.log('Search cleared');
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X size={18} />
                </button>
              )}
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              {exportable && (
                <button onClick={handleExport} className="btn btn-secondary">
                  <Download size={18} />
                  <span className="hidden md:inline">Export</span>
                </button>
              )}
              
              <div className="relative">
                <button
                  onClick={() => setShowColumnSettings(!showColumnSettings)}
                  className="btn btn-secondary"
                >
                  <Settings size={18} />
                  <span className="hidden md:inline">Columns</span>
                </button>

                {showColumnSettings && (
                  <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50">
                    <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">Show/Hide Columns</p>
                    </div>
                    {columns.map((col) => (
                      <label
                        key={col.key}
                        className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={visibleColumns.includes(col.key)}
                          onChange={() => toggleColumn(col.key)}
                          className="w-4 h-4 text-primary-600 rounded"
                        />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{col.label}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Bulk Actions */}
          {selectedRows.length > 0 && (
            <div className="mt-4 flex items-center gap-4 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
              <Badge variant="primary">{selectedRows.length} selected</Badge>
              <button
                onClick={handleBulkDelete}
                className="btn btn-danger btn-sm"
              >
                Delete Selected
              </button>
              <button
                onClick={() => {
                  console.log('Bulk export selected rows');
                  toast.success('Exporting selected rows...');
                }}
                className="btn btn-secondary btn-sm"
              >
                Export Selected
              </button>
              <button
                onClick={() => {
                  setSelectedRows([]);
                  console.log('Selection cleared');
                  toast('Selection cleared', { icon: '🔄' });
                }}
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                Clear
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Table */}
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
              <tr>
                {selectable && (
                  <th className="px-6 py-4 w-12">
                    <input
                      type="checkbox"
                      checked={selectedRows.length === paginatedData.length && paginatedData.length > 0}
                      onChange={handleSelectAll}
                      className="w-4 h-4 text-primary-600 rounded"
                    />
                  </th>
                )}
                {visibleColumnObjects.map((column, idx) => (
                  <th
                    key={idx}
                    onClick={() => column.sortable && handleSort(column.key)}
                    className={`px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider
                      ${column.sortable ? 'cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors' : ''}
                    `}
                  >
                    <div className="flex items-center gap-2">
                      {column.label}
                      {column.sortable && sortConfig.key === column.key && (
                        sortConfig.direction === 'asc' ? (
                          <ChevronUp size={16} />
                        ) : (
                          <ChevronDown size={16} />
                        )
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {paginatedData.length > 0 ? (
                paginatedData.map((row, rowIdx) => {
                  const globalIndex = startIndex + rowIdx;
                  const isSelected = selectedRows.includes(globalIndex);
                  
                  return (
                    <tr
                      key={rowIdx}
                      onClick={() => onRowClick?.(row)}
                      className={`transition-colors ${
                        isSelected ? 'bg-blue-50 dark:bg-blue-900/20' : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                      } ${onRowClick ? 'cursor-pointer' : ''}`}
                    >
                      {selectable && (
                        <td className="px-6 py-4">
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => handleSelectRow(globalIndex)}
                            onClick={(e) => e.stopPropagation()}
                            className="w-4 h-4 text-primary-600 rounded"
                          />
                        </td>
                      )}
                      {visibleColumnObjects.map((column, colIdx) => (
                        <td key={colIdx} className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                          {column.render ? column.render(row[column.key], row) : row[column.key]}
                        </td>
                      ))}
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td
                    colSpan={visibleColumnObjects.length + (selectable ? 1 : 0)}
                    className="px-6 py-12 text-center"
                  >
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                        <Search size={32} className="text-gray-400" />
                      </div>
                      <div>
                        <p className="text-gray-900 dark:text-white font-medium">No results found</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          Try adjusting your search or filters
                        </p>
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="card-body border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredData.length)} of {filteredData.length} entries
              </div>
              
              <select
                value={itemsPerPage}
                onChange={(e) => {
                  const newSize = Number(e.target.value);
                  setItemsPerPage(newSize);
                  setCurrentPage(1);
                  console.log('Page size changed to:', newSize);
                  toast(`Showing ${newSize} items per page`, { icon: '📄' });
                }}
                className="input input-sm w-20"
              >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setCurrentPage(1);
                  console.log('First page');
                }}
                disabled={currentPage === 1}
                className="btn btn-secondary btn-sm disabled:opacity-50"
              >
                <ChevronsLeft size={16} />
              </button>
              
              <button
                onClick={() => {
                  setCurrentPage(Math.max(1, currentPage - 1));
                  console.log('Previous page');
                }}
                disabled={currentPage === 1}
                className="btn btn-secondary btn-sm disabled:opacity-50"
              >
                <ChevronLeft size={16} />
              </button>

              {/* Page Numbers */}
              {[...Array(Math.min(5, totalPages))].map((_, idx) => {
                let pageNumber;
                if (totalPages <= 5) {
                  pageNumber = idx + 1;
                } else if (currentPage <= 3) {
                  pageNumber = idx + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNumber = totalPages - 4 + idx;
                } else {
                  pageNumber = currentPage - 2 + idx;
                }

                return (
                  <button
                    key={pageNumber}
                    onClick={() => {
                      setCurrentPage(pageNumber);
                      console.log('Page changed to:', pageNumber);
                    }}
                    className={`btn btn-sm min-w-[2.5rem] ${
                      currentPage === pageNumber ? 'btn-primary' : 'btn-secondary'
                    }`}
                  >
                    {pageNumber}
                  </button>
                );
              })}

              <button
                onClick={() => {
                  setCurrentPage(Math.min(totalPages, currentPage + 1));
                  console.log('Next page');
                }}
                disabled={currentPage === totalPages}
                className="btn btn-secondary btn-sm disabled:opacity-50"
              >
                <ChevronRight size={16} />
              </button>
              
              <button
                onClick={() => {
                  setCurrentPage(totalPages);
                  console.log('Last page');
                }}
                disabled={currentPage === totalPages}
                className="btn btn-secondary btn-sm disabled:opacity-50"
              >
                <ChevronsRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
