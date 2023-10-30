import { useSelector } from "react-redux";
import CartHeader from "./CartHeader";
import { FOOD_IMG } from "../utils/constants";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const cartResDeatils = useSelector((store) => store.cart.resDetails[0]);
  console.log(cartItems);
  console.log(cartResDeatils);
  return (
    <>
      {/* <CartHeader /> */}
      {cartItems.length === 0 ? (
        <div className="text-center m-2 p-2">
          <h1>Please add the food items to show !!</h1>
        </div>
      ) : (
        <div className="flex">
          <div className=" bg-slate-200 pr-5 w-8/12">
            <div className="flex justify-between">
              <div className="bg-white p-6 m-6">
                <h3 className="font-bold text-xl px-2">Account</h3>
                <p className="text-slate-400 px-2 text-xl">
                  To place order now, log in to your existing account or sign
                  up.
                </p>
                <div className="p-6 mt-6">
                  <button className="border-2 border-green-400 px-8 mx-10 ">
                    <span className="text-sm text-green-500">
                      Have an account?
                    </span>{" "}
                    <h3 className="text-green-500 font-bold text-xl">LOG IN</h3>
                  </button>
                  <button className="bg-green-500 px-8 mx-10">
                    <span className="text-sm text-white">New to FoodApp?</span>{" "}
                    <h3 className="text-white font-bold text-xl">SIGN UP</h3>
                  </button>
                </div>
              </div>
              <div className="bg-white p-6 m-6">
                <img
                  alt="Food Image"
                  src={FOOD_IMG + "Image-login_btpq7r"}
                  className="w-full h-36 rounded-2xl mr-4"
                />
              </div>
            </div>
            <div className="bg-white p-6 mx-6">
              <h2 className="font-bold text-xl px-2 py-6">Address</h2>
            </div>
            <div className="bg-white p-6 mx-6 my-6">
              <h2 className="font-bold text-xl px-2 py-6"> payment</h2>
            </div>
          </div>
          <div className="bg-slate-200 w-4/12">
            <div className="py-4 mt-4 px-6 mr-4 ml-2 bg-white shadow-xl">
              <img
                alt="Food Image"
                src={FOOD_IMG + cartResDeatils.cloudinaryImageId}
                className="w-16 h-16 rounded-2xl mr-4"
              />
              <h1 className="font-bold text-xl whitespace-nowrap overflow-hidden">
                {cartResDeatils.name}
              </h1>
              <p className="text-gray-500">{cartResDeatils.areaName}</p>
              <hr className="border-2 border-slate-800 m-2" />
            </div>
            <div className="bg-white px-6 mr-4 ml-2">
              {cartItems?.map((item) => {
                const itemInfo = item.card.info;
                console.log(item);
                return (
                  <div key={itemInfo.id} className="flex justify-between py-4">
                    <div className="flex ">
                      {/* <p
                        className={`${
                          itemInfo.itemAttribute.vegClassifier.toLowerCase() ===
                          "veg"
                            ? "text-green-500"
                            : "text-red-600"
                        } text-base mr-2`}
                      >
                        {itemInfo.itemAttribute.vegClassifier}
                      </p> */}
                      <div
                        className={`${
                          itemInfo.itemAttribute.vegClassifier.toLowerCase() ===
                          "veg"
                            ? "border-green-600"
                            : "border-red-600"
                        } border-2 md:w-5 md:h-5 h-5 w-5 rounded-[0.2rem] transform duration-300 ease-in-out relative bg-white mr-2`}
                      >
                        <span
                          className={`${
                            itemInfo.itemAttribute.vegClassifier.toLowerCase() ===
                            "veg"
                              ? "bg-green-600"
                              : "bg-red-600"
                          } w-[0.7rem] h-[0.7rem] rounded-full absolute mt-[0.2rem] ml-[0.2rem] `}
                        ></span>
                      </div>
                      <p className="font-semibold text-base">{itemInfo.name}</p>
                    </div>
                    <div className="flex">
                      <div className="flex border-2 mx-4 ">
                        <button className="font-bold text-2xl px-2 ">-</button>
                        <p className="font-bold text-sm px-2 py-2">1</p>
                        <button className="font-bold text-2xl px-2">+</button>
                      </div>
                      <p className="text-gray-500">
                        ₹{itemInfo.price / 100 || itemInfo.defaultPrice / 100}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
