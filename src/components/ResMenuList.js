import { FOOD_IMG } from "../utils/constants";

const ResMenuList = (props) => {
  const { resList } = props;
  if (resList.card.card.itemCards) {
    const item = resList?.card?.card;
    return (
      <div
        style={{
          backgroundColor: "#eee",
          padding: "0.5rem",
          marginBottom: "1rem",
        }}
      >
        <h2 style={{ paddingBottom: "1rem" }}>{item.title}</h2>
        {item?.itemCards?.map((list) => {
          const listItem = list?.card?.info;
          return (
            <div
              key={listItem.id}
              style={{
                backgroundColor: "white",
                margin: "0.5rem",
                padding: "0.5rem",
                border: "none",
                borderRadius: "1rem",
              }}
            >
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
                <b>₹{listItem.price / 100 || listItem.defaultPrice / 100}</b>
              </p>
              <p style={{ color: "gray" }}>{listItem.description}</p>
              {/* <hr
                style={{
                  border: "0.5px dashed lightGray",
                  marginTop: "2rem",
                  marginBottom: "2rem",
                }}
              /> */}
            </div>
          );
        })}
        {/* <hr
          style={{
            border: "1rem dashed lightGray",
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        /> */}
      </div>
    );
  }
};

export default ResMenuList;
