import { ShoppingCart } from "iconsax-react";
import React from "react";

const customButton = () => {
  return (
    <button className="w-full bg-primary py-3 text-white rounded-lg mt-5 flex gap-3 justify-center">
      <ShoppingCart />
      order now
    </button>
  );
};

export default customButton;
