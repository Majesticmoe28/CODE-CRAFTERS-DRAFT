// src/pages/Login.jsx
import React, { useState } from 'react';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>
        <form onSubmit={handleSubmit}>
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
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg"
          >
            Log In
          </button>
        </form>
        <div className="mt-4 flex justify-between">
          <button
            onClick={() => window.location.href = 'http://localhost:5001/auth/google'}
            className="w-full bg-red-500 text-white p-3 rounded-lg mr-2"
          >
            Log In with Google
          </button>
          <button
            onClick={() => window.location.href = 'http://localhost:5001/auth/facebook'}
            className="w-full bg-blue-600 text-white p-3 rounded-lg"
          >
            Log In with Facebook
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
