import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const InstitutionDashboardLayout = () => {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-gray-800 text-white p-4 space-y-4">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        <nav className="space-y-2">
          <Link to="/" className={pathname === '/' ? 'text-blue-300 font-medium' : ''}>Home</Link>
          <Link to="/analytics" className={pathname === '/analytics' ? 'text-blue-300 font-medium' : ''}>Analytics</Link>
          <Link to="/users" className={pathname === '/users' ? 'text-blue-300 font-medium' : ''}>Users</Link>
          <Link to="/records" className={pathname === '/records' ? 'text-blue-300 font-medium' : ''}>Records</Link>
        </nav>
      </aside>

      <main className="flex-1 bg-gray-50 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default InstitutionDashboardLayout;
