import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router"; // react-router library
import { lazy, Suspense } from "react"; // optimization

// components imports
import Header from "./components/Header.js";
import Body from "./components/Body.js";

import About from "./components/About.js";
import Contact from "./components/Contact.js";
import ErrorPage from "./components/ErrorPage.js";
import RestaurantMenu from "./components/RestaurantMenu.js";

// Technique: Lazy Loading or Code Splitting or on demand loading or Chunking or Dynamic Bundling.
// import Grocery from "./components/Grocery.js";
const Grocery = lazy(() => import("./components/Grocery.js")); // Lazy loads the Grocery Component async.

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
      {/* comments
        Outlet will be Replaced with 'Children' based on the 'Path of URl'
        if path='/'      --> Outlet will fill with <Body />
        if path='/home'  --> <Home /> 
        if path='/about' --> <About />  
      */}
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1 style={{ margin: "10px" }}>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      { path: "/restaurants/:resId", element: <RestaurantMenu /> }, // dynamic path
    ],
    errorElement: <ErrorPage />,
  },
]); // creates a router object

const rootEl = ReactDOM.createRoot(document.getElementById("root"));
rootEl.render(<RouterProvider router={appRouter} />); //RouterProvider injects 'router object' into our app.
