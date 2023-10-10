import { FOOD_IMG } from "../utils/constants";

const ResMenuList = (props) => {
  const { resList } = props;
  if (resList.card.card.itemCards) {
    const item = resList?.card?.card;
    return (
      <div className=" bg-slate-400 p-2 mb-4">
        <h2 className="font-bold text-xl mx-4">{item.title}</h2>
        {item?.itemCards?.map((list) => {
          const listItem = list?.card?.info;
          return (
            <div
              key={listItem.id}
              className="bg-gray-200 m-4 p-4 border-none rounded-2xl"
            >
              <button className="rounded-2xl border-dashed border-2 float-right bg-transparent">
                {" "}
                {listItem.imageId ? (
                  <img
                    alt="Food Image"
                    src={FOOD_IMG + listItem.imageId}
                    className="w-full h-28 rounded-2xl mr-4"
                  />
                ) : (
                  "FOOD IMAGE"
                )}
              </button>
              <p
                className={`${
                  listItem.itemAttribute.vegClassifier.toLowerCase() === "veg"
                    ? "text-green-500"
                    : "text-red-600"
                } text-xl`}
              >
                {listItem.itemAttribute.vegClassifier}
              </p>
              <p className="text-xl">
                <b>{listItem.name}</b>
              </p>
              <p className="text-xl">
                <b>₹{listItem.price / 100 || listItem.defaultPrice / 100}</b>
              </p>
              <p className="text-gray-500 text-sm">{listItem.description}</p>
            </div>
          );
        })}
      </div>
    );
  }
};

export default ResMenuList;
