import RestaurentCards, { withPromotedLabel } from "./RestaurentCards";
import { useState, useEffect, useContext } from "react";
import ShimmerUI from "./ShimmerUI";
import { CDN_IMGLINK, RES_LINK } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContexts from "../utils/userContexts";
import CartContexts from "../utils/CartContexts";
import OfferCards from "./OfferCards";
import Footer from "./Footer";

const Body = () => {
  const [realRestaurantList, setRealRestaurantList] = useState([]);
  const [restaurantList, setRestaurantList] = useState([]);
  const [offersList, setOffersList] = useState([]);
  const [imageCards, setImageCards] = useState([]);
  const [topRestaurant, setTopRestaurant] = useState([]);
  const [footerInfo, setFooterInfo] = useState([]);
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
    setOffersList(
      jsonData?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
    );
    setImageCards(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.info
    );
    setTopRestaurant(
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFooterInfo(jsonData?.data?.cards[10]?.card?.card);
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
    <>
      <div className="mx-48 px-2 py-4">
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
                  res?.info?.name
                    .toLowerCase()
                    .includes(searchRes.toLowerCase())
                );
                setRestaurantList(filterRes);
              }}
            >
              Search
            </button>
          </div>
        </div>
        <div className="my-6">
          <h1 className="font-bold text-3xl">Best Offers for You</h1>
          <div className="flex overflow-x-scroll no-scrollbar my-2">
            {offersList?.map((offer) => (
              // <OfferCards offData={offer} key={offer.id} />
              <img
                alt="Food Image"
                key={offer.id}
                src={CDN_IMGLINK + offer.imageId}
                className="w-2/4 h-72 mr-4 cursor-pointer"
              />
            ))}
          </div>
        </div>
        <div className="my-6">
          <h1 className="font-bold text-3xl">What`s in your mind?</h1>
          <div className="flex overflow-x-scroll no-scrollbar my-2">
            {imageCards?.map((img) => (
              <img
                alt="Food Image"
                key={img.id}
                src={CDN_IMGLINK + img.imageId}
                className="w-2/4 h-52 mr-4 cursor-pointer"
              />
            ))}
          </div>
        </div>
        <hr className="border-2 border-slate-200 mt-2" />
        <div className="my-6">
          <h1 className="font-bold text-3xl">
            Top restaurant chains in Bangalore
          </h1>
          <div className=" flex flex-wrap justify-between">
            {topRestaurant?.map((restaurant) => (
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
        <hr className="border-2 border-slate-200 mt-2" />
        <div className="my-6">
          <h1 className="font-bold text-3xl">
            Restaurants with online food delivery in Bangalore
          </h1>
          <div className=" flex flex-wrap justify-between">
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
      </div>
      <Footer footInfo={footerInfo} />
    </>
  );
};

export default Body;
