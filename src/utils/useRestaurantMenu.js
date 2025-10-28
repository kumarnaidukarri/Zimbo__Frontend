// Custom Hook to fetch menu data

import { useEffect, useState } from "react";

import { RestaurantsMenuCards__Dummy } from "./constants.js";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null); // local state variable

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    // Swiggy Menu API is not working currently. !!!
    /*
    const responseObj = await fetch(
      "https://swiggy-api-4c740.web.app/swiggy-api.json" + resId 
    );
    const jsonData = await responseObj.json();
    console.log(jsonData);
    const cards =
      jsonData.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log(cards);
    */

    // Using Dummy Hard-Coded MenuCards data. !!!
    const cards = RestaurantsMenuCards__Dummy; // [{},{},{}]

    setResInfo(cards); // updates the state
  };

  return resInfo;
};

export default useRestaurantMenu;
