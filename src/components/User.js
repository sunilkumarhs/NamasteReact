import { useEffect, useState } from "react";

const User = (props) => {
  const [count] = useState(0);
  const [count2] = useState(1);

  const [proData, setProData] = useState([]);

  useEffect(() => {
    aboutProfiles();
  }, []);

  const aboutProfiles = async () => {
    const data0 = await fetch(" https://api.github.com/users/CharanReddy404");
    const data1 = await fetch(" https://api.github.com/users/SunilKumarKV");
    let jsonData = [];
    jsonData.push(await data0.json());
    jsonData.push(await data1.json());
    // console.log(jsonData);
    if (jsonData.length != 0) setProData(jsonData);
    console.log(proData);
  };
  // async componentDidMount() {
  //   const data = await fetch(" https://api.github.com/users/CharanReddy404");
  //   const jsonData = await data.json();
  //   this.setState({
  //     userInfo: jsonData,
  //   });
  //   console.log(this.state.userInfo+"charan");
  // }
  return (
    <div className="border-solid border-2 border-slate-500 rounded-2xl p-4 m-4">
      <h3 className="text-xl py-2">Count: {count}</h3>
      <h3 className="text-xl py-2">Count2: {count2}</h3>
      <h2 className="text-xl py-2">Name: {props.name}</h2>
      <h2 className="text-xl py-2">Location: {props.location}</h2>
      <h2 className="text-xl py-2">Contact: @sunilhs1718</h2>
    </div>
  );
};
export default User;
