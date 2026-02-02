import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, X, File, Image as ImageIcon, FileText, CheckCircle } from 'lucide-react';

export default function FileUpload({
  label,
  value = [],
  onChange,
  accept = { 'image/*': [], 'application/pdf': [] },
  maxSize = 5242880, // 5MB
  maxFiles = 5,
  multiple = true,
  error,
  helperText,
  required = false,
  className = '',
}) {
  const [files, setFiles] = useState(value);

  const onDrop = useCallback(
    (acceptedFiles) => {
      const newFiles = acceptedFiles.map((file) => {
        console.log('File uploaded:', file.name, file.size, 'bytes');
        return Object.assign(file, {
          preview: URL.createObjectURL(file),
          id: Math.random().toString(36).substr(2, 9),
        });
      });

      const updatedFiles = multiple ? [...files, ...newFiles] : newFiles;
      setFiles(updatedFiles);
      onChange?.(updatedFiles);
    },
    [files, multiple, onChange]
  );

  const { getRootProps, getInputProps, isDragActive, fileRejections } = useDropzone({
    onDrop,
    accept,
    maxSize,
    maxFiles: multiple ? maxFiles : 1,
    multiple,
  });

  const removeFile = (fileId) => {
    console.log('File removed:', fileId);
    const updatedFiles = files.filter((file) => file.id !== fileId);
    setFiles(updatedFiles);
    onChange?.(updatedFiles);
  };

  const getFileIcon = (file) => {
    if (file.type.startsWith('image/')) return <ImageIcon size={24} />;
    if (file.type.includes('pdf')) return <FileText size={24} />;
    return <File size={24} />;
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all
          ${isDragActive ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/10' : 'border-gray-300 dark:border-gray-600 hover:border-primary-400'}
          ${error ? 'border-red-500' : ''}
        `}
      >
        <input {...getInputProps()} />
        
        <div className="flex flex-col items-center gap-3">
          <div className={`w-16 h-16 rounded-full flex items-center justify-center
            ${isDragActive ? 'bg-primary-100 dark:bg-primary-900/20' : 'bg-gray-100 dark:bg-gray-800'}
          `}>
            <Upload className={isDragActive ? 'text-primary-600 dark:text-primary-400' : 'text-gray-400'} size={32} />
          </div>
          
          <div>
            <p className="text-lg font-medium text-gray-900 dark:text-white">
              {isDragActive ? 'Drop files here...' : 'Drop files or click to upload'}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {multiple ? `Upload up to ${maxFiles} files` : 'Upload a file'} (Max {formatFileSize(maxSize)} each)
            </p>
          </div>

          <button type="button" className="btn btn-primary btn-sm">
            Select Files
          </button>
        </div>
      </div>

      {/* File Rejections */}
      {fileRejections.length > 0 && (
        <div className="space-y-2">
          {fileRejections.map(({ file, errors }) => (
            <div key={file.name} className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3">
              <p className="text-sm font-medium text-red-800 dark:text-red-200">{file.name}</p>
              {errors.map((err) => (
                <p key={err.code} className="text-xs text-red-600 dark:text-red-400">{err.message}</p>
              ))}
            </div>
          ))}
        </div>
      )}

      {/* Files List */}
      {files.length > 0 && (
        <div className="space-y-2">
          {files.map((file) => (
            <div key={file.id} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg group hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              {file.type.startsWith('image/') ? (
                <img
                  src={file.preview}
                  alt={file.name}
                  className="w-12 h-12 object-cover rounded-lg"
                />
              ) : (
                <div className="w-12 h-12 bg-white dark:bg-gray-900 rounded-lg flex items-center justify-center">
                  {getFileIcon(file)}
                </div>
              )}

              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                  {file.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {formatFileSize(file.size)}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-600 dark:text-green-400" size={20} />
                <button
                  type="button"
                  onClick={() => removeFile(file.id)}
                  className="p-1.5 hover:bg-red-100 dark:hover:bg-red-900/20 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                >
                  <X className="text-red-600 dark:text-red-400" size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {error && (
        <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
      {helperText && !error && (
        <p className="text-sm text-gray-500 dark:text-gray-400">{helperText}</p>
      )}
    </div>
  );
}
