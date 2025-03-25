import React from "react";
import "../CSS/Signin.css";

const Signin = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="left-section">
          <div className="logo">
            <span className="highlight">Sign In</span>
          </div>
          <p className="description">
            You can sign in with your email and password or with Google.
          </p>
        </div>

        <div className="right-section">
          <div className="form">
            <div className="input-group">
              <label>Your Email</label>
              <input type="email" placeholder="name@company.com" id="email" />
            </div>
            <div className="input-group">
              <label>Your Password</label>
              <input type="password" placeholder="****" id="password" />
            </div>
            <button type="submit" className="submit-btn">
              Sign In
            </button>
            <button className="google-btn">Sign in with Google</button>
          </div>

          <div className="signup-text">
            <span>Don't have an account?</span>
            <div className="signup-link">Sign Up</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
