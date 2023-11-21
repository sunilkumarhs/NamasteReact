import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { COLLECTION_LINK_END, COLLECTION_LINK_START } from "../utils/constants";
import ShimmerUI from "./ShimmerUI";
import RestaurentCards, { withPromotedLabel } from "./RestaurentCards";
const CollectionList = () => {
  const { colId } = useParams();
  console.log(colId);
  const [collectionData, setCollectionData] = useState(null);
  const [collectionInfo, setCollectionInfo] = useState(null);
  const [collectionCards, setCollectionCards] = useState(null);

  useEffect(() => {
    fetchApiData();
  }, []);

  const fetchApiData = async () => {
    const data = await fetch(
      COLLECTION_LINK_START + colId + COLLECTION_LINK_END
    );
    const jsonData = await data.json();
    setCollectionData(jsonData?.data);
    setCollectionInfo(jsonData?.data?.cards[0]?.card?.card);
    setCollectionCards(jsonData?.data?.cards.slice(3));
  };
  console.log(collectionData);
  console.log(collectionInfo);
  console.log(collectionCards);
  const PromotedRestaurents = withPromotedLabel(RestaurentCards);

  return collectionData === null ? (
    <ShimmerUI />
  ) : (
    <div className="m-4 pt-10 pl-4">
      <h1 className="font-bold text-4xl m-2">{collectionInfo.title}</h1>
      <p className="font-semibold text-lg text-slate-400 m-2 ">
        {collectionInfo.description}
      </p>
      <div className="flex flex-wrap">
        {collectionCards.map((resCard) => (
          <Link
            to={"/restaurantMenu/" + resCard?.card?.card?.info?.id}
            key={resCard?.card?.card?.info?.id}
            style={{ textDecoration: "none", color: "black" }}
            className="m-2"
          >
            {resCard?.card?.card?.info?.aggregatedDiscountInfoV3 ? (
              <PromotedRestaurents resData={resCard?.card?.card} />
            ) : (
              <RestaurentCards resData={resCard?.card?.card} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CollectionList;
