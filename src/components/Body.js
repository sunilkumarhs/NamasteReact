import resList from "../utils/mockData";
import ResCards from "./RestaurentCards";
import { useState, useEffect } from "react";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(resList);
  const [searchRes, setSearchRes] = useState("");

  useEffect(() => {
    fetchApiData();
  }, []);

  const fetchApiData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0169992&lng=77.7044335&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await data.json();
    setRestaurantList(
      jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return (
    <div className="body">
      <div className="searchItem">
        <button
          className="tRated-btn"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (res) => res.info.avgRating > 4
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
              const filterRes = restaurantList.filter(
                (res) => res.info.name.toLowerCase() === searchRes.toLowerCase()
              );
              setRestaurantList(filterRes);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="cardContainer">
        {restaurantList.map((restaurant) => (
          <ResCards key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
