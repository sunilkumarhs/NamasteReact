import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { RESMENU_LINK } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resMenuData, setResMenuData] = useState(null);
  useEffect(() => {
    fetchApiData();
  }, []);

  const fetchApiData = async () => {
    const data = await fetch(RESMENU_LINK + resId);
    const jsonData = await data.json();
    // console.log(jsonData);
    setResMenuData(jsonData.data);
  };

  if (resMenuData === null) return <ShimmerUI />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    totalRatingsString,
    areaName,
    feeDetails,
    sla,
    aggregatedDiscountInfo,
  } = resMenuData?.cards[0]?.card?.card?.info;
  const cardItemsList =
    resMenuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  console.log(cardItemsList);

  return (
    <div className="menuContainer">
      <hr style={{ border: "0.5px dashed lightGray" }} />
      <button
        style={{
          borderRadius: "1rem",
          border: "1px dashed lightGray",
          float: "right",
          backgroundColor: "white",
          marginRight: "1.5rem",
        }}
      >
        <p style={{ fontSize: "1.5rem", margin: "0.5rem 0rem" }}>
          <b>{avgRating}</b>
        </p>
        <hr
          style={{ border: "0.5px dashed lightGray", margin: "1.2rem 0.8rem" }}
        />
        <p>{totalRatingsString}</p>
      </button>
      <h2 style={{ marginTop: "0rem" }}>{name}</h2>
      <p
        style={{
          fontSize: "1.2rem",
          margin: "0.4rem 0rem",
          color: "gray",
        }}
      >
        {cuisines.join(",")}
      </p>
      <p style={{ fontSize: "1.2rem", margin: "0rem", color: "gray" }}>
        {areaName}
      </p>
      <h3 style={{ color: "gray" }}>{feeDetails.message}</h3>

      <hr style={{ border: "0.5px dashed lightGray" }} />
      <div style={{ display: "flex" }}>
        <h3 style={{ paddingRight: "3rem", margin: "0.8rem 0rem" }}>
          {sla.deliveryTime} MINS
        </h3>
        <h3 style={{ paddingRight: "3rem", margin: "0.8rem 0rem" }}>
          {costForTwoMessage}
        </h3>
      </div>
      <div style={{ display: "flex", marginBottom: "5rem" }}>
        <button
          style={{
            borderRadius: "1rem",
            border: "1px dashed Gray",
            backgroundColor: "white",
            marginRight: "3rem",
            marginTop: "0.5rem",
            padding: "0.5rem 0.5rem",
          }}
        >
          <p style={{ fontSize: "1rem", margin: "0rem" }}>
            <b>
              {aggregatedDiscountInfo.descriptionList[0].meta.split("|")[0]}
            </b>
          </p>
          <br />
          <p style={{ fontSize: "0.8rem", margin: "0rem", color: "gray" }}>
            {aggregatedDiscountInfo.descriptionList[0].meta.split("|")[1]}
          </p>
        </button>
        <button
          style={{
            borderRadius: "1rem",
            border: "1px dashed Gray",
            backgroundColor: "white",
            marginRight: "3rem",
            marginTop: "0.5rem",
            padding: "0.5rem 0.5rem",
          }}
        >
          <p style={{ fontSize: "1rem", margin: "0rem" }}>
            <b>
              {aggregatedDiscountInfo.descriptionList[1].meta.split("|")[0]}
            </b>
          </p>
          <br />
          <p style={{ fontSize: "0.8rem", margin: "0rem", color: "gray" }}>
            {aggregatedDiscountInfo.descriptionList[1].meta.split("|")[1]}
          </p>
        </button>
      </div>
      {"veg" in resMenuData?.cards[0]?.card?.card?.info ? (
        <p style={{ fontSize: "1.3rem" }}>
          <b>Pure Veg</b>
        </p>
      ) : (
        <p style={{ fontSize: "1.3rem" }}>
          <b>Veg Only</b>
        </p>
      )}
      <hr style={{ border: "0.5px dashed lightGray" }} />
      <div>
        {cardItemsList?.map((itemcard) => {
          if (itemcard.card.card.itemCards) {
            const item = itemcard?.card?.card;
            return (
              <div key={item.title}>
                <h2>{item.title}</h2>
                <ul>
                  {item?.itemCards?.map((list) => (
                    <li key={list.card.info.id}>{list?.card?.info?.name}</li>
                  ))}
                </ul>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
