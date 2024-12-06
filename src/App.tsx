import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import MainLayout from './components/shared/MainLayout';
import Contact from './pages/Contact';
import Request from './pages/Request';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import DataAnalytics from './pages/DataAnalytics';
import Connectivity from './pages/Connectivity';
import WebDevelopment from './pages/WebDevelopment';
import AppDevelopment from './pages/AppDevelopment';
import HealthcareIT from './pages/HealthcareIT';
import DeviceIntegration from './pages/DeviceIntegration';
import InterfaceDevelopment from './pages/InterfaceDevelopment';
import ProcessImprovement from './pages/ProcessImprovement';
import ProjectManagement from './pages/ProjectManagement';
import AdminDashboard from './pages/admin/AdminDashboard';
import BlogPosts from './pages/admin/BlogPosts';
import BlogPostForm from './pages/admin/BlogPostForm';

function App() {
  return (
    <Router>
      <MainLayout>
        <Header />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <Services />
            </main>
          } />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/request" element={<Request />} />
          <Route path="/services/data-analytics" element={<DataAnalytics />} />
          <Route path="/services/connectivity" element={<Connectivity />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/app-development" element={<AppDevelopment />} />
          <Route path="/services/healthcare-it" element={<HealthcareIT />} />
          <Route path="/services/device-integration" element={<DeviceIntegration />} />
          <Route path="/services/interface-development" element={<InterfaceDevelopment />} />
          <Route path="/services/process-improvement" element={<ProcessImprovement />} />
          <Route path="/services/project-management" element={<ProjectManagement />} />
          
          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<AdminDashboard />}>
            <Route index element={<BlogPosts />} />
            <Route path="posts" element={<BlogPosts />} />
            <Route path="posts/new" element={<BlogPostForm />} />
            <Route path="posts/:id/edit" element={<BlogPostForm />} />
          </Route>
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;