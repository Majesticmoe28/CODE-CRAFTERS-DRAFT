import React, { useState } from 'react';
import axios from 'axios'; // Add axios to handle HTTP requests

function SignUp() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    terms: false,
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      // Send form data to backend API
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/signup`, formData);

      // Handle success (e.g., redirect user, show success message)
      setSuccess("User registered successfully!");
      setError(""); // Clear any previous errors
    } catch (error) {
      // Handle error (e.g., show error message)
      setError(error.response?.data?.message || "Error signing up");
      setSuccess(''); // Clear success message if there's an error
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                required
              />
              <span className="ml-2 text-sm text-gray-600">I agree to the Terms and Conditions</span>
            </label>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-lg">
            Sign Up
          </button>
        </form>
        <div className="mt-4 flex justify-between">
          <button
            onClick={() => window.location.href = `${process.env.REACT_APP_BACKEND_URL}/auth/google`}
            className="w-full bg-red-500 text-white p-3 rounded-lg mr-2"
          >
            Sign Up with Google
          </button>
          <button
            onClick={() => window.location.href = `${process.env.REACT_APP_BACKEND_URL}/auth/facebook`}
            className="w-full bg-blue-600 text-white p-3 rounded-lg"
          >
            Sign Up with Facebook
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
