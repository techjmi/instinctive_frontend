import React, { useState } from "react";
import { toast } from "react-toastify";
import { post_signup } from "../service/api";
import { supabase } from "../CreateClient";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    image: null,
  });
  const [loading, setLoading] = useState(false);
const navigate= useNavigate()
  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle file change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      image: file,
    }));
  };

  // Single handle function for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      // Step 1: Upload image to Supabase Storage
      if (formData.image) {
        // Upload the image to Supabase
        const { data, error: uploadError } = await supabase.storage
          .from('avatars')
          .upload(`avatars/${Date.now()}_${formData.image.name}`, formData.image);
  
        if (uploadError) {
          console.error('Upload Error:', uploadError.message);
          throw new Error(uploadError.message);
        }
        console.log('Uploaded file path:', data.path);
        const imageUrlData = supabase.storage.from('avatars').getPublicUrl(data.path)
        const imageUrl = imageUrlData.data.publicUrl;
        if (imageUrl) {
          console.log('The image URL is:', imageUrl);
          formData.image = imageUrl;
        } else {
          console.error('Failed to retrieve the public URL');
        }
      }
      // Step 4: Send signup request to API with imageUrl
      const response = await post_signup(formData);
      // console.log(response);
      if (response.status === 201) {
        toast.success(response.data.message); 
      }
      setLoading(false);
    } catch (error) {
      const errorMessage = error.response ? error.response.data.message : error.message;
      toast.error(errorMessage || 'An error occurred. Please try again.');
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center mb-6">Create Account</h2>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-semibold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter your password"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="image">
            Profile Image
          </label>
          <input
            type="file"
            onChange={handleFileChange}
            accept="image/*"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none"
        >
          {loading ? "Registering..." : "Sign Up"}
        </button>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Already have an account? &nbsp;
            <span
              className="text-blue-500 cursor-pointer hover:underline font-semibold"
              onClick={() => navigate("/login")}
            >
              Login Here
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
