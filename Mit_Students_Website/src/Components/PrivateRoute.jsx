// PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Adjust the path to your AuthContext

const PrivateRoute = ({ children }) => {
  const { user } = useAuth(); // Get user from the context

  if (!user) {
    // If user is not authenticated, redirect to login page or any other page
    return <Navigate to="/signin" />;
  }

  return children; // If user is authenticated, render the children (protected route)
};

export default PrivateRoute;
