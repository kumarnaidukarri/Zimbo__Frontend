import { LOGO_URL } from "../utils/constants.js";

import { useState } from "react";

const Header = function () {
  // useState() creates a local state variable
  const [btnStatus, setBtnStatus] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="food logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
