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
    resMenuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(cardItemsList);

  return (
    <div className=" mx-60 my-12">
      <hr className=" border-dashed border-2 border-grey-200 mb-4" />
      <button className=" rounded-xl border-dashed border-2 border-gray-400 float-right bg-slate-100 mr-6">
        <p className="text-2xl my-2">
          <b>{avgRating}</b>
        </p>
        <hr className="border-dashed border-2 border-gray-400 my-3 mx-2" />
        <p className=" px-2 py-1">{totalRatingsString}</p>
      </button>
      <h2 className=" font-semibold text-2xl">{name}</h2>
      <p className="text-xl my-2 text-gray-400">{cuisines.join(",")}</p>
      <p className="text-xl text-gray-400">{areaName}</p>
      <h3 className=" text-gray-500 my-2">{feeDetails.message}</h3>

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
              toggle === true ? "bg-green-500" : "bg-gray-300"
            } md:w-12 md:h-5 w-12 h-6 flex items-center  rounded-[0.2rem] px-1 py-[0.8rem] cursor-pointer`}
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <div
              className={`${toggle === true ? "bg-white" : "bg-white"}
                "md:w-5 md:h-5 h-5 w-5 rounded-[0.2rem] transform duration-300 ease-in-out relative" +
                ${!toggle ? null : toggleClass}
              `}
            >
              <span
                className={`${
                  toggle === true ? "bg-green-700" : "bg-white"
                } w-[0.7rem] h-[0.7rem] rounded-full absolute mt-[0.3rem] ml-[0.3rem]`}
              ></span>
            </div>
          </div>
        </div>
      )}
      <hr className=" border-dashed border-2 border-grey-200 my-4" />
      <div>
        {cardItemsList?.map((itemcard) => (
          <ResMenuList
            key={itemcard.card?.card?.title}
            resList={itemcard.card?.card}
            tBar={toggle}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
