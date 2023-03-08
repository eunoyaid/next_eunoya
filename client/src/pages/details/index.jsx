import React from "react";
import AccordionCustom from "../components/accordion";
import BtnCart from "../components/utils/btnCart";
import CustomButton from "@/pages/components/utils/customButton";
import CarouselProduct from "../components/carousel";
const Details = () => {
  return (
    <>
      <div className="container lg:max-w-5xl grid grid-cols-1 lg:grid-cols-2 lg:gap-x-4">
        <div className="slider-product  mb-5 md:mb-0">
         <CarouselProduct />
        </div>
        <div className="product-desc">
          <AccordionCustom />
        </div>
      </div>
      <div className="add-shop md:hidden flex w-[85%] mx-auto border border-border-card p-3 bg-white rounded-lg  gap-3">
        <CustomButton> Order Now</CustomButton>
        <BtnCart />
      </div>
    </>
  );
};

export default Details;
