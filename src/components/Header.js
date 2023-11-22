import { useContext, useState } from "react";
import picture from "../../images/icon.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContexts from "../utils/userContexts";
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
      <nav className="flex px-3 py-1 bg-amber-300 rounded-xl fixed ml-3 mt-1 shadow-xl">
        <div>
          <Link to="/">
            <img src={picture} alt="logo" className=" rounded-full mx-2" />
          </Link>
        </div>
        <div className=" bg-red-400 px-3 my-2 rounded-2xl text-center ml-10 mr-[32rem]">
          <h1 className="text-lg font-bold text-white py-2">
            React Food Dilivery App
          </h1>
        </div>
        <div className="">
          <ul className="flex justify-between py-3 text-lg cursor-pointer font-semibold ">
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
            <li className=" px-10 mx-4 py-2 hover:text-xl hover:border-b-4 hover:border-white">
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
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="flex px-3 py-1 bg-amber-300 rounded-xl fixed ml-3 mt-1 shadow-xl">
        <div className="mx-2">
          <Link to="/">
            <img src={picture} alt="logo" className=" rounded-full" />
          </Link>
        </div>
        <div className=" bg-red-400 px-3 my-2 rounded-2xl text-center ml-10 mr-40">
          <h1 className="text-lg font-bold text-white py-2">
            React Food Dilivery App
          </h1>
        </div>
        <div className="">
          <ul className="flex justify-between py-3 text-lg cursor-pointer font-semibold">
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
            <li className=" px-6 py-2 mx-2 hover:border-b-4 hover:border-white">
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                Home
              </Link>
            </li>
            <li className=" px-6 py-2 mx-2  hover:border-b-4 hover:border-white">
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "black" }}
              >
                About Us
              </Link>
            </li>
            <li className=" px-6 py-2 mx-2 hover:border-b-4 hover:border-white">
              <Link
                to="/contact"
                style={{ textDecoration: "none", color: "black" }}
              >
                Contact Us
              </Link>
            </li>
            <li className=" px-6 py-2 mx-2 hover:border-b-4 hover:border-white">
              <Link
                to="/cart"
                style={{ textDecoration: "none", color: "black" }}
              >
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
        </div>
      </nav>
    );
  }
 
};

export default Header;
