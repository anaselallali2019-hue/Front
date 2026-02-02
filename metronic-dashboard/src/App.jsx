import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

// Dashboards
import DefaultDashboard from './pages/dashboards/DefaultDashboard';
import MarketingDashboard from './pages/dashboards/MarketingDashboard';

// E-commerce
import Products from './pages/ecommerce/Products';
import Orders from './pages/ecommerce/Orders';

// Apps
import Chat from './pages/apps/Chat';
import Email from './pages/apps/Email';
import Calendar from './pages/apps/Calendar';
import FileManager from './pages/apps/FileManager';

// Management
import Projects from './pages/Projects';
import Invoices from './pages/Invoices';
import Team from './pages/Team';

// Users
import UsersList from './pages/users/UsersList';

// Profiles
import UserProfile from './pages/profiles/UserProfile';

// Billing
import Plans from './pages/billing/Plans';

// Demo
import ComponentsDemo from './pages/ComponentsDemo';

// Auth
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';

// Errors
import Error404 from './pages/errors/Error404';
import Error500 from './pages/errors/Error500';

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth Routes */}
        <Route path="/auth/sign-in" element={<SignIn />} />
        <Route path="/auth/sign-up" element={<SignUp />} />
        
        {/* Error Pages */}
        <Route path="/errors/404" element={<Error404 />} />
        <Route path="/errors/500" element={<Error500 />} />
        
        {/* Main App */}
        <Route path="/" element={<MainLayout />}>
          {/* Dashboards */}
          <Route index element={<DefaultDashboard />} />
          <Route path="dashboards/analytics" element={<DefaultDashboard />} />
          <Route path="dashboards/ecommerce" element={<DefaultDashboard />} />
          <Route path="dashboards/marketing" element={<MarketingDashboard />} />
          
          {/* E-commerce */}
          <Route path="ecommerce/products" element={<Products />} />
          <Route path="ecommerce/orders" element={<Orders />} />
          <Route path="ecommerce/customers" element={<Team />} />
          <Route path="ecommerce/reports" element={<DefaultDashboard />} />
          
          {/* Apps */}
          <Route path="apps/chat" element={<Chat />} />
          <Route path="apps/email" element={<Email />} />
          <Route path="apps/calendar" element={<Calendar />} />
          <Route path="apps/files" element={<FileManager />} />
          
          {/* Users */}
          <Route path="users/list" element={<UsersList />} />
          <Route path="users/view/:id" element={<UserProfile />} />
          
          {/* Profiles */}
          <Route path="profile" element={<UserProfile />} />
          
          {/* Billing */}
          <Route path="billing/plans" element={<Plans />} />
          
          {/* Demo */}
          <Route path="components-demo" element={<ComponentsDemo />} />
          
          {/* Management */}
          <Route path="projects" element={<Projects />} />
          <Route path="tasks" element={<Projects />} />
          <Route path="invoices" element={<Invoices />} />
          <Route path="team" element={<Team />} />
          
          {/* Settings */}
          <Route path="settings" element={<DefaultDashboard />} />
          <Route path="help" element={<DefaultDashboard />} />
        </Route>
        
        {/* Catch all */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
