import React from 'react'
import "./Newpassword.css";


import { FaRegEyeSlash } from "react-icons/fa";

const Newpassword = () => {
  return (

    <div className="login-wrapper"> 
      <div className="login-form-content">
        <form action="">
          <h3 className="form-text">Please enter a new password below</h3>
          <div className="input-box">
            <input
              label="New password"
              type="password"
              id="newPassword"
              placeholder=" New password *******"
            />
            <FaRegEyeSlash className="icon"/>
          </div>
          <div className="input-box">
            <input
              label="Confirm new password"
              type="password"
              id="newPassword"
              placeholder="Confirm new password *******"
            />
            <FaRegEyeSlash className="icon" />
          </div>
          <button className="submit-button">Save</button>
        </form>
      </div>
    </div>
  );
};


export default Newpassword
