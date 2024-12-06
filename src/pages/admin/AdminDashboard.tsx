import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Layout, FileText } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
        </div>

        <div className="grid md:grid-cols-[240px,1fr] gap-8">
          <nav className="bg-white/10 backdrop-blur-sm p-4 rounded-xl h-fit">
            <ul className="space-y-2">
              <li>
                <Link
                  to="/admin/dashboard"
                  className="flex items-center px-4 py-2 text-primary-100 rounded-lg 
                    hover:bg-primary-500/20 transition-all duration-300"
                >
                  <Layout size={18} className="mr-2" />
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/dashboard/posts"
                  className="flex items-center px-4 py-2 text-primary-100 rounded-lg 
                    hover:bg-primary-500/20 transition-all duration-300"
                >
                  <FileText size={18} className="mr-2" />
                  Blog Posts
                </Link>
              </li>
            </ul>
          </nav>

          <main className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}