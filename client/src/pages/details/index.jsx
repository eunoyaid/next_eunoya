import React, { useState } from "react";
import AccordionCustom from "../components/accordion";
import BtnCart from "../components/utils/btnCart";
import CustomButton from "@/pages/components/utils/customButton";
import CarouselProduct from "../components/carousel";
import { Eye, Lovely } from "iconsax-react";



const Details = () => {
  const [like,setLike] = useState()


  return (
    <>
      <div className="container lg:max-w-5xl grid grid-cols-1 lg:grid-cols-2 lg:gap-x-4">
        <div className="slider-product  mb-5 md:mb-0">
          <CarouselProduct />
          <div className="product-price-details mt-5 mb-8 lg:mb-0">
            <div className="flex justify-between">
              <h4 className="title capitalize text-2xl ">floral</h4>
              <div onClick={() => setLike(!like)}  className={  `${like && `text-red-500`} flex justify-center cursor-pointer hover:text-red-400 items-center gap-x-2 like text-xs`}>
                <Lovely /> 20k
              </div>
            </div>
            <div className="price flex gap-x-2 mt-2">
              <p>Rp 75000</p>
              <p className="line-through text-gray-300">Rp 80000</p>
            </div>
            <div className="flex justify-between">
              <p className="category ">website wedding invitation</p>
            <button className="text-xs hover:underline cursor-pointer flex items-center"> <Eye className="mr-1 w-5 h-5 "/> lihat tema</button>
            </div>
            <div className="add-shop flex  mx-auto mt-5  gap-3">
              <CustomButton> Order Now</CustomButton>
              <BtnCart />
            </div>
          </div>
        </div>
        <div className="product-desc">
          <AccordionCustom />
        </div>
      </div>
     
    </>
  );
};

export default Details;
