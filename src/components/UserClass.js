import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: props.name,
        location: props.location,
      },
    };
  }
  async componentDidMount() {
    const data = await fetch(" https://api.github.com/users/sunilkumarhs");
    const jsonData = await data.json();
    this.setState({
      userInfo: jsonData,
    });
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="border-solid border-2 border-slate-500 rounded-2xl p-4 m-4">
        <img
          alt="Profile Image"
          className="w-full h-32 rounded-3xl"
          src={avatar_url}
        />
        <h2 className="text-xl py-2">Name: {name}</h2>
        <h2 className="text-xl">Location: {location}</h2>
        <h2 className="text-xl py-2">Contact: @sunilhs1718</h2>
      </div>
    );
  }
}

export default UserClass;
