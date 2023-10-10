import { useState } from "react";
import picture from "../../images/icon.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginCredential, setLoginCredential] = useState("SignIn");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between px-3 py-3 bg-amber-300 rounded-xl mx-4 my-2">
      <div>
        <img src={picture} alt="logo" className=" rounded-full" />
      </div>
      <div className=" bg-red-400 px-3 rounded-2xl text-center">
        <h1 className="text-lg font-bold text-white py-4">
          React Food Dilivery App
        </h1>
      </div>
      <div className="">
        <ul className="flex justify-between px-3 py-3 text-lg cursor-pointer font-semibold">
          <li className=" px-6 mx-2">
            <button
              className={`${
                onlineStatus === false ? "bg-red-600" : "bg-green-600"
              } p-2 rounded-full border-none relative inline-block`}
            >
              <span
                id="staus"
                className=" text-sm w-40 text-black rounded-2xl pr-8 absolute z-0 bottom-full left-1/2 -ml-16 bg-transparent"
              >
                Online Status
              </span>
            </button>
          </li>
          <li className=" px-2 py-2 mx-2 hover:text-xl hover:border-b-4 hover:border-white">
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Home
            </Link>
          </li>
          <li className=" px-2 py-2 mx-2 hover:text-xl  hover:border-b-4 hover:border-white">
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "black" }}
            >
              About Us
            </Link>
          </li>
          <li className=" px-2 py-2 mx-2 hover:text-xl hover:border-b-4 hover:border-white">
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "black" }}
            >
              Contact Us
            </Link>
          </li>
          <li className=" px-2 py-2 mx-2 hover:text-xl hover:border-b-4 hover:border-white">
            <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
              Cart
            </Link>
          </li>
          <button
            className={`${
              loginCredential === "SignIn"
                ? "bg-green-500 text-amber-300 hover:bg-amber-300 hover:text-green-500 hover:border-green-500 hover:border-2"
                : "bg-red-500 text-amber-300 hover:bg-amber-300 hover:text-red-500  hover:border-red-500 hover:border-2"
            } px-4 py-2 mx-2 rounded-full`}
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
