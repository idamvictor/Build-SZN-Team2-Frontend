import * as React from "react";
import "./VerifyEmailForm.css";
import CTAButton from "./CTAButton";
import closeSvg from "../Assets/close.svg";


export default function VerifyEmailForm({toggleActive}) {

  const handleButtonClick = () => {
    toggleActive(); // Call the function from parent to toggle class
};

  return (
      <div className="app-container">
        <form className="verify-email-form">
          <div className="form-header">
            <div className="close-button-container">
              <img src={closeSvg} alt="close" className="close-button" onClick={handleButtonClick}/>
            </div>

            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4cd3d8b6ab741c4b6748c87e9116a64c4f4f839f7131d8e9917083c80b59700?apiKey=bc155cd4463f4c48a216b01c1991193c&"
              alt="Verification icon"
              className="verification-icon"
            />
            <h2 className="form-title">Verify it's you.</h2>
            <p className="form-description">
              We sent a verification code to mariaj@gmail.com. To verify your
              email address, please check your inbox and enter the code below.
            </p>
          </div>
          <div className="form-group">
            <label htmlFor="verificationCode" className="sr-only">
              Enter 4-digit code
            </label>
            <input
              type="text"
              id="verificationCode"
              className="verification-code-input"
              placeholder="Enter 4-digit code"
            />
          </div>
          <CTAButton text="Verify Code" />
          <button type="button" className="resend-email-link">
            Didn't receive an email? Try Again
          </button>
        </form>
      </div>
  );
}
