import React from "react";

// 'User' class component similar to 'User' functional component

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + " constructor");
  }

  render() {
    console.log(this.props.name + " render");
    return <h1> hi {this.props.name} </h1>;
  }

  componentDidMount() {
    console.log(this.props.name + " componentDidMount");
  }
}

export default UserClass;
