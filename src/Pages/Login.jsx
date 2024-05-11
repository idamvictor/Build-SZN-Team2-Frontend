import * as React from "react";
// import { Link } from "react-router-dom";
import "./Login.css";
import CTAButton from "../Components/CTAButton"

export default function Login() {
  return (
    <>
      <div className="container">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8959128947ec95a021156093dea6a44476a563c48086e111c3c758ceb17a91db?apiKey=bc155cd4463f4c48a216b01c1991193c&" alt="" className="logo" />
        <h1 className="title">Welcome back!</h1>
        <p className="description">Kindly Fill in your Correct Log in Details</p>
        <form>
          <div className="input-field">
            <label htmlFor="email" className="visually-hidden">
              Email
            </label>
            <input type="email" id="email" placeholder="Enter your email" />
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9289fca467c502ecbb4d0187c2e60bc1e0fc55654d31c45c370420546d5031fa?apiKey=bc155cd4463f4c48a216b01c1991193c&" alt="" className="input-icon" />
          </div>
          <div className="input-field">
            <label htmlFor="password" className="visually-hidden">
              Password
            </label>
            <input type="password" id="password" placeholder="Enter your password" />
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9289fca467c502ecbb4d0187c2e60bc1e0fc55654d31c45c370420546d5031fa?apiKey=bc155cd4463f4c48a216b01c1991193c&" alt="" className="input-icon" />
          </div>
          {/* <Link to="/">Forgot password?</Link> */}
          <a href="#" className="forgot-password">
            Forgot password?
          </a>
          <CTAButton text= 'Signup'/>
        </form>
      </div>
      
    </>
  );
}

