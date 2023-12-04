import { useState } from "react";
import { addItem, addRes, clearItems, removeRes } from "../utils/cartSlice";
import { FOOD_IMG } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";

const CardsList = (props) => {
  const { data } = props;
  const { resInfo } = props;
  const dispatch = useDispatch();
  const cartResDeatils = useSelector((store) => store.cart.resDetails);
  const cartItemsList = useSelector((store) => store.cart.items);
  console.log(cartResDeatils);
  // const [addBtn, setAddBtn] = useState("ADD");
  let addBtn = "ADD";
  let Ref = true;
  const handleAddItems = (itemInfo) => {
    if (cartResDeatils.length != 0) {
      if (cartResDeatils[0].name != resInfo.name) {
        dispatch(clearItems());
        dispatch(removeRes());
        dispatch(addRes(resInfo));
      }
    }
    if (cartResDeatils.length === 0) {
      dispatch(addRes(resInfo));
    }
    cartItemsList.map((item) => {
      Ref = true;
      if (item.id === itemInfo.id) Ref = false;
    });

    Ref === true && dispatch(addItem(itemInfo));
  };

  return (
    <div>
      {data?.map((list) => {
        const listItem = list?.card?.info;
        const itemInfo = { itemCount: 1, ...listItem };
        return (
          <div
            data-testid="foodItems"
            key={listItem.id}
            className="bg-gray-200  mx-4 my-4 p-3 border-none rounded-2xl flex justify-between shadow-xl"
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
              <p className="text-xl my-1">
                <b>{listItem.name}</b>
              </p>
              <p className="text-xl">
                <b>₹{listItem.price / 100 || listItem.defaultPrice / 100}</b>
              </p>
              <p className="text-gray-500 text-sm my-1">
                {listItem.description}
              </p>
            </div>

            <div className="ml-10">
              <button
                className={`${
                  listItem.imageId ? "mt-28" : "mt-14"
                } absolute py-1 px-6 bg-white text-lg text-green-400 rounded-xl ml-9 shadow-lg cursor-pointer`}
                onClick={() => handleAddItems(itemInfo)}
              >
                {addBtn}
              </button>
              <button className="rounded-2xl border-dashed border-2  bg-transparent w-36">
                {" "}
                {listItem.imageId ? (
                  <img
                    alt="Food Image"
                    src={FOOD_IMG + listItem.imageId}
                    className="w-full h-32 rounded-2xl mr-4"
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

export default CardsList;
