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
      <div className="user">
        <img alt="Profile Image" className="prf_img" src={avatar_url} />
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
        <h2>Contact: @sunilhs1718</h2>
      </div>
    );
  }
}

export default UserClass;
