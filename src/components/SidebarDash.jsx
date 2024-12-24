
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTachometerAlt, FaUserGraduate, FaBook, FaLifeRing, FaChartBar, FaCog } from 'react-icons/fa';

const SidebarDash = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const activeTab = queryParams.get('tab'); // Get the current tab from the query parameter

  const getActiveClass = (tab) =>
    activeTab === tab ? 'bg-slate-200 font-bold' : '';

  return (
    <div className="bg-slate-100 flex flex-col gap-3 md:min-h-screen p-4">
      <Link
        to="/?tab=dash"
        className={`flex items-center gap-2 p-2 rounded hover:bg-slate-200 ${getActiveClass('dash')}`}
      >
        <FaTachometerAlt className="text-blue-500" />
        <span>Dashboard</span>
      </Link>
      <Link
        to="/?tab=student"
        className={`flex items-center gap-2 p-2 rounded hover:bg-slate-200 ${getActiveClass('student')}`}
      >
        <FaUserGraduate className="text-green-500" />
        <span>Students</span>
      </Link>
      <Link
        to="/?tab=chapter"
        className={`flex items-center gap-2 p-2 rounded hover:bg-slate-200 ${getActiveClass('chapter')}`}
      >
        <FaBook className="text-purple-500" />
        <span>Chapters</span>
      </Link>
      <Link
        to="/?tab=help"
        className={`flex items-center gap-2 p-2 rounded hover:bg-slate-200 ${getActiveClass('help')}`}
      >
        <FaLifeRing className="text-red-500" />
        <span>Help</span>
      </Link>
      <Link
        to="/?tab=report"
        className={`flex items-center gap-2 p-2 rounded hover:bg-slate-200 ${getActiveClass('report')}`}
      >
        <FaChartBar className="text-orange-500" />
        <span>Reports</span>
      </Link>
      <Link
        to="/?tab=setting"
        className={`flex items-center gap-2 p-2 rounded hover:bg-slate-200 ${getActiveClass('setting')}`}
      >
        <FaCog className="text-gray-500" />
        <span>Settings</span>
      </Link>
    </div>
  );
};

export default SidebarDash;

