import React from 'react';

const InstitutionAnalytics = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Analytics</h1>
          <h2 className="text-xl font-semibold mt-2 text-gray-600">Insights and Trends</h2>
        </div>
        <div className="text-sm text-gray-500">
          Last updated: {new Date().toLocaleString("en-US", {
            dateStyle: "long",
            timeStyle: "short",
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Activity */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-2">Monthly Record Issuance</h3>
          <p className="text-sm text-gray-500 mb-4">Number of records issued each month</p>
          <div className="h-48 bg-gray-100 flex items-center justify-center rounded-lg text-gray-400">
            [Bar Chart Placeholder]
          </div>
        </div>

        {/* Verification Rate */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-2">Verification Rate Over Time</h3>
          <p className="text-sm text-gray-500 mb-4">Track how many records are verified monthly</p>
          <div className="h-48 bg-gray-100 flex items-center justify-center rounded-lg text-gray-400">
            [Line Chart Placeholder]
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Popular Record Types */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-2">Popular Record Types</h3>
          <p className="text-sm text-gray-500 mb-4">Distribution of issued record types</p>
          <div className="h-48 bg-gray-100 flex items-center justify-center rounded-lg text-gray-400">
            [Pie Chart Placeholder]
          </div>
        </div>

        {/* User Engagement */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-2">User Activity</h3>
          <p className="text-sm text-gray-500 mb-4">Active vs inactive users by month</p>
          <div className="h-48 bg-gray-100 flex items-center justify-center rounded-lg text-gray-400">
            [Area Chart Placeholder]
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstitutionAnalytics;
