import { CDN_URL } from "../utils/constants.js";

const RestaurantCard = function (props) {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla } =
    resData?.info;

  return (
    <div
      className="res-card  m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-200 h[auto]"
      // style={{backgroundColor: "#f0f0f0"}}
    >
      <img
        className="res-logo  h-60 w-60 rounded-sm"
        src={CDN_URL + cloudinaryImageId}
        alt="res img"
      />
      <h3 className="mt-4 text-lg font-bold"> {name} </h3>
      <h4 className=""> {cuisines.join(", ")} </h4>
      <h4> {avgRating || 0} stars </h4>
      <h4> {sla.deliveryTime} mins </h4>
      <h4> {costForTwo} </h4>
    </div>
  );
};

// * Higher Order Component *
// input - RestaurantCard, output - RestaurantCardPromoted
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div
        className="relative"
        style={{ display: "flex", alignItems: "stretch" }}
      >
        <label className="absolute rounded-sm bg-gray-950 text-white px-2">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;

// Note: we can do both 'Default export' + 'Named exports' in a Single file.
/* 
  default export = RestaurantCard
  named exports  = {withPromotedLabel}  
*/
