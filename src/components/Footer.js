import React from "react";
import { CDN_IMGLINK } from "../utils/constants";

const Footer = (props) => {
  const { footInfo } = props;
  return (
    <div className="bg-slate-200">
      <div className=" flex p-6 mx-32">
        <h1 className="font-bold text-3xl w-2/4 mr-12">
          For better experience, download the reactFoodDelivery now
        </h1>
        <img
          alt="Google Play"
          src={CDN_IMGLINK + footInfo.androidAppImage}
          className="w-52 h-30 mr-8 cursor-pointer"
        />
        <img
          alt="ios app"
          src={CDN_IMGLINK + footInfo.iosAppImage}
          className="w-52 h-30 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Footer;
