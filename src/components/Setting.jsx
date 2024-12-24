import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Setting = () => {
  const { currentUser } = useSelector((state) => state.user);
  // const [settings, setSettings] = useState({
  //   name: 'John Doe',
  //   email: 'johndoe@example.com',
  //   notifications: true,
  //   theme: 'light',
  // });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // setSettings((prev) => ({
    //   ...prev,
    //   [name]: type === 'checkbox' ? checked : value,
    // }));
  };

  const handleSave = () => {
    // API call to save settings can be implemented here
    alert('Settings saved successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-md shadow-sm">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Settings</h2>
      
      {/* Account Settings */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Account Settings</h3>
        <label className="block mb-4">
          <span className="text-gray-600">Name</span>
          <input
            type="text"
            name="name"
            value={currentUser?.name}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-600">Email</span>
          <input
            type="email"
            name="email"
            value={currentUser?.email}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
        </label>
      </div>

      {/* Notification Preferences */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Notification Preferences</h3>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="notifications"
            // checked={settings.notifications}
            onChange={handleChange}
            className="w-4 h-4"
          />
          <span className="text-gray-600">Enable Notifications</span>
        </label>
      </div>

      {/* Theme Settings */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Theme Settings</h3>
        <select
          name="theme"
          // value={settings.theme}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>

      {/* Save Button */}
      <button
        onClick={handleSave}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Save Changes
      </button>
    </div>
  );
};

export default Setting;
