// Restaurant Menu Page for each restaurant(dynamic data)

import { useState } from "react";
import { useParams } from "react-router";

import Shimmer from "./Shimmer.js";
import MenuCategoryAccordion from "./MenuCategoryAccordion.js"; // menu toggle component

import useRestaurantMenu from "../utils/useRestaurantMenu.js"; // custom hook
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams(); // Hook used to access 'URL Path Parameters'
  const resInfo = useRestaurantMenu(resId); // Custom Hook to fetch Menu data

  const [showIndex, setShowIndex] = useState(); // state variable for childs(menu accordions)

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

  const vegMenu = menu.filter((item) => item.category === "veg");
  const nonVegMenu = menu.filter((item) => item.category === "non-veg");
  const recommendedMenu = menu.filter((item) => Number(item.price) >= 200);

  const menuCategories = [
    { menuTitle: "All Menu", menu: menu },
    { menuTitle: "Recommended Menu", menu: recommendedMenu },
    { menuTitle: "Veg Menu", menu: vegMenu },
    { menuTitle: "Non Veg Menu", menu: nonVegMenu },
  ];

  // render menu card
  return (
    <div
      className="restaurant-menu-container  pl-6 py-7 bg-amber-50"
      style={{ minHeight: "90vh" }}
    >
      <div className="text-lg font-bold">
        <img src={imageUrl} width={"300px"} className="my-2 rounded" />
        <h1>
          Restaurant: <span className="font-normal">{name}</span>
        </h1>
        <h2>
          id: <span className="font-normal">{id}</span>
        </h2>
      </div>
      <div className="menu  mt-8">
        <h2 className="font-bold text-xl"> Menu: </h2>
        {/* Menu Accordion Component */}
        {menuCategories.map((menuCategory, index, arr) => (
          // Parent component sending Prop 'showItems' to control the Child components hide/show toggle.
          <MenuCategoryAccordion
            key={index}
            menuCategory={menuCategory}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;

// RestaurantMenu is a "Parent Component".
// MenuCategoryAccordion is a "Child Component" and "Controlled Component"
// Since, Parent component controls the Child components to show/hide toggle by passing a Prop 'showItems'.
