import React from "react";

// 'User' class component similar to 'User' functional component

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, rank: 4 }; // creating a state
  }

  render() {
    const { name, location } = this.props;
    const { count, rank } = this.state;

    return (
      <div className="user-card">
        <h2>Name: {name} </h2>
        <h3>Location: {location} </h3>
        <h4>Contact: @example Class based Component </h4>
        <p> Count: {this.state.count} </p>
        <p> Rank: {this.state.rank} </p>
        <button
          onClick={() => {
            // Never Update State Variables Directly, instead use the method 'setState'.
            this.setState({ count: this.state.count + 1 });
          }}
        >
          count increase
        </button>
      </div>
    );
  }
}

export default UserClass;
