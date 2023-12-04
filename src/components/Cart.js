import { useDispatch, useSelector } from "react-redux";
import { FOOD_IMG } from "../utils/constants";
import { modifyItem } from "../utils/cartSlice";
import CartContexts from "../utils/CartContexts";
import { useEffect, useContext } from "react";

const Cart = () => {
  let total = 0;
  let gstCost = 0;
  let totalAmount = 0;

  const dispatch = useDispatch();
  const { setCurPath } = useContext(CartContexts);

  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  const cartResDeatils = useSelector((store) => store.cart.resDetails[0]);
  // console.log(cartResDeatils);

  const IncCount = (info) => {
    dispatch(
      modifyItem({
        id: info.id,
        type: "increase",
      })
    );
  };
  const DecCount = (info) => {
    dispatch(
      modifyItem({
        id: info.id,
        type: "decrease",
      })
    );
  };
  const deliveryFee = cartResDeatils?.feeDetails?.totalFee / 100 || 0;
  useEffect(() => {
    setCurPath("cart");
  }, []);
  return (
    <>
      {cartItems.length === 0 ? (
        <div className="text-center m-2 p-2">
          <h1>Please add the food items to show !!</h1>
        </div>
      ) : (
        <div className="flex">
          <div className=" bg-slate-200 pr-2 w-8/12">
            <div className="flex justify-between">
              <div className="bg-white p-6 m-6">
                <h3 className="font-bold text-xl px-2">Account</h3>
                <p className="text-slate-400 pl-2 text-lg">
                  To place order now, log in to your existing account or sign
                  up.
                </p>
                <div className="p-4 mt-4">
                  <button className="border-2 border-green-400 px-6 mx-8 ">
                    <span className="text-sm text-green-500">
                      Have an account?
                    </span>{" "}
                    <h3 className="text-green-500 font-bold text-xl">LOG IN</h3>
                  </button>
                  <button className="bg-green-500 px-6 mx-8">
                    <span className="text-sm text-white">New to FoodApp?</span>{" "}
                    <h3 className="text-white font-bold text-xl">SIGN UP</h3>
                  </button>
                </div>
              </div>
              <div className="bg-white p-6 my-6 mr-6">
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
            <div className="py-4 mt-6 px-6 mr-4 ml-2 bg-white">
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
                const itemPrice =
                  (item.price / 100 || item.defaultPrice / 100) *
                  item.itemCount;
                total = Math.round(total + itemPrice);
                gstCost = Math.round((total * 8) / 100);
                totalAmount = Math.round(total + deliveryFee + 3 + gstCost);

                return (
                  <div
                    data-testid="itemsAdded"
                    key={item.id}
                    className="flex justify-between py-3"
                  >
                    <div className="flex mr-2">
                      <div
                        className={`${
                          item.itemAttribute.vegClassifier.toLowerCase() ===
                          "veg"
                            ? "border-green-600"
                            : "border-red-600"
                        } border-2 md:w-5 md:h-5 h-5 w-10 rounded-[0.2rem] bg-white pl-[2.2px] pt-[2.2px]`}
                      >
                        <span
                          className={`${
                            item.itemAttribute.vegClassifier.toLowerCase() ===
                            "veg"
                              ? "bg-green-600"
                              : "bg-red-600"
                          } w-[0.7rem] h-[0.7rem] rounded-full absolute`}
                        ></span>
                      </div>
                    </div>
                    <p className="font-semibold text-sm ">{item.name}</p>
                    <div className="flex h-10">
                      <div className="flex border-2 mx-4 ">
                        <button
                          className="font-bold text-xl px-2 hover:text-green-500"
                          onClick={() => DecCount(item)}
                        >
                          -
                        </button>
                        <p className="font-bold text-sm px-2 py-2">
                          {item.itemCount}
                        </p>
                        <button
                          className="font-bold text-xl px-2 hover:text-green-500"
                          onClick={() => IncCount(item)}
                        >
                          +
                        </button>
                      </div>
                      <p className="text-gray-500">₹{Math.round(itemPrice)}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="py-2 px-6 mr-4 ml-2 bg-white mb-4">
              <p className="font-semibold text-lg">Bill Details</p>
              <div className="flex justify-between py-3">
                <p>Item Total</p>
                <p>₹{total}</p>
              </div>
              <div className="flex justify-between">
                <p>
                  Delivery Fee | {cartResDeatils?.sla?.lastMileTravelString}
                </p>
                <p>₹ {deliveryFee}</p>
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
              <div className="flex justify-between pt-4">
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
