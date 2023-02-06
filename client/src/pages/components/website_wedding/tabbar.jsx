import { BiHomeSmile, BiPhotoAlbum } from "react-icons/bi";
import { GiBigDiamondRing } from "react-icons/gi";
import { AiOutlineCalendar } from "react-icons/ai";

import React from "react";

const Tabbar = () => {
  return (
    <div className="w-[80%] p-4 boder bg-white mx-auto  border-gray-200 rounded-xl shadow  flex gap-2 justify-between fixed z-50  bottom-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
      <a href="#listDoa" className="icon">
        {" "}
        <BiHomeSmile className="h-8 w-8" />
      </a>
      <span className="icon">
        {" "}
        <GiBigDiamondRing className="h-8 w-8" />
      </span>
      <span className="icon">
        {" "}
        <AiOutlineCalendar className="h-8 w-8" />
      </span>
      <span className="icon">
        {" "}
        <BiPhotoAlbum className="h-8 w-8" />
      </span>
    </div>
  );
};

export default Tabbar;
