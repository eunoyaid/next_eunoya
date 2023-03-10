import { Add, Bag2, ShopAdd, ShoppingCart } from "iconsax-react";
import React from "react";

const BtnCart = () => {
  return (
    <button className="w-auto relative bg-secondary  dark:text-gray-800  py-3 px-4 text-primary rounded-lg  flex gap-3 justify-center">
      <ShopAdd />
    </button>
  );
};

export default BtnCart;
