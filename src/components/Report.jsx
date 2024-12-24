import React from 'react';

const Report = () => {
  const totalUsers = 120;
  const activeUsers = 85;
  const totalChapters = 20;
  const completedChapters = 15;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-md shadow-sm">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Reports</h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* Metric Cards */}
        <div className="p-4 border border-gray-300 rounded-md bg-gray-50">
          <h3 className="text-lg font-semibold text-gray-700">Total Users</h3>
          <p className="text-2xl font-bold text-blue-500">{totalUsers}</p>
        </div>
        <div className="p-4 border border-gray-300 rounded-md bg-gray-50">
          <h3 className="text-lg font-semibold text-gray-700">Active Users</h3>
          <p className="text-2xl font-bold text-green-500">{activeUsers}</p>
        </div>
        <div className="p-4 border border-gray-300 rounded-md bg-gray-50">
          <h3 className="text-lg font-semibold text-gray-700">Total Chapters</h3>
          <p className="text-2xl font-bold text-indigo-500">{totalChapters}</p>
        </div>
        <div className="p-4 border border-gray-300 rounded-md bg-gray-50">
          <h3 className="text-lg font-semibold text-gray-700">Completed Chapters</h3>
          <p className="text-2xl font-bold text-purple-500">{completedChapters}</p>
        </div>
      </div>

      {/* Chart Placeholder */}
      <div className="p-6 border border-gray-300 rounded-md bg-gray-50">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">User Activity Over Time</h3>
        <div className="h-48 flex items-center justify-center text-gray-500">
          {/* Replace with an actual chart component, e.g., Chart.js or Recharts */}
          <p>Chart Placeholder</p>
        </div>
      </div>
    </div>
  );
};

export default Report;
