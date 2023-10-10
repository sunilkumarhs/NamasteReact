import { CDN_IMGLINK } from "../utils/constants";
const RestaurentCards = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  return (
    <div className=" m-2 p-2 w-60 border-gray-200 border-2 rounded-xl cardInfo">
      <img
        alt="Food Image"
        src={CDN_IMGLINK + cloudinaryImageId}
        className=" w-full h-40 rounded-xl"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurentCards;
