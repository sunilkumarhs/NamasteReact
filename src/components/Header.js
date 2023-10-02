import { useState } from "react";
import picture from "../../images/icon.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginCredential, setLoginCredential] = useState("SignIn");
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
          <li>Cart</li>
          <button
            className="sign-btn"
            onClick={() => {
              loginCredential === "SignIn"
                ? setLoginCredential("SignOut")
                : setLoginCredential("SignIn");
            }}
          >
            {/* {loginCredential === "SignIn" ? style={{backgroundColor: "green"}} : style={{backgroundColor: "red"}}} */}
            {loginCredential}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
