import { CDN_IMGLINK } from "../utils/constants";
const RestaurentCards = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, areaName } =
    resData?.info;
  return (
    <div className=" my-4 mx-2 p-2 w-64 border-gray-200 border-2 rounded-xl shadow-lg cardInfo">
      <img
        alt="Food Image"
        src={CDN_IMGLINK + cloudinaryImageId}
        className="w-full h-40 rounded-xl"
      />
      <h3 className="text-xl font-semibold py-2 whitespace-nowrap overflow-hidden text-ellipsis">
        {name}
      </h3>
      <h4 className="text-gray-400 whitespace-nowrap overflow-hidden text-ellipsis">
        {cuisines.join(", ")}
      </h4>
      <h4 className="font-semibold py-2">{avgRating}</h4>
      <h4 className="font-semibold">{areaName}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurentCards) => {
  return (props) => {
    const { resData } = props;
    const { aggregatedDiscountInfoV3 } = resData?.info;
    return (
      <div>
        <label className=" absolute m-2 p-2 bg-slate-700 text-white">
          {aggregatedDiscountInfoV3.header}{" "}
          {aggregatedDiscountInfoV3.discountTag}
        </label>
        <RestaurentCards {...props} />
      </div>
    );
  };
};

export default RestaurentCards;
