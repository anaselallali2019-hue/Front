# Metronic - React Admin Dashboard

A modern, professional, and fully responsive admin dashboard built with React, Tailwind CSS, and Recharts. Inspired by the popular Metronic template.

## Features

- 🎨 **Modern UI Design** - Clean and professional interface with Tailwind CSS
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
- 📊 **Rich Data Visualization** - Interactive charts with Recharts
- 🔐 **Authentication Pages** - Login and Register pages with modern design
- 📋 **Multiple Pages** - Dashboard, Users, Tables, Forms, Charts, Profile, Settings
- 🎯 **Advanced Data Tables** - Sortable, filterable, and paginated tables
- 🎨 **Beautiful Forms** - Comprehensive form components
- 🔔 **Notifications & Settings** - Full settings management
- 🎭 **Modern Icons** - Lucide React icons throughout

## Pages

### Dashboard
- Statistics cards with trend indicators
- Revenue overview charts
- Sales by category (Pie chart)
- Revenue vs Profit comparison (Bar chart)
- Recent orders table

### Users
- User management interface
- Advanced data table with search and pagination
- User statistics
- Edit and delete actions

### Tables
- Products data table
- Advanced sorting and filtering
- Quick statistics
- Export functionality

### Forms
- Personal information forms
- Professional information forms
- Address information forms
- File upload
- Checkboxes and toggles

### Charts
- Line charts for sales trends
- Bar charts for revenue comparison
- Pie charts for category distribution
- Area charts for growth visualization
- Radar charts for performance analysis

### Profile
- User profile management
- Profile picture upload
- Activity statistics
- Recent activity timeline
- Personal information editing

### Settings
- Notification preferences
- Security settings (2FA)
- Privacy controls
- Language and timezone settings
- Theme customization

### Authentication
- Modern login page
- Registration page with validation
- Social login integration (Google, Facebook)
- Password visibility toggle

## Tech Stack

- **React** - UI library
- **Vite** - Build tool
- **React Router** - Routing
- **Tailwind CSS** - Styling
- **Recharts** - Charts and data visualization
- **Lucide React** - Modern icon library

## Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
admin-dashboard/
├── src/
│   ├── components/        # Reusable components
│   │   ├── StatCard.jsx
│   │   └── DataTable.jsx
│   ├── layouts/          # Layout components
│   │   ├── Sidebar.jsx
│   │   ├── Header.jsx
│   │   └── MainLayout.jsx
│   ├── pages/            # Page components
│   │   ├── Dashboard.jsx
│   │   ├── Users.jsx
│   │   ├── Tables.jsx
│   │   ├── Forms.jsx
│   │   ├── Charts.jsx
│   │   ├── Profile.jsx
│   │   ├── Settings.jsx
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── public/               # Static assets
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Features Breakdown

### Layout
- **Collapsible Sidebar** - Toggle between expanded and collapsed states
- **Responsive Header** - Search, notifications, and user menu
- **Mobile Menu** - Hamburger menu for mobile devices

### Components
- **StatCard** - Reusable statistics card with trend indicators
- **DataTable** - Advanced table with sorting, filtering, and pagination

### Design
- **Color Scheme** - Professional blue primary color with gradients
- **Typography** - Clean and readable font hierarchy
- **Spacing** - Consistent spacing system
- **Shadows** - Subtle shadows for depth
- **Animations** - Smooth transitions and hover effects

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for demonstration purposes.

## Credits

Design inspired by [Metronic Admin Dashboard Template](https://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469)

Built with ❤️ using React and Tailwind CSS
