import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

// Dashboards
import DefaultDashboard from './pages/dashboards/DefaultDashboard';

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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Dashboards */}
          <Route index element={<DefaultDashboard />} />
          <Route path="dashboards/analytics" element={<DefaultDashboard />} />
          <Route path="dashboards/ecommerce" element={<DefaultDashboard />} />
          
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
          
          {/* Management */}
          <Route path="projects" element={<Projects />} />
          <Route path="tasks" element={<Projects />} />
          <Route path="invoices" element={<Invoices />} />
          <Route path="team" element={<Team />} />
          
          {/* Settings */}
          <Route path="settings" element={<DefaultDashboard />} />
          <Route path="help" element={<DefaultDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
