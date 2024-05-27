// import { useState } from 'react';
// import axios from 'axios';
// import styles from './Signin.module.css';

// function InputField({ label, id, type, iconSrc, value, onChange }) {
//   return (
//     <div className={styles.inputField}>
//       <input
//         type={type}
//         id={id}
//         className={styles.input}
//         aria-label={label}
//         value={value}
//         onChange={onChange}
//       />
//       <img
//         loading="lazy"
//         src={iconSrc}
//         className={styles.inputIcon}
//         alt={`${label} icon`}
//       />
//     </div>
//   );
// }

// export default function Signin() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const userData = { email, password };

//     try {
//       const response = await axios.post(
//         'https://data-be-2.onrender.com/api/v1/users/login',
//         userData,
//         {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         }
//       );
//       console.log('Logged in:', response.data);
//       // Redirect or show success message
//     } catch (error) {
//       console.error('Error:', error.response || error.message);
//       // Handle error (e.g., display an error message)
//     }
//   };

//   return (
//     <main className={styles.mainContainer}>
//       <img
//         loading="lazy"
//         src="https://cdn.builder.io/api/v1/image/assets/TEMP/8959128947ec95a021156093dea6a44476a563c48086e111c3c758ceb17a91db?apiKey=df44ca8e15de4475b0d7b182ebb1db7c&"
//         className={styles.profileImg}
//         alt="Profile Image"
//       />
//       <h1 className={styles.welcomeMessage}>Welcome back!</h1>
//       <p className={styles.instructions}>Kindly Fill in your Correct Log in Details</p>
//       <form className={styles.loginForm} onSubmit={handleSubmit}>
//         <InputField
//           label="Email"
//           id="emailInput"
//           type="email"
//           iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/9289fca467c502ecbb4d0187c2e60bc1e0fc55654d31c45c370420546d5031fa?apiKey=df44ca8e15de4475b0d7b182ebb1db7c&"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <InputField
//           label="Password"
//           id="passwordInput"
//           type="password"
//           iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/08904392194924f3964c90932450be740aa3c76a93f63f02eef420d56ab3c057?apiKey=df44ca8e15de4475b0d7b182ebb1db7c&"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <a href="#" className={styles.forgotPasswordLink}>
//           Forgot password?
//         </a>
//         <button type="submit" className={styles.signupButton}>
//           Sign In
//         </button>
//       </form>
//     </main>
//   );
// }

import { useState } from "react";
import axios from "axios";
import styles from "./Signin.module.css";
import { Link } from "react-router-dom";

function InputField({ label, id, type, iconSrc, value, onChange }) {
  return (
    <div className={styles.inputField}>
      <input
        type={type}
        id={id}
        className={styles.input}
        aria-label={label}
        value={value}
        onChange={onChange}
      />
      <img
        loading="lazy"
        src={iconSrc}
        className={styles.inputIcon}
        alt={`${label} icon`}
      />
    </div>
  );
}

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { email, password };

    try {
      const response = await axios.post(
        "https://data-be-2.onrender.com/api/v1/users/login",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Logged in:", response.data);
      // Handle successful login (e.g., redirect to another page)
    } catch (error) {
      console.error("Error:", error.response || error.message);
      setError(error.response?.data || "An error occurred");
    }
  };

  return (
    <main className={styles.mainContainer}>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8959128947ec95a021156093dea6a44476a563c48086e111c3c758ceb17a91db?apiKey=df44ca8e15de4475b0d7b182ebb1db7c&"
        className={styles.profileImg}
        alt="Profile Image"
      />
      <h1 className={styles.welcomeMessage}>Welcome back!</h1>
      <p className={styles.instructions}>
        Kindly Fill in your Correct Log in Details
      </p>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <InputField
          label="Email"
          id="emailInput"
          type="email"
          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/9289fca467c502ecbb4d0187c2e60bc1e0fc55654d31c45c370420546d5031fa?apiKey=df44ca8e15de4475b0d7b182ebb1db7c&"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          label="Password"
          id="passwordInput"
          type="password"
          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/08904392194924f3964c90932450be740aa3c76a93f63f02eef420d56ab3c057?apiKey=df44ca8e15de4475b0d7b182ebb1db7c&"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <a href="#" className={styles.forgotPasswordLink}>
          Forgot password?
        </a>
        <Link to="/Onboarding">
          <button type="submit" className={styles.signupButton}>
            Sign In
          </button>
        </Link>
      </form>
      {error && <p className={styles.errorMessage}>{error}</p>}
    </main>
  );
}
