import User from "./User";
import UserClass from "./UserClass";
import React from "react";

import UserContext from "../utils/UserContext";

// Life Cycle of react component:
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

// Note :-
/* Batching: React batches up for all child component and render at once.
   Batching means 'Grouping multiple state updates' into a single re-render.
*/

// About class component
const About = class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h1> this is about page </h1>
        <p> about page description </p>

        <UserContext.Consumer>
          {(data) => (
            <div>
              <p>login user: {data.loginUser}</p>
              <p>login status: {data.loginStatus.toString()}</p>
            </div>
          )}
        </UserContext.Consumer>

        <User name="kumar" location="india" />
        <UserClass name="Don lee" location="china" />

        <UserContext.Consumer>
          {(data) => (
            <div
              className="user-box"
              style={{ margin: "10px 0", backgroundColor: "lightGreen" }}
            >
              <label> User Name: </label>
              <input
                value={data.loginUser}
                onChange={(event) => {
                  console.log(event.target.value);
                  data.setUserName(event.target.value);
                }}
                style={{
                  border: "1px solid black",
                  margin: "5px",
                  padding: "5px",
                  backgroundColor: "lightGrey",
                }}
              />
            </div>
          )}
        </UserContext.Consumer>
      </>
    );
  }

  componentDidMount() {}
};

/*
 Parent Constructor !
 Parent Render !

  - FirstChild constructor
  - FirstChild render

  - SecondChild constructor
  - SecondChild render

  -  FirstChild componentDidMount
  -  SecondChild componentDidMount

 Parent ComponentDidMount !
*/

export default About;
