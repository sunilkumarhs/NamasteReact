import { useContext, useState } from "react";
import { logo } from "../assets";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContexts from "../utils/UserContexts";
import { useSelector } from "react-redux";
import CartContexts from "../utils/CartContexts";

const Header = () => {
  const [loginCredential, setLoginCredential] = useState("SignIn");
  const onlineStatus = useOnlineStatus();
  const { loggedUserId } = useContext(UserContexts);
  const { pathState } = useContext(CartContexts);
  const cartItems = useSelector((store) => store.cart.items);
  if (pathState === "cart") {
    return (
      <nav className="flex justify-between px-3 bg-amber-300 rounded-xl shadow-xl fixed z-[999] items-center w-full">
        <div>
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className=" rounded-full mx-2 px-2 py-2 hover:bg-slate-200"
            />
          </Link>
        </div>
        <label className=" bg-red-400 px-3 my-2 rounded-2xl text-center ml-10 mr-40">
          <h1 className="text-lg font-bold text-white py-2">
            React Food Dilivery App
          </h1>
        </label>
        <ul className="flex justify-end text-lg font-semibold items-center">
          <li className=" px-10 mx-4">
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
          <li className=" px-6 py-2 mx-2 hover:border-b-4 hover:border-white transition-[all 0.2s ease-out]">
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Help
            </Link>
          </li>
          <button
            className={`${
              loginCredential === "SignIn"
                ? "bg-green-500 text-amber-300 hover:bg-amber-300 hover:text-green-500 hover:border-green-500 hover:border-2"
                : "bg-red-500 text-amber-300 hover:bg-amber-300 hover:text-red-500  hover:border-red-500 hover:border-2"
            } px-2 py-2 ml-4 rounded-full`}
            onClick={() => {
              loginCredential === "SignIn"
                ? setLoginCredential("SignOut")
                : setLoginCredential("SignIn");
            }}
          >
            {loginCredential}
          </button>
          {loginCredential === "SignOut" && (
            <label className="px-2 py-2 text-green-500">
              {loggedUserId?.split(" ").join("")}
            </label>
          )}
        </ul>
      </nav>
    );
  } else {
    return (
      <nav className="flex justify-between px-3 bg-amber-300 rounded-xl shadow-xl fixed z-[999] items-center w-full">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="rounded-full cursor-pointer px-2 py-2 hover:bg-slate-200"
          />
        </Link>
        <label className=" bg-red-400 px-3 my-2 rounded-2xl text-center ml-10 mr-40">
          <h1 className="text-lg font-bold text-white py-2">
            React Food Dilivery App
          </h1>
        </label>
        <ul className="flex justify-end text-lg font-semibold items-center">
          <li className=" px-8 mx-2">
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
          <li className=" px-6 py-2 mx-2 hover:border-b-4 hover:border-white transition-[all 0.2s ease-out]">
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Home
            </Link>
          </li>
          <li className=" px-6 py-2 mx-2  hover:border-b-4 hover:border-white transition-[all 0.2s ease-out]">
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "black" }}
            >
              About Us
            </Link>
          </li>
          <li className=" px-6 py-2 mx-2 hover:border-b-4 hover:border-white transition-[all 0.2s ease-out]">
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "black" }}
            >
              Contact Us
            </Link>
          </li>
          <li className=" px-6 py-2 mx-2 hover:border-b-4 hover:border-white transition-[all 0.2s ease-out]">
            <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
              Cart-{cartItems.length}
            </Link>
          </li>
          <button
            className={`${
              loginCredential === "SignIn"
                ? "bg-green-500 text-amber-300 hover:bg-amber-300 hover:text-green-500 hover:border-green-500 hover:border-2"
                : "bg-red-500 text-amber-300 hover:bg-amber-300 hover:text-red-500  hover:border-red-500 hover:border-2"
            } px-2 py-2 ml-4 rounded-full`}
            onClick={() => {
              loginCredential === "SignIn"
                ? setLoginCredential("SignOut")
                : setLoginCredential("SignIn");
            }}
          >
            {loginCredential}
          </button>
          {loginCredential === "SignOut" && (
            <label className="px-2 py-2 text-green-500">
              {loggedUserId?.split(" ").join("")}
            </label>
          )}
        </ul>
      </nav>
    );
  }
};

export default Header;
