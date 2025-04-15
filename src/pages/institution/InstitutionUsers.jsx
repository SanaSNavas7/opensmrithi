import React from "react";

const InstitutionUsers = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Institution Users</h1>
          <h2 className="text-xl font-semibold mt-2 text-gray-600">Manage your user base</h2>
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
          <h3 className="text-xl font-semibold">User List</h3>
          <button className="text-blue-600 hover:underline text-sm">Invite User</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="p-2">Name</th>
                <th className="p-2">Email</th>
                <th className="p-2">Role</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2">Sarah Williams</td>
                <td className="p-2">sarah@university.edu</td>
                <td className="p-2">Admin</td>
                <td className="p-2 text-green-600">Active</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Tom Nguyen</td>
                <td className="p-2">tom@university.edu</td>
                <td className="p-2">Staff</td>
                <td className="p-2 text-yellow-500">Pending</td>
              </tr>
              <tr>
                <td className="p-2">Nina Patel</td>
                <td className="p-2">nina@university.edu</td>
                <td className="p-2">Viewer</td>
                <td className="p-2 text-red-500">Inactive</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InstitutionUsers;
