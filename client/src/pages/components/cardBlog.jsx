import Link from "next/link";
import React from "react";

const CardBlog = ({ item }) => {
  return (
    <Link href={`product/${item.id}`}>
      <div className=" min-h-[15rem]  min-w-[250px] bg-white border border-gray-100 dark:bg-gray-800  dark:border-gray-700  p-3 rounded-xl  overflow-hidden  lg:aspect-none ">
        <div className=" min-h-[10rem] lg:min-h-56 relative lg:relative overflow-hidden   rounded-lg">
          {/* <img
            loading="lazy"
            src={item.images[0]}
            alt="Front of men&#039;s Basic Tee in black."
            className="h-full w-full  absolute object-cover object-center hover:scale-125 transition  "
          /> */}
        </div>

        <div className="mt-4 block md:flex justify-between">
          <div className="flex items-center space-x-4">  
            <p className="text-gray-500 text-xs"> {item?.title} </p>
                  </div> 
                  <div className="text-gray-400">
                  {item?.body}
                  </div>
          <p className="mt-1 text-[10px] text-primary  dark:text-gray-800 py-1 px-2 inline-block bg-secondary dark:bg-gray-50 rounded-lg lowercase ">
              {item?.tags}
            </p>
         
        </div>
      </div>
    </Link>
  );
};

export default CardBlog;
