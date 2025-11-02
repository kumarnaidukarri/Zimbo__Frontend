// 'User' functional component

import { useEffect, useState } from "react";

const User = (props) => {
  const { name, location } = props;

  const [count, setCount] = useState(0); // creating a state variable
  const [rank, setRank] = useState(4); // creating a state variable

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
