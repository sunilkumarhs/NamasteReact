// import resList from "../utils/mockData";
import RestaurentCards from "./RestaurentCards";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import { RES_LINK } from "../utils/constants";
import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [realRestaurantList, setRealRestaurantList] = useState([]);
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchRes, setSearchRes] = useState("");

  useEffect(() => {
    fetchApiData();
  }, []);

  const fetchApiData = async () => {
    const data = await fetch(RES_LINK);
    const jsonData = await data.json();
    // console.log(jsonData);
    setRealRestaurantList(
      jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setRestaurantList(
      jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  // const onlineStatus = useOnlineStatus();
  // console.log(onlineStatus);
  // if (onlineStatus === false)
  //   return <h1>Your are Offline, please check your internet connection!</h1>;

  return restaurantList.length == 0 ? (
    <ShimmerUI />
  ) : (
    <div className="mx-2 px-2">
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
      <div className=" flex flex-wrap">
        {restaurantList?.map((restaurant) => (
          <Link
            to={"/restaurantMenu/" + restaurant?.info?.id}
            key={restaurant?.info?.id}
            style={{ textDecoration: "none", color: "black" }}
          >
            <RestaurentCards resData={restaurant} />{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
