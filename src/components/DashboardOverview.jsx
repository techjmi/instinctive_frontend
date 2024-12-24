import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const DashboardOverview = () => {
  const { students } = useSelector((state) => state.student);
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const navigate= useNavigate()

  // Calculate statistics
  const totalStudents = students.length;
  const activeStudents = students.filter(student => student.status === 'Active').length;
  const inactiveStudents = totalStudents - activeStudents;
const Handleclick=()=>{
  navigate('/profile')
}
  return (
    <div className="p-6 bg-white rounded-md">
      {/* User Profile Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <img onClick={Handleclick}
            src={currentUser?.image}
            alt="User Avatar"
            className="w-16 h-16 rounded-full cursor-pointer "
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-800">{currentUser?.name}</h2>
            <p className="text-sm text-gray-500">{currentUser?.role||'Admin'}</p>
            <p className="text-sm text-gray-500">{currentUser?.email}</p>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="flex flex-col items-center p-4 border border-gray-300 rounded-md bg-gray-50">
          <h3 className="text-2xl font-bold text-gray-800">{totalStudents}</h3>
          <p className="text-sm text-gray-500">Total Students</p>
        </div>
        <div className="flex flex-col items-center p-4 border border-gray-300 rounded-md bg-gray-50">
          <h3 className="text-2xl font-bold text-green-600">{activeStudents}</h3>
          <p className="text-sm text-gray-500">Active Students</p>
        </div>
        <div className="flex flex-col items-center p-4 border border-gray-300 rounded-md bg-gray-50">
          <h3 className="text-2xl font-bold text-red-600">{inactiveStudents}</h3>
          <p className="text-sm text-gray-500">Inactive Students</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
