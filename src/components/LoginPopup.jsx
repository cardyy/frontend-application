import React from "react";
import { FaUser, FaLock, FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';

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
            <div className="input-group">
              <span className="input-icon">
                <FaUser />
              </span>
              <input
                type="text"
                placeholder="Type your username"
                className="popup-input with-icon"
              />
            </div>
            <div className="input-group">
              <span className="input-icon">
                <FaLock />
              </span>
              <input
                type="password"
                placeholder="Type your password"
                className="popup-input with-icon"
              />
            </div>
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
            <div className="forgot-password-link" >
              <a href="#" className="forgot-password-text">
                Forgot Password?
              </a>
            </div>
            <div className='signup-container'>
              <span className='signup-text'>New to Nebular?</span>
              <a href="#" className="signup-link">Sign Up</a>
            </div>
            <button type="submit" className="popup-button">Login</button>
          </form>
        </div>
      </div>
    )
  );
};

export default LoginPopup;
