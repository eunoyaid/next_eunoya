import { Lovely, Message } from "iconsax-react";
import Link from "next/link";
import React from "react";

const CardBlog = ({ item }) => {
  return (
    <Link href={`product/${item.id}`}>
      <div className=" min-h-64  w-72   bg-white border border-gray-100 dark:bg-gray-800  dark:border-gray-700  p-3 rounded-xl  overflow-hidden  lg:aspect-none ">
        <div className=" h-32  relative lg:relative overflow-hidden bg-gray-300  rounded-lg">
          {/* <img
            loading="lazy"
            src={item.images[0]}
            alt="Front of men&#039;s Basic Tee in black."
            className="h-full w-full  absolute object-cover object-center hover:scale-125 transition  "
          /> */}
        </div>

        <div className="mt-4 block">
          <div className="flex items-center space-x-4">
            <p className="text-gray-500 text-sm font-nunito font-semibold"> {item?.title} </p>
          </div>
          <div className="text-gray-400 text-xs truncate w-52">{item?.body}</div>
          <p className=" mt-1 text-[10px] text-primary  dark:text-gray-800 py-1 px-2 inline-block bg-secondary dark:bg-gray-50 rounded-lg lowercase ">
            {item?.tags}
          </p>
        </div>
        <div className="footer-card flex justify-between items-center text-[10px] text-gray-400 mt-3">
          <div className="author flex items-center gap-3">
            <div className="author items-center flex gap-1">
            <div className="author-img h-6 w-6 bg-gray-300 rounded">
            {/* <img classname="w-2 h-2 rounded" src="" alt="Default avatar" /> */}

            </div>
            <p className="author-name capitalize">Tomo</p>
            </div>
          
            <p className="time-read">5 min read</p>
          </div>

          <div className="comment-like items-center flex gap-3">
            <p className="comment flex items-center gap-1">
              130
              <Message size={'12'}/>
            </p>
            <p className="comment flex items-center gap-1">
            12k 
              <Lovely size={'12'}/>
            </p>
          </div>
          
        </div>
      </div>
    </Link>
  );
};

export default CardBlog;
