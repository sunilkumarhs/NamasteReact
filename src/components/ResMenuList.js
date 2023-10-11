import { useState } from "react";

import CardsList from "./CardsList";

const ResMenuList = (props) => {
  const [showList, setShowList] = useState(false);
  const { resList } = props;
  const { tBar } = props;
  let itCard;
  if (tBar === true) {
    const filItem = resList.itemCards.filter(
      (prd) => prd.card.info.itemAttribute.vegClassifier.toLowerCase() === "veg"
    );
    itCard = filItem;
  } else {
    itCard = resList.itemCards;
  }

  const handleClick = () => {
    setShowList(!showList);
  };

  return (
    <div className=" bg-slate-400 p-2 mb-6 shadow-xl rounded-lg ">
      <div
        className="flex justify-between py-2 cursor-pointer"
        onClick={handleClick}
      >
        <h2 className="font-bold text-2xl mx-4">
          {resList?.title} ({itCard?.length})
        </h2>
        <span className=" text-3xl px-4">⬇️</span>
      </div>
      {showList && <CardsList data={itCard} />}
    </div>
  );
};

export default ResMenuList;
