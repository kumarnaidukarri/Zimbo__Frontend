import { useState } from "react";

import RestaurantCard from "./RestaurantCard.js";
import resList from "../utils/mockData.js";

const Body = function () {
  // Creates local State variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  return (
    <div className="body">
      {/* <div className="search">Search</div> */}

      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter Logic here
            console.log("Button clicked!");
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {
          // Dynamically Rendering ResCards
          listOfRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))
        }
      </div>
    </div>
  );
};

export default Body;
