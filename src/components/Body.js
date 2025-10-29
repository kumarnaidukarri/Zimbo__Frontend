import { useEffect, useState } from "react";
import { Link } from "react-router";

import RestaurantCard from "./RestaurantCard.js"; // normal component
import { withPromotedLabel } from "./RestaurantCard.js"; // Higher Order Component
import Shimmer from "./Shimmer.js";

import useOnlineStatus from "../utils/useOnlineStatus.js"; // Custom Hook

const Body = function () {
  const [defaultListOfRestaurants, setDefaultListOfRestaurants] = useState([]); // local State variable for default-restaurants-list

  const [currentListOfRestaurants, setCurrentListOfRestaurants] = useState([]); // local State variable for restaurants-list

  const [searchText, setSearchText] = useState(""); // local State variable for search-input-box

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard); // Higher order component

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
      <div className="top-container  flex items-center p-7 bg-amber-50">
        <div className="search">
          <input
            type="text"
            value={searchText}
            className="search-box px-1 py[1px] border bg-gray-100"
            onChange={(e) => {
              console.log(e.target.value);
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn  px-4 py-1 ml-3 bg-green-100 rounded-sm"
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
            Search
          </button>
        </div>
        <div className="filter  ml-6">
          <button
            className="filter-btn  px-4 py-2 bg-gray-100 rounded-sm"
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
      </div>

      <div className="res-container  flex flex-wrap">
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
              {/* 
                i)property 'restaurant.promoted'=true means render 'special promoted res card', else 'normal res card'.
                  restaurant.promoted===true ? (<RestaurantCardPromoted resData={restaurant}/>) : (<RestaurantCard resData={restaurant}/>)
                ii)Currently, Restaurant Object don't have "promoted" property. 
                  so, Immitate logic using 'avgRating' property, Special Card(avgRating>=4.3) or Normal Card(avgRating<4.3)  
                  restaurant.avgRating>=4.3 ? (<RestaurantCardPromoted resData={restaurant}/>) : (<RestaurantCard resData={restaurant}/>)
              */}

              {restaurant.info.avgRating >= 4.3 ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))
        }
      </div>
    </div>
  );
};

export default Body;
