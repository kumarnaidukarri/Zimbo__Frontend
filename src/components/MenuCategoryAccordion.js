// Menu Category Accordion - Toggle Component

import { useState } from "react";

const MenuCategoryAccordion = (props) => {
  const { menuTitle, menu } = props.menuCategory;

  // local state variable - to store Menu Accordion toggle status(true-show, false-hide)
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    console.log("menu toggle button clicked");
    setShowItems(!showItems);
  };

  return (
    <div className="accordion  mt-3">
      {/* Accordion Header */}
      <div
        className="accordion-header  w-6/12 bg-gray-50 shadow-lg flex justify-between p-2 pl-1"
        onClick={handleClick}
      >
        <span className="text-xl font-bold">
          {menuTitle || "Default Menu Title"} ({menu.length})
        </span>
        <span> 🔽 </span>
      </div>
      {/* Accordion Body */}
      {showItems && (
        <div className="accordion-body  w-6/12 bg-gray-50">
          <ul className="menu-list  px-3 py-1">
            {menu.map((item) => (
              <li
                key={item.itemId}
                className="my-3 first:mt-0 last:mb-0 text-lg"
              >
                {`${item.itemName} - Rs.${item.price}/-`}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuCategoryAccordion;
