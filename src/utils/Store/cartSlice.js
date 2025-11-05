import { createSlice } from "@reduxjs/toolkit";

// creates a slice with config obj.
// it returns an object = {name:'cart', actions:{a1:f,a2:f,...}, reducer:f}
// Export those Actions and Reducers
const cartSlice = createSlice({
  name: "cart",
  initialState: { items: ["Pizza", "Burger", "Biryani", "Paneer"] },
  reducers: {
    addItem: (state, action) => {
      // mutating the state here
      state.items.push(action.payload);
      // 'payload' holds 'argument value', that we pass during Dispatching an Action call.
      //  i.e, dispatch(addItem("Ice Cream"))  ----> action.payload = "Ice Cream"
    },
    removeItem: (state, action) => {
      // mutating the state here
      state.items.pop();
    },
    clearCart: (state, action) => {
      // mutating the state here
      state.items.length = 0;
    },
  },
});

console.log("cart slice", cartSlice);
// Export using redux default syntax
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

/* 
    name     -> name of slice
    initialState -> initial data
    reducers -> write 'reducer functions' corresponding to 'each Action'
                { action1Name : reducerFunc(), act2 : reducerFunc(), ... }
                "reducer function" gets 2 parameters - state and action.
                 those reducer functions will modify our initial state.   
    Export those "Actions" and "Reducer" using Redux default syntax.	
  */
