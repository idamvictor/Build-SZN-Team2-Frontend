import { useState } from "react";
import axios from "axios";
import styles from "./Signup.module.css";
import { Link, useNavigate } from "react-router-dom";

function InputField({ label, id, imgSrc, type = "text", value, onChange }) {
  return (
    <div className={styles.inputWrapper}>
      <input
        id={id}
        type={type}
        className={styles.inputField}
        placeholder={label}
        value={value}
        onChange={onChange}
      />
      <img src={imgSrc} alt={`${label} icon`} className={styles.inputIcon} />
    </div>
  );
}

function SocialIcon({ imgSrc, alt }) {
  return (
    <div className={styles.socialIcon}>
      <img src={imgSrc} alt={alt} className={styles.iconImage} />
    </div>
  );
}

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = { name, email, password };

    try {
      const response = await axios.post(
        "https://data-be-2.onrender.com/api/v1/users/signup",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Account created:", response.data);
      navigate("/Onboarding");
    } catch (error) {
      console.error("Error:", error.response || error.message);
      // Handle error (e.g., display an error message)
    }
  };

  return (
    <section className={styles.container}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8959128947ec95a021156093dea6a44476a563c48086e111c3c758ceb17a91db?apiKey=df44ca8e15de4475b0d7b182ebb1db7c&"
        alt="MediaHub Logo"
        className={styles.logo}
      />
      <h1 className={styles.title}>Let’s get you started</h1>
      <p className={styles.subtitle}>
        Become a MediaHubber today and Keep track of all your Media consumption
      </p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <InputField
          label="Full Name"
          id="fullName"
          imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/e14c8a1f524b615dea79c06a22d816a10137dc7f61f57d044f5d0c1ef8b7eadd?apiKey=df44ca8e15de4475b0d7b182ebb1db7c&"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputField
          label="Email"
          id="email"
          imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/9289fca467c502ecbb4d0187c2e60bc1e0fc55654d31c45c370420546d5031fa?apiKey=df44ca8e15de4475b0d7b182ebb1db7c&"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          label="Password"
          id="password"
          imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/5d26047cded3a5802436f93e53fc4527404831dbbda31c1cbc8991bf6a5d03b3?apiKey=df44ca8e15de4475b0d7b182ebb1db7c&"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link to="/signin">
        <button type="submit" className={styles.signUpButton}>
          Sign Up
        </button></Link>
      </form>
      <p className={styles.orText}>Or</p>
      <div className={styles.socialContainer}>
        <SocialIcon
          imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/6a564c30640f971d4dec88f8b4b115b3648ad32253564592b5094e7c9d795794?apiKey=df44ca8e15de4475b0d7b182ebb1db7c&"
          alt="Social Icon 1"
        />
        <SocialIcon
          imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/5220ac6808577307483f4c6309ba82b2f918bee7db497bec7b6c16a4295cbe5a?apiKey=df44ca8e15de4475b0d7b182ebb1db7c&"
          alt="Social Icon 2"
        />
      </div>
      <p className={styles.signInText}>Already have an account? Sign in</p>
    </section>
  );
}
