// src/components/Dashboard.jsx
import React from "react";
import useAuth from "../hooks/useAuth";
import "../style/Dashboard.css";
import Header from "../pages/Header";
import StudentRecommendation from "../pages/StudentRecommendation";

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-heading">Welcome, {user?.email}</h1>
     
      <div><Header/></div>
      <button className="dashboard-logout-btn" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
