import React, { useState } from 'react';
import { IoMdSearch, IoMdHelpCircleOutline } from 'react-icons/io';
import { LuMessageSquareMore } from 'react-icons/lu';
import { FaBell, FaSlidersH } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handle_logout } from '../service/api';
const url="https://i.pinimg.com/originals/11/ae/e8/11aee8055be8960a2fd0024057c7fa8f.jpg"
const TopSection = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleNavigation = (route) => {
    setDropdownOpen(false);
    navigate(route);
  };
  const handleLogout = async () => {
    try {
      const res = await handle_logout();
      if (res.data.success === true) {
        toast.success(res.data.message);
      }
      localStorage.removeItem('accessToken');
      navigate('/login');
    } catch (err) {
      toast.error('Logout failed');
    }
  };
  return (
    <div className="w-full flex flex-col md:flex-row  gap-3 items-center">
      {/* Search Bar */}
      <div className="search md:w-1/2 w-full relative px-5">
        <div className="relative">
          <input
            className="outline-none bg-slate-100 rounded-[12px] w-full pl-10 pr-4 py-2"
            placeholder="Search your course"
          />
          <IoMdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* Profile Section */}
      <div className="profile md:w-1/2 w-full flex justify-between  flex-col md:flex-row relative ">
        {/* Icons */}
        <div className="md:w-1/2 w-full flex items-center relative">
          <ul className="flex flex-row w-full justify-evenly  gap-6 mx-auto">
            <li>
              <IoMdHelpCircleOutline size="24px" className="text-slate-400" />
            </li>
            <li className="relative">
              <LuMessageSquareMore size="24px" className="text-green-500" />
              <span className="absolute top-0 right-[-6px] bg-red-500 text-white text-xs rounded-full px-1">
                5
              </span>
            </li>
            <li className="relative">
              <FaBell size="24px" className="text-yellow-500" />
              <span className="absolute top-0 right-[-6px] bg-red-500 text-white text-xs rounded-full px-1">
                3
              </span>
            </li>
            <li>
              <FaSlidersH size="24px" className="text-slate-500" />
            </li>
          </ul>
        </div>

        {/* Profile Image and Dropdown */}
        <div className="relative">
          <div
            className="flex gap-3  items-center relative px-5 cursor-pointer justify-between"
            onClick={handleDropdownToggle}
          >
            <img
              src={currentUser?.image || url}
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <p className="text-center text-sm">{currentUser?.name || 'Guest'}</p>
          </div>

          {/* Dropdown */}
          {dropdownOpen && (
            <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-40 bg-white shadow-md rounded-md py-2 z-10">
              <ul className="flex flex-col">
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-700"
                  onClick={() => handleNavigation('/profile')}
                >
                  Profile
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-700"
                  onClick={handleLogout}
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopSection;
