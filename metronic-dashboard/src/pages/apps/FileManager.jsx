import { useState } from 'react';
import { Grid, List, Folder, File, Image, FileText, Download, Trash2, Share2, MoreVertical, Plus, Upload } from 'lucide-react';

export default function FileManager() {
  const [viewMode, setViewMode] = useState('grid');

  const files = [
    { id: 1, name: 'Documents', type: 'folder', size: '12 files', modified: '2024-01-20', icon: Folder },
    { id: 2, name: 'Images', type: 'folder', size: '45 files', modified: '2024-01-19', icon: Folder },
    { id: 3, name: 'Project Proposal.pdf', type: 'pdf', size: '2.4 MB', modified: '2024-01-22', icon: FileText },
    { id: 4, name: 'Design Mockup.png', type: 'image', size: '1.8 MB', modified: '2024-01-21', icon: Image },
    { id: 5, name: 'Report.docx', type: 'document', size: '856 KB', modified: '2024-01-20', icon: File },
    { id: 6, name: 'Presentation.pptx', type: 'document', size: '3.2 MB', modified: '2024-01-19', icon: File },
    { id: 7, name: 'Screenshot.jpg', type: 'image', size: '945 KB', modified: '2024-01-23', icon: Image },
    { id: 8, name: 'Data Sheet.xlsx', type: 'spreadsheet', size: '1.2 MB', modified: '2024-01-18', icon: FileText },
  ];

  const FileIcon = ({ file }) => {
    const Icon = file.icon;
    const colors = {
      folder: 'text-yellow-500',
      pdf: 'text-red-500',
      image: 'text-blue-500',
      document: 'text-blue-600',
      spreadsheet: 'text-green-600',
    };
    
    return <Icon className={`${colors[file.type]} w-12 h-12`} />;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="page-title">File Manager</h1>
          <p className="page-subtitle">Organize and manage your files</p>
        </div>
        <div className="flex gap-3">
          <button className="btn btn-secondary">
            <Upload size={20} />
            <span>Upload</span>
          </button>
          <button className="btn btn-primary">
            <Plus size={20} />
            <span>New Folder</span>
          </button>
        </div>
      </div>

      {/* Storage Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card">
          <div className="card-body">
            <p className="text-sm text-gray-600 mb-1">Total Storage</p>
            <p className="text-2xl font-bold text-gray-900">100 GB</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <p className="text-sm text-gray-600 mb-1">Used Space</p>
            <p className="text-2xl font-bold text-blue-600">45.2 GB</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <p className="text-sm text-gray-600 mb-1">Total Files</p>
            <p className="text-2xl font-bold text-gray-900">1,247</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <p className="text-sm text-gray-600 mb-1">Shared Files</p>
            <p className="text-2xl font-bold text-gray-900">89</p>
          </div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="card">
        <div className="card-body flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">All Files</span>
            <select className="input input-sm w-auto">
              <option>All Types</option>
              <option>Documents</option>
              <option>Images</option>
              <option>Videos</option>
            </select>
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

      {/* Files */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {files.map((file) => (
            <div key={file.id} className="card group hover:shadow-lg transition-all cursor-pointer">
              <div className="card-body text-center">
                <div className="flex justify-end mb-2">
                  <button className="p-1 opacity-0 group-hover:opacity-100 hover:bg-gray-100 rounded transition-all">
                    <MoreVertical size={16} className="text-gray-500" />
                  </button>
                </div>
                <FileIcon file={file} />
                <p className="font-medium text-gray-900 mt-3 mb-1 truncate">{file.name}</p>
                <p className="text-xs text-gray-500">{file.size}</p>
                <p className="text-xs text-gray-400 mt-1">{file.modified}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="card">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Name</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Type</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Size</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Modified</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {files.map((file) => (
                <tr key={file.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <FileIcon file={file} />
                      <span className="font-medium text-gray-900">{file.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 capitalize">{file.type}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{file.size}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{file.modified}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-blue-600">
                        <Download size={16} />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-green-600">
                        <Share2 size={16} />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-red-600">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
