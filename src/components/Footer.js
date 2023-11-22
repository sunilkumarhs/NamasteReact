import React from "react";
import { CDN_IMGLINK } from "../utils/constants";
import logo from "../../images/icon.png";

const Footer = (props) => {
  const { footInfo } = props;
  return (
    <div className="bg-slate-200">
      <div className=" flex p-6 mx-32">
        <h1 className="font-bold text-2xl w-2/4 mr-12">
          For better experience, download the reactFoodDelivery now
        </h1>
        <img
          alt="Google Play"
          src={CDN_IMGLINK + footInfo?.androidAppImage}
          className="w-52 h-20 mr-8 cursor-pointer"
        />
        <img
          alt="ios app"
          src={CDN_IMGLINK + footInfo?.iosAppImage}
          className="w-52 h-20 cursor-pointer"
        />
      </div>
      <div className="bg-slate-900 py-10 px-56 flex justify-between">
        <div>
          <div className="flex">
            <img src={logo} alt="logos" className=" rounded-full" />
            <h1 className="text-white font-bold text-3xl m-3">RFD</h1>
          </div>
          <h1 className="font-semibold text-slate-500 text-lg px-2 mt-2">
            Ⓒ 2023 NamasteReact
          </h1>
          <h1 className="font-semibold text-slate-500 text-lg px-2">
            Technologies Pvt.Ltd
          </h1>
        </div>
        <div>
          <h1 className="font-bold text-xl text-white mb-2">Company</h1>
          <p className="text-slate-500 py-2 text-lg">About</p>
          <p className="text-slate-500 text-lg">Careers</p>
          <p className="text-slate-500 py-2 text-lg">Team</p>
        </div>
        <div>
          <h1 className="font-bold text-xl text-white mb-2">Contact us</h1>
          <p className="text-slate-500 py-2 text-lg">Help & Support</p>
          <p className="text-slate-500 text-lg">Partner with us </p>
          <p className="text-slate-500 py-2 text-lg">Ride with us</p>

          <h1 className="font-bold text-xl text-white mb-2 mt-6">Legal</h1>
          <p className="text-slate-500 py-2 text-lg">Terms & Conditions</p>
          <p className="text-slate-500 text-lg">Cookie Policy</p>
          <p className="text-slate-500 py-2 text-lg">Privacy Policy</p>
        </div>
        <div>
          <h1 className="font-bold text-xl text-white mb-2">We deliver to:</h1>
          <p className="text-slate-500 py-2 text-lg">Bangalore</p>
          <p className="text-slate-500 text-lg">Gurgaon</p>
          <p className="text-slate-500 py-2 text-lg">Hyderabad</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
