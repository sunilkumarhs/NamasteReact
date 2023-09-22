import resList from "../utils/mockData";
import ResCards from "./RestaurentCards";
import { useState } from "react";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(resList);
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
        <input type="search" className="searchBar" placeholder="Search here" />
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
