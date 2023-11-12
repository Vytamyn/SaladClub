import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import sclogowhite from "../img/sclogowhite.png";

function Login() {
  return (
    <div className="frame">
      <div className="login-picture">
        <div className="login-logo">
          <img src={sclogowhite} alt="salad club logo" />
        </div>
      </div>
      <div className="login-info">
        <div className="login-access">
          <p className="font-gray" style={{ marginRight: "16px" }}>
            Don't have and account?
          </p>
          <button className="button-black">Request access</button>
        </div>
        <div className="sign-in-container">
          <div className="login-text">
            <h1>Sign in to SaladClub Admin</h1>
            <p className="font-gray">
              Please enter your details below to sign in
            </p>
            <div className="email-password">
              <p className="input-field-text">Your email address</p>
              <input></input>
              <div className="pw-field">
                <p className="input-field-text">Your password</p>
                <p className="font-gray input-field-text">Forgot password?</p>
              </div>
              <input></input>
            </div>
          </div>
          <div className="login-button">
            <Link to="/dashboard" className="button-green">
              Sign in to admin
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
