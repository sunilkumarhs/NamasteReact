import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>oop's</h1>
      <h2>Something went worng</h2>
      <h3>
        {err.status} : {err.statusText}
      </h3>
      <h3>{err.data}</h3>
    </div>
  );
};

export default Error;
