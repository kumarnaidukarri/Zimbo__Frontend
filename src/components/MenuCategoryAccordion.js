// Menu Category Accordion - Toggle Component

import { useDispatch } from "react-redux"; // hook
import { addItem } from "../utils/Store/cartSlice"; // cartSlice of redux store

const MenuCategoryAccordion = (props) => {
  const { menuTitle, menu } = props.menuCategory;
  const { index, activeIndex, setActiveIndex } = props;

  const toggleCard = () => {
    // Toggle the Menu
    // Set the "active index" to "clicked card's index",  (or) close it if already opened.
    setActiveIndex(activeIndex === index ? null : index);
  };

  // useDispatch() hook returns a 'dispatch function'. i.e, function used to dispatch an action.
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an action.
    // BehindScenes, dispatch() makes an object {payload:'Ice Cream'} with our argument value and passed as 2nd argument to our reducer function.
    dispatch(addItem(item)); // dispatch(actionF(val))
  };

  return (
    <div className="accordion  mt-3">
      {/* Accordion Header */}
      <div
        className="accordion-header  w-6/12 bg-gray-50 shadow-lg flex justify-between p-2 pl-1"
        onClick={toggleCard}
      >
        <span className="text-xl font-bold">
          {menuTitle || "Default Menu Title"} ({menu.length})
        </span>
        <span> 🔽 </span>
      </div>
      {/* Accordion Body */}
      {activeIndex === index && (
        <div className="accordion-body  w-6/12 bg-gray-50">
          <ul className="menu-list  px-3 py-1">
            {menu.map((item) => (
              <li
                key={item.itemId}
                className="my-3 first:mt-0 last:mb-0 text-lg flex justify-between"
              >
                <span>{`${item.itemName} - Rs.${item.price}/-`}</span>
                <span>
                  <button
                    className="px-2 py-1 mr-10 rounded-lg bg-gray-900 text-white shadow-lg cursor-pointer hover:bg-gray-700"
                    onClick={() => handleAddItem(item)}
                  >
                    add +
                  </button>
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuCategoryAccordion;
