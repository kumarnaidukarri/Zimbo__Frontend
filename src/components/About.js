import User from "./User";
import UserClass from "./UserClass";
import React from "react";

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
    console.log("Parent Constructor !");
  }

  render() {
    console.log("Parent Render !");

    return (
      <>
        <h1> this is about page </h1>
        <p> about page description </p>

        <UserClass name={"Firstchild"} />
        <UserClass name={"Secondchild"} />
      </>
    );
  }

  componentDidMount() {
    console.log("Parent ComponentDidMount !");
  }
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
