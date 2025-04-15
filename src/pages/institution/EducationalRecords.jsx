import React from "react";

const EducationalRecords = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Educational Records</h1>
          <h2 className="text-xl font-semibold mt-2 text-gray-600">Manage and view issued records</h2>
        </div>
        <div className="text-sm text-gray-500">
          Last updated: {new Date().toLocaleString("en-US", {
            dateStyle: "long",
            timeStyle: "short",
          })}
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Recent Records</h3>
          <button className="text-blue-600 hover:underline text-sm">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="p-2">Student</th>
                <th className="p-2">Program</th>
                <th className="p-2">Date Issued</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2">Alex Johnson</td>
                <td className="p-2">Computer Science</td>
                <td className="p-2">Mar 20, 2025</td>
                <td className="p-2 text-green-600">Verified</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Maria Gomez</td>
                <td className="p-2">Business Admin</td>
                <td className="p-2">Apr 2, 2025</td>
                <td className="p-2 text-yellow-500">Pending</td>
              </tr>
              <tr>
                <td className="p-2">John Lee</td>
                <td className="p-2">Engineering</td>
                <td className="p-2">Apr 12, 2025</td>
                <td className="p-2 text-green-600">Verified</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EducationalRecords;
