import { useEffect, useState } from "react";
import { GIT_HUB } from "../utils/constants";

const User = (props) => {
  const [prof, setProf] = useState(null);
  const names = props.id;

  useEffect(() => {
    aboutProfiles();
  }, []);

  const aboutProfiles = async () => {
    const data = await fetch(GIT_HUB + names);
    const jsonData = await data?.json();
    setProf(jsonData);
  };
  return (
    <div className="border-solid border-2 border-slate-500 rounded-2xl p-4 m-4">
      <img
        alt="Profile Image"
        className="w-full h-32 rounded-3xl"
        src={prof?.avatar_url}
      />
      <h2 className="text-xl py-2">Name: {prof?.name}</h2>
      <h2 className="text-xl py-2">Location: {prof?.location}</h2>
      <h2 className="text-xl py-2">Contact: @sunilhs1718</h2>
    </div>
  );
};
export default User;
