// Cart page component

import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/Store/cartSlice.js";

const Cart = () => {
  // useSelector() hook used to get data 'items' from the Cart Slice of Redux Store.
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch(); // useDispatch() hook

  const handleClearCart = () => {
    dispatch(clearCart()); // dispatch(action())
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>

      {cartItems.length === 0 ? (
        <h1 className="mt-4">Cart is empty. Add Items to the Cart!</h1>
      ) : (
        <button
          className="px-4 py-2 m-4 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      )}
      <ul className="cart-list  px-3 py-1 w-6/12 m-auto">
        {cartItems.map((item, index, arr) => (
          <li
            key={index}
            className="my-3 first:mt-0 last:mb-0 text-lg flex justify-between"
          >
            <span>{`${item.itemName} - Rs.${item.price}/-`}</span>
            <span>
              <button className="px-2 py-1 mr-10 rounded-lg bg-gray-900 text-white shadow-lg cursor-pointer hover:bg-gray-700">
                add +
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
