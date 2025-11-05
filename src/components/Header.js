import { useState } from "react";
import { Link } from "react-router"; // Link component
import { useSelector } from "react-redux"; // hook to subscribe redux store

import { LOGO_URL } from "../utils/constants.js";
import useOnlineStatus from "../utils/useOnlineStatus.js"; // custom hook

const Header = function () {
  // useState() creates a local state variable
  const [btnStatus, setBtnStatus] = useState("Login");
  const onlineStatus = useOnlineStatus(); // custom hook to get browser status

  // we pass a parameter to get specific portion of store data. i.e, cart portion
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="header  flex justify-between bg-pink-50 shadow-lg">
      <div className="logo-container">
        <img className="logo  w-20" src={LOGO_URL} alt="food logo" />
      </div>
      <div className="nav-items  flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/"> Home </Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us </Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart ({cartItems.length} items)</li>
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
