// Cart page component

import { useSelector } from "react-redux";

const Cart = () => {
  // useSelector() hook used to get data 'items' from the Cart Slice of Redux Store.
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <ul className="cart-list  px-3 py-1 w-6/12 m-auto">
        {cartItems.map((item) => (
          <li
            key={item.itemId}
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
