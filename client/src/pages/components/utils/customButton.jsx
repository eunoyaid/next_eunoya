import { ShoppingCart } from "iconsax-react";
import React from "react";

const customButton = ({ children }) => {
  return (
    <button
      type="submit"
      className={` button w-full bg-primary py-3  text-white rounded-lg  flex gap-3 justify-center`}
    >
  
      {children}
    </button>
  );
};

export default customButton;
