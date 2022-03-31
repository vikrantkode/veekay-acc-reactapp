import React from 'react'
import { Link } from 'react-router-dom'
import "./Signup.css"

function Signup() {
  return (
    <div className="main_container">
            <div className="form_container">
                <form className="form">
                    <div className="form_header">
                        <h3>Signup</h3>
                    </div>
                    <div className="input_textbox ">
                        <label className="form_label">Email Address:</label>
                        <input className="input_box login_textbox" type="text" required
                            placeholder="vikrant2812@gmail.com" />
                    </div>
                    <div className="input_textbox ">
                        <label className="form_label">password:</label>
                        <input className="input_box login_textbox" type="password" required placeholder="**********"/>

                    </div>
                    <ul className="list">
                        <li className="normal_list login_list"><input className="checkbox_list" type="checkbox"/>I Accept all
                            Terms & Conditions</li>

                    </ul>
                    <div className="form_submit_btn">
                        <button className="btn btn-default">Signup</button>
                        <p><Link className="login_form_link" >Already have an Account</Link></p>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default Signup