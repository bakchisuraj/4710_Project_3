import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from "../../Firebase/auth";
import "../../style/SignIn.css"; // Import the CSS file

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await doSignInWithEmailAndPassword(email, password);
      setEmail("");
      setPassword("");
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await doSignInWithGoogle();
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="signin-container">
      <h2 className="signin-title">Sign In</h2>
      {error && <p className="error-message">{error}</p>}
      <form className="signin-form" onSubmit={handleSignIn}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="signin-button">Sign In</button>
      </form>

      <div className="signin-footer">
        <p>Don't have an account? <Link to="/register" className="register-link">Register</Link></p>
      </div>

      <button onClick={handleGoogleSignIn} className="google-signin-button">Sign In with Google</button>
    </div>
  );
};

export default SignIn;
