import { CDN_IMGLINK } from "../utils/constants";
const RestaurentCards = (props) => {
  const { resData } = props;
  // console.log(resData);
  const { cloudinaryImageId, name, cuisines, avgRating, areaName, sla } =
    resData?.info;
  return (
    <div className=" my-4 p-2 w-56 border-gray-200 border-2 rounded-xl shadow-lg cardInfo">
      <img
        alt="Food Image"
        src={CDN_IMGLINK + cloudinaryImageId}
        className="w-full h-36 rounded-xl"
      />
      <h3 className="text-xl font-semibold pt-2 whitespace-nowrap overflow-hidden text-ellipsis">
        {name}
      </h3>
      <h4 className="text-gray-400 whitespace-nowrap overflow-hidden text-ellipsis">
        {cuisines.join(", ")}
      </h4>
      <div className="flex">
        <h4 className="font-semibold">{avgRating}*</h4>
        <h4 className="font-semibold px-4"> {sla.deliveryTime} mins</h4>
      </div>
      <h4 className="font-semibold whitespace-nowrap overflow-hidden">
        {areaName}
      </h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurentCards) => {
  return (props) => {
    const { resData } = props;
    const { aggregatedDiscountInfoV3 } = resData?.info;
    return (
      <div>
        <label className="absolute m-2 p-2 bg-slate-700 text-white">
          {aggregatedDiscountInfoV3.header}{" "}
          {aggregatedDiscountInfoV3.discountTag}
        </label>
        <RestaurentCards {...props} />
      </div>
    );
  };
};

export default RestaurentCards;
