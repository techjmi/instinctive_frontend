import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addStudent } from '../redux/studentSlice';
import { toast } from 'react-toastify'
import { post_students } from '../service/api';
import { useNavigate } from 'react-router-dom';

const Addstudents = () => {
  const dispatch= useDispatch()
  const [formData, setFormData] = useState({
    studentName: '',
    cohort: '',
    courses: '',
    status: 'Active',
  });
const navigate= useNavigate()
  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit =async (e) => {
    e.preventDefault();
    try {
        const respoonse= await post_students(formData)
        if(respoonse.data.success){
          toast.success(respoonse.data.message)
          navigate('/')
        }
        dispatch(addStudent(formData))
      } catch (error) {
        console.error('Error inserting data:', error.message);
        // alert('Failed to add student: ' + error.message);
        const errorMessage = error.response ? error.response.data.message : error.message;
        // toast.error(error.response?.data?.message)
        toast(errorMessage)
      }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg">
        {/* Title */}
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Student Information</h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Student Name */}
          <div>
            <label htmlFor="studentName" className="block text-sm font-medium text-gray-600">Student Name</label>
            <input
              type="text"
              id="studentName"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              placeholder="Enter student name"
              className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Cohort */}
          <div>
            <label htmlFor="cohort" className="block text-sm font-medium text-gray-600">Cohort</label>
            <input
              type="text"
              id="cohort"
              name="cohort"
              value={formData.cohort}
              onChange={handleChange}
              placeholder="Enter cohort info"
              className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Courses */}
          <div>
            <label htmlFor="courses" className="block text-sm font-medium text-gray-600">Courses</label>
            <input
              type="text"
              id="courses"
              name="courses"
              value={formData.courses}
              onChange={handleChange}
              placeholder="Enter courses (comma-separated)"
              className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Status */}
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-600">Status</label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              {/* <option value="Graduated">Graduated</option> */}
            </select>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addstudents;
