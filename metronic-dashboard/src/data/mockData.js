// Mock data for the application

export const products = [
  { id: 1, name: 'Wireless Headphones', category: 'Electronics', price: 99.99, stock: 145, sales: 1234, rating: 4.8, image: null, badge: 'Hot' },
  { id: 2, name: 'Smart Watch Pro', category: 'Wearables', price: 299.99, stock: 67, sales: 892, rating: 4.6, image: null, badge: 'New' },
  { id: 3, name: 'Laptop Stand', category: 'Accessories', price: 49.99, stock: 234, sales: 2341, rating: 4.9, image: null },
  { id: 4, name: 'USB-C Hub', category: 'Accessories', price: 39.99, stock: 156, sales: 1876, rating: 4.7, image: null },
  { id: 5, name: 'Mechanical Keyboard', category: 'Peripherals', price: 129.99, stock: 89, sales: 743, rating: 4.8, image: null, badge: 'Sale' },
  { id: 6, name: 'Webcam 4K', category: 'Electronics', price: 149.99, stock: 45, sales: 456, rating: 4.5, image: null },
  { id: 7, name: 'Mouse Pad XL', category: 'Accessories', price: 24.99, stock: 312, sales: 3421, rating: 4.6, image: null },
  { id: 8, name: 'Monitor 27"', category: 'Electronics', price: 399.99, stock: 23, sales: 234, rating: 4.9, image: null, badge: 'Hot' },
];

export const customers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', phone: '+1 234 567 8901', location: 'New York, USA', orders: 45, spent: 4532.89, status: 'active', joined: '2023-01-15' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '+1 234 567 8902', location: 'Los Angeles, USA', orders: 32, spent: 3421.45, status: 'active', joined: '2023-02-20' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', phone: '+1 234 567 8903', location: 'Chicago, USA', orders: 28, spent: 2987.32, status: 'inactive', joined: '2023-03-10' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', phone: '+1 234 567 8904', location: 'Houston, USA', orders: 54, spent: 5678.90, status: 'active', joined: '2023-01-05' },
  { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', phone: '+1 234 567 8905', location: 'Phoenix, USA', orders: 19, spent: 1876.45, status: 'active', joined: '2023-04-12' },
];

export const orders = [
  { id: 1, orderId: '#ORD-2024-001', customer: 'John Doe', product: 'Wireless Headphones', amount: 99.99, status: 'delivered', date: '2024-01-20', payment: 'Credit Card' },
  { id: 2, orderId: '#ORD-2024-002', customer: 'Jane Smith', product: 'Smart Watch Pro', amount: 299.99, status: 'processing', date: '2024-01-21', payment: 'PayPal' },
  { id: 3, orderId: '#ORD-2024-003', customer: 'Bob Johnson', product: 'Laptop Stand', amount: 49.99, status: 'shipped', date: '2024-01-22', payment: 'Credit Card' },
  { id: 4, orderId: '#ORD-2024-004', customer: 'Alice Brown', product: 'USB-C Hub', amount: 39.99, status: 'pending', date: '2024-01-23', payment: 'Debit Card' },
  { id: 5, orderId: '#ORD-2024-005', customer: 'Charlie Wilson', product: 'Mechanical Keyboard', amount: 129.99, status: 'delivered', date: '2024-01-24', payment: 'Credit Card' },
  { id: 6, orderId: '#ORD-2024-006', customer: 'Diana Prince', product: 'Webcam 4K', amount: 149.99, status: 'cancelled', date: '2024-01-25', payment: 'PayPal' },
];

export const projects = [
  { id: 1, name: 'Website Redesign', description: 'Redesign company website with modern UI', progress: 75, status: 'on-track', deadline: 'Feb 28, 2024', team: 8, tasks: 24 },
  { id: 2, name: 'Mobile App Development', description: 'Develop iOS and Android mobile application', progress: 45, status: 'at-risk', deadline: 'Mar 15, 2024', team: 12, tasks: 48 },
  { id: 3, name: 'Dashboard Analytics', description: 'Build comprehensive analytics dashboard', progress: 90, status: 'on-track', deadline: 'Feb 10, 2024', team: 6, tasks: 18 },
  { id: 4, name: 'E-commerce Platform', description: 'Complete e-commerce solution', progress: 30, status: 'delayed', deadline: 'Apr 20, 2024', team: 15, tasks: 72 },
  { id: 5, name: 'API Integration', description: 'Integrate third-party APIs', progress: 100, status: 'completed', deadline: 'Jan 31, 2024', team: 4, tasks: 12 },
];

export const invoices = [
  { id: 1, invoiceNo: 'INV-2024-001', client: 'Acme Corp', amount: 5499.00, status: 'paid', date: '2024-01-15', dueDate: '2024-02-15', items: 12 },
  { id: 2, invoiceNo: 'INV-2024-002', client: 'Tech Solutions', amount: 8999.00, status: 'pending', date: '2024-01-18', dueDate: '2024-02-18', items: 24 },
  { id: 3, invoiceNo: 'INV-2024-003', client: 'Digital Agency', amount: 3250.00, status: 'overdue', date: '2024-01-10', dueDate: '2024-02-10', items: 8 },
  { id: 4, invoiceNo: 'INV-2024-004', client: 'StartUp Inc', amount: 12500.00, status: 'paid', date: '2024-01-22', dueDate: '2024-02-22', items: 36 },
  { id: 5, invoiceNo: 'INV-2024-005', client: 'Enterprise LLC', amount: 6750.00, status: 'pending', date: '2024-01-25', dueDate: '2024-02-25', items: 18 },
];

export const team = [
  { id: 1, name: 'Sarah Johnson', role: 'CEO & Founder', email: 'sarah@example.com', phone: '+1 234 567 8901', location: 'San Francisco, CA', department: 'Executive', projects: 15 },
  { id: 2, name: 'Mike Chen', role: 'CTO', email: 'mike@example.com', phone: '+1 234 567 8902', location: 'San Francisco, CA', department: 'Technology', projects: 28 },
  { id: 3, name: 'Emily Davis', role: 'Head of Design', email: 'emily@example.com', phone: '+1 234 567 8903', location: 'Los Angeles, CA', department: 'Design', projects: 22 },
  { id: 4, name: 'David Martinez', role: 'Senior Developer', email: 'david@example.com', phone: '+1 234 567 8904', location: 'Austin, TX', department: 'Technology', projects: 34 },
  { id: 5, name: 'Lisa Anderson', role: 'Marketing Director', email: 'lisa@example.com', phone: '+1 234 567 8905', location: 'New York, NY', department: 'Marketing', projects: 18 },
  { id: 6, name: 'Tom Wilson', role: 'Product Manager', email: 'tom@example.com', phone: '+1 234 567 8906', location: 'Seattle, WA', department: 'Product', projects: 26 },
];

export const chatContacts = [
  { id: 1, name: 'Sarah Johnson', status: 'online', lastMessage: 'See you tomorrow!', time: '2m ago', unread: 2 },
  { id: 2, name: 'Mike Chen', status: 'away', lastMessage: 'Thanks for the update', time: '1h ago', unread: 0 },
  { id: 3, name: 'Emily Davis', status: 'online', lastMessage: 'Let me check that', time: '3h ago', unread: 5 },
  { id: 4, name: 'David Martinez', status: 'offline', lastMessage: 'Great work!', time: '1d ago', unread: 0 },
  { id: 5, name: 'Lisa Anderson', status: 'online', lastMessage: 'Can we schedule a meeting?', time: '2d ago', unread: 1 },
];

export const emails = [
  { id: 1, from: 'John Doe', subject: 'Project Update', preview: 'Hi team, I wanted to share the latest updates...', date: '10:30 AM', starred: true, unread: true, labels: ['work', 'important'] },
  { id: 2, from: 'Jane Smith', subject: 'Meeting Reminder', preview: 'Just a friendly reminder about tomorrow\'s meeting...', date: '9:15 AM', starred: false, unread: true, labels: ['meeting'] },
  { id: 3, from: 'Bob Johnson', subject: 'Invoice #12345', preview: 'Please find attached the invoice for...', date: 'Yesterday', starred: false, unread: false, labels: ['finance'] },
  { id: 4, from: 'Alice Brown', subject: 'New Design Mockups', preview: 'I\'ve completed the new design mockups...', date: 'Yesterday', starred: true, unread: false, labels: ['design'] },
  { id: 5, from: 'Charlie Wilson', subject: 'Code Review Request', preview: 'Could you please review my PR...', date: '2 days ago', starred: false, unread: false, labels: ['dev'] },
];

export const chartData = {
  revenue: [
    { month: 'Jan', revenue: 12400, profit: 8200, orders: 145 },
    { month: 'Feb', revenue: 13980, profit: 9100, orders: 167 },
    { month: 'Mar', revenue: 15600, profit: 10400, orders: 189 },
    { month: 'Apr', revenue: 14200, profit: 9600, orders: 172 },
    { month: 'May', revenue: 18900, profit: 12800, orders: 234 },
    { month: 'Jun', revenue: 21300, profit: 14500, orders: 267 },
    { month: 'Jul', revenue: 24500, profit: 16900, orders: 312 },
    { month: 'Aug', revenue: 23100, profit: 15800, orders: 289 },
    { month: 'Sep', revenue: 26700, profit: 18400, orders: 345 },
    { month: 'Oct', revenue: 28900, profit: 20100, orders: 378 },
    { month: 'Nov', revenue: 31200, profit: 22300, orders: 421 },
    { month: 'Dec', revenue: 35600, profit: 25800, orders: 489 },
  ],
  categories: [
    { name: 'Electronics', value: 35, sales: 15600 },
    { name: 'Clothing', value: 25, sales: 11200 },
    { name: 'Food & Beverage', value: 20, sales: 8900 },
    { name: 'Home & Garden', value: 12, sales: 5400 },
    { name: 'Books', value: 8, sales: 3600 },
  ],
  traffic: [
    { source: 'Direct', visitors: 4234, percentage: 32 },
    { source: 'Organic Search', visitors: 3892, percentage: 29 },
    { source: 'Social Media', visitors: 2156, percentage: 16 },
    { source: 'Referral', visitors: 1823, percentage: 14 },
    { source: 'Email', visitors: 1195, percentage: 9 },
  ],
};
