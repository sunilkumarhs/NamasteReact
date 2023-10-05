// import resList from "../utils/mockData";
import ResCards from "./RestaurentCards";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import { RES_LINK } from "../utils/constants";
import { Link } from "react-router-dom";

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

  return restaurantList.length == 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body">
      <div className="searchItem">
        <button
          className="tRated-btn"
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
            className="searchBar"
            placeholder="Search Restaurants"
            value={searchRes}
            onChange={(e) => setSearchRes(e.target.value)}
          />
          <button
            type="button"
            className="search-btn"
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
      <div className="cardContainer">
        {restaurantList?.map((restaurant) => (
          <Link
            to={"/restaurantMenu/" + restaurant?.info?.id}
            key={restaurant?.info?.id}
            style={{ textDecoration: "none", color: "black" }}
          >
            <ResCards resData={restaurant} />{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
