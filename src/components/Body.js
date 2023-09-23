import resList from "../utils/mockData";
import ResCards from "./RestaurentCards";
import { useState, useEffect } from "react";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(resList);
  const [searchRes, setSearchRes] = useState("");

  useEffect(() => {
    console.log("useEffect Called");
    fetchApiData();
  }, []);

  const fetchApiData = async () => {
    // const data = await fetch();
  };

  return (
    <div className="body">
      <div className="searchItem">
        <button
          className="tRated-btn"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (res) => res.data.avgRating > 4
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
                (res) => res.data.name.toLowerCase() === searchRes.toLowerCase()
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
          <ResCards key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
