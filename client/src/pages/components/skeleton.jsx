import React from "react";

const Skeleton = () => {
  return (
   
        <div className=" min-h-[16rem] animate-pulse  min-w-[150px] bg-white border border-gray-100 dark:bg-gray-800  dark:border-gray-700  p-3 rounded-xl  overflow-hidden  lg:aspect-none ">
          <div className=" min-h-[10rem] lg:min-h-56 relative lg:relative overflow-hidden   bg-gray-500 rounded-lg">
            <div className="absolute z-10 right-2 top-2 text-[10px] h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-16 py-0.5 px-2   lowercase "></div>
          </div>
          <div>
            <div className="mt-4 block ">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-10" />
              <div className="h-2.5 mt-1  bg-gray-200 rounded-full dark:bg-gray-700 w-20" />
            </div>
            <div className="mt-1 block md:flex justify-between">
              <div className="h-2.5 mt-1  bg-gray-200 rounded-full dark:bg-gray-700 w-16" />
              <div className="h-2.5 mt-1  bg-gray-200 rounded-full dark:bg-gray-700 w-16" />
            </div>
          </div>
        </div>
    
  );
};

export default Skeleton;
