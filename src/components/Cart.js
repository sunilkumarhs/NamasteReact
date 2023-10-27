import { useDispatch, useSelector } from "react-redux";
import CardsList from "./CardsList";
import { clearItems } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(clearItems());
  };
  return (
    <>
      <div className="text-center m-2">
        <h1>This is Cart section!!</h1>
      </div>
      <div className="text-center m-2 p-2">
        <h2>Ordered items can be viewed here!</h2>
      </div>
      {cartItems.length === 0 ? (
        <div className="text-center m-2 p-2">
          <h1>Please add the food items to show !!</h1>
        </div>
      ) : (
        <div className="w-6/12 m-auto">
          <button
            onClick={handleClear}
            className="text-xl font-semibold text-white bg-sky-500 hover:bg-sky-700 p-2 rounded-full m-2"
          >
            Clear
          </button>
          <CardsList data={cartItems} />
        </div>
      )}
    </>
  );
};

export default Cart;
