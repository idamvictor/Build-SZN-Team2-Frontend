import * as React from "react";
import "./Signup.css";
import VerifyEmailForm from "../Components/VerifyEmailForm";
import Verified from "../Components/Verified";
import CTAButton from "../Components/CTAButton";
import { useState } from "react";

function Logo() {
  return (
    <img
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/8959128947ec95a021156093dea6a44476a563c48086e111c3c758ceb17a91db?apiKey=bc155cd4463f4c48a216b01c1991193c&"
      alt="MediaHubber Logo"
      className="logo"
    />
  );
}

function SocialButton({ src, alt }) {
  return (
    <div className="social-button">
      <img src={src} alt={alt} className="social-icon" />
    </div>
  );
}

const socialButtons = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4a9d85f687ce0a89320f3b43c3bf9b366c4b4445796c478b441301578b192e2e?apiKey=bc155cd4463f4c48a216b01c1991193c&",
    alt: "Google Logo",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5220ac6808577307483f4c6309ba82b2f918bee7db497bec7b6c16a4295cbe5a?apiKey=bc155cd4463f4c48a216b01c1991193c&",
    alt: "Facebook Logo",
  },
];

function SignUpPage() {
  const [showActive, setShowActive] = useState(false);

  const toggleActive = () => {
    setShowActive(!showActive);
  };

  return (
    <div className="container">
      <div className="sign-up-page">
        <Logo />
        <h1 className="title">Let's get you started</h1>
        <p className="description">
          Become a MediaHubber today and Keep track of all your Media
          consumption
        </p>
        <div className="input-field">
          <label htmlFor="fullName" className="visually-hidden">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            className="input"
            placeholder="Full Name"
            aria-label="Full Name"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1949c56daa6cc845482d38a343565bdbb6126498f173fc23ba2d4e8547c838a4?apiKey=bc155cd4463f4c48a216b01c1991193c&"
            alt=""
            className="input-icon"
          />
        </div>
        <div className="input-field">
          <label htmlFor="email" className="visually-hidden">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="input"
            placeholder="Email"
            aria-label="Email"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9289fca467c502ecbb4d0187c2e60bc1e0fc55654d31c45c370420546d5031fa?apiKey=bc155cd4463f4c48a216b01c1991193c&"
            alt=""
            className="input-icon"
          />
        </div>
        <div className="input-field">
          <label htmlFor="password" className="visually-hidden">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="input"
            placeholder="Password"
            aria-label="Password"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ebd4c6fd0fe86974b4a3b72200da1051d463dfced8491b5912394767b6908c3?apiKey=bc155cd4463f4c48a216b01c1991193c&"
            alt=""
            className="input-icon"
          />
        </div>

        <CTAButton text="Sign Up" onClick={toggleActive} />

        <div className="separator">Or</div>
        <div className="social-buttons">
          {socialButtons.map(({ src, alt }) => (
            <SocialButton key={src} src={src} alt={alt} />
          ))}
        </div>
        <p className="sign-in-link">
          Already have an account?<a href="/"> Sign in</a>
        </p>
      </div>
      <div className={`active ${showActive ? "show" : ""}`}>
        <VerifyEmailForm toggleActive={toggleActive} />
        <Verified toggleActive={toggleActive} />
      </div>
    </div>
  );
}

export default SignUpPage;
