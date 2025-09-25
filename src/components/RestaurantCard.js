const RestaurantCard = function (props) {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla } =
    resData?.info;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="res img"
      />
      <h3> {name} </h3>
      <h4> {cuisines.join(", ")} </h4>
      <h4> {avgRating || 0} stars </h4>
      <h4> {sla.deliveryTime} mins </h4>
      <h4> {costForTwo} </h4>
    </div>
  );
};

export default RestaurantCard;
