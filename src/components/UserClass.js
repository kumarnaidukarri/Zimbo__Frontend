// 'User' class component

import React from "react";
import UserContext from "../utils/UserContext";

// Class Components, its Lifecycle methods are Outdated. But still IMP for fundamentals.
/* 
Phases -
 1. Mounting Phase:
    i)  constructor()
    ii) render()
    iii) componentDidMount()

 2. Updating Phase:
    i)   shouldComponentUpdate()
    ii)  render()        
    iii) componentDidUpdate()

 3. Unmounting Phase:
    componentWillUnmount()   
*/

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.name = props.name;
    this.location = props.location;

    this.state = {
      count: 0,
      rank: 8,
    };
  }

  increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  static contextType = UserContext; // static method to access context. 'this.context'

  render() {
    const { name, location } = this;
    const { count, rank } = this.state;

    return (
      <div className="user-card" style={{ backgroundColor: "lightSteelBlue" }}>
        <h2> Name: {name} </h2>
        <h3> Location: {location} </h3>
        <h4> Contact: @Example Class based Component</h4>
        <p> Count: {count}</p>
        <p> Rank: {rank}</p>
        <button
          style={{
            backgroundColor: "green",
            borderRadius: "10px",
            padding: "5px",
            margin: "10px 0",
          }}
          onClick={this.increaseCount}
        >
          Count+ btn
        </button>

        <UserContext.Consumer>
          {(updatedData) => (
            <div>
              <p> login user: {updatedData.loginUser} </p>
              <p> login status: {this.context.loginStatus.toString()} </p>
            </div>
          )}
        </UserContext.Consumer>
      </div>
    );
  }
  componentDidMount() {
    // runs in Mounting Phase
  }

  componentWillUnmount() {
    // runs in Unmounting Phase.  (when we leave current page/view/navigation link)
    // Cleanup Tasks
  }
}

export default UserClass;
