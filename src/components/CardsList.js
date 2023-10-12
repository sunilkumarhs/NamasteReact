import { FOOD_IMG } from "../utils/constants";

const CardsList = (props) => {
  const { data } = props;
  return (
    <div>
      {data?.map((list) => {
        const listItem = list?.card?.info;
        return (
          <div
            key={listItem.id}
            className="bg-gray-200  mx-4 my-6 p-4 border-none rounded-2xl flex justify-between shadow-xl"
          >
            <div>
              <p
                className={`${
                  listItem.itemAttribute.vegClassifier.toLowerCase() === "veg"
                    ? "text-green-500"
                    : "text-red-600"
                } text-xl `}
              >
                {listItem.itemAttribute.vegClassifier}
              </p>
              <p className="text-xl my-2">
                <b>{listItem.name}</b>
              </p>
              <p className="text-xl">
                <b>₹{listItem.price / 100 || listItem.defaultPrice / 100}</b>
              </p>
              <p className="text-gray-500 text-sm my-2">
                {listItem.description}
              </p>
            </div>

            <div className="ml-10">
              <button
                className={`${
                  listItem.imageId ? "mt-28" : "mt-14"
                } absolute py-2 px-6 bg-white text-xl text-green-400 rounded-xl ml-9 shadow-lg cursor-pointer`}
              >
                ADD
              </button>
              <button className="rounded-2xl border-dashed border-2  bg-transparent w-40">
                {" "}
                {listItem.imageId ? (
                  <img
                    alt="Food Image"
                    src={FOOD_IMG + listItem.imageId}
                    className="w-full h-36 rounded-2xl mr-4"
                  />
                ) : (
                  "FOOD IMAGE"
                )}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardsList;
