// Restaurant Menu Page for each restaurant(dynamic data)

import { useParams } from "react-router";

import Shimmer from "./Shimmer.js";
import MenuCategoryAccordion from "./MenuCategoryAccordion.js"; // menu toggle component

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
          <MenuCategoryAccordion key={index} menuCategory={menuCategory} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
