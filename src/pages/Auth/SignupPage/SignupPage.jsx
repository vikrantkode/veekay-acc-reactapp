import React,  { useState } from "react";
import { useAuth } from '../../../context/Auth-Context'
import Nav from "../../../components/Nav/Nav";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./SignupPage.css"


const SignupPage = () => {
  const {state,dispatch} = useAuth();
  const navigate = useNavigate();
  const {firstName,lastName,email,password,confPassword} = state;
  const [passwordToggleVisibility, setPasswordToggleVisibility] = useState(false);
  const [confPasswordToggleVisibility, setConfPasswordToggleVisibility] = useState(false);

  const showHidePasswordVisibilityHandler =(e) =>{  
    setPasswordToggleVisibility(passwordToggleVisibility => !passwordToggleVisibility)
    e.preventDefault();
}
const showHideConfPasswordVisibilityHandler =(e) =>{
    setConfPasswordToggleVisibility(confPasswordToggleVisibility => !confPasswordToggleVisibility)
    e.preventDefault();
}
console.log(passwordToggleVisibility)

const toggleButton = passwordToggleVisibility ? "visibility_off" : "visibility"
const confToggleButton = confPasswordToggleVisibility ? "visibility_off" : "visibility"

const signupClickHandler = async(e)=>{
  e.preventDefault();
  if(password === confPassword){
      try{
          const resp = await axios.post(`/api/auth/signup`,{
              firstName,lastName,email,password}) 
          localStorage.setItem("token",resp.data.encodedToken)
          localStorage.setItem("user",JSON.stringify(resp.data.createdUser))
          console.log(resp)
          dispatch({ type: "SUCCESS",
                   payload:{encodedToken :resp.data.encodedToken, user: resp.data.createdUser}})
          navigate("/login")
      }catch(err){
          console.log(err)
      }
  }else{
      alert(`Password and Confirm Password Doesn't match`)
  }
 
}
  return(
    <div className="container_signup">
      <Nav />
      <div className="main_container">
            <div className="form_container">
                <form className="form">
                    <div className="form_header">
                        <h3>Signup</h3>
                    </div>
                    <div className="input_textbox ">
                        <label className="form_label">First Name:</label>
                        <input 
                            className="input_box login_textbox" 
                            type="text" required
                            placeholder="vikrant" 
                            onChange={(e)=> dispatch({type: "SET_FIRST_NAME", payload: e.target.value})}
                            value={firstName}
                        />
                    </div>
                    <div className="input_textbox ">
                        <label className="form_label">Last Name:</label>
                        <input 
                            className="input_box login_textbox" 
                            type="text" required
                            placeholder="kumar" 
                            onChange={(e)=> dispatch({type: "SET_LAST_NAME", payload: e.target.value})}
                            value={lastName}
                        />
                    </div>
                    <div className="input_textbox ">
                        <label className="form_label">Email Address:</label>
                        <input 
                            className="input_box login_textbox" 
                            type="text" required
                            placeholder="vikrant2812@gmail.com" 
                            onChange={(e)=> dispatch({type: "SET_EMAIL", payload: e.target.value})}
                            value={email}
                        />
                    </div>
                    <div className="input_textbox password_input_field">
                        <label className="form_label">Password:</label>
                        <input 
                            className="input_box login_textbox" 
                            type={passwordToggleVisibility ? "text" : "password"} required 
                            placeholder="**********"
                            onChange={(e)=> dispatch({type: "SET_PASSWORD", payload: e.target.value})}
                            value={password}
                        />
                        <button 
                            className='btn_visibility' 
                            onClick={showHidePasswordVisibilityHandler}> 
                           <span className="material-icons-outlined">{toggleButton}</span>
                        </button>
                    </div>
                    <div className="input_textbox password_input_field">
                        <label className="form_label">Confirm Password:</label>
                        <input 
                            className="input_box login_textbox" 
                            type={confPasswordToggleVisibility ? "text" : "password"} required 
                            placeholder="**********"
                            onChange={(e)=> dispatch({type: "SET_CONFIRM_PASSWORD", payload: e.target.value})}
                            value={confPassword}
                        />
                         <button 
                            className='btn_visibility' 
                            onClick={showHideConfPasswordVisibilityHandler}> 
                           <span className="material-icons-outlined">{confToggleButton}</span>
                        </button>
                    </div>
                    <ul className="list">
                        <li className="normal_list login_list"><input className="checkbox_list" type="checkbox"/>I Accept all
                            Terms & Conditions</li>

                    </ul>
                    <div className="form_submit_btn">
                        <button 
                            className="btn btn-default"
                            type="submit"
                            onClick={signupClickHandler}>Signup</button>
                        <Link to="/loginpage">
                        <p className="login_form_link">Already have an Account</p>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    </div>);
};

export { SignupPage };
