import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="main_container">
      <div className="form_container">
        <form className="form">
          <div className="form_header">
            <h3>Login</h3>
          </div>
          <div className="input_textbox ">
            <label className="form_label">Email Address:</label>
            <input
              className="input_box login_textbox"
              type="text"
              required
              placeholder="vikrant2812@gmail.com"
            />
          </div>
          <div className="input_textbox ">
            <label className="form_label">password:</label>
            <input
              className="input_box login_textbox"
              type="email"
              required
              placeholder="**********"
            />
          </div>
          <ul className="list">
            <li className="normal_list login_list">
              <input className="checkbox_list" type="checkbox" />
              Remember Me{" "}
              <a className="login_form_link forgot_pwd_link" href="">
                Forgot Your Password?
              </a>
            </li>
          </ul>
          <div className="form_submit_btn">
            <a href="/index.html">
              <button className="btn btn-default">Login</button>
            </a>
            <p>
              <a className="login_form_link" href="../Signup/signup.html">
                Create an Account
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
