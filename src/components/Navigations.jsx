import { CgProfile } from "react-icons/cg";
import { IoMdSearch } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "./Button";
import Styles from "../pages/Styles.module.css";


export const Navigations = ({
  Home,
  Dashboard,
  Services,
  showButtons = true,
  showIcons = true,
}) => {
  const navigate = useNavigate()

  const handleSignInClick = () => {
    navigate("/Signin");
  };

  const handleSignUpClick = () => {
    navigate("/Signup");
  };

  return (
    <header className="navStyle">
      <nav className="navStyle">
        <img src="/Media Hub Logo 2 1.png" alt="logo" />
        <ul className="listStyle">
          <NavLink
            to="/MusicHome"
            className={({ isActive }) =>
              isActive ? "navLink active" : "navLink"
            }
          >
            {Home}
          </NavLink>
          <NavLink
            to="/MusicHome"
            className={({ isActive }) =>
              isActive ? "navLink active" : "navLink"
            }
          >
            {Dashboard}
          </NavLink>
          <NavLink
            to="/MusicHome"
            className={({ isActive }) =>
              isActive ? "navLink active" : "navLink"
            }
          >
            {Services}
          </NavLink>
        </ul>
        {showIcons && (
          <div className="navIcons">
            <IoMdSearch />
            <CgProfile />
          </div>
        )}
        {showButtons && (
          <div className={Styles.navButton}>
            <Button
              customStyle={Styles.Button1}
              value="Sign in"
              onClick={handleSignInClick}
            />
            <Button value="Sign up" onClick={handleSignUpClick} />
          </div>
        )}
      </nav>
    </header>
  );
};
