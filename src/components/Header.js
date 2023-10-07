import { useState } from "react";
import picture from "../../images/icon.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginCredential, setLoginCredential] = useState("SignIn");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo">
        <img src={picture} alt="logo" />
      </div>
      <div className="title">
        <h1 id="heading" className="heading">
          React Food Dilivery App
        </h1>
      </div>
      <div className="NavItems">
        <ul>
          <li>
            <button
              style={{
                backgroundColor: `${
                  onlineStatus === false ? "red" : "lightGreen"
                }`,
                padding: "0.5rem",
                borderRadius: "2rem",
                border: "none",
              }}
              className="tooltip"
            >
              <span className="tooltiptext">Online Status</span>
            </button>
          </li>
          <li>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "black" }}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "black" }}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
              Cart
            </Link>
          </li>
          <button
            className="sign-btn"
            style={{
              backgroundColor: `${
                loginCredential === "SignIn" ? "lightGreen" : "red"
              }`,
            }}
            onClick={() => {
              loginCredential === "SignIn"
                ? setLoginCredential("SignOut")
                : setLoginCredential("SignIn");
            }}
          >
            {loginCredential}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
