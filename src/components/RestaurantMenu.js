// Restaurant Menu Page for each restaurant(dynamic data)

import { useParams } from "react-router";

import Shimmer from "./Shimmer.js";

import useRestaurantMenu from "../utils/useRestaurantMenu.js"; // custom hook

const RestaurantMenu = () => {
  const { resId } = useParams(); // Hook used to access 'URL Path Parameters'
  const resInfo = useRestaurantMenu(resId); // Custom Hook to fetch Menu data

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
