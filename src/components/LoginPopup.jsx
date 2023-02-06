import React from "react";
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';

const LoginPopup = (props) => {
  const togglePopup = () => {
    props.setIsPopupOpen();
  };

  return (
    props.isPopupOpen && (
      <div className="popup-container">
        <div className="popup-form">
          <h1 className="popup-title">Login</h1>
          <div className="popup-close-container">
            <span className="close-btn" onClick={togglePopup}>
              &times;
            </span>
          </div>
          <form>
            <input
              type="text"
              placeholder="Type your username"
              className="popup-input"
            />
            <input
              type="password"
              placeholder="Type your password"
              className="popup-input"
            />
            <div className="social-login">
              <button className="facebook-login-btn">
                <FaFacebook /> Login with Facebook
              </button>
              <button className="google-login-btn">
                <FaGoogle /> Login with Google
              </button>
              <button className="twitter-login-btn">
                <FaTwitter /> Login with Twitter
              </button>
            </div>
            <div className="links">
              <span>New to Nebular?</span>
              <button className="signup-btn">Sign Up</button>
              <a href="#" className="forgot-password-link">
                Forgot Password?
              </a>
            </div>
            <button type="submit" className="popup-button ">Login</button>
          </form>
        </div>
      </div>
    )
  );
};

export default LoginPopup;
