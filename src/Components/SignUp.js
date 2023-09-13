import React, { useState } from "react";
import axios from "axios";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false); // to switch between login and signup

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleFormSwitch = () => {
    // Toggle between login and signup
    setIsSignup(!isSignup);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isSignup) {
      // Handle signup
      axios
        .post("http://localhost:3000/api/signup", { email, password, confirmPassword })
        .then((response) => {
          console.log("Signup successful:", response.data);
        })
        .catch((error) => {
          console.log("Signup error:", error);
        });
    } else {
      // Handle login
      axios
        .post("http://localhost:3000/api/login", { email, password })
        .then((response) => {
          console.log("Login successful:", response.data);
          localStorage.setItem("xauth", JSON.stringify(response.data.xauth));
        })
        .catch((error) => {
          console.log("Login error:", error);
        });
    }
  };

  return (
    <div className="auth page-bg">
    <div className="transparent-container">
      <h1>{isSignup ? "Sign Up" : "Login"}</h1>
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="auth-form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="auth-form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        {isSignup && (
          <div className="auth-form-group">
            <label>Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
          </div>
        )}
        <div className="auth-form-group">
          <button type="submit">
            {isSignup ? "Sign Up" : "Log In"}
          </button>
        </div>
      </form>
      <p onClick={handleFormSwitch}>
        {isSignup ? "Already have an account? Login" : "Don't have an account? Sign Up"}
      </p>
    </div>
    </div>
  );
};

export default AuthPage;
