const User = (props) => {
  return (
    <div className="user">
      <h2>Name: {props.name}</h2>
      <h2>Location: {props.location}</h2>
      <h2>Contact: @sunilhs1718</h2>
    </div>
  );
};
export default User;
