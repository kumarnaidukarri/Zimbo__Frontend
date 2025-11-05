import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartSlice.js";

// Create a store with config obj. we pass Slices and it's Reducers to the config.
// it returns object. {dispatch:f, getState:f, subscribe::f}
const appStore = configureStore({
  reducer: { cart: cartReducer },
});

console.log("App store", appStore);
export default appStore;
