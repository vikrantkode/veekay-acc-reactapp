import React from "react";
import "./LoginPage.css"
import Nav from "../../../components/Nav/Nav";
import { useState } from "react";
import  axios from "axios"
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/Auth-Context";



const LoginPage = () => {
  const[email,setEmail] = useState("");
  const[pass,setPass] = useState("");

  const {dispatch} = useAuth();

  const loginClickHandler = async (e) => {
    
    e.preventDefault();
    try{
      const password = pass;
      const resp = await axios.post("/api/auth/login",{ email, password})
      
      localStorage.setItem("token",resp.data.encodedToken)
      
      dispatch({ type: "SUCCESS", payload:resp.data.encodedToken})

    } catch(err){
      alert(`Error From Server : ${err}`)
    }
  }
  return (
    <div className="container_login">
        <Nav />
        <div className="main_container">
      <div className="form_container">
        <form className="form" onSubmit={ loginClickHandler }>
          <div className="form_header">
            <h3>Login</h3>
          </div>
          <div className="input_textbox ">
            <label className="form_label">Email Address:</label>
            <input
              className="input_box login_textbox"
              type="email"
              required
              placeholder="vikrant2812@gmail.com"
              onChange={(e)=>setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="input_textbox ">
            <label className="form_label">password:</label>
            <input
              className="input_box login_textbox"
              type="password"
              required
              placeholder="**********"
              onChange={(e)=>setPass(e.target.value)}
              value={pass}
            />
          </div>
          <ul className="list">
            <li className="normal_list login_list">
              <label><input className="checkbox_list" type="checkbox" />
              Remember Me</label>
              <Link to="/#" className="login_form_link forgot_pwd_link" >
                Forgot Your Password?
              </Link>
            </li>
          </ul>
          <div className="form_submit_btn">
            {/* <Link to="/product"> */}
              <button className="btn btn-default" type="submit">Login</button>
            {/* </Link> */}
            <p>
              <Link to="/#" className="login_form_link">
                Create an Account
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>  
    </div>
  )
};

export { LoginPage };
