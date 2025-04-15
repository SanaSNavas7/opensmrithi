import React from "react";

const InstitutionHome = () => {
  const lastUpdated = new Date().toLocaleString("en-US", {
    dateStyle: "long",
    timeStyle: "short",
  });

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Institution Dashboard</h1>
          <h2 className="text-xl font-semibold mt-2">Dashboard</h2>
        </div>
        <div className="text-sm text-gray-500">Last updated: {lastUpdated}</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Cards */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <p className="text-gray-600 font-medium">Total Records</p>
          <h3 className="text-2xl font-bold">1,284</h3>
          <p className="text-sm text-gray-500 mt-1">+34 this month</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <p className="text-gray-600 font-medium">Verified Records</p>
          <h3 className="text-2xl font-bold">867</h3>
          <p className="text-sm text-blue-600 mt-1">78% verification rate</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <p className="text-gray-600 font-medium">Pending Verification</p>
          <h3 className="text-2xl font-bold">48</h3>
          <p className="text-sm text-red-500 mt-1">-12 from last week</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <p className="text-gray-600 font-medium">Network Institutions</p>
          <h3 className="text-2xl font-bold">56</h3>
          <p className="text-sm text-green-500 mt-1">+3 new connections</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-2">Records Issued</h3>
          <p className="text-sm text-gray-500 mb-4">Monthly record issuance over time</p>
          <div className="h-48 bg-gray-100 flex items-center justify-center rounded-lg text-gray-400">
            [Bar Chart Placeholder]
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-2">Verification Status</h3>
          <p className="text-sm text-gray-500 mb-4">Current status of all records</p>
          <div className="h-48 bg-gray-100 flex items-center justify-center rounded-lg text-gray-400">
            [Pie Chart Placeholder]
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstitutionHome;
