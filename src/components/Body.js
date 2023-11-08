import RestaurentCards, { withPromotedLabel } from "./RestaurentCards";
import { useState, useEffect, useContext } from "react";
import ShimmerUI from "./ShimmerUI";
import { RES_LINK } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContexts from "../utils/userContexts";
import CartContexts from "../utils/CartContexts";

const Body = () => {
  const [realRestaurantList, setRealRestaurantList] = useState([]);
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchRes, setSearchRes] = useState("");
  const { setCurPath } = useContext(CartContexts);

  useEffect(() => {
    fetchApiData();
    setCurPath("home");
  }, []);

  const fetchApiData = async () => {
    const data = await fetch(RES_LINK);
    const jsonData = await data.json();
    console.log(jsonData);
    setRealRestaurantList(
      jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setRestaurantList(
      jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const PromotedRestaurents = withPromotedLabel(RestaurentCards);

  const { loggedUserId, setLoginUser } = useContext(UserContexts);

  return restaurantList.length == 0 ? (
    <ShimmerUI />
  ) : (
    <div className="mx-56 px-2 py-4">
      <div className="flex m-2 p-2 justify-between">
        <button
          className=" cursor-pointer text-xl bg-teal-500 rounded-full p-2  hover:bg-teal-700 text-white font-semibold"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (res) => res?.info?.avgRating > 4
            );
            setRestaurantList(filteredList);
          }}
        >
          Top Rated
        </button>
        <div>
          <label className="font-semibold text-xl">UserName :</label>
          <input
            className=" border-2 rounded-md mx-2 px-4 py-2 bg-slate-200 border-none text-lg"
            value={loggedUserId}
            onChange={(e) => setLoginUser(e.target.value)}
          />
        </div>
        <div>
          <input
            type="search"
            className="border-2 rounded-full mx-2 px-4 py-2 bg-slate-200 border-none text-lg"
            placeholder="Search Restaurants"
            value={searchRes}
            onChange={(e) => setSearchRes(e.target.value)}
          />
          <button
            type="button"
            className=" text-xl font-semibold text-white bg-sky-500 hover:bg-sky-700 p-2 rounded-full "
            onClick={() => {
              const filterRes = realRestaurantList.filter((res) =>
                res?.info?.name.toLowerCase().includes(searchRes.toLowerCase())
              );
              setRestaurantList(filterRes);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className=" flex flex-wrap my-4">
        {restaurantList?.map((restaurant) => (
          <Link
            to={"/restaurantMenu/" + restaurant?.info?.id}
            key={restaurant?.info?.id}
            style={{ textDecoration: "none", color: "black" }}
          >
            {restaurant?.info?.aggregatedDiscountInfoV3 ? (
              <PromotedRestaurents resData={restaurant} />
            ) : (
              <RestaurentCards resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
