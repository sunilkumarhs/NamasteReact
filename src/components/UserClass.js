import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    console.log("Constructor is called");
    super(props);
    this.state = {
        count : 0,
        count2 : 10
    }
  }
  componentDidMount() {
    console.log("Component DIdMount called");
  }
  render() {
    console.log("Render is called");
    const { name, location } = this.props;
    const {count, count2} = this.state;
    return (
      <div className="user">
        <h3>Count: {count}</h3>
        <h3>Count2: {count2}</h3>
        <button
          style={{
            cursor: "pointer",
            fontSize: "1.3rem",
            color: "white",
            backgroundColor: "red",
            borderRadius: "1rem",
            border: "none",
            margin: "0rem 2rem",
            padding: "0.5rem",
          }}
          onClick={() => {
            if (this.state.count2 != 0) {
              this.setState({
                count: this.state.count + 1,
                count2: this.state.count2 - 1,
              });
            }
          }}
        >
          Press Here
        </button>
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
        <h2>Contact: @sunilhs1718</h2>
      </div>
    );
  }
}

export default UserClass;
