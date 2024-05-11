import * as React from "react";
import "./VerifyEmailForm.css";
import CTAButton from "./CTAButton";
import closeSvg from "../Assets/close.svg";
import tickCircle from "../Assets/tick-circle.svg";


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
              src={tickCircle}
              alt="Verification icon"
              className="verification-icon"
            />
            <h2 className="form-title">Verified.</h2>
            <p className="form-description">
            Hi Maria James, You have successfully verified your account
            </p>
          </div>
          <div className="form-group">
          </div>
          <CTAButton text="Continue" />
          <button type="button" className="resend-email-link">
            Didn't receive an email? Try Again
          </button>
        </form>
      </div>
  );
}
