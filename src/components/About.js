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
    const names = { 0: "sunilkumarhs", 1: "CharanReddy404", 2: "SunilKumarKV" };
    return (
      <>
        <div className="text-center ">
          <h1 className="text-4xl font-bold py-4 text-slate-500">About-Us</h1>
          <h3 className="text-2xl font-semibold text-gray-400">
            Welcome to About-Us page using react-router-dom
          </h3>
        </div>
        <div className="flex flex-wrap py-6">
          <User id={names[0]} />
          <User id={names[1]} />
          <User id={names[2]} />
          <UserClass name={"Sunil Kumar H S"} location={"Karnataka, Kolar"} />
        </div>
      </>
    );
  }
}

export default About;
