import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handle_logout, profile_data } from '../service/api';
import { fetchUserDataStart, fetchUserDataSuccess, fetchUserDataFailure } from '../redux/userSlice';
import { toast } from 'react-toastify';
// import { Spinner } from './Spinner';
const url="https://i.pinimg.com/originals/11/ae/e8/11aee8055be8960a2fd0024057c7fa8f.jpg"
const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { currentUser, loading, error } = useSelector((state) => state.user);

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

  const handleUpdate = () => {
    navigate('/update');
  };
const handleDash= ()=>{
  navigate('/')
}
  const fetchData = async () => {
    dispatch(fetchUserDataStart());
    try {
      const res = await profile_data();
      if (res.data.success === true) {
        dispatch(fetchUserDataSuccess(res.data.user));
      }
    } catch (error) {
      dispatch(fetchUserDataFailure(error.message));
    }
  };

  useEffect(() => {
    fetchData();
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        {/* <Spinner />  */}
        <p className='font-semibold text-blue-600 animate-bounce'>Please wait !</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-xl">
      <div className="text-center mb-6">
        <img
          src={currentUser?.image || url}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-blue-500"
        />
      </div>
      <h1 className="text-3xl font-semibold text-gray-800 mb-2 text-center">{currentUser?.name}</h1>
      <p className="text-lg text-gray-600 mb-4 text-center">{currentUser?.email}</p>

      <div className="flex justify-between mb-4">
        <div className="w-1/2 pr-2">
          <button
            onClick={handleUpdate}
            className="w-full py-2 text-blue-600 border border-blue-600 rounded-lg font-semibold hover:bg-blue-100 focus:outline-none transition duration-300"
          >
            Update Profile
          </button>
        </div>
        <div className="w-1/2 pl-2">
          <button
            onClick={handleLogout}
            className="w-full py-2 text-red-600 border border-red-600 rounded-lg font-semibold hover:bg-red-100 focus:outline-none transition duration-300"
          >
            Logout
          </button>
        </div>
      </div>
      <button
            onClick={handleDash}
            className="w-full py-2 text-blue-600 border border-blue-600 rounded-lg font-semibold hover:bg-blue-100 focus:outline-none transition duration-300"
          >
            Dashboard
          </button>
    </div>
  );
};

export default Profile;
