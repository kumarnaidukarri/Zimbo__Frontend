import { useState } from "react";
import { Link } from "react-router"; // Link component

import { LOGO_URL } from "../utils/constants.js";
import useOnlineStatus from "../utils/useOnlineStatus.js"; // custom hook

const Header = function () {
  // useState() creates a local state variable
  const [btnStatus, setBtnStatus] = useState("Login");
  const onlineStatus = useOnlineStatus(); // custom hook to get browser status

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="food logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li> Online Status: {onlineStatus ? "🟢" : "🔴"} </li>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/about">About Us </Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              setBtnStatus(btnStatus === "Login" ? "Logout" : "Login");
            }}
          >
            {" "}
            {btnStatus}{" "}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
