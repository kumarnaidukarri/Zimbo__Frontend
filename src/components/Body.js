import RestaurantCard from "./RestaurantCard.js";
import resList from "../utils/mockData.js";

const Body = function () {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {
          // Dynamically Rendering ResCards
          resList.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))
        }
      </div>
    </div>
  );
};

export default Body;
