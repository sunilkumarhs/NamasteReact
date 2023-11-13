import React from "react";
import { CDN_IMGLINK } from "../utils/constants";

const OfferCards = (props) => {
  const { offData } = props;
  return (
    <div className=" my-4 mx-2 w-2/4 rounded-3xl  shadow-lg">
      <img
        alt="Food Image"
        src={CDN_IMGLINK + offData?.imageId}
        className="w-full h-50 bg-transparent"
      />
    </div>
  );
};

export default OfferCards;
