// src/components/Auth/Register.jsx
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/firebase";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../../style/Register.css"; 

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize navigate function

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setEmail(""); // Reset email input field
      setPassword(""); // Reset password input field
      setConfirmPassword(""); // Reset confirm password input field
      navigate("/dashboard"); // Navigate to dashboard after successful registration
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="register-container"> {/* Add the register container class */}
      <form className="form" onSubmit={handleRegister}> {/* Add the form class */}
        <h2>Sign Up</h2>
        {error && <p className="error-message">{error}</p>} {/* Error message styling */}
        <div className="form-group"> {/* Add form-group class */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group"> {/* Add form-group class */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group"> {/* Add form-group class */}
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button> {/* Register button */}
        <a href="/signin">Already have an account? Sign In</a> {/* Link to sign in page */}
      </form>
    </div>
  );
};

export default Register;
