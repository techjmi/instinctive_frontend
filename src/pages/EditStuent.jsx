import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import { supabase } from '../CreateClient'; 
import { IoMdSave } from 'react-icons/io';
import { get_student, update_student } from '../service/api';
import { useDispatch } from 'react-redux';
import { updateStudent } from '../redux/studentSlice';
import { toast } from 'react-toastify';

const EditStudent = () => {
  const { id } = useParams(); 
 const navigate= useNavigate()
 const dispatch= useDispatch()

  const [studentData, setStudentData] = useState({
    studentName: '',
    cohort: '',
    courses: '',
    status: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStudentData = async () => {
      setLoading(true);
      try {
      const response= await get_student(id)
      // console.log('the res from edit page', response)
     
if(response.success){

  setStudentData(response.student);
  dispatch(updateStudent(response.student))
}
// console.log('the single student is', studentData)
        if (error) throw error;

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStudentData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Make the API call to update the student
      console.log(studentData)
      const response = await update_student(id, studentData);
      
      if (response.data.success) {
        console.log("The edited response is:", response.data);
        // Dispatch the updateStudent action to update the Redux state
        dispatch(
          updateStudent({
            id, 
            ...studentData, 
          })
        );
        toast.success(response.data.message || "Student updated successfully!");
  
        // history.push('/students');
        navigate('/')
      } else {
        throw new Error(response.data.message || "Failed to update the student");
      }
    } catch (err) {
      setError(err.message); 
      toast.error(err.message || "Error updating student"); 
    } finally {
      setLoading(false); 
    }
  };
  

  return (
    <div className="flex justify-center items-center h-screen bg-slate-50">
      <div className="p-4 w-full items-center bg-white shadow-sm">
        <h2 className="text-xl font-bold mb-4">Edit Student</h2>

        {error && <p className="text-red-500">{error}</p>}

        {loading ? (
          <p className="text-center text-blue-500 py-4">Loading...</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="studentName" className="block text-sm font-medium text-gray-700">
                Student Name
              </label>
              <input
                type="text"
                id="studentName"
                name="studentName"
                value={studentData.studentName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="cohort" className="block text-sm font-medium text-gray-700">
                Cohort
              </label>
              <input
                type="text"
                id="cohort"
                name="cohort"
                value={studentData.cohort}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="courses" className="block text-sm font-medium text-gray-700">
                Courses
              </label>
              <input
                type="text"
                id="courses"
                name="courses"
                value={studentData.courses}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="status" className="block text-sm font-medium text-gray-600">Status</label>
            <select
              id="status"
              name="status"
              value={studentData.status}
              onChange={handleChange}
              className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              {/* <option value="Graduated">Graduated</option> */}
            </select>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md flex items-center"
                disabled={loading}
              >
                <IoMdSave className="mr-2" />
                Save Changes
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default EditStudent;
