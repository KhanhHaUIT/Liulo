import React from "react";

import '../ultil.css';

import '../style.css';

export default function SignIn() {
  return (
    <>
      <div>
        <div className="limiter">
          <div
            className="container-login100"
            style={{ backgroundImage: 'url("bg-01.jpg")' }}
          >
            <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
              <form className="login100-form validate-form">
                <span className="login100-form-title p-b-49"> Login </span>
                <div
                  className="wrap-input100 validate-input m-b-23"
                  data-validate="Username is reauired"
                >
                  <span className="label-input100">Username</span>
                  <input
                    className="input100"
                    type="text"
                    name="username"
                    placeholder="Type your username"
                  />
                  <span className="focus-input100" data-symbol="" />
                </div>
                <div
                  className="wrap-input100 validate-input"
                  data-validate="Password is required"
                >
                  <span className="label-input100">Password</span>
                  <input
                    className="input100"
                    type="password"
                    name="pass"
                    placeholder="Type your password"
                  />
                  <span className="focus-input100" data-symbol="" />
                </div>
                <div className="text-right p-t-8 p-b-31">
                  <a href="/"> Forgot password? </a>
                </div>
                <div className="container-login100-form-btn">
                  <div className="wrap-login100-form-btn">
                    <div className="login100-form-bgbtn" />
                    <button className="login100-form-btn">Login</button>
                  </div>
                </div>
                <div className="txt1 text-center p-t-54 p-b-20">
                  <span> Or Sign Up Using </span>
                </div>
                <div className="flex-c-m">
                  <a href="/" className="login100-social-item bg1">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="/" className="login100-social-item bg2">
                    <i className="fa fa-twitter" />
                  </a>
                  <a href="/" className="login100-social-item bg3">
                    <i className="fa fa-google" />
                  </a>
                </div>
                <div className="flex-col-c p-t-155">
                  <span className="txt1 p-b-17"> Or Sign Up Using </span>
                  <a href="/" className="txt2">
                    Sign Up
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div id="dropDownSelect1" />
      </div>
    </>
  );
}
