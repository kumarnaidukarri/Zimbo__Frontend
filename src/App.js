import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router"; // react-router library

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

const Home = function () {
  return (
    <>
      <h1> this is home page </h1> <p> home page description </p>
    </>
  );
};
const About = function () {
  return (
    <>
      <h1> this is about page </h1> <p> about page description </p>
    </>
  );
};
const ErrorPage = function () {
  return <h1> Oops something went wrong ... </h1>;
};

const appRouter = createBrowserRouter([
  { path: "/", element: <AppLayout />, errorElement: <ErrorPage /> },
  { path: "/home", element: <Home /> },
  { path: "/about", element: <About /> },
]); // creates a router object

const rootEl = ReactDOM.createRoot(document.getElementById("root"));
rootEl.render(<RouterProvider router={appRouter} />); //RouterProvider injects 'router object' into our app.
