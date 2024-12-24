import React, { useEffect, useState } from 'react';
import TopSection from './TopSection';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudentsFailure, fetchStudentsStart, fetchStudentsSuccess } from '../redux/studentSlice';
import { IoMdAdd } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { get_students } from '../service/api';
import DialogBox from './DialogBox';
import { toast } from 'react-toastify';
const url="https://i.pinimg.com/originals/11/ae/e8/11aee8055be8960a2fd0024057c7fa8f.jpg"
const Students = () => {
  const { students, loading, error } = useSelector((state) => state.student);
  const [showDialog, setShowDialog] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedYear, setSelectedYear] = useState('AY 2024-25');
  const [selectedClass, setSelectedClass] = useState('CBSE 9');
  const dispatch = useDispatch();

  const handleYearChange = (e) => setSelectedYear(e.target.value);
  const handleClassChange = (e) => setSelectedClass(e.target.value);

  const fetchStudents = async () => {
    dispatch(fetchStudentsStart());
    try {
      const data = await get_students();
      dispatch(fetchStudentsSuccess(data.students));
    } catch (err) {
      dispatch(fetchStudentsFailure(err.message));
      toast.error(err.message);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleRowClick = (student) => {
    setSelectedStudent(student);
    setShowDialog(true);
  };

  const closeDialog = () => {
    setShowDialog(false);
    setSelectedStudent(null);
  };

  return (
    <div className="flex flex-col gap-2">
      {/* Top Section */}
      <div className="">
      <TopSection />
      </div>
      {/* Filters and Add Button */}
      <div className="flex flex-wrap items-center justify-between p-4 bg-white rounded-md gap-4">
        <div className="flex flex-wrap gap-4">
          <select
            value={selectedYear}
            onChange={handleYearChange}
            className="px-4 py-2 border bg-slate-200 rounded-md"
          >
            <option value="AY 2024-25">AY 2024-25</option>
            <option value="AY 2023-24">AY 2023-24</option>
          </select>
          <select
            value={selectedClass}
            onChange={handleClassChange}
            className="px-4 py-2 border bg-slate-200 rounded-md"
          >
            <option value="CBSE 9">CBSE 9</option>
            <option value="CBSE 8">CBSE 8</option>
          </select>
        </div>
        <Link
          to="/add"
          className="px-4 py-2 text-black bg-slate-200 flex flex-row justify-center items-center rounded-md"
        >
          <IoMdAdd />
          <span>Add new Student</span>
        </Link>
      </div>

      {/* Students Table */}
      <div className="overflow-hidden rounded-lg bg-white">
        <div className="overflow-x-auto">
          {loading ? (
            <p className="text-center text-blue-500 py-4">Loading data...</p>
          ) : error ? (
            <p className="text-center text-red-500 py-4">{`Error: ${error}`}</p>
          ) : (
            <table className="min-w-full table-auto border-collapse">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left font-semibold">Student Name</th>
                  <th className="px-4 py-2 text-left font-semibold">Cohort</th>
                  <th className="px-4 py-2 text-left font-semibold">Courses</th>
                  <th className="px-4 py-2 text-left font-semibold">Date Joined</th>
                  <th className="px-4 py-2 text-left font-semibold">Last Login</th>
                  <th className="px-4 py-2 text-left font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {students.length > 0 ? (
                  students.map((student, index) => (
                    <tr
                      key={index}
                      className="
                  cursor-pointer border-b"
                      onClick={() => handleRowClick(student)}
                    >
                      <td className="px-4 py-2">{student.studentName}</td>
                      <td className="px-4 py-2">{student.cohort}</td>
                      <td className="px-4 py-2 flex items-center gap-2">
                        <img
                          src={url}
                          alt="Course Icon"
                          className="w-5 h-5"
                        />
                        {student.courses}
                      </td>
                      <td className="px-4 py-2">
                        {student.Date_joined
                          ? new Date(student.Date_joined).toLocaleDateString()
                          : '24, Dec 2024'}
                      </td>
                      <td className="px-4 py-2">
                        {student.Last_Login
                          ? new Date(student.Last_Login).toLocaleDateString()
                          : 'N/A'}
                      </td>
                      <td className="px-4 py-2 flex items-center gap-2">
                        <span
                          className={`w-5 h-5 rounded-full ${
                            student.status === 'Active'
                              ? 'bg-green-500'
                              : 'bg-red-500'
                          }`}
                        ></span>
                        {/* {student.status || 'Inactive'} */}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="px-4 py-2 text-center text-gray-500">
                      No data available.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Dialog Box */}
      {showDialog && selectedStudent && (
        <DialogBox student={selectedStudent} onClose={closeDialog} fetchStudents={fetchStudents}/>
      )}
    </div>
  );
};

export default Students;
