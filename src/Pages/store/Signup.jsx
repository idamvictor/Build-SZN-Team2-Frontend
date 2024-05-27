// // import { useState } from "react";
// // import { Button } from "../components/Button";
// // import { Inputs } from "../components/Inputs";
// // import { FaRegEyeSlash } from "react-icons/fa";
// // import { IoIosMail } from "react-icons/io";
// // import { Link } from "react-router-dom";
// // import { useNavigate } from "react-router-dom";
// // import styles from "./Signup.module.css";


// // export const Signup = () => {
// //   function SocialButton({ src, alt }) {
// //     const [name, setUsername] = useState("");
// //     const [email, setEmail] = useState("");
// //     const [password, setPassword] = useState("");
// //     const navigate = useNavigate();

// //     const handleSubmit = async (e) => {
// //       e.preventDefault();
// //       const userData = { name, email, password };
// //       console.log("Submitting user data:", userData);

// //       try {
// //         const response = await fetch(
// //           "https://data-be-2.onrender.com/api/v1/users/signup",
// //           {
// //             method: "POST",
// //             headers: {
// //               "Content-Type": "application/json",
// //             },
// //             body: JSON.stringify(userData),
// //           }
// //         );

// //         if (!response.ok) {
// //           throw new Error("Failed to sign up");
// //         }

// //         const result = await response.json();
// //         console.log("Account created:", result);
// //         navigate("/SignIn");
// //         // Handle success (e.g., display a success message or redirect)
// //       } catch (error) {
// //         console.error("Error:", error);
// //         // Handle error (e.g., display an error message)
// //       }
// //     };

// //     return (
// //       <div className="social-button">
// //         <img src={src} alt={alt} className="social-icon" />
// //       </div>
// //     );
// //   }

// //   const socialButtons = [
// //     {
// //       src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4a9d85f687ce0a89320f3b43c3bf9b366c4b4445796c478b441301578b192e2e?apiKey=bc155cd4463f4c48a216b01c1991193c&",
// //       alt: "Google Logo",
// //     },
// //     {
// //       src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5220ac6808577307483f4c6309ba82b2f918bee7db497bec7b6c16a4295cbe5a?apiKey=bc155cd4463f4c48a216b01c1991193c&",
// //       alt: "Facebook Logo",
// //     },
// //   ];

// //   return (
// //     <main className="mainStyle">
// //       <header className="mediaLogoDiv">
// //         <img src="/Media Hub Logo 2 1.png" alt="logo" />
// //       </header>
// //       <section className="formWrapper">
// //         <form onSubmit={handleSubmit}>
// //           <div className="topheading">
// //             <h2>Let's get you started</h2>
// //             <p>
// //               Become a MediaHubber today and Keep track of all your Media
// //               consumption
// //             </p>
// //           </div>
// //           <div className="formContainer">
// //             <div className="inputgap">
// //               <InputField
// //                 label="Full Name"
// //                 id="fullName"
// //                 imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/e14c8a1f524b615dea79c06a22d816a10137dc7f61f57d044f5d0c1ef8b7eadd?apiKey=df44ca8e15de4475b0d7b182ebb1db7c&"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //               />
// //               <InputField
// //                 label="Email"
// //                 id="email"
// //                 imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/9289fca467c502ecbb4d0187c2e60bc1e0fc55654d31c45c370420546d5031fa?apiKey=df44ca8e15de4475b0d7b182ebb1db7c&"
// //                 type="email"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //               />
// //               <InputField
// //                 label="Password"
// //                 id="password"
// //                 imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/5d26047cded3a5802436f93e53fc4527404831dbbda31c1cbc8991bf6a5d03b3?apiKey=df44ca8e15de4475b0d7b182ebb1db7c&"
// //                 type="password"
// //                 value={password}
// //                 onChange={(e) => setPassword(e.target.value)}
// //               />
// //             </div>
// //             <Button customStyle="verificationButton" value={"Sign Up"} />
// //             <div className="formFooter">
// //               <p className="p3">Or</p>
// //               <div className="socialButtons">
// //                 {socialButtons.map(({ src, alt }) => (
// //                   <SocialButton key={src} src={src} alt={alt} />
// //                 ))}
// //               </div>
// //               <p className="p3">
// //                 Already have an account?
// //                 <Link className="p3child" to="./Signin">
// //                   {" "}
// //                   Sign in{" "}
// //                 </Link>
// //               </p>
// //             </div>
// //           </div>
// //         </form>
// //       </section>
// //     </main>
// //   );
// // };

// // function InputField({ label, id, imgSrc, type = "text", value, onChange }) {
// //   return (
// //     <div className={styles.inputWrapper}>
// //       <input
// //         id={id}
// //         type={type}
// //         className={styles.inputField}
// //         placeholder={label}
// //         onChange={onChange}
// //         value={value}
// //       />
// //       <img src={imgSrc} alt={`${label} icon`} className={styles.inputIcon} />
// //     </div>
// //   );
// // }

// // // const MediaHubLogo=()=>{
// // //     <header className='mediaLogoDiv'>
// // //         <img src="/Media Hub Logo 2 1.png" alt="logo" />
// // //     </header>
// // // }


// import { useState } from "react";
// import { Button } from "../components/Button";
// import { FaRegEyeSlash } from "react-icons/fa";
// import { IoIosMail } from "react-icons/io";
// import { Link, useNavigate } from "react-router-dom";
// import styles from "./Signup.module.css";

// export const Signup = () => {
//   const [name, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const userData = { name, email, password };
//     console.log("Submitting user data:", userData);

//     try {
//       const response = await fetch(
//         "https://data-be-2.onrender.com/api/v1/users/signup",
//       // const response = await fetch(
//       //   "https://data-be-13-4.onrender.com/api/v1/auth/signup",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(userData),
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Failed to sign up");
//       }

//       const result = await response.json();
//       console.log("Account created:", result);
//       navigate("/Signin");
//       // Handle success (e.g., display a success message or redirect)
//     } catch (error) {
//       console.error("Error:", error);
//       // Handle error (e.g., display an error message)
//     }
//   };

//   const socialButtons = [
//     {
//       src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4a9d85f687ce0a89320f3b43c3bf9b366c4b4445796c478b441301578b192e2e?apiKey=bc155cd4463f4c48a216b01c1991193c&",
//       alt: "Google Logo",
//     },
//     {
//       src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5220ac6808577307483f4c6309ba82b2f918bee7db497bec7b6c16a4295cbe5a?apiKey=bc155cd4463f4c48a216b01c1991193c&",
//       alt: "Facebook Logo",
//     },
//   ];

//   return (
//     <main className="mainStyle">
//       <header className="mediaLogoDiv">
//         <img src="/Media Hub Logo 2 1.png" alt="logo" />
//       </header>
//       <section className="formWrapper">
//         <form onSubmit={handleSubmit}>
//           <div className="topheading">
//             <h2>Let's get you started</h2>
//             <p>
//               Become a MediaHubber today and Keep track of all your Media
//               consumption
//             </p>
//           </div>
//           <div className="formContainer">
//             <div className="inputgap">
//               <InputField
//                 label="Full Name"
//                 id="fullName"
//                 imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/e14c8a1f524b615dea79c06a22d816a10137dc7f61f57d044f5d0c1ef8b7eadd?apiKey=df44ca8e15de4475b0d7b182ebb1db7c&"
//                 value={name}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//               <InputField
//                 label="Email"
//                 id="email"
//                 imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/9289fca467c502ecbb4d0187c2e60bc1e0fc55654d31c45c370420546d5031fa?apiKey=df44ca8e15de4475b0d7b182ebb1db7c&"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <InputField
//                 label="Password"
//                 id="password"
//                 imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/5d26047cded3a5802436f93e53fc4527404831dbbda31c1cbc8991bf6a5d03b3?apiKey=df44ca8e15de4475b0d7b182ebb1db7c&"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//             <Button customStyle="verificationButton" value={"Sign Up"} />
//             <div className="formFooter">
//               <p className="p3">Or</p>
//               <div className="socialButtons">
//                 {socialButtons.map(({ src, alt }) => (
//                   <SocialButton key={src} src={src} alt={alt} />
//                 ))}
//               </div>
//               <p className="p3">
//                 Already have an account?
//                 <Link className="p3child" to="/SignIn">
//                   {" "}
//                   Sign in{" "}
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </form>
//       </section>
//     </main>
//   );
// };

// function SocialButton({ src, alt }) {
//   return (
//     <div className="social-button">
//       <img src={src} alt={alt} className="social-icon" />
//     </div>
//   );
// }

// function InputField({ label, id, imgSrc, type = "text", value, onChange }) {
//   return (
//     <div className={styles.inputWrapper}>
//       <input
//         id={id}
//         type={type}
//         className={styles.inputField}
//         placeholder={label}
//         onChange={onChange}
//         value={value}
//       />
//       <img src={imgSrc} alt={`${label} icon`} className={styles.inputIcon} />
//     </div>
//   );
// }


import { useState } from "react";
import { Button } from "../../components/Button";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Signup.module.css";

export const Signup = () => {
  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { name, email, password };
    console.log("Submitting user data:", userData);

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
      navigate("/Signin");
      // Handle success (e.g., display a success message or redirect)
    } catch (error) {
      console.error("Error:", error.response || error.message);
      // Handle error (e.g., display an error message)
    }
  };

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

  return (
    <main className="mainStyle">
      <header className="mediaLogoDiv">
        <img src="/Media Hub Logo 2 1.png" alt="logo" />
      </header>
      <section className="formWrapper">
        <form onSubmit={handleSubmit}>
          <div className="topheading">
            <h2>Let's get you started</h2>
            <p>
              Become a MediaHubber today and Keep track of all your Media
              consumption
            </p>
          </div>
          <div className="formContainer">
            <div className="inputgap">
              <InputField
                label="Full Name"
                id="fullName"
                imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/e14c8a1f524b615dea79c06a22d816a10137dc7f61f57d044f5d0c1ef8b7eadd?apiKey=df44ca8e15de4475b0d7b182ebb1db7c&"
                value={name}
                onChange={(e) => setUsername(e.target.value)}
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
            </div>
            <Button customStyle="verificationButton" value={"Sign Up"} />
            <div className="formFooter">
              <p className="p3">Or</p>
              <div className="socialButtons">
                {socialButtons.map(({ src, alt }) => (
                  <SocialButton key={src} src={src} alt={alt} />
                ))}
              </div>
              <p className="p3">
                Already have an account?
                <Link className="p3child" to="/SignIn">
                  {" "}
                  Sign in{" "}
                </Link>
              </p>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};

function SocialButton({ src, alt }) {
  return (
    <div className="social-button">
      <img src={src} alt={alt} className="social-icon" />
    </div>
  );
}

function InputField({ label, id, imgSrc, type = "text", value, onChange }) {
  return (
    <div className={styles.inputWrapper}>
      <input
        id={id}
        type={type}
        className={styles.inputField}
        placeholder={label}
        onChange={onChange}
        value={value}
      />
      <img src={imgSrc} alt={`${label} icon`} className={styles.inputIcon} />
    </div>
  );
}
