import { useSelector } from "react-redux";
import CartHeader from "./CartHeader";
import { FOOD_IMG } from "../utils/constants";
import { useState } from "react";

const Cart = () => {
  let total = 0;
  let gstCost = 0;
  let totalAmount = 0;
  let itemCount = 1;
  const [itemCount1, setItemCount] = useState(1);
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
              <p className="font-bold text-xl whitespace-nowrap overflow-hidden">
                {cartResDeatils.name}
              </p>
              <p className="text-gray-500 pb-2 ">{cartResDeatils.areaName}</p>
              <hr className="border-2 border-slate-800" />
            </div>
            <div className="bg-white px-6 mr-4 ml-2">
              {cartItems?.map((item) => {
                const itemInfo = item.card.info;

                const itemPrice =
                  (itemInfo.price / 100 || itemInfo.defaultPrice) * itemCount1;
                total = Math.round(total + itemPrice);
                gstCost = Math.round((total * 8) / 100);
                totalAmount = Math.round(
                  total +
                    cartResDeatils?.feeDetails?.totalFee / 100 +
                    3 +
                    gstCost
                );
                const DecCount = (info) => {
                  if (info.id === itemInfo.id) {
                    setItemCount(itemCount1 - 1);
                  }
                };
                const IncCount = (info) => {
                  if (info.id === itemInfo.id) {
                    setItemCount(itemCount1 + 1);
                  }
                  console.log(info + "hi");
                };
                console.log(item);
                console.log(itemCount1);
                return (
                  <div key={itemInfo.id} className="flex justify-between py-4">
                    <div className="flex mr-2">
                      <div
                        className={`${
                          itemInfo.itemAttribute.vegClassifier.toLowerCase() ===
                          "veg"
                            ? "border-green-600"
                            : "border-red-600"
                        } border-2 md:w-5 md:h-5 h-5 w-10 rounded-[0.2rem] bg-white`}
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
                    </div>

                    <div className="flex ">
                      <p className="font-semibold text-sm ">{itemInfo.name}</p>
                    </div>
                    <div className="flex h-10">
                      <div className="flex border-2 mx-4 ">
                        <button
                          className="font-bold text-2xl px-2 hover:text-green-500"
                          onClick={() => DecCount(itemInfo)}
                        >
                          -
                        </button>
                        <p className="font-bold text-sm px-2 py-2">
                          {itemCount1}
                        </p>
                        <button
                          className="font-bold text-2xl px-2 hover:text-green-500"
                          onClick={() => IncCount(itemInfo)}
                        >
                          +
                        </button>
                      </div>
                      <p className="text-gray-500">₹{itemPrice}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="py-4 px-6 mr-4 ml-2 bg-white">
              <p className="font-semibold text-lg">Bill Details</p>
              <div className="flex justify-between py-3">
                <p>Item Total</p>
                <p>₹{total}</p>
              </div>
              <div className="flex justify-between">
                <p>
                  Delivery Fee | {cartResDeatils?.sla?.lastMileTravelString}
                </p>
                <p>₹ {cartResDeatils?.feeDetails?.totalFee / 100}</p>
              </div>
              <hr className="border-[1rem]border-slate-200 my-3" />
              <div className="flex justify-between">
                <p>Platform Fee</p>
                <p>₹{3}</p>
              </div>
              <div className="flex justify-between py-3">
                <p>GST and Restaurant Charges</p>
                <p>₹{gstCost}</p>
              </div>
              <hr className="border-2 border-slate-600 mt-2" />
              <div className="flex justify-between py-6">
                <p className="font-bold text-lg">TO PAY</p>
                <p className="font-bold text-lg">₹{totalAmount}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
