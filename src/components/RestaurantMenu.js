import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResMenuList from "./ResMenuList";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [toggle, setToggle] = useState(false);
  const toggleClass = " transform translate-x-5";

  const resMenuData = useRestaurantMenu(resId);

  if (resMenuData === null) return <ShimmerUI />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    totalRatingsString,
    areaName,
    feeDetails,
    sla,
    aggregatedDiscountInfo,
  } = resMenuData?.cards[0]?.card?.card?.info;
  const cardItemsList =
    resMenuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  // console.log(cardItemsList[0]);
  let i = cardItemsList.length;

  return (
    <div className=" mx-60 my-4 ">
      <hr className=" border-dashed border-2 border-grey-200 mb-4" />
      <button className=" rounded-xl border-dashed border-2 border-gray-400 float-right bg-slate-100 mr-6">
        <p className="text-2xl my-2">
          <b>{avgRating}</b>
        </p>
        <hr className="border-dashed border-2 border-gray-400 my-3 mx-2" />
        <p className=" px-2 py-1">{totalRatingsString}</p>
      </button>
      <h2 className=" font-semibold text-2xl mt-0">{name}</h2>
      <p className="text-xl my-1 text-gray-400">{cuisines.join(",")}</p>
      <p className="text-xl my-1 text-gray-400">{areaName}</p>
      <h3 className=" text-gray-500 pb-2">{feeDetails.message}</h3>

      <hr className=" border-dashed border-2 border-grey-200 mb-1" />
      <div className=" flex">
        <h3 className="pr-12 my-3 text-xl">{sla.deliveryTime} MINS</h3>
        <h3 className="pr-12 my-3 text-xl">{costForTwoMessage}</h3>
      </div>
      <div className="flex mb-16 ">
        <button className="rounded-2xl border-dashed border-2 border-gray-400 bg-slate-100 mr-12 mt-2 p-2">
          <p>
            <b>
              {aggregatedDiscountInfo.descriptionList[0].meta.split("|")[0]}
            </b>
          </p>
          <br />
          <p className="text-xs text-gray-400">
            {aggregatedDiscountInfo.descriptionList[0].meta.split("|")[1]}
          </p>
        </button>
        <button className="rounded-2xl border-dashed border-2 border-gray-400 bg-slate-100 mr-12 mt-2 p-2">
          <p>
            <b>
              {aggregatedDiscountInfo.descriptionList[1].meta.split("|")[0]}
            </b>
          </p>
          <br />
          <p className="text-xs text-gray-400">
            {aggregatedDiscountInfo.descriptionList[1].meta.split("|")[1]}
          </p>
        </button>
      </div>
      {"veg" in resMenuData?.cards[0]?.card?.card?.info ? (
        <p className="text-2xl text-green-600">
          <b>Pure Veg</b>
        </p>
      ) : (
        <div className="flex mb-4">
          <p className="text-xl mx-4">
            <b>Veg Only</b>
          </p>
          <div
            className={`${
              toggle === true ? "bg-green-500" : "bg-gray-200"
            } md:w-14 md:h-5 w-12 h-6 flex items-center  rounded-md px-1 py-4 cursor-pointer`}
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <div
              className={`${toggle === true ? "bg-green-400" : "bg-white"}
                "md:w-6 md:h-5 h-5 w-5 rounded-md shadow-md transform duration-300 ease-in-out" +
                ${!toggle ? null : toggleClass}
              `}
            ></div>
          </div>
        </div>
      )}
      <hr className=" border-dashed border-2 border-grey-200 my-2" />
      <div>
        {cardItemsList?.map((itemcard) => (
          <ResMenuList key={i--} resList={itemcard} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
