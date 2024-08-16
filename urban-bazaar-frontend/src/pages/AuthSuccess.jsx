import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');

    if (token) {
      // Save the token to local storage (or session storage)
      localStorage.setItem('authToken', token);

      // Redirect to the dashboard or homepage after successful login
      navigate('/dashboard');
    } else {
      // If no token, redirect to login page
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div>
      <h1>Authentication successful!</h1>
      <p>Redirecting you to your dashboard...</p>
    </div>
  );
};

export default AuthSuccess;
