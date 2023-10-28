import { useDispatch, useSelector } from "react-redux";
import CardsList from "./CardsList";
import { clearItems } from "../utils/cartSlice";
import CartHeader from "./CartHeader";
import { FOOD_IMG } from "../utils/constants";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const cartResDeatils = useSelector((store) => store.cart.resDetails[0]);
  // console.log(cartItems);
  console.log(cartResDeatils);
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(clearItems());
  };
  return (
    <>
      <CartHeader />
      {/* <div className="text-center m-2">
        <h1>This is Cart section!!</h1>
      </div>
      <div className="text-center m-2 p-2">
        <h2>Ordered items can be viewed here!</h2>
      </div> */}
      {cartItems.length === 0 ? (
        <div className="text-center m-2 p-2">
          <h1>Please add the food items to show !!</h1>
        </div>
      ) : (
        // <div className="w-6/12 m-auto">
        //   <button
        //     onClick={handleClear}
        //     className="text-xl font-semibold text-white bg-sky-500 hover:bg-sky-700 p-2 rounded-full m-2"
        //   >
        //     Clear
        //   </button>
        //   <CardsList data={cartItems} />
        // </div>
        <div className="flex justify-between">
          <div className=" bg-slate-200 ">
            <div className="flex justify-between">
              <div className="bg-white p-6 m-6">
                <h3 className="font-bold text-xl px-2">Account</h3>
                <p className="text-slate-400 px-2 text-xl">
                  To place order now, log in to your existing account or sign
                  up.
                </p>
                <div className="p-6 mt-6">
                  <button className="border-2 border-green-400 px-8 mx-8 ">
                    <span className="text-sm text-green-500">
                      Have an account?
                    </span>{" "}
                    <h3 className="text-green-500 font-bold text-xl">LOG IN</h3>
                  </button>
                  <button className="bg-green-500 px-8 mx-8 ">
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
          <div className="bg-slate-200">
            <div className="py-4 my-4 pr-8 pl-6 mr-8 ml-4 bg-white shadow-xl">
              <img
                alt="Food Image"
                src={FOOD_IMG + cartResDeatils.cloudinaryImageId}
                className="w-16 h-16 rounded-2xl mr-4"
              />
              <h1 className="font-bold text-xl">{cartResDeatils.name}</h1>
              <p className="text-gray-500">{cartResDeatils.areaName}</p>
              <hr className="border-2 border-slate-800 m-2" />
              {/* <CardsList data={cartItems} /> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
