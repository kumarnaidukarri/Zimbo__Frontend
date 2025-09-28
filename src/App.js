import React from "react";
import ReactDOM from "react-dom/client";

// components imports
import Header from "./components/Header.js";
import Body from "./components/Body.js";

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
