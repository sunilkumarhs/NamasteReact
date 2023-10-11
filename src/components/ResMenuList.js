import { useState } from "react";
import { FOOD_IMG } from "../utils/constants";

const ResMenuList = (props) => {
  const { resList } = props;
  const { tBar } = props;
  let itCard;
  if (tBar === true) {
    const filItem = resList.itemCards.filter(
      (prd) => prd.card.info.itemAttribute.vegClassifier.toLowerCase() === "veg"
    );
    itCard = filItem;
  } else {
    itCard = resList.itemCards;
  }
  return (
    <div className=" bg-slate-400 p-2 mb-4">
      <h2 className="font-bold text-xl mx-4">{resList?.title}</h2>

      {itCard.map((list) => {
        const listItem = list?.card?.info;
        return (
          <div
            key={listItem.id}
            className="bg-gray-200  m-4 p-4 border-none rounded-2xl flex justify-between"
          >
            <div>
              <p
                className={`${
                  listItem.itemAttribute.vegClassifier.toLowerCase() === "veg"
                    ? "text-green-500"
                    : "text-red-600"
                } text-xl `}
              >
                {listItem.itemAttribute.vegClassifier}
              </p>
              <p className="text-xl my-2">
                <b>{listItem.name}</b>
              </p>
              <p className="text-xl">
                <b>₹{listItem.price / 100 || listItem.defaultPrice / 100}</b>
              </p>
              <p className="text-gray-500 text-sm my-2">
                {listItem.description}
              </p>
            </div>
            <div className="ml-20 mr-4">
              <button className="rounded-2xl border-dashed border-2  bg-transparent w-40">
                {" "}
                {listItem.imageId ? (
                  <img
                    alt="Food Image"
                    src={FOOD_IMG + listItem.imageId}
                    className="w-full h-36 rounded-2xl mr-4"
                  />
                ) : (
                  "FOOD IMAGE"
                )}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ResMenuList;
