import React from "react";
import User from "./User";
import UserClass from "./UserClass";

// const About = () => {
//   return (
//     <>
//       <div style={{ textAlign: "center" }}>
//         <h1>About-Us</h1>
//         <h3>Welcome to About-Us page using react-router-dom</h3>
//       </div>
//       <div className="userCardContainer">
//         <User name={"Sunil Kumar H S"} location={"Karnataka, Kolar"} />
//         <UserClass name={"Sunil Kumar H S"} location={"Karnataka, Kolar"} />
//       </div>
//     </>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <div style={{ textAlign: "center" }}>
          <h1>About-Us</h1>
          <h3>Welcome to About-Us page using react-router-dom</h3>
        </div>
        <div className="userCardContainer">
          <User name={"Sunil Kumar H S"} location={"Karnataka, Kolar"} />
          <UserClass name={"Sunil Kumar H S"} location={"Karnataka, Kolar"} />
        </div>
      </>
    );
  }
}

export default About;
