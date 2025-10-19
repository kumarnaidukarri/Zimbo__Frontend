// Restaurant Menu Page for each restaurant(dynamic data)
import { useEffect, useState } from "react";
import { useParams } from "react-router";

import Shimmer from "./Shimmer.js";
import { RestaurantsMenuCards__Dummy } from "../utils/constants.js";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null); // local state variable

  const { resId } = useParams(); // Hook used to access 'URL Path Parameters'

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    // Swiggy Menu API is not working currently. !!!
    /*
    const responseObj = await fetch(
      "https://swiggy-api-4c740.web.app/swiggy-api.json"
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

  if (resInfo === null) {
    return <Shimmer />;
  }

  // find exact restaurant
  const filteredRestaurantCard = resInfo.find(
    (restaurantCard) => restaurantCard.id.toString() === resId
  );
  if (filteredRestaurantCard === undefined) {
    return <h2> Restaurant Not Found ... </h2>;
  }

  const { name, id, imageUrl, menu } = filteredRestaurantCard;

  // render menu card
  return (
    <div className="restaurant-menu-container">
      <div>
        <h1> Restaurant: {name} </h1>
        <h2 style={{ marginTop: "10px", marginBottom: "15px" }}> id: {id} </h2>
        <img src={imageUrl} width={"300px"} />
      </div>
      <div className="menu">
        <h2> Menu </h2>
        <ul>
          {menu.map((item) => (
            <li key={item.itemId}>
              {item.itemName}
              {" - Rs."}
              {item.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
