import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { FOOD_IMG, RESMENU_LINK } from "../utils/constants";
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
  // console.log(cardItemsList);

  return (
    <div className="menuContainer">
      <hr style={{ border: "0.5px dashed lightGray", marginBottom: "1rem" }} />
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
                <h2 style={{ paddingBottom: "1rem" }}>{item.title}</h2>
                {item?.itemCards?.map((list) => {
                  const listItem = list?.card?.info;
                  return (
                    <div key={listItem.id}>
                      <button
                        style={{
                          borderRadius: "1rem",
                          border: "1px dashed lightGray",
                          float: "right",
                          backgroundColor: "white",
                        }}
                      >
                        {" "}
                        {listItem.imageId ? (
                          <img
                            alt="Food Image"
                            src={FOOD_IMG + listItem.imageId}
                            style={{
                              width: "100%",
                              height: "7rem",
                              borderRadius: "1rem",
                              marginRight: "1rem",
                            }}
                          />
                        ) : (
                          "FOOD IMAGE"
                        )}
                      </button>
                      <p style={{ fontSize: "1rem" }}>
                        {listItem.itemAttribute.vegClassifier}
                      </p>
                      <p style={{ fontSize: "1.3rem" }}>
                        <b>{listItem.name}</b>
                      </p>
                      <p style={{ fontSize: "1.3rem" }}>
                        <b>
                          ₹{listItem.price / 100 || listItem.defaultPrice / 100}
                        </b>
                      </p>
                      <p style={{ color: "gray" }}>{listItem.description}</p>
                      <hr
                        style={{
                          border: "0.5px dashed lightGray",
                          marginTop: "2rem",
                          marginBottom: "2rem",
                        }}
                      />
                    </div>
                  );
                })}
                <hr
                  style={{
                    border: "1rem dashed lightGray",
                    marginTop: "2rem",
                    marginBottom: "2rem",
                  }}
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
