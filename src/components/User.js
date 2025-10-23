// 'User' functional component

import { useState } from "react";

const User = (props) => {
  const { name, location } = props;

  const [count, setCount] = useState(0); // creating a state variable
  const [rank, setRank] = useState(4); // creating a state variable

  return (
    <div className="user-card">
      <h2>Name: {name} </h2>
      <h3>Location: {location} </h3>
      <h4>Contact: @example Functional based Component </h4>
      <p> Count: {count} </p>
      <p> Rank: {rank} </p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        count increase
      </button>
    </div>
  );
};

export default User;
