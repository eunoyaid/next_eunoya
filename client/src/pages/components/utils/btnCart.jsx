import { Add, Bag2, ShoppingCart } from "iconsax-react";
import React from "react";

const BtnCart = () => {
  return (
    <button className="w-auto relative bg-secondary py-3 px-4 text-primary rounded-lg mt-5 flex gap-3 justify-center">
      <Add className="absolute  h-5 w-5 right-1 top-1" />
      <Bag2 />
    </button>
  );
};

export default BtnCart;
