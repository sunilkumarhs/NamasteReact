import React from "react";
import { CDN_IMGLINK } from "../utils/constants";

const OfferCards = (props) => {
  const { offData } = props;
  return (
    // <div className=" my-4 mx-2 shadow-lg">
    <img
      alt="Food Image"
      src={CDN_IMGLINK + offData?.imageId}
      className="w-full h-72 mr-4 cursor-pointer"
    />
    // </div>
  );
};

export default OfferCards;
