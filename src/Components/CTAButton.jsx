import React from "react";
function CTAButton({ text, onClick }) {
  return (
    <>
      <button className="sign-up-button" onClick={onClick}>{text}</button>
      <style jsx>{`.sign-up-button {
border-radius: 4px;
background-image: linear-gradient(262deg, #c83cd4 -12.99%, #6736a6 98.21%);
margin-top: 48px;
width: 670px;
max-width: 100%;
color: #fff5ff;
text-align: center;
padding: 16px 32px;
font: 400 18px/133% Inter, -apple-system, Roboto, Helvetica, sans-serif;
border: none;
cursor: pointer;
box-sizing: border-box; /* Added this line */`}</style>
    </>
  );
}

export default CTAButton;
