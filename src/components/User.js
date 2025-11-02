// 'User' functional component

import { useEffect, useState } from "react";
import { useContext } from "react"; // importing 'useContext' hook from library

import UserContext from "../utils/UserContext"; // importing our created context 'UserContext'

const User = (props) => {
  const { name, location } = props;

  const [count, setCount] = useState(0); // creating a state variable
  const [rank, setRank] = useState(4); // creating a state variable

  const userData = useContext(UserContext); // accessing Data of 'UserContext' using hook
  console.log(userData);

  useEffect(() => {
    // useEffect() calls after Render.
    // used for API calls, Timers, ...
    console.log("useEffect");

    return () => {
      // return 'Callback' executes in 'Unmounting Phase'.
      // used for Cleanup tasks purpose.
      console.log("useEffect Return");
    };
  }, []);

  return (
    <div className="user-card" style={{ backgroundColor: "lightgrey" }}>
      <h2>Name: {name} </h2>
      <h3>Location: {location} </h3>
      <h4>Contact: @Example Functional based Component </h4>
      <p> Count: {count} </p>
      <p> Rank: {rank} </p>
      <button
        style={{
          backgroundColor: "green",
          borderRadius: "10px",
          padding: "5px",
          margin: "10px 0",
        }}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count+ btn
      </button>
    </div>
  );
};

export default User;

// context in functional component.
/*
 1. import 'useContext' hook from 'react' library and  your created 'Context' from your file.
 2. access the Data from your context using 'useContext()' hook.
*/
