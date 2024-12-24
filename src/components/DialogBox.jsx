import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { delete_student } from "../service/api";
import { toast } from "react-toastify";

const DialogBox = ({ student, onClose,fetchStudents }) => {
  const handleDelete=async(id)=>{
    console.log(id)
    try {
      const response= await delete_student(id)
      console.log(response, 'from delete')
      if(response.data.success===true){
        toast.success(response.data.message)
        onClose()
        fetchStudents()
      }
    } catch (error) {
       const errorMessage = error.response ? error.response.data.message : error.message;
            toast.error(errorMessage || 'An error occurred. Please try again.');
    }
  }
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-md md:w-1/2 relative">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <RxCross2 size={24} />
        </button>
        {/* Student Details */}
        <h2 className="text-xl font-bold mb-4">Student Details</h2>
        <p><strong>Name:</strong> {student.studentName}</p>
        <p><strong>Cohort:</strong> {student.cohort}</p>
        <p><strong>Courses:</strong> {student.courses}</p>
        <p><strong>Status:</strong> {student.status}</p>
        <div className="mt-6 flex justify-between">
          {/* Edit Button */}
          <Link
            to={`/edit/${student.id}`} 
            className="px-4 py-2 bg-slate-200 rounded-md text-gray-700 hover:bg-slate-300"
          >
            Edit
          </Link>

          {/* Delete Button */}
          <button
            className="px-4 py-2 bg-slate-200 rounded-md text-gray-700 hover:bg-slate-300"
            onClick={() => handleDelete(student.id)} 
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DialogBox;
