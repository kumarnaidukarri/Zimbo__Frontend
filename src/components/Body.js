import { useEffect, useState } from "react";
import { Link } from "react-router";

import RestaurantCard from "./RestaurantCard.js";
import Shimmer from "./Shimmer.js";

import useOnlineStatus from "../utils/useOnlineStatus.js"; // Custom Hook

const Body = function () {
  const [defaultListOfRestaurants, setDefaultListOfRestaurants] = useState([]); // local State variable for default-restaurants-list

  const [currentListOfRestaurants, setCurrentListOfRestaurants] = useState([]); // local State variable for restaurants-list

  const [searchText, setSearchText] = useState(""); // local State variable for search-input-box

  // useEffect() calls callback, when component is rendered.
  useEffect(() => {
    fetchData();
  }, []);

  let fetchData = async () => {
    /* Swiggy LIVE API Data, URL = "https://swiggy-api-4c740.web.app/swiggy-api.json" */

    // *** CORS Proxy URL String used to fix cors-errors ***
    const CorsProxyUrlString = "https://proxy.corsfix.com/?";

    // 1. Keep data for Render purpose
    let responseObject = await fetch(
      CorsProxyUrlString + "https://swiggy-api-4c740.web.app/swiggy-api.json"
    );
    let finalData = await responseObject.json();
    // Update State & re-render with new Data
    const newListOfRestaurants =
      finalData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    /* finalData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants = [{info:{},cta:{}}, {info:{},cta:{}}, {info:{},cta:{}}, ...]  */

    setCurrentListOfRestaurants(newListOfRestaurants);

    // 2. Keep another fetched data for maintaining Default-list purpose
    let newListOfRestaurants2 = await (
      await (
        await fetch(
          CorsProxyUrlString +
            "https://swiggy-api-4c740.web.app/swiggy-api.json"
        )
      ).json()
    )?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setDefaultListOfRestaurants(newListOfRestaurants2);
  };

  // Browser Online Status Page and UI
  const onlineStatus = useOnlineStatus(); // custom hook to get Browser status online or offline.
  if (onlineStatus === false) {
    return (
      <h1 style={{ margin: "10px" }}>
        Looks like you are Offline. Please check your Internet Connection.
      </h1>
    );
  }

  // Shimmer UI
  if (currentListOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              console.log(e.target.value);
              setSearchText(e.target.value);
            }}
            className="search-box"
          />
          <button
            className="search-btn"
            onClick={() => {
              // Search Filter the restaurant cards and update UI
              console.log(searchText);
              const filteredRestaurants = defaultListOfRestaurants.filter(
                (restaurant) => {
                  // "pizza hut".includes("pizza")
                  return restaurant.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase());
                }
              );
              setCurrentListOfRestaurants(filteredRestaurants);
            }}
          >
            {" "}
            Search{" "}
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            // Filter Logic here
            console.log("Button clicked!");
            const filteredList = defaultListOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setCurrentListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {
          // Dynamically Rendering ResCards
          currentListOfRestaurants.map((restaurant) => (
            <Link
              to={"/restaurants/" + restaurant.info.id}
              key={restaurant.info.id}
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                flexGrow: "0",
              }}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))
        }
      </div>
    </div>
  );
};

export default Body;
