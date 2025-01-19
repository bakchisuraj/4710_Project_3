// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext"; // Adjust path if needed

import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import SignIn from "./Components/Auth/SignIn";
import Register from "./Components/Auth/Register";
import ResetPassword from "./Components/Auth/ResetPassword";
import Home from "./pages/Home";
import Header from "./pages/Header";
import About from "./pages/About";
import Footer from "./pages/Footer";
import Contact from "./pages/Contact";
import Feedback from "./pages/Feedback";
import Community from "./pages/Community";
import Checkout from "./pages/Checkout";
import Productlist from "./pages/Productlist";
import ProductDetails from "./pages/ProductDetails";
import StudentRecommendation from "./pages/StudentRecommendation";
import Profile from "./pages/Profile";



const App = () => {
  return (
    <AuthContextProvider>
      
        <Routes>
          {/* Default route redirects to /signin */}
          <Route path="/" element={<Navigate to="/signin" replace />} />

          {/* Auth routes */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          {/* Protected route */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
                <Home/>
                <StudentRecommendation/>
                <Footer/>
              </PrivateRoute>
            }
          />
          <Route path="/about" element={<><Dashboard /><About/></>}/>
          <Route path="/footer" element={<><Dashboard /><Footer/></>}/>
          <Route path="/contact" element={<><Dashboard /><Contact/></>}/>
          <Route path="/feedback" element={<><Dashboard /><Feedback/></>}/>
          <Route path="/community" element={<><Dashboard /><Community/></>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/products" element={<><Dashboard /><Productlist/></>}/>
          <Route path="/product/:id" element={<><Dashboard /><ProductDetails /></>} />
          <Route path="/profile" element={<><Dashboard /><Profile/></>}></Route>
          <Route path="/recommendation" element={<><Dashboard /><StudentRecommendation/></>}/>
        </Routes>
      
    </AuthContextProvider>
  );
};

export default App;
