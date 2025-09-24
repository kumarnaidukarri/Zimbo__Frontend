import React from "react";
import ReactDOM from "react-dom/client";

/*
Components Design:
AppLayout
1) Header
    - Logo
    - Navitems

2) Body
    - Search bar
    - RestaurantsContainer
        - RestaurantCard
            -Img
            -Name of Res, Rating, Cuisine, delivery time

3) Footer 
    - copyright
    - links
    - address
    - contact
*/

const Header = function () {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://png.pngtree.com/png-vector/20220708/ourmid/pngtree-fast-food-logo-png-image_5763171.png"
          alt="food logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = function (props) {
  const { resName, cuisine, rating } = props;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/3/17/6a4369e1-0c9c-49f9-8132-5be682a7831f_1046503.jpg"
        alt="res img"
      />
      <h3> {resName} </h3>
      <h4> {cuisine} </h4>
      <h4> {rating} stars </h4>
    </div>
  );
};

const Body = function () {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resName="Ambica Foods" cuisine="Indian" rating="4.5" />
        <RestaurantCard resName="Sai Ram Parlour" cuisine="Indian" rating="4" />
        <RestaurantCard
          resName="Mayuri Restaurant"
          cuisine="American"
          rating="4"
        />
      </div>
    </div>
  );
};

const AppLayout = function () {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const rootEl = ReactDOM.createRoot(document.getElementById("root"));
rootEl.render(<AppLayout />);
