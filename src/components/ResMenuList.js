import CardsList from "./CardsList";

const ResMenuList = ({
  resList,
  tBar,
  showList,
  showIndex,
  displayTitle,
  resDetails,
}) => {
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
    showIndex();
  };

  return (
    <div className=" bg-slate-400 p-2 mb-6 shadow-xl rounded-lg ">
      <div
        className="flex justify-between py-2 cursor-pointer"
        onClick={handleClick}
      >
        {!displayTitle && (
          <h2 className="font-bold text-2xl mx-4">
            {resList?.title} ({itCard?.length})
          </h2>
        )}
        <span className=" text-3xl px-4">{!displayTitle ? "⬇️" : "⬆️"}</span>
      </div>
      {showList && <CardsList data={itCard} resInfo={resDetails} />}
    </div>
  );
};

export default ResMenuList;
