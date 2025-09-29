import { useEffect, useState } from "react";

import RestaurantCard from "./RestaurantCard.js";
import Shimmer from "./Shimmer.js";

const Body = function () {
  // useState() creates a local State variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]); //initial empty resList

  // useEffect() calls callback, when component is rendered.
  useEffect(() => {
    console.log("Use effect called");
    fetchData();
  }, []);

  let fetchData = async () => {
    /* Swiggy LIVE API Data, URL = "https://swiggy-api-4c740.web.app/swiggy-api.json" */
    let responseObject = await fetch(
      "https://swiggy-api-4c740.web.app/swiggy-api.json"
    ); // Just for now, lets use "CORS browser extension" to fix cors-errors.
    let finalData = await responseObject.json();

    // Update State & re-render with new Data
    const newListOfRestaurants =
      finalData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    /* finalData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants = [{info:{},cta:{}}, {info:{},cta:{}}, {info:{},cta:{}}, ...]  */

    setListOfRestaurants(newListOfRestaurants);
  };

  // Shimmer UI
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter Logic here
            console.log("Button clicked!");
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
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
