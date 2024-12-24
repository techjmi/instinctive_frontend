
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Help = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    query: '',
  });

  // Handle input changes with a single function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation (basic example)
    if (!formData.name || !formData.email || !formData.query) {
      toast.error('Please fill out all fields.');
      return;
    }

    // Simulate API call
    toast.success('Your query has been submitted successfully.');
    setFormData({ name: '', email: '', query: '' });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-md shadow-sm">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Help & Support</h2>
      <p className="text-gray-600 mb-6">
        If you have any questions or need assistance, please fill out the form below, and we'll get back to you as soon as possible.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label htmlFor="query" className="block text-sm font-medium text-gray-700">
            Query
          </label>
          <textarea
            id="query"
            name="query"
            value={formData.query}
            onChange={handleChange}
            rows="5"
            className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your query or concern"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Help;
